import { cinemaProof } from "@/lib/content";

export function ProofCockpit() {
  return (
    <section className="cosmic-section relative isolate overflow-hidden border-b border-[var(--border)] py-16 sm:py-20">
      <div className="spectral-code opacity-40" aria-hidden />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-4 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="font-mono text-xs uppercase text-[var(--warm)]">Proof cockpit</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-none text-[var(--foreground)] sm:text-6xl">
              Signal, compressed.
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {cinemaProof.map((item, index) => (
              <article
                key={item.label}
                className="rounded-lg border border-[var(--border)] bg-[var(--panel)] p-5 shadow-[var(--shadow-soft)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="font-mono text-[0.68rem] uppercase text-[var(--warm)]">
                    {item.label}
                  </p>
                  <span className="font-mono text-[0.68rem] text-[var(--foreground-muted)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold leading-tight text-[var(--foreground)]">
                  {item.value}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--foreground-soft)]">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
