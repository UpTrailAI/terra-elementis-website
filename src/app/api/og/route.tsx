import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "Terra Elementis";

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
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: 999,
              border: "4px solid #D4AF37",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#D4AF37",
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            TE
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 34, letterSpacing: 1 }}>TERRA ELEMENTIS</span>
            <span style={{ fontSize: 16, letterSpacing: 4, color: "#C5A55A" }}>
              CRITICAL MINERALS PLATFORM
            </span>
          </div>
        </div>

        <div style={{ maxWidth: 1000, fontSize: 58, lineHeight: 1.1, fontWeight: 700 }}>
          {title}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
