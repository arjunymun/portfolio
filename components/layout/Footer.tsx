import Link from "next/link";
import { ArrowUpRight, Github, Mail } from "lucide-react";

import { site } from "@/lib/site";

const iconByLabel = {
  GitHub: Github,
  Email: Mail,
} as const;

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] pb-12 pt-14">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 sm:px-8 lg:px-10">
        <div className="surface-panel rounded-[2rem] px-6 py-8 sm:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="section-eyebrow">Closing note</p>
              <h2 className="section-title mt-3 text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">
                I&apos;m aiming for product work that feels careful, credible, and easy to trust.
              </h2>
              <p className="section-copy mt-4 max-w-xl text-base leading-8">
                {site.availability} If Sideout, DraftLens, or the way this portfolio is
                structured feels like a good fit for your team, I&apos;d love to talk.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {site.socialLinks.map((link) => {
                const Icon =
                  iconByLabel[link.label as keyof typeof iconByLabel] ?? ArrowUpRight;

                return link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="secondary-button"
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </a>
                ) : (
                  <Link key={link.href} href={link.href} className="secondary-button">
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-sm text-[var(--foreground-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            (c) {new Date().getFullYear()} {site.name}. Built with Next.js, TypeScript, and a
            stronger respect for case-study clarity.
          </p>
          <Link
            href="/blog"
            className="text-[var(--accent-strong)] transition hover:underline hover:underline-offset-4"
          >
            Read the writing log
          </Link>
        </div>
      </div>
    </footer>
  );
}
