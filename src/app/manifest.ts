import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "OptiPro — Création de site internet dans les Alpes-Maritimes",
    short_name: "OptiPro",
    description: "Création de sites internet pour les TPE et PME des Alpes-Maritimes, conçus, mis en ligne et mis à jour par Pierre Laurent, à Vence.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0d12",
    theme_color: "#0a0d12",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
  };
}
