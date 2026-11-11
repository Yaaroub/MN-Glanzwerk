import { ImageResponse } from "next/og";

export const alt = "MN GLANZWERK – Gebäudereinigung in Schleswig-Holstein, Hamburg & Bremen";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #0b2a3c 0%, #114c68 55%, #2a6f94 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, letterSpacing: 6, color: "#bae6fd" }}>
          <div style={{ width: 18, height: 18, borderRadius: 9, background: "#38bdf8" }} />
          MN GLANZWERK
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05 }}>Gebäudereinigung,</div>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, color: "#7dd3fc" }}>
            die man sieht.
          </div>
          <div style={{ fontSize: 32, color: "#e2e8f0" }}>
            Bad Segeberg · Kiel · Lübeck · Hamburg · Bremen
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "#e2e8f0" }}>
          <span>Büro · Unterhalt · Grundreinigung · Fenster · Umzug</span>
          <span style={{ fontWeight: 700, color: "white" }}>0163 7885512</span>
        </div>
      </div>
    ),
    size
  );
}
