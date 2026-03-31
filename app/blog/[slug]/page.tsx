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
    <main className="py-14 sm:py-20">
      <article className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-6 sm:px-8 lg:px-10">
        <Link
          href="/blog"
          className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[var(--accent-strong)] transition hover:underline hover:underline-offset-4"
        >
          Back to writing
        </Link>

        <header className="surface-panel rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10">
          <p className="section-eyebrow">Article</p>
          <h1 className="section-title mt-4 max-w-3xl text-4xl font-semibold text-[var(--foreground)] sm:text-5xl">
            {post.meta.title}
          </h1>
          {post.meta.date ? (
            <time
              dateTime={post.meta.date}
              className="mt-4 block text-sm font-medium text-[var(--accent-strong)]"
            >
              {formatDate(post.meta.date)}
            </time>
          ) : null}
          {post.meta.excerpt ? (
            <p className="section-copy mt-5 max-w-2xl text-base leading-8">
              {post.meta.excerpt}
            </p>
          ) : null}
        </header>

        <div className="surface-panel rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10">
          <div
            className="article-prose prose prose-stone max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </article>
    </main>
  );
}
