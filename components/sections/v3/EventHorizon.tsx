interface EventHorizonProps {
  className?: string;
}

// Pure CSS/SVG event-horizon mark — no client JS. Rotation lives in the
// .horizon-spin keyframes and pauses under prefers-reduced-motion.
export function EventHorizon({ className = "" }: EventHorizonProps) {
  return (
    <div className={`relative ${className}`} aria-hidden>
      <div className="horizon-glow absolute inset-[6%] rounded-full" />
      <svg
        className="horizon-spin relative h-full w-full"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <ellipse
          cx="200"
          cy="200"
          rx="168"
          ry="62"
          stroke="var(--accent)"
          strokeOpacity="0.55"
          strokeWidth="1.4"
          strokeDasharray="3 9"
        />
        <ellipse
          cx="200"
          cy="200"
          rx="138"
          ry="138"
          stroke="var(--warm)"
          strokeOpacity="0.4"
          strokeWidth="1"
          strokeDasharray="1 14"
        />
        <circle
          cx="200"
          cy="200"
          r="96"
          stroke="var(--accent)"
          strokeOpacity="0.7"
          strokeWidth="1.6"
          strokeDasharray="160 460"
          strokeLinecap="round"
        />
        <circle cx="200" cy="200" r="58" fill="#050507" />
        <circle
          cx="200"
          cy="200"
          r="58"
          stroke="var(--warm)"
          strokeOpacity="0.85"
          strokeWidth="1.2"
        />
      </svg>
    </div>
  );
}
