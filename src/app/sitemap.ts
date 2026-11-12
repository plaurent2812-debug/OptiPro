import type { MetadataRoute } from "next";
import { zones } from "@/data/zones";

const LAST_UPDATE = new Date("2026-10-19");
const OPTIPRO_UPDATE = new Date("2026-10-21");
// Offre recentrée sur le département, pages locales et carte des zones : 12 novembre 2026.
const ZONES_UPDATE = new Date("2026-11-12");

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pierre-laurent.fr";
  return [
    { url: baseUrl, lastModified: ZONES_UPDATE, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/optipro`, lastModified: ZONES_UPDATE, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/optipro/transport`, lastModified: OPTIPRO_UPDATE, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/optipro/vence`, lastModified: ZONES_UPDATE, changeFrequency: "monthly", priority: 0.8 },
    ...zones.map((zone) => ({ url: `${baseUrl}/optipro/${zone.slug}`, lastModified: ZONES_UPDATE, changeFrequency: "monthly" as const, priority: 0.8 })),
    { url: `${baseUrl}/optipro/prix-site-internet`, lastModified: OPTIPRO_UPDATE, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/projets`, lastModified: LAST_UPDATE, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/a-propos`, lastModified: LAST_UPDATE, changeFrequency: "yearly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: LAST_UPDATE, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/mentions-legales`, lastModified: LAST_UPDATE, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/confidentialite`, lastModified: LAST_UPDATE, changeFrequency: "yearly", priority: 0.2 },
  ];
}
