import { ImageResponse } from "next/og";

import { getCaseStudyBySlug } from "@/lib/content";

export const alt = "Project case study";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getCaseStudyBySlug(slug);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(135deg, #111317 0%, #171a1f 45%, #173934 100%)",
          color: "#f8f3eb",
          padding: "54px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            borderRadius: "34px",
            border: "1px solid rgba(255,255,255,0.08)",
            padding: "42px",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.05), transparent 18%), rgba(11, 13, 16, 0.88)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div
              style={{
                fontSize: 22,
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                color: "#e8a55e",
              }}
            >
              Project case study
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ fontSize: 68, lineHeight: 1.02, fontWeight: 700 }}>
                {project?.title ?? "Project"}
              </div>
              <div
                style={{
                  fontSize: 34,
                  lineHeight: 1.24,
                  maxWidth: "900px",
                  color: "rgba(248, 243, 235, 0.8)",
                }}
              >
                {project?.summary ??
                  "A closer look at the product decisions, technical architecture, and interface work behind the build."}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 24,
                color: "rgba(248, 243, 235, 0.72)",
              }}
            >
              <div>{project?.status ?? "Case study"}</div>
              <div style={{ color: "#83ddd4", fontWeight: 700 }}>arjunymun</div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
