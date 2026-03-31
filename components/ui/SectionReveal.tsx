"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function SectionReveal({
  children,
  className = "",
  delay = 0,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.16,
    margin: "0px 0px -10% 0px",
  });
  const reduceMotion = useReducedMotion();
  const visible = reduceMotion || inView;

  return (
    <motion.div
      ref={ref}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
              delay: delay / 1000,
            }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
