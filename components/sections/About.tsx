import { capabilityGroups } from "@/lib/content";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function About() {
  return (
    <SectionReveal delay={80}>
      <section id="about" className="border-b border-[var(--border)] py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10">
          <div className="space-y-5">
            <p className="section-eyebrow">About</p>
            <h2 className="section-title text-4xl font-semibold text-[var(--foreground)] sm:text-5xl">
              I want my projects to feel like real products, not one-off demos.
            </h2>
            <p className="section-copy max-w-xl text-base leading-8">
              My favorite builds are the ones where the interface, the backend choices, and
              the written story all reinforce each other. DraftLens pushed me in that
              direction, and this portfolio refresh is really about presenting that work with
              more clarity and more taste.
            </p>
            <p className="section-copy max-w-xl text-base leading-8">
              With a bachelor&apos;s in computer science from Memorial University of
              Newfoundland, I&apos;m still early in my career and care a lot about showing
              range honestly: strong frontend execution, thoughtful product framing, and the
              willingness to keep refining the same project until it reads like something
              real.
            </p>
          </div>

          <div className="grid gap-4">
            {capabilityGroups.map((group) => (
              <article
                key={group.title}
                className="surface-panel rounded-[1.75rem] p-6"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-xl">
                    <p className="section-eyebrow">{group.title}</p>
                    <p className="section-copy mt-3 text-sm leading-7">{group.summary}</p>
                  </div>
                  <ul className="flex flex-wrap gap-2 lg:max-w-md lg:justify-end">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="pill !bg-[var(--background-strong)] !text-[var(--foreground-soft)]"
                      >
                        {item}
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
