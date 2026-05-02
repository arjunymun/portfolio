import { ArrowUpRight, Download, Github, Mail } from "lucide-react";

import { site } from "@/lib/site";

export function FinalContact() {
  return (
    <section id="contact" className="bg-[#0d0b0a] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <p className="font-mono text-xs uppercase text-[#e8a55e]">Contact</p>
          <h2 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-none text-[#fff7ea] sm:text-7xl">
            Bring me into the room where products need taste and execution.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/62">
            I am looking for internships, junior engineering roles, and product-minded teams
            where strong interfaces, typed systems, and clear storytelling matter.
          </p>
        </div>

        <div className="grid gap-3">
          <a href={`mailto:${site.email}`} className="primary-button !justify-between">
            <span className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4" />
              {site.email}
            </span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href={site.resume.href}
            target={site.resume.external ? "_blank" : undefined}
            rel={site.resume.external ? "noreferrer" : undefined}
            download={site.resume.external ? undefined : site.resume.downloadName}
            className="secondary-button !justify-between !border-white/12 !bg-white/6 !text-white hover:!text-[#e8a55e]"
          >
            <span className="inline-flex items-center gap-2">
              <Download className="h-4 w-4" />
              {site.resume.label}
            </span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="secondary-button !justify-between !border-white/12 !bg-white/6 !text-white/82 hover:!text-white"
          >
            <span className="inline-flex items-center gap-2">
              <Github className="h-4 w-4" />
              GitHub profile
            </span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
