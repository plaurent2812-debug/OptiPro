import type { MetadataRoute } from "next";
import { zones } from "@/data/zones";

const LAST_UPDATE = new Date("2026-10-19");
// Offre recentrée sur le département, pages locales, puis adresses renommées (/creation-site-internet) : 12 novembre 2026.
const ZONES_UPDATE = new Date("2026-11-12");

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pierre-laurent.fr";
  return [
    { url: baseUrl, lastModified: ZONES_UPDATE, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/creation-site-internet`, lastModified: ZONES_UPDATE, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/creation-site-internet/transport`, lastModified: ZONES_UPDATE, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/creation-site-internet/vence`, lastModified: ZONES_UPDATE, changeFrequency: "monthly", priority: 0.8 },
    ...zones.map((zone) => ({ url: `${baseUrl}/creation-site-internet/${zone.slug}`, lastModified: ZONES_UPDATE, changeFrequency: "monthly" as const, priority: 0.8 })),
    { url: `${baseUrl}/creation-site-internet/prix`, lastModified: ZONES_UPDATE, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/projets`, lastModified: LAST_UPDATE, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/a-propos`, lastModified: LAST_UPDATE, changeFrequency: "yearly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: LAST_UPDATE, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/mentions-legales`, lastModified: LAST_UPDATE, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/confidentialite`, lastModified: LAST_UPDATE, changeFrequency: "yearly", priority: 0.2 },
  ];
}
