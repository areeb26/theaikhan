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
          background: "linear-gradient(135deg, #1a1030 0%, #030303 60%)",
          padding: 80,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 800, color: "#fafafa" }}>The Ai Khan</div>
        <div style={{ fontSize: 32, color: "#8B5CF6", marginTop: 20 }}>Areeb Ahmed Khan</div>
        <div style={{ fontSize: 22, color: "#a1a1aa", marginTop: 16 }}>
          AI systems, agents & products · Karachi
        </div>
      </div>
    ),
    { ...size },
  );
}
