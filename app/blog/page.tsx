import Link from "next/link";
import type { Metadata } from "next";

import { BlogCard } from "@/components/blog/BlogCard";
import { getAllPosts } from "@/lib/blog";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes on product thinking, frontend polish, and what I learned while building DraftLens.",
  openGraph: {
    title: `Writing | ${site.name}`,
    description:
      "Notes on product thinking, frontend polish, and what I learned while building DraftLens.",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: `Writing | ${site.name}`,
    description:
      "Notes on product thinking, frontend polish, and what I learned while building DraftLens.",
    images: ["/opengraph-image"],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="py-14 sm:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 sm:px-8 lg:px-10">
        <section className="surface-panel rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10">
          <p className="section-eyebrow">Writing</p>
          <h1 className="section-title mt-4 max-w-3xl text-4xl font-semibold text-[var(--foreground)] sm:text-5xl">
            Build notes that explain the decisions behind the work.
          </h1>
          <p className="section-copy mt-5 max-w-2xl text-base leading-8">
            I want the writing here to do the same job as the portfolio: explain what I
            built, why the choices mattered, and what changed once the project became more
            serious.
          </p>
        </section>

        {posts.length === 0 ? (
          <section className="surface-panel rounded-[1.75rem] p-6">
            <p className="section-copy text-sm leading-7">
              No posts are live yet. The first one will document how DraftLens evolved from
              an AI experiment into a more credible student-facing product.
            </p>
          </section>
        ) : (
          <section className="grid gap-4 lg:grid-cols-2">
            {posts.map((post) => (
              <BlogCard key={post.slug} slug={post.slug} meta={post.meta} />
            ))}
          </section>
        )}

        <Link
          href="/"
          className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[var(--accent-strong)] transition hover:underline hover:underline-offset-4"
        >
          Back home
        </Link>
      </div>
    </main>
  );
}
