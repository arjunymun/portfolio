import Link from "next/link";
import type { Metadata } from "next";

import { BlogCard } from "@/components/blog/BlogCard";
import { getAllPosts } from "@/lib/blog";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes on Sideout, DraftLens, portfolio design, product thinking, and frontend craft.",
  openGraph: {
    title: `Writing | ${site.name}`,
    description:
      "Notes on Sideout, DraftLens, portfolio design, product thinking, and frontend craft.",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: `Writing | ${site.name}`,
    description:
      "Notes on Sideout, DraftLens, portfolio design, product thinking, and frontend craft.",
    images: ["/opengraph-image"],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="cosmic-section relative z-10 overflow-hidden py-14 sm:py-20">
      <div className="spectral-code opacity-35" aria-hidden />
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 sm:px-8 lg:px-10">
        <section className="relative overflow-hidden rounded-lg border border-white/10 bg-[#0d0b0a]/90 px-6 py-8 text-white shadow-[0_32px_120px_rgba(0,0,0,0.28)] sm:px-8 sm:py-10">
          <div className="cinema-grid absolute inset-0 opacity-50" aria-hidden />
          <div className="relative z-10">
            <p className="font-mono text-xs uppercase text-[#e8a55e]">Writing</p>
            <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-none text-[#fff7ea] sm:text-7xl">
              Build notes for the product decisions behind the spectacle.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/64">
              Short essays on Sideout, DraftLens, and the portfolio system itself: what
              changed, why the product choices mattered, and how the work became more
              reviewable.
            </p>
          </div>
        </section>

        <section className="grid gap-3 sm:grid-cols-3">
          {[
            ["Sideout", "Venue OS"],
            ["DraftLens", "AI workflow"],
            ["Portfolio V2", "Product cinema"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-lg border border-[var(--border)] bg-[var(--panel)] p-4 shadow-[var(--shadow-soft)] backdrop-blur"
            >
              <p className="font-mono text-[0.68rem] uppercase text-[var(--warm)]">{label}</p>
              <p className="mt-2 font-display text-2xl font-semibold text-[var(--foreground)]">
                {value}
              </p>
            </div>
          ))}
        </section>

        {posts.length === 0 ? (
          <section className="surface-panel rounded-lg p-6">
            <p className="section-copy text-sm leading-7">
              No posts are live yet. The first one will document how DraftLens evolved from
              an AI experiment into a more credible student-facing product.
            </p>
          </section>
        ) : (
          <section className="grid gap-4 lg:grid-cols-3">
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
