import type { UniverseNode } from "@/lib/content";

const toneMap = {
  teal: "#45b7ad",
  amber: "#e8a55e",
  rose: "#ff6b81",
  violet: "#a78bfa",
  steel: "#b8c7d9",
} as const;

// Fixed angles per slot keep the layout deterministic (server-rendered SVG,
// no measurement, zero CLS). Outer orbit: slots 0/2/4, inner: 1/3/5.
const SLOTS = [
  { rx: 300, ry: 158, angle: -24 },
  { rx: 210, ry: 112, angle: 36 },
  { rx: 300, ry: 158, angle: 96 },
  { rx: 210, ry: 112, angle: 156 },
  { rx: 300, ry: 158, angle: 216 },
  { rx: 210, ry: 112, angle: 276 },
];

function position(slot: (typeof SLOTS)[number]) {
  const rad = (slot.angle * Math.PI) / 180;
  return {
    x: 400 + slot.rx * Math.cos(rad),
    y: 300 + slot.ry * Math.sin(rad),
  };
}

interface OrbitMapProps {
  nodes: UniverseNode[];
}

// Decorative 2D orbital diagram (replaces the Three.js universe canvas).
// The same node data renders as a real list in the adjacent column, so the
// SVG stays aria-hidden.
export function OrbitMap({ nodes }: OrbitMapProps) {
  return (
    <div className="universe-shell-v3 relative overflow-hidden rounded-lg border border-white/10">
      <svg
        viewBox="0 0 800 600"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <ellipse
          cx="400"
          cy="300"
          rx="300"
          ry="158"
          fill="none"
          stroke="rgba(154,245,237,0.22)"
          strokeWidth="1"
          strokeDasharray="3 8"
        />
        <ellipse
          cx="400"
          cy="300"
          rx="210"
          ry="112"
          fill="none"
          stroke="rgba(255,210,154,0.2)"
          strokeWidth="1"
          strokeDasharray="2 10"
        />

        <circle cx="400" cy="300" r="46" fill="#050507" stroke="#45b7ad" strokeOpacity="0.8" strokeWidth="1.4" />
        <circle cx="400" cy="300" r="62" fill="none" stroke="#e8a55e" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="120 320" />
        <text
          x="400"
          y="296"
          textAnchor="middle"
          fill="#fff7ea"
          fontSize="15"
          fontFamily="var(--font-syne), sans-serif"
          fontWeight="600"
        >
          Craft
        </text>
        <text
          x="400"
          y="314"
          textAnchor="middle"
          fill="rgba(255,247,234,0.5)"
          fontSize="9"
          fontFamily="var(--font-geist-mono), monospace"
          letterSpacing="2"
        >
          CORE
        </text>

        {nodes.slice(0, 6).map((node, index) => {
          const slot = SLOTS[index];
          const { x, y } = position(slot);
          const tone = toneMap[node.tone];
          return (
            <g key={node.label} className="orbit-node">
              <line
                x1="400"
                y1="300"
                x2={x}
                y2={y}
                stroke={tone}
                strokeOpacity="0.16"
                strokeWidth="1"
              />
              <circle cx={x} cy={y} r="30" fill="#0d0b0a" stroke={tone} strokeOpacity="0.75" strokeWidth="1.3" />
              <circle cx={x} cy={y} r="38" fill="none" stroke={tone} strokeOpacity="0.22" strokeWidth="1" strokeDasharray="2 6" />
              <text
                x={x}
                y={y - 1}
                textAnchor="middle"
                fill="#fff7ea"
                fontSize="12"
                fontFamily="var(--font-syne), sans-serif"
                fontWeight="600"
              >
                {node.label}
              </text>
              <text
                x={x}
                y={y + 13}
                textAnchor="middle"
                fill={tone}
                fillOpacity="0.85"
                fontSize="7.5"
                fontFamily="var(--font-geist-mono), monospace"
                letterSpacing="1"
              >
                {node.detail.toUpperCase()}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
