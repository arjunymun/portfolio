import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          Blog
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Thoughts and write-ups.
        </p>
        {posts.length === 0 ? (
          <p className="mt-8 text-zinc-500 dark:text-zinc-500">
            No posts yet. Add <code className="rounded bg-zinc-200 px-1 dark:bg-zinc-700">.md</code> or{" "}
            <code className="rounded bg-zinc-200 px-1 dark:bg-zinc-700">.mdx</code> files in{" "}
            <code className="rounded bg-zinc-200 px-1 dark:bg-zinc-700">content/blog/</code>.
          </p>
        ) : (
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {posts.map((post) => (
              <li key={post.slug}>
                <BlogCard slug={post.slug} meta={post.meta} />
              </li>
            ))}
          </ul>
        )}
        <p className="mt-12">
          <Link
            href="/"
            className="text-sm font-medium text-zinc-600 underline-offset-4 hover:underline dark:text-zinc-400"
          >
            ← Back home
          </Link>
        </p>
      </div>
    </main>
  );
}
