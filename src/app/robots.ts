import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: "https://pierre-laurent.fr/sitemap.xml",
    host: "https://pierre-laurent.fr",
  };
}
