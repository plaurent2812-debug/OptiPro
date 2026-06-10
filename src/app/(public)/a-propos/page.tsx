import type { Metadata } from 'next';
import AProposPageClient from './AProposPageClient';
import { safeJsonLd } from '@/lib/json-ld';

export const metadata: Metadata = {
  title: { absolute: 'À propos — Pierre Laurent, fondateur OptiPro' },
  description:
    "Pierre Laurent, fondateur d'OptiPro. 10 ans en opérations et logistique, reconversion dev via Claude Code et Cursor. Développeur web sur mesure pour artisans et TPE — sites vitrines, web apps, outils métier.",
  alternates: {
    canonical: '/a-propos',
  },
  openGraph: {
    title: 'À propos — Pierre Laurent, fondateur OptiPro',
    description:
      "10 ans en opérations et logistique, reconversion dev. Aujourd'hui créateur de sites vitrines et web apps sur mesure pour artisans et TPE.",
    url: '/a-propos',
    type: 'profile',
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://www.opti-pro.fr/a-propos#pierre-laurent',
  name: 'Pierre Laurent',
  jobTitle: "Fondateur d'OptiPro · Développeur web sur mesure pour artisans et TPE",
  description:
    "Fondateur d'OptiPro. 10 ans en exploitation logistique et opérations. Reconversion développeur via Claude Code et Cursor. Crée des sites vitrines (990€ et 1 390€), des web apps et des outils métier sur mesure pour artisans et TPE.",
  url: 'https://www.opti-pro.fr/a-propos',
  telephone: '+33670259333',
  knowsLanguage: ['fr', 'en'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Vence',
    postalCode: '06140',
    addressRegion: 'Alpes-Maritimes',
    addressCountry: 'FR',
  },
  worksFor: { '@id': 'https://www.opti-pro.fr/#organization' },
  sameAs: [
    'https://www.linkedin.com/in/pierre-laurent-809410123',
  ],
  image: 'https://www.opti-pro.fr/pierre-laurent.png',
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Afipe',
  },
  knowsAbout: [
    'Développement web Next.js',
    'Sites vitrines pour artisans',
    'Web apps et outils métier',
    'SEO local',
    'Opérations et logistique',
    'Pilotage exploitation',
    'Coordination de sous-traitants',
    'Déploiement ERP (EBP)',
    'Gestion des stocks',
  ],
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.opti-pro.fr' },
    { '@type': 'ListItem', position: 2, name: 'À propos', item: 'https://www.opti-pro.fr/a-propos' },
  ],
};

export default function AProposPage() {
  return (
    <>
      <script type="application/ld+json">{safeJsonLd(personJsonLd)}</script>
      <script type="application/ld+json">{safeJsonLd(breadcrumbJsonLd)}</script>
      <AProposPageClient />
    </>
  );
}
