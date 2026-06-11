"use client";

import {
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

interface Star {
  cx: number;
  cy: number;
  r: number;
  opacity: number;
  far: boolean;
}

// Deterministic PRNG so server and client render identical stars (no
// hydration mismatch, zero CLS). Never use Math.random() here.
function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function generateStars(count: number, seed: number): Star[] {
  const rand = mulberry32(seed);
  return Array.from({ length: count }, (_, index) => ({
    cx: rand() * 1000,
    cy: rand() * 1000,
    r: 0.4 + rand() * 1.5,
    opacity: 0.18 + rand() * 0.6,
    far: index % 3 !== 0,
  }));
}

const STARS = generateStars(130, 1976);
const FAR_STARS = STARS.filter((star) => star.far);
const NEAR_STARS = STARS.filter((star) => !star.far);

interface StarfieldLayerProps {
  className?: string;
  parallax?: boolean;
  tint?: string;
}

export function StarfieldLayer({
  className = "",
  parallax = false,
  tint = "#f7f1e8",
}: StarfieldLayerProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduceMotion = Boolean(useReducedMotion());
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const farY = useTransform(scrollYProgress, [0, 1], [18, -18]);
  const nearY = useTransform(scrollYProgress, [0, 1], [46, -46]);
  const drift = parallax && !reduceMotion;

  return (
    <LazyMotion features={domAnimation} strict>
      <div ref={ref} className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden>
        <svg
          className="h-full w-full"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <m.g style={drift ? { y: farY } : undefined} fill={tint}>
            {FAR_STARS.map((star, index) => (
              <circle
                key={`far-${index}`}
                cx={star.cx}
                cy={star.cy}
                r={star.r * 0.7}
                opacity={star.opacity * 0.6}
              />
            ))}
          </m.g>
          <m.g style={drift ? { y: nearY } : undefined} fill={tint}>
            {NEAR_STARS.map((star, index) => (
              <circle
                key={`near-${index}`}
                cx={star.cx}
                cy={star.cy}
                r={star.r}
                opacity={star.opacity}
              />
            ))}
          </m.g>
        </svg>
      </div>
    </LazyMotion>
  );
}
