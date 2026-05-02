import { universeNodes } from "@/lib/content";
import { ProductUniverseIsland } from "@/components/sections/v2/ProductUniverseIsland";

export function ProductUniverse() {
  return (
    <section
      id="universe"
      className="relative isolate overflow-hidden border-b border-white/10 bg-[#0d0b0a] py-20 text-white sm:py-24"
    >
      <div className="cinema-grid absolute inset-0 opacity-60" aria-hidden />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.58fr_1.42fr] lg:px-10">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-mono text-xs uppercase text-[#e8a55e]">Product universe</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-none text-[#fff7ea] sm:text-6xl">
            The work is connected.
          </h2>
          <p className="mt-5 max-w-md text-base leading-8 text-white/62">
            Sideout and DraftLens are not isolated demos. They orbit the same craft: product
            judgment, typed systems, believable workflows, and interfaces that sell the work
            before a paragraph has to.
          </p>
          <ul className="mt-7 grid gap-2">
            {universeNodes.map((node) => (
              <li
                key={node.label}
                className="flex items-center justify-between rounded-lg border border-white/10 bg-white/6 px-4 py-3"
              >
                <span className="font-display text-lg font-semibold">{node.label}</span>
                <span className="font-mono text-[0.68rem] uppercase text-white/46">
                  {node.detail}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <ProductUniverseIsland nodes={universeNodes} />
          <p className="mt-4 max-w-2xl font-mono text-[0.68rem] uppercase leading-6 text-white/42">
            Product thinking, frontend taste, and runtime credibility orbit the same center.
          </p>
        </div>
      </div>
    </section>
  );
}
