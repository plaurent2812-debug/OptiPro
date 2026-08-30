import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pierre Laurent — Portfolio personnel",
    short_name: "Pierre Laurent",
    description: "Projets personnels, applications web et mobiles, automatisation et IA. Le portfolio de Pierre Laurent.",
    start_url: "/",
    display: "standalone",
    background_color: "#05080d",
    theme_color: "#05080d",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
  };
}
