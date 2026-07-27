import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import { ThemeProvider } from "@/components/ThemeProvider";
import { safeJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.opti-pro.fr'),
  title: {
    default: 'OptiPro — Sites & outils web sur mesure pour artisans et TPE',
    template: '%s | OptiPro',
  },
  description:
    "Création de sites vitrines, web apps et outils métier sur mesure pour artisans, indépendants et TPE en PACA. Site vitrine à partir de 990€, maintenance à partir de 79€/mois. Basé à Vence (06).",
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'OptiPro',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OptiPro — Sites vitrines, web apps et outils métier pour artisans, indépendants et TPE en PACA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.jpg'],
  },
  other: {
    'geo.region': 'FR-06',
    'geo.placename': 'Vence',
    'geo.position': '43.72226;7.11382',
    'ICBM': '43.72226, 7.11382',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': 'https://www.opti-pro.fr/#organization',
      name: 'OptiPro',
      description:
        "Création de sites vitrines, web apps et outils métier sur mesure pour artisans, indépendants et TPE en PACA. Site vitrine à partir de 990€, site vitrine Pro à 1 390€, web app sur devis, maintenance à partir de 79€/mois.",
      url: 'https://www.opti-pro.fr',
      email: 'p.laurent@opti-pro.fr',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Vence',
        postalCode: '06140',
        addressRegion: "Provence-Alpes-Côte d'Azur",
        addressCountry: 'FR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 43.72226,
        longitude: 7.11382,
      },
      areaServed: [
        { '@type': 'City', name: 'Vence' },
        { '@type': 'City', name: 'Nice' },
        { '@type': 'City', name: 'Antibes' },
        { '@type': 'City', name: 'Cannes' },
        { '@type': 'City', name: 'Grasse' },
        { '@type': 'City', name: 'Mougins' },
        { '@type': 'City', name: 'Cagnes-sur-Mer' },
        { '@type': 'City', name: 'Saint-Laurent-du-Var' },
        { '@type': 'AdministrativeArea', name: 'Alpes-Maritimes' },
        { '@type': 'AdministrativeArea', name: "Provence-Alpes-Côte d'Azur" },
        { '@type': 'Country', name: 'France' },
      ],
      serviceArea: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: 43.72226,
          longitude: 7.11382,
        },
        geoRadius: '50000',
      },
      founder: {
        '@type': 'Person',
        '@id': 'https://www.opti-pro.fr/a-propos#pierre-laurent',
        name: 'Pierre Laurent',
        url: 'https://www.opti-pro.fr/a-propos',
        sameAs: 'https://www.linkedin.com/in/pierre-laurent-809410123',
      },
      image: 'https://www.opti-pro.fr/opengraph-image.png',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.opti-pro.fr/logo.png',
        // Dimensions réelles du fichier (800x255). Les icônes PWA carrées sont
        // déclarées séparément dans src/app/manifest.ts.
        width: 800,
        height: 255,
      },
      telephone: '+33670259333',
      sameAs: [
        'https://www.linkedin.com/in/pierre-laurent-809410123',
      ],
      availableLanguage: 'fr',
      priceRange: '€€-€€€',
      knowsAbout: [
        'Création de site vitrine',
        'Développement web sur mesure',
        'Application web métier',
        'SEO local',
        'Automatisation des tâches administratives',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Prestations OptiPro',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Site vitrine',
            description:
              'Site vitrine de 3 à 4 pages sur mesure, hébergement 1 an et nom de domaine inclus, adresse email professionnelle.',
            price: 990,
            priceCurrency: 'EUR',
            url: 'https://www.opti-pro.fr/tarifs',
          },
          {
            '@type': 'Offer',
            name: 'Site vitrine Pro',
            description:
              'Site vitrine complet avec formulaire de contact fonctionnel, fiche Google My Business et SEO local.',
            price: 1390,
            priceCurrency: 'EUR',
            url: 'https://www.opti-pro.fr/tarifs',
          },
          {
            '@type': 'Offer',
            name: 'Web app / outil métier',
            description:
              'Plateforme web sur mesure conçue autour de vos process métier. Périmètre et livrables définis au devis.',
            url: 'https://www.opti-pro.fr/tarifs',
          },
          {
            '@type': 'Offer',
            name: 'Maintenance Essentiel',
            description: '1h par mois de mises à jour de contenu (textes, photos, horaires).',
            price: 79,
            priceCurrency: 'EUR',
            url: 'https://www.opti-pro.fr/tarifs',
          },
          {
            '@type': 'Offer',
            name: 'Maintenance Pro',
            description:
              '2h par mois de mises à jour de contenu et petites évolutions, traitement prioritaire.',
            price: 129,
            priceCurrency: 'EUR',
            url: 'https://www.opti-pro.fr/tarifs',
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.opti-pro.fr/#website',
      url: 'https://www.opti-pro.fr',
      name: 'OptiPro',
      publisher: { '@id': 'https://www.opti-pro.fr/#organization' },
      inLanguage: 'fr-FR',
    },
  ],
};

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <script type="application/ld+json">{safeJsonLd(jsonLd)}</script>
      <Header />
      <PageTransition>{children}</PageTransition>
      <Footer />
    </ThemeProvider>
  );
}
