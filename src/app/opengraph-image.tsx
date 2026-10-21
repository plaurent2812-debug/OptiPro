import { ImageResponse } from "next/og";
import { contact, optipro } from "@/data/offer";

export const alt = `${optipro.brand} — Création de site internet dans les ${contact.area} : ${optipro.setupPrice} de mise en ligne, puis ${optipro.monthlyPrice} par mois.`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Satori : tout conteneur à plusieurs enfants porte display: flex.
const facts = [
  { name: optipro.setupPrice, hint: "de mise en ligne, une fois" },
  { name: optipro.monthlyPrice, hint: `par mois, ou ${optipro.yearlyPrice} par an` },
  { name: optipro.includedTime, hint: "de modifications chaque mois" },
  { name: "1", hint: `seul interlocuteur, à ${contact.city}` },
];

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "56px 72px", color: "#E9EDF3", background: "#0A0D12", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ display: "flex", width: 18, height: 18, borderRadius: 9, background: "#6FD39C" }} />
          <span style={{ fontWeight: 600 }}>Pierre Laurent</span>
          <span style={{ color: "#8590A2" }}>{optipro.brand}</span>
        </div>
        <span style={{ color: "#8590A2" }}>{contact.city}, {contact.area}</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", fontSize: 76, fontWeight: 600, letterSpacing: -3, lineHeight: 1.02 }}>
        <span>Création de site internet</span>
        <span style={{ color: "#8590A2" }}>dans les {contact.area}.</span>
      </div>

      <div style={{ display: "flex", gap: 20 }}>
        {facts.map((fact) => (
          <div key={fact.hint} style={{ display: "flex", flexDirection: "column", width: 245, padding: "16px 18px", border: "1px solid #262E3A", borderTop: "2px solid #6FD39C", borderRadius: 14, background: "#151A22" }}>
            <span style={{ fontSize: 34, fontWeight: 600, letterSpacing: -1 }}>{fact.name}</span>
            <span style={{ marginTop: 6, fontSize: 18, color: "#8590A2" }}>{fact.hint}</span>
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
