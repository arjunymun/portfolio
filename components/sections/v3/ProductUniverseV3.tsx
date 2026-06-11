import { OrbitMap } from "@/components/sections/v3/OrbitMap";
import { universeNodes } from "@/lib/content";

export function ProductUniverseV3() {
  return (
    <section
      id="universe"
      className="relative isolate overflow-hidden border-b border-white/10 bg-[#0d0b0a]/88 py-20 text-white sm:py-24"
    >
      <div className="cinema-grid absolute inset-0 opacity-50" aria-hidden />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.58fr_1.42fr] lg:px-10">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="section-eyebrow">02 · Product universe</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.04] text-[#fff7ea] sm:text-6xl">
            The work is connected.
          </h2>
          <p className="mt-5 max-w-md text-base leading-8 text-white/70">
            Sideout and DraftLens are not isolated demos. They orbit the same craft: product
            judgment, typed systems, believable workflows, and interfaces that sell the work
            before a paragraph has to.
          </p>
          <ul className="mt-7 grid gap-2">
            {universeNodes.map((node) => (
              <li
                key={node.label}
                className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3"
              >
                <span className="font-display text-lg font-semibold">{node.label}</span>
                <span className="font-mono text-[0.68rem] uppercase text-white/55">
                  {node.detail}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <OrbitMap nodes={universeNodes} />
          <p className="mt-4 max-w-2xl font-mono text-[0.68rem] uppercase leading-6 text-white/50">
            Product thinking, frontend taste, and runtime credibility orbit the same center.
          </p>
        </div>
      </div>
    </section>
  );
}
