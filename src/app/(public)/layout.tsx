import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import { ThemeProvider } from "@/components/ThemeProvider";
import { safeJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.opti-pro.fr'),
  title: {
    default: 'OptiPro — Le bras droit administratif des artisans',
    template: '%s | OptiPro',
  },
  description:
    "Externalisation de l'admin opérationnel pour artisans, indépendants et TPE. Devis, ADV, fournisseurs, suivi de projet, facturation — sur une mission ponctuelle ou en pack mensuel, à partir de 650€/mois.",
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'OptiPro',
  },
  twitter: {
    card: 'summary_large_image',
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
        "Externalisation de l'admin opérationnel pour artisans, indépendants et TPE. Mission ponctuelle (75€/h) ou pack mensuel reconductible (de 650€/mois à 1 950€/mois). Devis, ADV, fournisseurs, suivi de projet, facturation, préparation comptable.",
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
        width: 200,
        height: 60,
      },
      telephone: '+33670259333',
      sameAs: [
        'https://www.linkedin.com/in/pierre-laurent-809410123',
      ],
      availableLanguage: 'fr',
      priceRange: '€€-€€€',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
      ],
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
