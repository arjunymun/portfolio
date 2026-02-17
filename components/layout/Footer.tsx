import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-100/80 dark:border-zinc-800 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            © {new Date().getFullYear()} {site.ownerName}. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-600 transition hover:text-teal-600 dark:text-zinc-400 dark:hover:text-teal-400"
            >
              GitHub
            </a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-600 transition hover:text-teal-600 dark:text-zinc-400 dark:hover:text-teal-400"
            >
              LinkedIn
            </a>
            <a
              href={site.links.email}
              className="text-sm font-medium text-zinc-600 transition hover:text-teal-600 dark:text-zinc-400 dark:hover:text-teal-400"
            >
              Email
            </a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-zinc-500 dark:text-zinc-500">
          <Link href="/blog" className="hover:text-teal-600 dark:hover:text-teal-400">
            Blog
          </Link>
        </p>
      </div>
    </footer>
  );
}
