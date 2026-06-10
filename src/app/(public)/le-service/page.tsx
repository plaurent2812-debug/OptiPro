// src/app/(public)/le-service/page.tsx
import type { Metadata } from 'next';
import { safeJsonLd } from '@/lib/json-ld';
import LeServiceClient from './LeServiceClient';

export const metadata: Metadata = {
  title: { absolute: 'Le service — Création de sites vitrines et web apps · OptiPro' },
  description: "Sites vitrines (990€ et 1 390€), web apps et outils métier sur mesure pour artisans et TPE. Profil hybride ops + dev. Premier appel gratuit.",
  alternates: { canonical: '/le-service' },
  openGraph: {
    title: 'Le service OptiPro — Dev web sur mesure pour artisans et TPE',
    description: "Sites vitrines dès 990€, web apps sur mesure. Profil hybride 10 ans d'opérations + dev. Premier appel gratuit.",
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'WebDevelopment',
  name: 'OptiPro — Création de sites vitrines, web apps et outils métier sur mesure',
  description: 'Création de sites vitrines (990€ et 1 390€), développement de web apps et outils métier pour artisans et TPE. Profil hybride opérations + dev. Premier appel gratuit.',
  provider: { '@id': 'https://www.opti-pro.fr/#organization' },
  areaServed: 'FR',
  url: 'https://www.opti-pro.fr/le-service',
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: '990',
    highPrice: '1390',
    priceCurrency: 'EUR',
    offerCount: 2,
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.opti-pro.fr' },
    { '@type': 'ListItem', position: 2, name: 'Le service', item: 'https://www.opti-pro.fr/le-service' },
  ],
};

export default function LeServicePage() {
  return (
    <>
      <script type="application/ld+json">{safeJsonLd(breadcrumbJsonLd)}</script>
      <script type="application/ld+json">{safeJsonLd(serviceJsonLd)}</script>
      <LeServiceClient />
    </>
  );
}
