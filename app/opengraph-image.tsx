import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = site.tagline;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#050507",
          padding: 80,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: "#F4F4F5",
            letterSpacing: "-0.02em",
          }}
        >
          The Ai Khan
        </div>
        <div style={{ fontSize: 32, color: "#7CFF6B", marginTop: 24 }}>
          Areeb Ahmed Khan
        </div>
        <div style={{ fontSize: 22, color: "#A1A1AA", marginTop: 16 }}>
          AI systems, agents & products · Karachi
        </div>
      </div>
    ),
    { ...size },
  );
}
