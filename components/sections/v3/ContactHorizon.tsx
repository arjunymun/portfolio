import { ArrowUpRight, Download, Github, Mail } from "lucide-react";

import { EventHorizon } from "@/components/sections/v3/EventHorizon";
import { site } from "@/lib/site";

export function ContactHorizon() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#070608] px-6 py-24 text-white sm:px-8 sm:py-28 lg:px-10"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-full h-[56rem] w-[56rem] -translate-x-1/2 -translate-y-[34%] opacity-50"
        aria-hidden
      >
        <EventHorizon className="h-full w-full" />
      </div>
      <div className="cinema-grid absolute inset-0 opacity-35" aria-hidden />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <p className="section-eyebrow">05 · Contact</p>
          <h2 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-[1.02] text-[#fff7ea] sm:text-7xl">
            Bring me into the room where products need taste and execution.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/70">
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
            className="secondary-button !justify-between !border-white/15 !bg-white/8 !text-white hover:!text-[#e8a55e]"
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
            className="secondary-button !justify-between !border-white/15 !bg-white/8 !text-white/85 hover:!text-white"
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
