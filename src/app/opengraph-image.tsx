import { ImageResponse } from "next/og";

export const alt = "Pierre Laurent — Relier les idées. Construire le concret.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 80px", color: "#eff2ef", background: "#080c10", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <div style={{ display: "flex", fontSize: 52, letterSpacing: -5 }}><span>p</span><span style={{ color: "#a0e5e0" }}>l.</span></div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}><span style={{ fontSize: 24 }}>Pierre Laurent</span><span style={{ fontSize: 16, color: "#a7b1b7" }}>Opérations · Code · Curiosité</span></div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 78, lineHeight: 1.1, letterSpacing: -4 }}>
          <span>Relier les idées.</span>
          <span style={{ color: "#a0e5e0" }}>Construire le concret.</span>
        </div>
        <div style={{ display: "flex", width: 700, height: 1, marginTop: 16, background: "#dcaf86" }} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 24, borderTop: "1px solid #c4d5e036", fontSize: 17, color: "#a7b1b7" }}>
        <span>Des applications, des expériences web, des outils.</span>
        <span style={{ color: "#a0e5e0" }}>pierre-laurent.fr</span>
      </div>
    </div>,
    size,
  );
}
