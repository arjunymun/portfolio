import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Download, Mail } from "lucide-react";

import { caseStudies, getCaseStudyBySlug } from "@/lib/content";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudyBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} Case Study`,
    description: project.summary,
    openGraph: {
      title: `${project.title} Case Study`,
      description: project.summary,
      images: [`/projects/${slug}/opengraph-image`],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} Case Study`,
      description: project.summary,
      images: [`/projects/${slug}/opengraph-image`],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getCaseStudyBySlug(slug);

  if (!project) {
    notFound();
  }

  const repoLink =
    project.links.find((link) => link.external && /repo/i.test(link.label)) ??
    project.links.find((link) => link.external);
  const liveLink = project.links.find((link) => link.external && !/repo/i.test(link.label));

  return (
    <main className="cosmic-section relative z-10 overflow-hidden">
      <div className="spectral-code opacity-35" aria-hidden />
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
        <Link
          href="/#work"
          className="inline-flex w-fit items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-2 text-sm font-medium text-[var(--accent-strong)] transition hover:border-[var(--border-strong)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to work
        </Link>

        <section className="relative overflow-hidden rounded-lg border border-white/10 bg-[#0d0b0a] p-5 text-white shadow-[0_40px_140px_rgba(0,0,0,0.32)] sm:p-8">
          <div className="cinema-grid absolute inset-0 opacity-70" aria-hidden />
          <div className="spectral-code opacity-60" aria-hidden />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div>
              <p className="font-mono text-xs uppercase text-[#e8a55e]">{project.kicker}</p>
              <h1 className="mt-4 font-display text-5xl font-semibold leading-none text-[#fff7ea] sm:text-7xl">
                {project.title}
              </h1>
              <p className="mt-4 font-mono text-xs uppercase leading-6 text-white/42">
                {project.role}
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
                {project.summary}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {liveLink ? (
                  <a
                    href={liveLink.href}
                    target="_blank"
                    rel="noreferrer"
                    className="primary-button"
                  >
                    {liveLink.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
                {repoLink ? (
                  <a
                    href={repoLink.href}
                    target="_blank"
                    rel="noreferrer"
                    className="secondary-button !border-white/12 !bg-white/6 !text-white"
                  >
                    {repoLink.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
                <a
                  href={site.resume.href}
                  target={site.resume.external ? "_blank" : undefined}
                  rel={site.resume.external ? "noreferrer" : undefined}
                  download={site.resume.external ? undefined : site.resume.downloadName}
                  className="secondary-button !border-white/12 !bg-white/6 !text-white/82 hover:!text-[#e8a55e]"
                >
                  <Download className="h-4 w-4" />
                  Resume
                </a>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {project.executiveSummary.map((item) => (
                <article
                  key={item.label}
                  className="rounded-lg border border-white/10 bg-white/7 p-4 backdrop-blur"
                >
                  <p className="font-mono text-[0.68rem] uppercase text-[#e8a55e]">
                    {item.label}
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-semibold leading-tight text-white">
                    {item.value}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-white/58">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden rounded-lg border border-[var(--border-strong)] bg-[var(--panel-strong)] p-3 shadow-[var(--shadow)]">
          <Image
            src={project.screenshots[0].src}
            alt={project.screenshots[0].alt}
            width={project.screenshots[0].width}
            height={project.screenshots[0].height}
            className="h-[28rem] w-full rounded-md object-cover object-top sm:h-[40rem] lg:h-[48rem]"
            priority
          />
        </section>

        <section className="grid gap-3 lg:grid-cols-3">
          {[
            ["Problem", project.problem],
            ["Audience", project.audience],
            ["Challenge", project.challenge],
          ].map(([label, copy]) => (
            <article
              key={label}
              className="rounded-lg border border-[var(--border)] bg-[var(--panel)] p-5 shadow-[var(--shadow-soft)]"
            >
              <p className="font-mono text-[0.68rem] uppercase text-[var(--warm)]">{label}</p>
              <p className="mt-4 text-sm leading-7 text-[var(--foreground-soft)]">{copy}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-lg border border-[var(--border)] bg-[var(--panel)] p-6">
            <p className="font-mono text-xs uppercase text-[var(--warm)]">Product path</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-none text-[var(--foreground)]">
              The story stays short; the scope stays visible.
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--foreground-soft)]">
              {project.solutionSummary}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {project.workflow.slice(0, 4).map((step, index) => (
              <article
                key={step}
                className="rounded-lg border border-[var(--border)] bg-[var(--background-strong)] p-4"
              >
                <p className="font-mono text-[0.68rem] uppercase text-[var(--warm)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--foreground-soft)]">{step}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase text-[var(--warm)]">Architecture</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-none text-[var(--foreground)]">
                Built as product infrastructure.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[var(--foreground-soft)]">
              The implementation details are grouped around what a reviewer can judge: runtime,
              data, workflow, and credibility.
            </p>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {project.architecture.slice(0, 4).map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-[var(--border)] bg-[var(--panel)] p-5 shadow-[var(--shadow-soft)]"
              >
                <h3 className="font-display text-2xl font-semibold leading-tight text-[var(--foreground)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--foreground-soft)]">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <p className="font-mono text-xs uppercase text-[var(--warm)]">Surfaces</p>
          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            {project.screenshots.slice(1, 5).map((shot) => (
              <figure
                key={shot.src}
                className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--panel)] p-3 shadow-[var(--shadow-soft)]"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={shot.width}
                  height={shot.height}
                  className="h-[22rem] w-full rounded-md object-cover object-top sm:h-[28rem]"
                />
                <figcaption className="px-1 pb-1 pt-4 text-sm leading-7 text-[var(--foreground-soft)]">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden rounded-lg border border-white/10 bg-[#0d0b0a]/90 p-6 text-white sm:p-8">
          <div className="cinema-grid absolute inset-0 opacity-45" aria-hidden />
          <div className="relative z-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="font-mono text-xs uppercase text-[#e8a55e]">Next step</p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-none text-[#fff7ea]">
                {project.closingHeading}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/62">
                {project.closingCopy}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={`mailto:${site.email}`} className="primary-button">
                <Mail className="h-4 w-4" />
                Contact
              </a>
              <Link href="/#work" className="secondary-button !border-white/12 !bg-white/6 !text-white">
                More work
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
