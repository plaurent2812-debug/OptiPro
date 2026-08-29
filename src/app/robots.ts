import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: "https://www.opti-pro.fr/sitemap.xml",
    host: "https://www.opti-pro.fr",
  };
}
