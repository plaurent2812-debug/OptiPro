import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ minHeight: "100svh", display: "grid", placeItems: "center", padding: "6rem 1.5rem", textAlign: "center" }}>
      <div>
        <p className="eyebrow">Signal lost / 404</p>
        <h1 style={{ marginTop: "1rem", fontSize: "clamp(4rem, 18vw, 11rem)", lineHeight: .85, letterSpacing: "-.08em" }}>Hors réseau.</h1>
        <p style={{ margin: "2rem auto", maxWidth: 520, color: "var(--text-dim)" }}>Cette route n’appartient plus au système actif.</p>
        <Link href="/" className="button-primary">Retour au noyau →</Link>
      </div>
    </main>
  );
}
