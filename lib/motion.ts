import type { Variants } from "framer-motion";

// Shared motion vocabulary for v3 client components. Keep all variants here —
// no inline variant objects inside components (BJ contract).
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
