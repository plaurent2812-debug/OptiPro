import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pierre Laurent — Site personnel",
    short_name: "Pierre Laurent",
    description: "Parcours professionnel, opérations, data et projets numériques personnels.",
    start_url: "/",
    display: "standalone",
    background_color: "#05080d",
    theme_color: "#05080d",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
  };
}
