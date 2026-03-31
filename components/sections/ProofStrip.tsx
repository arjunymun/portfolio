import { proofItems } from "@/lib/content";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function ProofStrip() {
  return (
    <SectionReveal delay={40}>
      <section className="border-b border-[var(--border)] py-8 sm:py-10">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10">
          <div className="surface-panel-strong overflow-hidden rounded-[2rem]">
            <div className="grid lg:grid-cols-4">
              {proofItems.map((item, index) => (
                <article
                  key={item.label}
                  className="border-b border-[var(--border)] px-5 py-6 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0 lg:px-6 lg:py-7"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="section-eyebrow">{item.label}</p>
                    <span className="text-xs font-medium text-[var(--foreground-muted)]">
                      0{index + 1}
                    </span>
                  </div>
                  <h2 className="section-title mt-4 text-[1.75rem] font-semibold leading-[1.05] text-[var(--foreground)]">
                    {item.value}
                  </h2>
                  <p className="section-copy mt-4 text-sm leading-7">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
