import { StarfieldLayer } from "@/components/sections/v3/StarfieldLayer";

// Pure CSS/SVG site backdrop — replaces the Three.js CosmicBackdrop.
// Renders identically on every device; no WebGL, no hydration gating.
export function CosmicBackdropV3() {
  return (
    <div className="cosmic-backdrop-v3" aria-hidden>
      <StarfieldLayer className="opacity-70" />
    </div>
  );
}
