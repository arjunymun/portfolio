import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, markdownToHtml, getAllPosts } from "@/lib/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const html = await markdownToHtml(post.content);

  return (
    <main className="min-h-screen">
      <article className="mx-auto max-w-3xl px-4 py-16">
        <Link
          href="/blog"
          className="mb-10 inline-block text-sm font-medium text-teal-600 underline-offset-4 hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300"
        >
          ← Back to Blog
        </Link>
        <header className="mb-10">
          <h1 className="font-[family-name:var(--font-outfit)] text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            {post.meta.title}
          </h1>
          {post.meta.date && (
            <time
              dateTime={post.meta.date}
              className="mt-2 block text-sm text-teal-600 dark:text-teal-400"
            >
              {new Date(post.meta.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          )}
        </header>
        <div
          className="prose prose-zinc prose-a:text-teal-600 prose-a:no-underline hover:prose-a:underline dark:prose-invert dark:prose-a:text-teal-400 max-w-none"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </main>
  );
}
