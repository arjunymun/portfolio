import { experience } from "@/lib/content";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function Experience() {
  return (
    <SectionReveal delay={60}>
      <section
        id="experience"
        className="border-b border-[var(--border)] py-20 sm:py-24"
      >
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-10">
          <div>
            <p className="section-eyebrow">Experience</p>
            <h2 className="section-title mt-4 text-4xl font-semibold text-[var(--foreground)] sm:text-5xl">
              Recent work that shows how I&apos;m growing.
            </h2>
            <p className="section-copy mt-4 max-w-md text-base leading-8">
              I&apos;m still early in the journey, so this section is less about company logos
              and more about the kind of work I&apos;ve chosen to make and improve deliberately.
            </p>
          </div>

          <div className="space-y-5">
            {experience.map((item) => (
              <article
                key={`${item.period}-${item.title}`}
                className="surface-panel rounded-[1.75rem] p-6"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-2xl">
                    <p className="section-eyebrow">{item.period}</p>
                    <h3 className="section-title mt-3 text-2xl font-semibold text-[var(--foreground)]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--foreground-muted)]">{item.org}</p>
                    <p className="section-copy mt-4 text-sm leading-7">{item.summary}</p>
                  </div>

                  <ul className="space-y-3 lg:max-w-md">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="rounded-[1.15rem] border border-[var(--border)] bg-[var(--background-strong)] px-4 py-3 text-sm leading-7 text-[var(--foreground-soft)]"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
