// src/app/(public)/tarifs/page.tsx
import type { Metadata } from 'next';
import FAQJsonLd from '@/components/seo/FAQJsonLd';
import { FAQ_TARIFS } from '@/data/faq';
import { safeJsonLd } from '@/lib/json-ld';
import TarifsClient from './TarifsClient';

export const metadata: Metadata = {
  title: { absolute: 'Tarifs — Sites vitrines et outils web sur mesure · OptiPro' },
  description: "Site vitrine 990€, Site vitrine Pro 1 390€, web app sur devis. Maintenance dès 79€/mois. Périmètre et livrables définis au devis. Premier appel gratuit.",
  alternates: { canonical: '/tarifs' },
  openGraph: {
    title: 'Tarifs OptiPro — Sites vitrines et web apps pour artisans et TPE',
    description: 'Site vitrine 990€ ou 1 390€, web app sur devis, maintenance dès 79€/mois. Premier appel gratuit.',
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
      <TarifsClient />
    </>
  );
}
