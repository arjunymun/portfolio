import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, MapPin } from "lucide-react";

import { hero } from "@/lib/content";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="hero" className="border-b border-[var(--border)] pb-14 pt-10 sm:pb-20 sm:pt-14">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.94fr_1.06fr] lg:gap-12 lg:px-10">
        <div className="flex flex-col justify-center">
          <p className="section-eyebrow">{hero.eyebrow}</p>
          <h1 className="section-title mt-5 max-w-[11.5ch] text-[clamp(3.2rem,6.9vw,5.9rem)] font-semibold leading-[0.94] text-[var(--foreground)]">
            {hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--foreground)] sm:text-[1.2rem]">
            {hero.intro}
          </p>
          <p className="section-copy mt-4 max-w-xl text-[0.98rem] leading-8 sm:text-[1.04rem]">
            {hero.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={hero.primaryCta.href} className="primary-button">
              {hero.primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={hero.secondaryCta.href}
              target={hero.secondaryCta.external ? "_blank" : undefined}
              rel={hero.secondaryCta.external ? "noreferrer" : undefined}
              className="secondary-button"
            >
              <Github className="h-4 w-4" />
              {hero.secondaryCta.label}
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {hero.highlights.map((item) => (
              <article key={item.label} className="stat-card">
                <p className="section-eyebrow">{item.label}</p>
                <p className="mt-3 text-sm font-semibold leading-6 text-[var(--foreground)]">
                  {item.value}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[var(--foreground-muted)]">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[var(--accent)]" />
              {site.location}
            </span>
            <span>{site.availability}</span>
          </div>
        </div>

        <div className="lg:pt-3">
          <div className="surface-panel-dark relative overflow-hidden rounded-[2rem] p-5 sm:p-6">
            <div className="pointer-events-none absolute inset-x-6 top-0 h-28 bg-[radial-gradient(circle_at_top,rgba(69,183,173,0.12),transparent_70%)]" />

            <div className="window-chrome">
              <span className="window-dot bg-[rgba(255,255,255,0.42)]" />
              <span className="window-dot bg-[rgba(255,255,255,0.24)]" />
              <span className="window-dot bg-[rgba(255,255,255,0.14)]" />
            </div>

            <div className="relative flex items-start justify-between gap-4">
              <div>
                <p className="section-eyebrow !text-[rgba(232,165,94,0.85)]">
                  {hero.preview.label}
                </p>
                <h2 className="section-title mt-3 text-[clamp(2rem,3vw,3.2rem)] font-semibold text-[var(--panel-dark-foreground)]">
                  {hero.preview.title}
                </h2>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.68rem] uppercase tracking-[0.18em] text-white/60">
                Case study
              </span>
            </div>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/72 sm:text-base">
              {hero.preview.description}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {hero.preview.bullets.map((item) => (
                <article
                  key={item}
                  className="rounded-[1.2rem] border border-white/8 bg-white/4 px-4 py-4 text-sm leading-6 text-white/72"
                >
                  {item}
                </article>
              ))}
            </div>

            <div className="relative mt-6 overflow-hidden rounded-[1.6rem] border border-white/8 bg-black/20 p-3 sm:p-4">
              <div className="floating-note">
                Demo-ready walkthrough
              </div>
              <Image
                src={hero.preview.imageSrc}
                alt={hero.preview.imageAlt}
                width={1440}
                height={1600}
                priority
                className="h-auto w-full rounded-[1.15rem] object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
