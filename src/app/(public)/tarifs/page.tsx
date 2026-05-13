// src/app/(public)/tarifs/page.tsx
import type { Metadata } from 'next';
import FAQJsonLd from '@/components/seo/FAQJsonLd';
import OfferCatalogJsonLd from '@/components/seo/OfferCatalogJsonLd';
import { FAQ_TARIFS } from '@/data/faq';
import { safeJsonLd } from '@/lib/json-ld';
import TarifsClient from './TarifsClient';

export const metadata: Metadata = {
  title: { absolute: 'Tarifs — Missions OptiPro' },
  description: "À l'heure ou en pack mensuel : 75€/h, Pack Essentiel 10h 650€/mois, Pack Croissance 20h 1 200€/mois, Pack Pilotage 35h 1 950€/mois. Sans engagement long, préavis 15 jours.",
  alternates: { canonical: '/tarifs' },
  openGraph: {
    title: 'Tarifs OptiPro — Missions à l\'heure ou en pack',
    description: '75€/h ou packs mensuels Essentiel / Croissance / Pilotage. Sans engagement long, préavis 15 jours.',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.opti-pro.fr' },
    { '@type': 'ListItem', position: 2, name: 'Tarifs', item: 'https://www.opti-pro.fr/tarifs' },
  ],
};

export default function TarifsPage() {
  return (
    <>
      <script type="application/ld+json">{safeJsonLd(breadcrumbJsonLd)}</script>
      <FAQJsonLd faq={FAQ_TARIFS} />
      <OfferCatalogJsonLd />
      <TarifsClient />
    </>
  );
}
