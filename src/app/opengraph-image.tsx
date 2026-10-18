import { ImageResponse } from "next/og";

export const alt = "Pierre Laurent — Je fais tourner les opérations. Et je construis les outils qui vont avec.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const lines = [
  { code: "O", name: "Opérations & logistique", color: "#1d4ed8", ink: "#ffffff", width: 760 },
  { code: "A", name: "Applications web & mobiles", color: "#b4235a", ink: "#ffffff", width: 640 },
  { code: "D", name: "Automatisation, IA & data", color: "#047857", ink: "#ffffff", width: 700 },
  { code: "S", name: "Sites vitrines OptiPro", color: "#f2b705", ink: "#15181c", width: 820 },
];

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "60px 72px", color: "#15181c", background: "#eef0eb", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <span style={{ fontSize: 26, color: "#5b636b" }}>Pierre Laurent · Vence, Alpes-Maritimes</span>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 60, fontWeight: 700, lineHeight: 1.05, letterSpacing: -1 }}>
          <span>Je fais tourner les opérations.</span>
          <span>Et je construis les outils qui vont avec.</span>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        {lines.map((line) => (
          <div key={line.code} style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 44, height: 44, borderRadius: 8, background: line.color, color: line.ink, fontSize: 26, fontWeight: 700 }}>{line.code}</div>
            <div style={{ display: "flex", width: line.width - 420, height: 12, borderRadius: 12, background: line.color }} />
            <span style={{ fontSize: 26, fontWeight: 600 }}>{line.name}</span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 20, borderTop: "3px solid #15181c", fontSize: 24 }}>
        <span>pierre-laurent.fr</span>
        <span style={{ display: "flex", padding: "6px 14px", borderRadius: 8, background: "#f2b705", fontWeight: 700 }}>06 70 25 93 33</span>
      </div>
    </div>,
    size,
  );
}
