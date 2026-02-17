import Link from "next/link";

export default function BlogPostNotFound() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          Post not found
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          The blog post you&apos;re looking for doesn&apos;t exist or was removed.
        </p>
        <Link
          href="/blog"
          className="mt-6 inline-block font-medium text-zinc-700 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:text-zinc-300 dark:focus-visible:outline-zinc-100"
        >
          Back to Blog
        </Link>
      </div>
    </main>
  );
}
