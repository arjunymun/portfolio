import Link from "next/link";
import { ArrowUpRight, Download, Github, Mail } from "lucide-react";

import { site } from "@/lib/site";

const iconByLabel = {
  GitHub: Github,
  Email: Mail,
} as const;

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0d0b0a] pb-10 pt-8 text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>
            (c) {new Date().getFullYear()} {site.name}. Cinematic product portfolio.
          </p>
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
                  className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/6 px-3 py-2 text-sm text-white/64 transition hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/6 px-3 py-2 text-sm text-white/64 transition hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </Link>
              );
            })}
            <a
              href={site.resume.href}
              target={site.resume.external ? "_blank" : undefined}
              rel={site.resume.external ? "noreferrer" : undefined}
              download={site.resume.external ? undefined : site.resume.downloadName}
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/6 px-3 py-2 text-sm text-white/64 transition hover:text-[#e8a55e]"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/6 px-3 py-2 text-sm text-white/64 transition hover:text-white"
            >
              Writing
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
