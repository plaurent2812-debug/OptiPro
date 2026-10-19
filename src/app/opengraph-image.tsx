import { ImageResponse } from "next/og";
import { contact, optipro } from "@/data/offer";

export const alt = "Pierre Laurent — Je relie le terrain au logiciel : opérations, données, automatisation, applications et sites vitrines OptiPro.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Satori : tout conteneur à plusieurs enfants porte display: flex.
const nodes = [
  { name: "Terrain", hint: "Entrepôts, transport", color: "#F0A940" },
  { name: "Données", hint: "Tableaux de bord", color: "#4CC4E3" },
  { name: "Automatisation", hint: "Ce qui tourne seul", color: "#4CC4E3" },
  { name: "Applications", hint: "Web et mobile", color: "#6FD39C" },
  { name: "Site vitrine", hint: `Offre ${optipro.brand}`, color: "#6FD39C" },
];

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "56px 72px", color: "#E9EDF3", background: "#0A0D12", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ display: "flex", width: 18, height: 18, borderRadius: 9, background: "#F0A940" }} />
          <span style={{ fontWeight: 600 }}>Pierre Laurent</span>
          <span style={{ color: "#8590A2" }}>{optipro.brand}</span>
        </div>
        <span style={{ color: "#8590A2" }}>{contact.city}, {contact.area}</span>
      </div>

      <div style={{ display: "flex", fontSize: 84, fontWeight: 600, letterSpacing: -3, lineHeight: 1 }}>Je relie le terrain au logiciel.</div>

      <div style={{ display: "flex", alignItems: "center" }}>
        {nodes.map((node, index) => (
          <div key={node.name} style={{ display: "flex", alignItems: "center" }}>
            {index > 0 && <div style={{ display: "flex", width: 34, height: 2, background: node.color, opacity: 0.8 }} />}
            <div style={{ display: "flex", flexDirection: "column", width: 184, padding: "14px 14px", border: "1px solid #262E3A", borderTop: `2px solid ${node.color}`, borderRadius: 14, background: "#151A22" }}>
              <span style={{ fontSize: 20, fontWeight: 600 }}>{node.name}</span>
              <span style={{ marginTop: 6, fontSize: 16, color: "#8590A2" }}>{node.hint}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 22, borderTop: "1px solid #262E3A", fontSize: 26 }}>
        <span style={{ color: "#A9B2C0" }}>pierre-laurent.fr</span>
        <span style={{ display: "flex", padding: "8px 18px", border: "1px solid #354052", borderRadius: 12, fontWeight: 600 }}>{contact.phoneDisplay}</span>
      </div>
    </div>,
    size,
  );
}
