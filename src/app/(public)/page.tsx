import type { Metadata } from 'next';
import { safeJsonLd } from '@/lib/json-ld';
import FAQJsonLd from '@/components/seo/FAQJsonLd';
import { FAQ_HOMEPAGE } from '@/data/faq';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: { absolute: 'OptiPro — Sites & outils web sur mesure pour artisans et TPE' },
  description:
    "Sites vitrines dès 990€, web apps et outils métier sur mesure pour artisans et TPE. Dix ans d'opérations, le développement en plus. Premier appel gratuit.",
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    title: 'OptiPro — Sites & outils web sur mesure pour artisans et TPE',
    description:
      "Sites vitrines dès 990€, web apps et outils métier sur mesure. Maintenance dès 79€/mois. Premier appel gratuit.",
    locale: 'fr_FR',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OptiPro — Sites vitrines, web apps et outils métier sur mesure pour artisans et TPE',
      },
    ],
  },
};

const homepageServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'WebDevelopment',
  name: 'OptiPro — Sites vitrines, web apps et outils métier sur mesure',
  description:
    "Création de sites vitrines (990€ et 1 390€), web apps et outils métier sur mesure pour artisans et TPE. Maintenance mensuelle dès 79€/mois. Périmètre et livrables définis au devis.",
  provider: { '@id': 'https://www.opti-pro.fr/#organization' },
  areaServed: 'FR',
  url: 'https://www.opti-pro.fr',
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: '990',
    highPrice: '1390',
    priceCurrency: 'EUR',
    offerCount: 2,
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
