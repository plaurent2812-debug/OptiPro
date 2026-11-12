import type { Metadata } from "next";
import { contact, offer } from "@/data/offer";

/**
 * Aperçu de partage (Open Graph et Twitter) propre à une page.
 *
 * Pourquoi : dans Next.js, `openGraph` et `twitter` d’une page remplacent ceux du layout
 * au lieu de les compléter. Sans ce bloc, toutes les pages partagent le titre de l’accueil.
 * L’image de `app/opengraph-image.tsx` n’est alors plus ajoutée automatiquement : elle est déclarée ici.
 */
const image = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${contact.name} — Création de site internet dans les ${contact.area} : ${offer.setupPrice} de mise en ligne, puis ${offer.monthlyPrice} par mois.`,
};

export function shareMeta(title: string, description: string, path: string): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: { type: "website", locale: "fr_FR", siteName: contact.name, title, description, url: path, images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
