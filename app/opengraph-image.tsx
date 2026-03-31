import { ImageResponse } from "next/og";

import { site } from "@/lib/site";

export const alt = site.seo.title;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(135deg, #f5efe6 0%, #ede4d8 48%, #d5eeea 100%)",
          color: "#1f1a17",
          padding: "56px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            borderRadius: "36px",
            border: "1px solid rgba(31, 26, 23, 0.12)",
            background: "rgba(251, 248, 243, 0.88)",
            padding: "44px",
          }}
        >
          <div
            style={{
              fontSize: 24,
              textTransform: "uppercase",
              letterSpacing: "0.28em",
              color: "#b37a42",
            }}
          >
            Editorial portfolio
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div
              style={{
                fontSize: 68,
                lineHeight: 1.02,
                fontWeight: 700,
                maxWidth: "800px",
              }}
            >
              Arjun Yadav
            </div>
            <div
              style={{
                fontSize: 34,
                lineHeight: 1.25,
                maxWidth: "920px",
                color: "#4a413b",
              }}
            >
              Full-stack developer building thoughtful web products with strong
              frontend craft, practical AI workflows, and product-minded systems.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 24,
              color: "#4a413b",
            }}
          >
            <div>Featuring DraftLens, a student-facing writing feedback product</div>
            <div style={{ color: "#0b4f49", fontWeight: 700 }}>arjunymun</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
