import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

const contentDir = path.join(process.cwd(), "content", "blog");

export interface BlogPostMeta {
  title: string;
  date: string;
  excerpt?: string;
}

export interface BlogPost {
  slug: string;
  meta: BlogPostMeta;
  content: string;
}

function getSlug(filename: string): string {
  return filename.replace(/\.mdx?$/, "");
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(contentDir)) return [];
  const files = fs.readdirSync(contentDir).filter((f) => /\.mdx?$/.test(f));
  const posts: BlogPost[] = files.map((filename) => {
    const fullPath = path.join(contentDir, filename);
    const raw = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(raw);
    return {
      slug: getSlug(filename),
      meta: {
        title: (data.title as string) || "Untitled",
        date: (data.date as string) || "",
        excerpt: (data.excerpt as string) || undefined,
      },
      content,
    };
  });
  posts.sort((a, b) => (b.meta.date > a.meta.date ? 1 : -1));
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  const extensions = [".md", ".mdx"];
  for (const ext of extensions) {
    const fullPath = path.join(contentDir, slug + ext);
    if (fs.existsSync(fullPath)) {
      const raw = fs.readFileSync(fullPath, "utf-8");
      const { data, content } = matter(raw);
      return {
        slug,
        meta: {
          title: (data.title as string) || "Untitled",
          date: (data.date as string) || "",
          excerpt: (data.excerpt as string) || undefined,
        },
        content,
      };
    }
  }
  return null;
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(markdown);
  return String(result);
}
