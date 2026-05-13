// src/app/(public)/le-service/page.tsx
import type { Metadata } from 'next';
import { safeJsonLd } from '@/lib/json-ld';
import LeServiceClient from './LeServiceClient';

export const metadata: Metadata = {
  title: { absolute: 'Le service — OptiPro assistant admin pour artisans' },
  description: 'Tout votre admin opérationnel pris en charge. Devis, ADV, facturation, suivi. Mission ponctuelle ou pack mensuel, à partir de 650€/mois.',
  alternates: { canonical: '/le-service' },
  openGraph: {
    title: 'Le service OptiPro — Assistant administratif externalisé',
    description: 'Tout votre admin opérationnel pris en charge. Mission ponctuelle ou accompagnement régulier — à partir de 650€/mois.',
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'AdministrativeService',
  name: 'OptiPro Mission — Tout votre admin opérationnel pris en charge',
  description: 'Service d\'externalisation administrative pour artisans, indépendants et TPE. Devis, ADV, facturation, fournisseurs, suivi de projet. Mission ponctuelle ou pack mensuel.',
  provider: { '@id': 'https://www.opti-pro.fr/#organization' },
  areaServed: 'FR',
  url: 'https://www.opti-pro.fr/le-service',
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: '650',
    highPrice: '1950',
    priceCurrency: 'EUR',
    offerCount: 3,
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
