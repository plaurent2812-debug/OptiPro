import type { Metadata } from 'next';
import { safeJsonLd } from '@/lib/json-ld';
import OfferCatalogJsonLd from '@/components/seo/OfferCatalogJsonLd';
import FAQJsonLd from '@/components/seo/FAQJsonLd';
import { FAQ_HOMEPAGE } from '@/data/faq';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: { absolute: 'OptiPro — Le bras droit administratif des artisans' },
  description:
    "Assistant administratif externalisé pour artisans et petites TPE du bâtiment. Devis, factures, trésorerie, relances — tout est piloté pour vous, à partir de 750€/mois. Avec un tableau de bord temps réel inclus.",
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    title: 'OptiPro — Le bras droit administratif des artisans',
    description:
      "Plus rapide qu'un(e) assistant(e). Moins cher qu'un mi-temps. Plus complet que les deux. À partir de 750€/mois.",
    locale: 'fr_FR',
  },
};

const homepageServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'AdministrativeService',
  name: 'OptiPro Pilote — Assistant administratif externalisé pour artisans',
  description:
    "Service d'assistant administratif externalisé pour artisans et petites TPE du bâtiment. Devis, facturation, relances, trésorerie, frais, planning, préparation comptable, tableau de bord temps réel.",
  provider: { '@id': 'https://www.opti-pro.fr/#organization' },
  areaServed: 'FR',
  url: 'https://www.opti-pro.fr',
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: '750',
    highPrice: '1500',
    priceCurrency: 'EUR',
    offerCount: 3,
  },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json">{safeJsonLd(homepageServiceJsonLd)}</script>
      <OfferCatalogJsonLd />
      <FAQJsonLd faq={FAQ_HOMEPAGE} />
      <HomePageClient />
    </>
  );
}
