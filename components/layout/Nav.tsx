import Link from "next/link";
import { site } from "@/lib/site";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80">
      <nav
        className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-3.5"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-[family-name:var(--font-outfit)] text-lg font-semibold text-zinc-900 dark:text-zinc-100"
        >
          {site.name}
        </Link>
        <ul className="flex flex-wrap items-center gap-0.5 sm:gap-1">
          {navLinks.map(({ href, label }) =>
            href.startsWith("#") ? (
              <li key={href}>
                <a
                  href={href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-zinc-600 transition hover:bg-teal-500/10 hover:text-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 dark:text-zinc-400 dark:hover:bg-teal-400/10 dark:hover:text-teal-400 dark:focus-visible:outline-teal-400"
                >
                  {label}
                </a>
              </li>
            ) : (
              <li key={href}>
                <Link
                  href={href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-zinc-600 transition hover:bg-teal-500/10 hover:text-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 dark:text-zinc-400 dark:hover:bg-teal-400/10 dark:hover:text-teal-400 dark:focus-visible:outline-teal-400"
                >
                  {label}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
}
