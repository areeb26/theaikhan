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
          background: "linear-gradient(160deg, #141414 0%, #050505 100%)",
          padding: 80,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 800, color: "#F5F0E8" }}>The Ai Khan</div>
        <div style={{ fontSize: 32, color: "#FF4D00", marginTop: 20 }}>Areeb Ahmed Khan</div>
        <div style={{ fontSize: 22, color: "#A3A3A3", marginTop: 16 }}>
          AI systems, agents & products · Karachi
        </div>
      </div>
    ),
    { ...size },
  );
}
