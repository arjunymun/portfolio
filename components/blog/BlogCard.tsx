import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";

interface BlogCardProps {
  slug: string;
  meta: BlogPostMeta;
}

export function BlogCard({ slug, meta }: BlogCardProps) {
  return (
    <article className="rounded-lg border border-zinc-200 bg-white p-5 dark:border-zinc-700 dark:bg-zinc-900/50">
      <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
        <Link href={`/blog/${slug}`} className="hover:underline">
          {meta.title}
        </Link>
      </h3>
      {meta.date && (
        <time
          dateTime={meta.date}
          className="mt-1 block text-sm text-zinc-500 dark:text-zinc-400"
        >
          {new Date(meta.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      )}
      {meta.excerpt && (
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {meta.excerpt}
        </p>
      )}
    </article>
  );
}
