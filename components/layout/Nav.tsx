"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition-[background-color,box-shadow] duration-300 ${
        scrolled
          ? "border-zinc-200/90 bg-white/95 shadow-sm dark:border-zinc-800/90 dark:bg-zinc-950/95 dark:shadow-black/10"
          : "border-zinc-200/80 bg-white/80 dark:border-zinc-800/80 dark:bg-zinc-950/80"
      }`}
    >
      <nav
        className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-3.5"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-[family-name:var(--font-outfit)] text-lg font-semibold text-zinc-900 dark:text-zinc-100 transition hover:text-teal-600 dark:hover:text-teal-400"
        >
          {site.name}
        </Link>
        <ul className="flex flex-wrap items-center gap-0.5 sm:gap-1">
          {navLinks.map(({ href, label }) =>
            href.startsWith("#") ? (
              <li key={href}>
                <a
                  href={href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition hover:bg-teal-500/10 hover:text-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 dark:text-zinc-400 dark:hover:bg-teal-400/10 dark:hover:text-teal-400 dark:focus-visible:outline-teal-400"
                >
                  {label}
                </a>
              </li>
            ) : (
              <li key={href}>
                <Link
                  href={href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition hover:bg-teal-500/10 hover:text-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 dark:text-zinc-400 dark:hover:bg-teal-400/10 dark:hover:text-teal-400 dark:focus-visible:outline-teal-400"
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
