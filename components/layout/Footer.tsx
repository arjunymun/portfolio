import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            © {new Date().getFullYear()} {site.name}
          </p>
          <div className="flex gap-6">
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-600 underline-offset-4 hover:underline dark:text-zinc-400"
            >
              GitHub
            </a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-600 underline-offset-4 hover:underline dark:text-zinc-400"
            >
              LinkedIn
            </a>
            <a
              href={site.links.email}
              className="text-sm text-zinc-600 underline-offset-4 hover:underline dark:text-zinc-400"
            >
              Email
            </a>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-zinc-500 dark:text-zinc-500">
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
        </p>
      </div>
    </footer>
  );
}
