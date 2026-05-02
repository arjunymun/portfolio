import Link from "next/link";
import { Download } from "lucide-react";

import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { site } from "@/lib/site";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0d0b0a]/82 text-white backdrop-blur-xl">
      <nav
        className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-5 py-3 sm:px-8 lg:px-10"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <span
              aria-hidden
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/8 text-sm font-semibold text-[#e8a55e]"
            >
              {site.shortName.slice(0, 2).toUpperCase()}
            </span>
            <div className="min-w-0">
              <p className="truncate font-display text-sm font-semibold text-white sm:text-base">
                {site.name}
              </p>
              <p className="truncate text-[11px] text-white/48 sm:text-xs">
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
                      className="rounded-md px-3 py-2 text-sm text-white/62 transition hover:bg-white/8 hover:text-white"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="rounded-md px-3 py-2 text-sm text-white/62 transition hover:bg-white/8 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <a
              href={site.resume.href}
              target={site.resume.external ? "_blank" : undefined}
              rel={site.resume.external ? "noreferrer" : undefined}
              download={site.resume.external ? undefined : site.resume.downloadName}
              className="hidden h-11 items-center gap-2 rounded-md border border-white/10 bg-white/8 px-3 text-sm font-semibold text-white/82 transition hover:border-[#e8a55e]/40 hover:text-[#e8a55e] sm:inline-flex"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
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
                className="shrink-0 rounded-md border border-white/10 bg-white/8 px-2.5 py-1.5 text-[11px] font-medium text-white/62 transition hover:text-white"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="shrink-0 rounded-md border border-white/10 bg-white/8 px-2.5 py-1.5 text-[11px] font-medium text-white/62 transition hover:text-white"
              >
                {item.label}
              </Link>
            ),
          )}
          <a
            href={site.resume.href}
            target={site.resume.external ? "_blank" : undefined}
            rel={site.resume.external ? "noreferrer" : undefined}
            download={site.resume.external ? undefined : site.resume.downloadName}
            className="shrink-0 rounded-md border border-white/10 bg-white/8 px-2.5 py-1.5 text-[11px] font-medium text-white/62 transition hover:text-white"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
