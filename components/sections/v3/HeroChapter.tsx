import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Github } from "lucide-react";
import type { CSSProperties } from "react";

import { EventHorizon } from "@/components/sections/v3/EventHorizon";
import { StarfieldLayer } from "@/components/sections/v3/StarfieldLayer";
import { cinemaHero, homepageFlagships } from "@/lib/content";
import { site } from "@/lib/site";

const [sideout] = homepageFlagships;

function riseDelay(ms: number): CSSProperties {
  return { "--rise-delay": `${ms}ms` } as CSSProperties;
}

export function HeroChapter() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden border-b border-white/10 bg-[#070608] text-white"
    >
      <StarfieldLayer className="opacity-80" parallax />
      <div
        className="pointer-events-none absolute -right-[16rem] top-1/2 hidden h-[44rem] w-[44rem] -translate-y-1/2 opacity-60 lg:block"
        aria-hidden
      >
        <EventHorizon className="h-full w-full" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-72px)] w-full max-w-7xl flex-col justify-center px-6 py-16 sm:px-8 lg:px-10">
        <div className="max-w-3xl xl:max-w-4xl">
          <p className="v3-slide font-mono text-[0.8rem] uppercase tracking-[0.22em] text-[#e8a55e]">
            {cinemaHero.eyebrow}
          </p>
          <h1
            className="v3-slide mt-3 font-display text-[clamp(2.7rem,9vw,6.2rem)] font-semibold leading-[1.02] tracking-tight text-[#fff7ea]"
            style={riseDelay(60)}
          >
            {cinemaHero.title}
          </h1>
          <p
            className="v3-slide mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-xl sm:leading-8"
            style={riseDelay(120)}
          >
            {cinemaHero.intro}
          </p>
          <p
            className="v3-rise mt-3 max-w-2xl text-sm leading-7 text-white/55 sm:text-base"
            style={riseDelay(240)}
          >
            {cinemaHero.signal}
          </p>

          <div className="v3-rise mt-9 flex flex-wrap gap-3" style={riseDelay(320)}>
            <Link href="/#work" className="primary-button">
              Enter the work
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={site.resume.href}
              target={site.resume.external ? "_blank" : undefined}
              rel={site.resume.external ? "noreferrer" : undefined}
              download={site.resume.external ? undefined : site.resume.downloadName}
              className="secondary-button !border-white/15 !bg-white/8 !text-white hover:!text-[#e8a55e]"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="secondary-button !border-white/15 !bg-white/8 !text-white/85 hover:!text-white"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>

          <ul
            className="v3-rise mt-8 flex flex-wrap gap-2 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-white/55"
            style={riseDelay(400)}
          >
            {cinemaHero.chips.map((chip) => (
              <li key={chip} className="rounded-md border border-white/12 px-3 py-1.5">
                {chip}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="v3-rise mt-14 grid gap-3 sm:grid-cols-3 lg:max-w-3xl"
          style={riseDelay(480)}
        >
          {[
            ["01", "Sideout", "Venue OS with customer and operator surfaces"],
            ["02", "DraftLens", "AI feedback flow with citation confidence"],
            ["03", "This site", "Zero-WebGL cosmic system, built for speed"],
          ].map(([number, label, detail]) => (
            <div
              key={label}
              className="rounded-lg border border-white/10 bg-white/[0.05] p-4 backdrop-blur-sm"
            >
              <p className="font-mono text-[0.68rem] uppercase text-[#e8a55e]/85">{number}</p>
              <h2 className="mt-2.5 font-display text-xl font-semibold text-white">{label}</h2>
              <p className="mt-1.5 text-sm leading-6 text-white/60">{detail}</p>
            </div>
          ))}
        </div>
      </div>

      {sideout.image ? (
        <div
          className="pointer-events-none absolute right-12 top-36 z-0 hidden w-[22rem] rotate-2 overflow-hidden rounded-lg border border-white/12 opacity-30 mix-blend-screen xl:block"
          aria-hidden
        >
          <Image
            src={sideout.image.src}
            alt=""
            width={sideout.image.width}
            height={sideout.image.height}
            className="h-[30rem] w-full object-cover object-top"
            sizes="24rem"
            priority={false}
            loading="lazy"
          />
        </div>
      ) : null}
    </section>
  );
}
