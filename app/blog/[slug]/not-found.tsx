import Link from "next/link";

export default function BlogPostNotFound() {
  return (
    <main className="py-20">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-5 px-6 sm:px-8">
        <p className="section-eyebrow">Post not found</p>
        <h1 className="section-title text-4xl font-semibold text-[var(--foreground)]">
          That article is not available.
        </h1>
        <p className="section-copy text-base leading-8">
          The writing section is still small, but the DraftLens note is live and more posts
          will follow as the portfolio grows.
        </p>
        <Link
          href="/blog"
          className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[var(--accent-strong)] transition hover:underline hover:underline-offset-4"
        >
          Back to writing
        </Link>
      </div>
    </main>
  );
}
