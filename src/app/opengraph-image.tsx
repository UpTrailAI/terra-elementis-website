import { ImageResponse } from "next/og";
import fs from "fs/promises";
import path from "path";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage() {
  // Fetch the logo from public directory
  const logoPath = path.join(process.cwd(), "public", "logo.png");
  const logoBuffer = await fs.readFile(logoPath);
  const logoBase64 = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #0A1628 0%, #141B2D 55%, #1E2A3E 100%)",
          color: "#F0EDE6",
          padding: "64px",
          fontFamily: "Georgia, serif",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 500,
            height: 500,
            background: "radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {/* @ts-ignore */}
          <img
            src={logoBase64}
            width={80}
            height={80}
            style={{
              filter: "drop-shadow(0 4px 12px rgba(212, 175, 55, 0.4))",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 36, letterSpacing: 2, fontWeight: 700 }}>
              TERRA ELEMENTIS
            </span>
            <span style={{ fontSize: 14, letterSpacing: 4, color: "#C5A55A", textTransform: "uppercase" }}>
              Critical Minerals Platform
            </span>
          </div>
        </div>

        <div style={{ maxWidth: 900, fontSize: 56, lineHeight: 1.15, fontWeight: 700 }}>
          A sovereign-grade mineral platform for America&apos;s critical supply chain.
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              height: 2,
              width: 60,
              background: "#D4AF37",
            }}
          />
          <span style={{ fontSize: 16, color: "#C5A55A" }}>terraelementis.com</span>
        </div>
      </div>
    ),
    size
  );
}
