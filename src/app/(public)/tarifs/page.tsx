// src/app/(public)/tarifs/page.tsx
import type { Metadata } from 'next';
import FAQJsonLd from '@/components/seo/FAQJsonLd';
import { FAQ_TARIFS } from '@/data/faq';
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

export default function TarifsPage() {
  return (
    <>
      <FAQJsonLd faq={FAQ_TARIFS} />
      <TarifsClient />
    </>
  );
}
