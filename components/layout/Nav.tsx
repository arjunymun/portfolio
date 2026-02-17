"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
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
          ? "border-stone-200/90 bg-[var(--background)]/95 shadow-sm dark:border-stone-800/90 dark:shadow-black/10"
          : "border-stone-200/80 bg-[var(--background)]/80 dark:border-stone-800/80"
      }`}
    >
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4 sm:px-10 lg:px-14"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-3">
          <span aria-hidden className="inline-block h-2 w-2 shrink-0 rounded-full bg-teal-500 shadow-sm" />
          <span className="font-display text-lg font-bold text-stone-900 dark:text-stone-100 transition hover:text-teal-600 dark:hover:text-teal-400">
            {site.name}
          </span>
        </Link>
        <ul className="flex flex-wrap items-center gap-0.5 sm:gap-1">
          {navLinks.map(({ href, label }) =>
            href.startsWith("#") ? (
              <li key={href}>
                <a
                  href={href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-stone-600 transition hover:bg-teal-500/10 hover:text-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 dark:text-stone-400 dark:hover:bg-teal-400/10 dark:hover:text-teal-400 dark:focus-visible:outline-teal-400"
                >
                  {label}
                </a>
              </li>
            ) : (
              <li key={href}>
                <Link
                  href={href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-stone-600 transition hover:bg-teal-500/10 hover:text-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 dark:text-stone-400 dark:hover:bg-teal-400/10 dark:hover:text-teal-400 dark:focus-visible:outline-teal-400"
                >
                  {label}
                </Link>
              </li>
            )
          )}
        </ul>
        <div className="ml-3 flex items-center gap-3">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
