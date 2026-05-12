// src/app/(public)/tarifs/page.tsx
import type { Metadata } from 'next';
import FAQJsonLd from '@/components/seo/FAQJsonLd';
import { FAQ_TARIFS } from '@/data/faq';
import TarifsClient from './TarifsClient';

export const metadata: Metadata = {
  title: { absolute: 'Tarifs — Missions OptiPro' },
  description: "À l'heure ou en pack mensuel : 80€/h, Pack 10h 720€/mois, Pack 20h 1 400€/mois, Pack 30h 1 950€/mois. Sans engagement long, préavis 15 jours.",
  alternates: { canonical: '/tarifs' },
  openGraph: {
    title: 'Tarifs OptiPro — Missions à l\'heure ou en pack',
    description: '80€/h ou packs mensuels 10h/20h/30h. Sans engagement long, préavis 15 jours.',
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
