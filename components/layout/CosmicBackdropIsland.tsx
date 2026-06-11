"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

function BackdropFallback() {
  return <div className="cosmic-backdrop cosmic-backdrop-fallback" aria-hidden />;
}

const CosmicBackdrop = dynamic(
  () =>
    import("@/components/layout/CosmicBackdrop").then(
      (module) => module.CosmicBackdrop,
    ),
  {
    ssr: false,
    loading: () => <BackdropFallback />,
  },
);

// The backdrop is decorative; phones get the static CSS fallback so the
// Three.js chunk never downloads or executes on small screens.
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

export function CosmicBackdropIsland() {
  const isDesktop = useIsDesktop();

  if (!isDesktop) {
    return <BackdropFallback />;
  }

  return <CosmicBackdrop />;
}
