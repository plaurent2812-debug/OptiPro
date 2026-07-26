import type { Metadata } from 'next';
import { getAllArticles } from '@/lib/blog';
import styles from './blog-list.module.css';
import BlogListClient from './BlogListClient';
import { safeJsonLd } from '@/lib/json-ld';

export const metadata: Metadata = {
  title: 'Blog — Conseils pour artisans et TPE',
  description:
    "Guides pratiques et conseils concrets pour les artisans et TPE : site internet, outils métier, automatisation et IA. Sans jargon, par un développeur qui vient du terrain.",
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Blog OptiPro — Ressources pour artisans et TPE',
    description:
      "Site internet, outils métier, automatisation : des guides concrets pour artisans et TPE.",
    url: 'https://www.opti-pro.fr/blog',
    type: 'website',
  },
};

export default function BlogPage() {
  const articles = getAllArticles();

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog OptiPro',
    url: 'https://www.opti-pro.fr/blog',
    description:
      "Guides pratiques pour artisans et TPE — automatisation, productivité, site web, gestion.",
    publisher: { '@id': 'https://www.opti-pro.fr/#organization' },
    inLanguage: 'fr-FR',
    blogPost: articles.map((a) => ({
      '@type': 'BlogPosting',
      headline: a.titre,
      description: a.description,
      datePublished: a.datePublication,
      dateModified: a.dateMaj || a.datePublication,
      url: `https://www.opti-pro.fr/blog/${a.slug}`,
      image: a.image
        ? `https://www.opti-pro.fr${a.image.startsWith('/') ? '' : '/'}${a.image}`
        : 'https://www.opti-pro.fr/og-image.jpg',
      author: {
        '@type': 'Person',
        '@id': 'https://www.opti-pro.fr/a-propos#pierre-laurent',
        name: 'Pierre Laurent',
        url: 'https://www.opti-pro.fr/a-propos',
      },
      publisher: { '@id': 'https://www.opti-pro.fr/#organization' },
    })),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://www.opti-pro.fr',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://www.opti-pro.fr/blog',
      },
    ],
  };

  return (
    <main className={styles.main}>
      <script type="application/ld+json">{safeJsonLd(blogJsonLd)}</script>
      <script type="application/ld+json">
        {safeJsonLd(breadcrumbJsonLd)}
      </script>

      {/* Projection explicite : n'envoie au client que les champs affichés dans
          les cartes, pas le HTML complet des articles (cf. type ArticleCard). */}
      <BlogListClient
        articles={articles.map((a) => ({
          slug: a.slug,
          titre: a.titre,
          description: a.description,
          datePublication: a.datePublication,
          tempsLecture: a.tempsLecture,
          categorie: a.categorie,
        }))}
      />
    </main>
  );
}
