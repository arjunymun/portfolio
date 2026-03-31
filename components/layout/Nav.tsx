import Link from "next/link";

import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { site } from "@/lib/site";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color:var(--panel)]/88 backdrop-blur-xl">
      <nav
        className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-3 sm:px-8 sm:py-4 lg:px-10"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <span
              aria-hidden
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-sm font-semibold text-[var(--accent-strong)]"
            >
              {site.shortName.slice(0, 2).toUpperCase()}
            </span>
            <div className="min-w-0">
              <p className="truncate font-display text-sm font-semibold text-[var(--foreground)] sm:text-base">
                {site.name}
              </p>
              <p className="truncate text-[11px] text-[var(--foreground-muted)] sm:text-xs">
                {site.role}
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <ul className="hidden items-center gap-1 md:flex">
              {site.navigation.map((item) => (
                <li key={item.href}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full px-3 py-2 text-sm text-[var(--foreground-soft)] transition hover:bg-[var(--accent-soft)] hover:text-[var(--accent-strong)]"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="rounded-full px-3 py-2 text-sm text-[var(--foreground-soft)] transition hover:bg-[var(--accent-soft)] hover:text-[var(--accent-strong)]"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>
        </div>

        <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1 md:hidden">
          {site.navigation.map((item) =>
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 rounded-full border border-[var(--border)] bg-white/45 px-2.5 py-1.5 text-[11px] font-medium text-[var(--foreground-soft)] transition hover:border-[var(--border-strong)] hover:text-[var(--accent-strong)] dark:bg-white/4"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="shrink-0 rounded-full border border-[var(--border)] bg-white/45 px-2.5 py-1.5 text-[11px] font-medium text-[var(--foreground-soft)] transition hover:border-[var(--border-strong)] hover:text-[var(--accent-strong)] dark:bg-white/4"
              >
                {item.label}
              </Link>
            ),
          )}
        </div>
      </nav>
    </header>
  );
}
