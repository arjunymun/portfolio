import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { projects } from "@/lib/content";
import { SectionReveal } from "@/components/ui/SectionReveal";

function ProjectActions({
  links,
}: {
  links: Array<{ label: string; href: string; external?: boolean }>;
}) {
  return (
    <div className="mt-7 flex flex-wrap gap-3">
      {links.map((link) =>
        link.external ? (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            {link.label}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        ) : (
          <Link key={link.href} href={link.href} className="secondary-button">
            {link.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        ),
      )}
    </div>
  );
}

export function Projects() {
  const featured = projects.filter((project) => project.featured);
  const supporting = projects.filter((project) => !project.featured);

  return (
    <SectionReveal delay={80}>
      <section id="work" className="border-b border-[var(--border)] py-20 sm:py-24">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="section-eyebrow">Selected work</p>
            <h2 className="section-title mt-4 text-4xl font-semibold text-[var(--foreground)] sm:text-5xl">
              Two flagship case studies, each showing a different kind of product thinking.
            </h2>
            <p className="section-copy mt-4 max-w-2xl text-base leading-8">
              Sideout leads with real-world operations, commerce, and retention software for
              a physical venue. DraftLens follows with trust-first AI workflow design. The
              rest of the shelf shows the systems thinking and presentation work around those
              two strongest lanes.
            </p>
          </div>

          <div className="space-y-5">
            {featured.map((project, index) => {
              const isLead = index === 0;

              return (
                <article
                  key={project.slug}
                  className={
                    isLead
                      ? "surface-panel-dark overflow-hidden rounded-[2.2rem] p-6 sm:p-8"
                      : "surface-panel-strong overflow-hidden rounded-[2.2rem] p-6 sm:p-8"
                  }
                >
                  <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch">
                    <div className="flex flex-col justify-between">
                      <div>
                        <div className="flex flex-wrap gap-2">
                          <span
                            className={
                              isLead
                                ? "pill !border-white/10 !bg-white/4 !text-white/70"
                                : "pill !bg-[var(--background-strong)]"
                            }
                          >
                            {project.year}
                          </span>
                          <span
                            className={
                              isLead
                                ? "pill !border-white/10 !bg-white/4 !text-white/70"
                                : "pill !bg-[var(--background-strong)]"
                            }
                          >
                            {project.status}
                          </span>
                        </div>

                        <p
                          className={
                            isLead
                              ? "section-eyebrow mt-5 !text-[rgba(232,165,94,0.85)]"
                              : "section-eyebrow mt-5"
                          }
                        >
                          {isLead ? "Lead flagship" : "Second flagship"}
                        </p>
                        <h3
                          className={
                            isLead
                              ? "section-title mt-4 max-w-[11ch] text-[clamp(2.8rem,5vw,4.8rem)] font-semibold leading-[0.96] text-[var(--panel-dark-foreground)]"
                              : "section-title mt-4 max-w-[11ch] text-[clamp(2.6rem,4.5vw,4.4rem)] font-semibold leading-[0.97] text-[var(--foreground)]"
                          }
                        >
                          {project.title}
                        </h3>
                        <p
                          className={
                            isLead
                              ? "mt-4 text-sm uppercase tracking-[0.18em] text-white/48"
                              : "mt-4 text-sm uppercase tracking-[0.18em] text-[var(--foreground-muted)]"
                          }
                        >
                          {project.kicker}
                        </p>
                        <p
                          className={
                            isLead
                              ? "mt-5 max-w-xl text-base leading-8 text-white/72"
                              : "mt-5 max-w-xl text-base leading-8 text-[var(--foreground-soft)]"
                          }
                        >
                          {project.summary}
                        </p>
                      </div>

                      <div className="mt-8">
                        <div className="grid gap-3 sm:grid-cols-2">
                          <article
                            className={
                              isLead
                                ? "rounded-[1.25rem] border border-white/8 bg-white/4 px-4 py-4"
                                : "rounded-[1.25rem] border border-[var(--border)] bg-[var(--background-strong)] px-4 py-4"
                            }
                          >
                            <p className={isLead ? "section-eyebrow !text-white/45" : "section-eyebrow"}>
                              Role
                            </p>
                            <p
                              className={
                                isLead
                                  ? "mt-3 text-sm leading-6 text-white/76"
                                  : "mt-3 text-sm leading-6 text-[var(--foreground-soft)]"
                              }
                            >
                              {project.role}
                            </p>
                          </article>
                          <article
                            className={
                              isLead
                                ? "rounded-[1.25rem] border border-white/8 bg-white/4 px-4 py-4"
                                : "rounded-[1.25rem] border border-[var(--border)] bg-[var(--background-strong)] px-4 py-4"
                            }
                          >
                            <p className={isLead ? "section-eyebrow !text-white/45" : "section-eyebrow"}>
                              Why it matters
                            </p>
                            <p
                              className={
                                isLead
                                  ? "mt-3 text-sm leading-6 text-white/76"
                                  : "mt-3 text-sm leading-6 text-[var(--foreground-soft)]"
                              }
                            >
                              {project.takeaway}
                            </p>
                          </article>
                        </div>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.stack.map((item) => (
                            <span
                              key={item}
                              className={
                                isLead
                                  ? "pill !border-white/10 !bg-white/4 !text-white/70"
                                  : "pill !bg-[var(--background-strong)]"
                              }
                            >
                              {item}
                            </span>
                          ))}
                        </div>

                        <ProjectActions links={project.links} />
                      </div>
                    </div>

                    {project.image ? (
                      <div className="flex flex-col gap-3">
                        <div
                          className={
                            isLead
                              ? "rounded-full border border-white/10 bg-white/4 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/55"
                              : "rounded-full border border-[var(--border)] bg-[var(--background-strong)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--foreground-muted)]"
                          }
                        >
                          Product surface preview
                        </div>
                        <div
                          className={
                            isLead
                              ? "overflow-hidden rounded-[1.8rem] border border-white/10 bg-black/20 p-3 sm:p-4"
                              : "overflow-hidden rounded-[1.8rem] border border-[var(--border)] bg-[var(--panel)] p-3 sm:p-4"
                          }
                        >
                          <Image
                            src={project.image.src}
                            alt={project.image.alt}
                            width={project.image.width}
                            height={project.image.height}
                            className="h-[26rem] w-full rounded-[1.25rem] object-cover object-top sm:h-[32rem] lg:h-[38rem]"
                          />
                        </div>
                      </div>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {supporting.map((project) => (
              <article
                key={project.slug}
                className="project-card surface-panel rounded-[1.75rem] p-6 sm:p-7"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <p className="section-eyebrow">{project.kicker}</p>
                  <span className="pill !px-3 !py-1">{project.status}</span>
                </div>

                <div className="mt-4">
                  <h3 className="section-title text-[1.95rem] font-semibold leading-[1.02] text-[var(--foreground)]">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--foreground-muted)]">
                    {project.role}
                  </p>
                </div>

                <p className="section-copy mt-5 text-sm leading-7">{project.summary}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="pill !bg-[var(--background-strong)]">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 rounded-[1.25rem] border border-[var(--border)] bg-[var(--background-strong)] px-4 py-4">
                  <p className="section-eyebrow">Takeaway</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--foreground)]">
                    {project.takeaway}
                  </p>
                </div>

                <ProjectActions links={project.links} />
              </article>
            ))}
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
