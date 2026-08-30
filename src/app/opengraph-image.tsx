import { ImageResponse } from "next/og";

export const alt = "Pierre Laurent — Des idées. Du code. Du concret.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", overflow: "hidden", color: "#edfaff", background: "#05080d", fontFamily: "sans-serif" }}>
      <div style={{ position: "absolute", inset: 0, display: "flex", opacity: .28, backgroundImage: "linear-gradient(rgba(80,230,255,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(80,230,255,.16) 1px, transparent 1px)", backgroundSize: "54px 54px" }} />
      <div style={{ position: "absolute", width: 560, height: 560, borderRadius: 999, border: "1px solid rgba(80,230,255,.28)", right: -80, top: -120, boxShadow: "0 0 120px rgba(80,230,255,.12)" }} />
      <div style={{ position: "relative", width: "100%", padding: "76px 84px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, color: "#86d8ee", fontSize: 20, letterSpacing: 4 }}><div style={{ width: 12, height: 12, borderRadius: 99, background: "#86d8ee" }} /> PIERRE LAURENT / PORTFOLIO</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 76, lineHeight: .96, letterSpacing: -4, fontWeight: 700 }}>
            <span>Des idées. Du code.</span>
            <span style={{ color: "#86d8ee" }}>Du concret.</span>
          </div>
          <div style={{ marginTop: 28, color: "#9aabb8", fontSize: 28 }}>Applications · Web · Automatisation · IA</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", color: "#9aabb8", fontSize: 16 }}><span>ProbaLab / Ferdinand / Ro Nutritionniste / Odysio</span><span>pierre-laurent.fr</span></div>
      </div>
    </div>,
    size,
  );
}
