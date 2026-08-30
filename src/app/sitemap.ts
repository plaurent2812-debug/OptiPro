import type { MetadataRoute } from "next";

const LAST_UPDATE = new Date("2026-08-31");

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.opti-pro.fr";
  return [
    { url: baseUrl, lastModified: LAST_UPDATE, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/projets`, lastModified: LAST_UPDATE, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/a-propos`, lastModified: LAST_UPDATE, changeFrequency: "yearly", priority: 0.8 },
    { url: `${baseUrl}/cv`, lastModified: LAST_UPDATE, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: LAST_UPDATE, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/mentions-legales`, lastModified: LAST_UPDATE, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/confidentialite`, lastModified: LAST_UPDATE, changeFrequency: "yearly", priority: 0.2 },
  ];
}
