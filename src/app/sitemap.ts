import type { MetadataRoute } from 'next';
import { getAllArticles } from '@/lib/blog';

// Date de dernière modification du contenu (mise à jour manuelle quand le
// contenu change vraiment, pas à chaque build). Google ignore les lastmod
// dynamiques type `new Date()` car ils signalent un sitemap non fiable.
const LAST_CONTENT_UPDATE = new Date('2026-07-26');

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.opti-pro.fr';

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/le-service`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/tarifs`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/contact`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/a-propos`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/temoignages`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/services/plombier`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/services/serrurier`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/services/electricien`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/services/restaurateur`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.65 },
    // Pages ville PACA (priorité SEO local élevée)
    { url: `${baseUrl}/services/nice`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/services/cannes`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/antibes`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/grasse`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/services/mougins`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/services/cagnes-sur-mer`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/cgv`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/mentions-legales`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/confidentialite`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = getAllArticles().map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(article.datePublication),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
