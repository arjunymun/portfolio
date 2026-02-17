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
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/90">
      <nav
        className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-3"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-semibold text-zinc-900 dark:text-zinc-100"
        >
          {site.name}
        </Link>
        <ul className="flex flex-wrap items-center gap-1 sm:gap-4">
          {navLinks.map(({ href, label }) =>
            href.startsWith("#") ? (
              <li key={href}>
                <a
                  href={href}
                  className="rounded px-2 py-1.5 text-sm text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 dark:focus-visible:outline-zinc-100"
                >
                  {label}
                </a>
              </li>
            ) : (
              <li key={href}>
                <Link
                  href={href}
                  className="rounded px-2 py-1.5 text-sm text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 dark:focus-visible:outline-zinc-100"
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
