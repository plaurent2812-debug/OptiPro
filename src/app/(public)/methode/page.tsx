import type { Metadata } from 'next';
import MethodeClient from './MethodeClient';
import { safeJsonLd } from '@/lib/json-ld';

export const metadata: Metadata = {
  title: { absolute: 'La méthode OptiPro — Comment ça se passe en vrai' },
  description: 'Du jour 1 au quotidien : appel découverte gratuit, démarrage en 2 semaines, vocaux WhatsApp, devis sous 1h, visio bilan mensuelle. La méthode OptiPro détaillée étape par étape.',
  alternates: { canonical: '/methode' },
  openGraph: {
    title: 'La méthode OptiPro — Comment ça se passe',
    description: 'Vocal WhatsApp depuis votre activité, je gère le bureau. Visio bilan mensuelle. Préavis 15 jours sur les packs.',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.opti-pro.fr' },
    { '@type': 'ListItem', position: 2, name: 'Méthode', item: 'https://www.opti-pro.fr/methode' },
  ],
};

export default function MethodePage() {
  return (
    <>
      <script type="application/ld+json">{safeJsonLd(breadcrumbJsonLd)}</script>
      <MethodeClient />
    </>
  );
}
