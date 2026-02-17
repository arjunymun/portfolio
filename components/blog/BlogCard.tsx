import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";

interface BlogCardProps {
  slug: string;
  meta: BlogPostMeta;
}

export function BlogCard({ slug, meta }: BlogCardProps) {
  return (
    <article className="card">
      <h3 className="font-[family-name:var(--font-outfit)] font-semibold text-zinc-900 dark:text-zinc-100">
        <Link href={`/blog/${slug}`} className="muted-link">
          {meta.title}
        </Link>
      </h3>
      {meta.date && (
        <time
          dateTime={meta.date}
          className="mt-2 block text-sm text-teal-600 dark:text-teal-400"
        >
          {new Date(meta.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      )}
      {meta.excerpt && (
        <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {meta.excerpt}
        </p>
      )}
    </article>
  );
}
