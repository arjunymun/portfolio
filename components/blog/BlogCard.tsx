import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";

interface BlogCardProps {
  slug: string;
  meta: BlogPostMeta;
}

export function BlogCard({ slug, meta }: BlogCardProps) {
  return (
    <article className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-teal-200 hover:shadow-md hover:shadow-teal-500/5 dark:border-zinc-700 dark:bg-zinc-900/50 dark:hover:border-teal-500/30 dark:hover:shadow-teal-500/5">
      <h3 className="font-[family-name:var(--font-outfit)] font-semibold text-zinc-900 dark:text-zinc-100">
        <Link
          href={`/blog/${slug}`}
          className="hover:text-teal-600 dark:hover:text-teal-400"
        >
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
