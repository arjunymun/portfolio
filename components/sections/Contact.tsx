import { ArrowUpRight, Github, Mail } from "lucide-react";

import { SectionReveal } from "@/components/ui/SectionReveal";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <SectionReveal delay={60}>
      <section id="contact" className="py-20 sm:py-24">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10">
          <div className="surface-panel-dark rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <p className="section-eyebrow !text-[rgba(232,165,94,0.85)]">Contact</p>
                <h2 className="section-title mt-4 text-4xl font-semibold text-[var(--panel-dark-foreground)] sm:text-5xl">
                  Let&apos;s talk about product work, internships, or how to make a project read
                  better.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">
                  I care about building things that feel thoughtful and review well. If you
                  want to chat about Sideout, DraftLens, frontend product work, or an
                  opportunity where that mindset is useful, I&apos;d be glad to connect.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a href={`mailto:${site.email}`} className="primary-button">
                  <Mail className="h-4 w-4" />
                  {site.email}
                </a>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-button !border-white/12 !bg-white/4 !text-white/80 hover:!text-white"
                >
                  <Github className="h-4 w-4" />
                  GitHub profile
                </a>
                <a
                  href="https://pickleball-xi.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-button !border-white/12 !bg-white/4 !text-white/80 hover:!text-white"
                >
                  <ArrowUpRight className="h-4 w-4" />
                  Sideout live product
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
