import type { Metadata } from 'next';
import AProposPageClient from './AProposPageClient';
import { safeJsonLd } from '@/lib/json-ld';

export const metadata: Metadata = {
  title: { absolute: 'À propos — Pierre Laurent, fondateur OptiPro' },
  description:
    "Pierre Laurent, fondateur d'OptiPro. 10 ans d'expérience en pilotage d'exploitation et de logistique. Aujourd'hui externalisation de l'admin opérationnel pour artisans, indépendants et TPE — mission ponctuelle ou pack mensuel, à partir de 600€/mois.",
  alternates: {
    canonical: '/a-propos',
  },
  openGraph: {
    title: 'À propos — Pierre Laurent, fondateur OptiPro',
    description:
      "10 ans en pilotage d'exploitation et de logistique. Aujourd'hui externalisation de l'admin opérationnel pour artisans, indépendants et TPE — mission ponctuelle ou pack mensuel, dès 600€/mois.",
    url: '/a-propos',
    type: 'profile',
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://www.opti-pro.fr/a-propos#pierre-laurent',
  name: 'Pierre Laurent',
  jobTitle: "Fondateur d'OptiPro · Assistant administratif externalisé pour artisans et TPE",
  description:
    "Fondateur d'OptiPro. 10 ans en exploitation logistique : déploiement complet d'un ERP EBP chez Eddifis, 8 500 références gérées chez DBS Drive, 7 M€ ADV piloté chez Factory, dépôt événementiel chez GL Events Live. Aujourd'hui assistant administratif externalisé pour artisans et petites TPE du bâtiment — devis, factures, trésorerie, relances, lien comptable.",
  url: 'https://www.opti-pro.fr/a-propos',
  telephone: '+33670259333',
  knowsLanguage: ['fr', 'en'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Vence',
    postalCode: '06140',
    addressRegion: 'Alpes-Maritimes',
    addressCountry: 'FR',
  },
  worksFor: { '@id': 'https://www.opti-pro.fr/#organization' },
  sameAs: [
    'https://www.linkedin.com/in/pierre-laurent-809410123',
  ],
  image: 'https://www.opti-pro.fr/pierre-laurent.png',
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Afipe',
  },
  knowsAbout: [
    'Administration des ventes (ADV)',
    'Facturation et devis artisans',
    'Suivi de trésorerie TPE',
    'Relances clients et fournisseurs',
    'Lien comptable et préparation bilan',
    'Exploitation logistique',
    'Pilotage des flux',
    'Déploiement ERP (EBP)',
    'Coordination de sous-traitants',
    'Reporting opérationnel et KPIs',
    'Gestion des stocks',
    'Création de filiale et structuration process',
    'Coordination artisans BTP',
  ],
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.opti-pro.fr' },
    { '@type': 'ListItem', position: 2, name: 'À propos', item: 'https://www.opti-pro.fr/a-propos' },
  ],
};

export default function AProposPage() {
  return (
    <>
      <script type="application/ld+json">{safeJsonLd(personJsonLd)}</script>
      <script type="application/ld+json">{safeJsonLd(breadcrumbJsonLd)}</script>
      <AProposPageClient />
    </>
  );
}
