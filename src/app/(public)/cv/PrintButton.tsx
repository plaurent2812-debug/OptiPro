"use client";

export default function PrintButton() {
  return <button type="button" className="button-primary" onClick={() => window.print()}>Imprimer / Enregistrer en PDF <span aria-hidden="true">↗</span></button>;
}
