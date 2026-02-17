import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <p className="font-mono text-xs uppercase tracking-widest text-teal-600 dark:text-teal-400">
          Blog
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-outfit)] text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          Writing
        </h1>
        <p className="mt-5 text-zinc-600 dark:text-zinc-400">
          Thoughts and write-ups on building software.
        </p>
        {posts.length === 0 ? (
          <p className="mt-10 text-zinc-500 dark:text-zinc-500">
            No posts yet. Add <code className="rounded bg-zinc-200 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-700">.md</code> or{" "}
            <code className="rounded bg-zinc-200 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-700">.mdx</code> files in{" "}
            <code className="rounded bg-zinc-200 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-700">content/blog/</code>.
          </p>
        ) : (
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {posts.map((post) => (
              <li key={post.slug}>
                <BlogCard slug={post.slug} meta={post.meta} />
              </li>
            ))}
          </ul>
        )}
        <p className="mt-14">
          <Link
            href="/"
            className="text-sm font-medium text-teal-600 underline-offset-4 hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300"
          >
            ← Back home
          </Link>
        </p>
      </div>
    </main>
  );
}
