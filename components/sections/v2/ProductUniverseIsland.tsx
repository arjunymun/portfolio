"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "framer-motion";
import { useSyncExternalStore } from "react";

import type { UniverseNode } from "@/lib/content";

interface ProductUniverseIslandProps {
  nodes: UniverseNode[];
}

const ProductUniverseCanvas = dynamic(
  () =>
    import("@/components/sections/v2/ProductUniverseCanvas").then(
      (module) => module.ProductUniverseCanvas,
    ),
  {
    ssr: false,
    loading: () => <UniverseFallback label="Loading product universe" nodes={[]} />,
  },
);

function hasWebglSupport() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")),
    );
  } catch {
    return false;
  }
}

function UniverseFallback({ label, nodes }: { label: string; nodes: UniverseNode[] }) {
  return (
    <div className="universe-fallback flex min-h-[28rem] items-center justify-center rounded-lg border border-white/10 bg-[#11100f] p-5">
      <div className="grid w-full max-w-3xl gap-3 sm:grid-cols-2">
        {(nodes.length ? nodes : [{ label, detail: "Static fallback", tone: "teal" as const }]).map(
          (node) => (
            <div
              key={node.label}
              className="rounded-lg border border-white/10 bg-white/6 p-4 text-white shadow-[0_20px_70px_rgba(0,0,0,0.18)]"
            >
              <p className="font-mono text-[0.68rem] uppercase text-[#e8a55e]">
                {node.detail}
              </p>
              <p className="mt-3 font-display text-2xl font-semibold">{node.label}</p>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

export function ProductUniverseIsland({ nodes }: ProductUniverseIslandProps) {
  const reduceMotion = useReducedMotion();
  const canUseWebgl = useSyncExternalStore(
    () => () => {},
    hasWebglSupport,
    () => false,
  );

  if (reduceMotion || !canUseWebgl) {
    return <UniverseFallback label="Product universe" nodes={nodes} />;
  }

  return (
    <div className="h-[32rem] overflow-hidden rounded-lg border border-white/10 bg-[#0d0b0a] sm:h-[40rem] lg:h-[46rem]">
      <ProductUniverseCanvas nodes={nodes} />
    </div>
  );
}
