"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function SectionReveal({ children, className = "", delay = 0 }: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.08, margin: "0px 0px -40px 0px" });
  const reduceMotion = useReducedMotion();
  const [hasRevealed, setHasRevealed] = useState(false);
  useEffect(() => {
    if (inView) setHasRevealed(true);
  }, [inView]);

  const show = hasRevealed || reduceMotion;

  return (
    <motion.div
      ref={ref}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: delay / 1000 }
      }
      className={className}
      style={{ willChange: show ? "auto" : "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}
