import Link from "next/link";

import { BlogCard } from "@/components/blog/BlogCard";
import { getAllPosts } from "@/lib/blog";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function Writing() {
  const posts = getAllPosts().slice(0, 2);

  return (
    <SectionReveal delay={60}>
      <section id="writing" className="border-b border-[var(--border)] py-20 sm:py-24">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="section-eyebrow">Writing</p>
              <h2 className="section-title mt-4 text-4xl font-semibold text-[var(--foreground)] sm:text-5xl">
                Notes from building things that deserve better explanations.
              </h2>
              <p className="section-copy mt-4 text-base leading-8">
                I&apos;m treating writing as part of the product work too. The goal is to explain
                decisions clearly enough that someone reviewing the project can follow the
                thinking, not just the screenshots.
              </p>
            </div>

            <Link href="/blog" className="secondary-button">
              View all posts
            </Link>
          </div>

          {posts.length ? (
            <div className="grid gap-4 lg:grid-cols-2">
              {posts.map((post) => (
                <BlogCard key={post.slug} slug={post.slug} meta={post.meta} />
              ))}
            </div>
          ) : (
            <div className="surface-panel rounded-[1.75rem] p-6">
              <p className="section-copy text-sm leading-7">
                The writing section is being built out alongside the portfolio. The first post
                will focus on what I learned from building DraftLens as a product instead of
                just an AI demo.
              </p>
            </div>
          )}
        </div>
      </section>
    </SectionReveal>
  );
}
