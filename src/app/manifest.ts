import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pierre Laurent — Opérations, applications et sites pour entreprises",
    short_name: "Pierre Laurent",
    description: "Opérations et logistique, applications web et mobiles, automatisation, IA, data et sites vitrines OptiPro dans les Alpes-Maritimes.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0d12",
    theme_color: "#0a0d12",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
  };
}
