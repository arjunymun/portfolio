import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { BlogPostMeta } from "@/lib/blog";

interface BlogCardProps {
  slug: string;
  meta: BlogPostMeta;
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogCard({ slug, meta }: BlogCardProps) {
  return (
    <article className="project-card surface-panel rounded-[1.5rem] p-6">
      <p className="section-eyebrow">Writing note</p>
      <h3 className="section-title mt-4 text-2xl font-semibold text-[var(--foreground)]">
        {meta.title}
      </h3>
      {meta.date ? (
        <time
          dateTime={meta.date}
          className="mt-3 block text-sm text-[var(--accent-strong)]"
        >
          {formatDate(meta.date)}
        </time>
      ) : null}
      {meta.excerpt ? (
        <p className="section-copy mt-4 text-sm leading-7">{meta.excerpt}</p>
      ) : null}
      <Link
        href={`/blog/${slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-strong)] transition hover:underline hover:underline-offset-4"
      >
        Read article
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}
