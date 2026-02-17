import Link from "next/link";
import { site } from "@/lib/site";
import { IconEmail, IconGitHub, IconLinkedIn } from "@/components/ui/Icons";

export function Footer() {
  return (
    <footer className="border-t border-stone-200/80 bg-stone-100/60 dark:border-stone-800/80 dark:bg-stone-900/40">
      <div className="mx-auto max-w-5xl px-6 py-12 sm:px-10 lg:px-14">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-stone-600 dark:text-stone-400">
            © {new Date().getFullYear()} {site.ownerName}.
          </p>
          <div className="flex gap-8">
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-stone-600 transition hover:text-teal-600 dark:text-stone-400 dark:hover:text-teal-400"
            >
              <IconGitHub /> GitHub
            </a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-stone-600 transition hover:text-teal-600 dark:text-stone-400 dark:hover:text-teal-400"
            >
              <IconLinkedIn /> LinkedIn
            </a>
            <a
              href={site.links.email}
              className="flex items-center gap-2 text-sm font-medium text-stone-600 transition hover:text-teal-600 dark:text-stone-400 dark:hover:text-teal-400"
            >
              <IconEmail /> Email
            </a>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-stone-500 dark:text-stone-500">
          <Link href="/blog" className="hover:text-teal-600 dark:hover:text-teal-400">
            Blog
          </Link>
        </p>
      </div>
    </footer>
  );
}
