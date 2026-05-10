// src/app/(public)/le-service/page.tsx
import type { Metadata } from 'next';
import { safeJsonLd } from '@/lib/json-ld';
import OfferCatalogJsonLd from '@/components/seo/OfferCatalogJsonLd';
import LeServiceClient from './LeServiceClient';

export const metadata: Metadata = {
  title: { absolute: 'Le service — OptiPro assistant admin pour artisans' },
  description: 'Devis, factures, trésorerie, relances, frais... voilà ce que je prends en charge dans le forfait Pilote. Tout l\'admin opérationnel pour votre activité d\'artisan ou TPE.',
  alternates: { canonical: '/le-service' },
  openGraph: {
    title: 'Le service OptiPro — Assistant administratif externalisé',
    description: 'Tout votre admin opérationnel pris en charge. Devis, facturation, trésorerie, relances, comptable. À partir de 750€/mois.',
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'AdministrativeService',
  name: 'OptiPro Pilote — Assistant administratif externalisé',
  description: 'Service d\'assistant administratif externalisé pour artisans et petites TPE du bâtiment. Gestion des devis, facturation, relances, trésorerie, frais, planning, et préparation du dossier mensuel pour le comptable. Tableau de bord en temps réel inclus.',
  provider: { '@id': 'https://www.opti-pro.fr/#organization' },
  areaServed: 'FR',
  url: 'https://www.opti-pro.fr/le-service',
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: '750',
    highPrice: '1500',
    priceCurrency: 'EUR',
    offerCount: 3,
  },
};

export default function LeServicePage() {
  return (
    <>
      <script type="application/ld+json">{safeJsonLd(serviceJsonLd)}</script>
      <OfferCatalogJsonLd />
      <LeServiceClient />
    </>
  );
}
