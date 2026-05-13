import type { Metadata } from 'next';
import { safeJsonLd } from '@/lib/json-ld';
import FAQJsonLd from '@/components/seo/FAQJsonLd';
import { FAQ_HOMEPAGE } from '@/data/faq';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: { absolute: 'OptiPro — Le bras droit administratif des artisans' },
  description:
    "Le bras droit administratif des artisans, indépendants et TPE. Devis, ADV, facturation, suivi — sur une mission ponctuelle ou en accompagnement régulier. À partir de 650€/mois.",
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    title: 'OptiPro — Le bras droit des artisans, indépendants et TPE',
    description:
      "Mission ponctuelle ou accompagnement régulier — 75€/h ou en pack mensuel. À partir de 650€/mois.",
    locale: 'fr_FR',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OptiPro — Le bras droit administratif des artisans, indépendants et TPE en PACA',
      },
    ],
  },
};

const homepageServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'AdministrativeService',
  name: 'OptiPro Mission — Le bras droit des artisans, indépendants et TPE',
  description:
    "Mission ponctuelle ou accompagnement régulier : 75€/h ou en pack mensuel (Essentiel 10h / Croissance 20h / Pilotage 35h). Devis, ADV, fournisseurs, suivi de projet, facturation. Sans engagement long.",
  provider: { '@id': 'https://www.opti-pro.fr/#organization' },
  areaServed: 'FR',
  url: 'https://www.opti-pro.fr',
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: '650',
    highPrice: '1950',
    priceCurrency: 'EUR',
    offerCount: 3,
  },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json">{safeJsonLd(homepageServiceJsonLd)}</script>
      <FAQJsonLd faq={FAQ_HOMEPAGE} />
      <HomePageClient />
    </>
  );
}
