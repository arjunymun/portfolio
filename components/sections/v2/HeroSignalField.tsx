"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "framer-motion";
import { useEffect, useState, useSyncExternalStore } from "react";

const HeroSignalCanvas = dynamic(
  () =>
    import("@/components/sections/v2/HeroSignalCanvas").then(
      (module) => module.HeroSignalCanvas,
    ),
  {
    ssr: false,
    loading: () => <HeroSignalFallback />,
  },
);

let cachedHeroWebglSupport: boolean | null = null;

function subscribe() {
  return () => {};
}

function getServerSnapshot() {
  return false;
}

function hasWebglSupport() {
  if (typeof document === "undefined") {
    return false;
  }

  if (cachedHeroWebglSupport !== null) {
    return cachedHeroWebglSupport;
  }

  try {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("webgl2") ?? canvas.getContext("webgl");
    cachedHeroWebglSupport = Boolean(context);
    context?.getExtension("WEBGL_lose_context")?.loseContext();
    return cachedHeroWebglSupport;
  } catch {
    cachedHeroWebglSupport = false;
    return false;
  }
}

function HeroSignalFallback() {
  return <div className="hero-signal-fallback h-full w-full" aria-hidden />;
}

// The hero canvas wrapper is display:none below lg, but display:none still
// mounts and boots the whole Three.js stack — gate on the breakpoint instead
// so phones never pay for an invisible canvas.
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return isDesktop;
}

export function HeroSignalField() {
  const reduceMotion = Boolean(useReducedMotion());
  const isDesktop = useIsDesktop();
  const supportsWebgl = useSyncExternalStore(subscribe, hasWebglSupport, getServerSnapshot);

  if (!isDesktop || !supportsWebgl) {
    return <HeroSignalFallback />;
  }

  return <HeroSignalCanvas reduceMotion={reduceMotion} />;
}
