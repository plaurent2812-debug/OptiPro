// src/app/(public)/tarifs/page.tsx
import type { Metadata } from 'next';
import OfferCatalogJsonLd from '@/components/seo/OfferCatalogJsonLd';
import FAQJsonLd from '@/components/seo/FAQJsonLd';
import { FAQ_TARIFS } from '@/data/faq';
import TarifsClient from './TarifsClient';

export const metadata: Metadata = {
  title: { absolute: 'Tarifs — Forfaits Pilote OptiPro' },
  description: 'Pilote 30 (750€), Pilote 60 (1 150€), Pilote 100 (1 500€) HT/mois. Tout inclus. Aucune mauvaise surprise. Programme Fondateur 3 places.',
  alternates: { canonical: '/tarifs' },
  openGraph: {
    title: 'Tarifs OptiPro — Forfaits Pilote dès 750€/mois',
    description: 'Trois forfaits selon votre volume d\'activité. Tout inclus. Cycles 3 mois sans engagement long.',
  },
};

export default function TarifsPage() {
  return (
    <>
      <OfferCatalogJsonLd />
      <FAQJsonLd faq={FAQ_TARIFS} />
      <TarifsClient />
    </>
  );
}
