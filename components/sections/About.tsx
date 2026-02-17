import { SectionReveal } from "@/components/ui/SectionReveal";

const aboutText = `I build web applications and enjoy working across the stack. This portfolio showcases my projects and experience.`;

export function About() {
  return (
    <SectionReveal>
      <section
        id="about"
        className="scroll-mt-16 border-b border-stone-200/80 dark:border-stone-800/80"
      >
        <div className="mx-auto max-w-5xl px-6 py-24 sm:px-10 lg:px-14">
          <p className="section-label text-stone-500 dark:text-stone-500">
            01 — About
          </p>
          <h2 className="section-heading section-title mt-2 text-3xl font-bold text-stone-900 dark:text-stone-100 sm:text-4xl">
            About me
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone-600 dark:text-stone-400">
            {aboutText}
          </p>
        </div>
      </section>
    </SectionReveal>
  );
}
