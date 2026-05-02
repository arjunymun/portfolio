import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAllPosts, getPostBySlug, markdownToHtml } from "@/lib/blog";
import { site } from "@/lib/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.meta.title,
    description: post.meta.excerpt ?? site.seo.description,
    openGraph: {
      title: `${post.meta.title} | ${site.name}`,
      description: post.meta.excerpt ?? site.seo.description,
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.meta.title} | ${site.name}`,
      description: post.meta.excerpt ?? site.seo.description,
      images: ["/opengraph-image"],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const html = await markdownToHtml(post.content);

  return (
    <main className="cosmic-section relative z-10 overflow-hidden py-14 sm:py-20">
      <div className="spectral-code opacity-30" aria-hidden />
      <article className="relative z-10 mx-auto flex w-full max-w-4xl flex-col gap-8 px-5 sm:px-8 lg:px-10">
        <Link
          href="/blog"
          className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[var(--accent-strong)] transition hover:underline hover:underline-offset-4"
        >
          Back to writing
        </Link>

        <header className="relative overflow-hidden rounded-lg border border-white/10 bg-[#0d0b0a]/90 px-6 py-8 text-white shadow-[0_32px_120px_rgba(0,0,0,0.28)] sm:px-8 sm:py-10">
          <div className="cinema-grid absolute inset-0 opacity-50" aria-hidden />
          <div className="relative z-10">
            <p className="font-mono text-xs uppercase text-[#e8a55e]">Article</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-none text-[#fff7ea] sm:text-6xl">
              {post.meta.title}
            </h1>
            {post.meta.date ? (
              <time
                dateTime={post.meta.date}
                className="mt-5 block font-mono text-xs uppercase text-white/48"
              >
                {formatDate(post.meta.date)}
              </time>
            ) : null}
            {post.meta.excerpt ? (
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/64">
                {post.meta.excerpt}
              </p>
            ) : null}
          </div>
        </header>

        <div className="surface-panel rounded-lg px-6 py-8 shadow-[var(--shadow-soft)] sm:px-8 sm:py-10">
          <div
            className="article-prose prose prose-stone max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </article>
    </main>
  );
}
