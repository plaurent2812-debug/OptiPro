import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ minHeight: "100svh", display: "grid", placeItems: "center", padding: "6rem 1.5rem", textAlign: "center" }}>
      <div>
        <p style={{ color: "var(--muted)", fontWeight: 600 }}>Erreur 404</p>
        <h1 style={{ marginTop: "1rem", font: "700 clamp(3.5rem, 14vw, 8rem)/.9 var(--font-condensed), sans-serif" }}>Hors réseau.</h1>
        <p style={{ margin: "1.5rem auto 2rem", maxWidth: 520, color: "var(--text-dim)" }}>Cette page n’existe pas ou a été déplacée.</p>
        <Link href="/" className="button-primary">Retour à l’accueil</Link>
      </div>
    </main>
  );
}
