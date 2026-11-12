import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/layout/ScrollReveal";
import Spotlight from "@/components/layout/Spotlight";
import MobileCallBar from "@/components/layout/MobileCallBar";
import { contact, areaSchema } from "@/data/offer";
import { safeJsonLd } from "@/lib/json-ld";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://pierre-laurent.fr/#pierre-laurent",
      name: "Pierre Laurent",
      jobTitle: "Créateur de sites internet",
      description:
        "Création de sites internet pour les entreprises des Alpes-Maritimes. Dix ans dans les opérations et la logistique, créateur d’applications web et mobiles et d’automatisations.",
      url: "https://pierre-laurent.fr",
      email: contact.email,
      telephone: contact.phoneIntl,
      address: {
        "@type": "PostalAddress",
        addressLocality: contact.city,
        addressRegion: contact.area,
        addressCountry: "FR",
      },
      sameAs: [contact.github, contact.linkedin, contact.googleMaps],
      knowsAbout: [
        "Pilotage des opérations",
        "Logistique",
        "Transport",
        "Management",
        "Administration des ventes",
        "Automatisation",
        "Intelligence artificielle",
        "Data",
        "Next.js",
        "React Native",
        "TypeScript",
        "Python",
        "PostgreSQL",
        "Création de sites vitrines",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://pierre-laurent.fr/#entreprise",
      name: "Pierre Laurent",
      description: `Création de sites internet pour les TPE et PME des ${contact.area}, et ${contact.remoteArea} : conception, mise en ligne et mises à jour mensuelles.`,
      // Même adresse que le lien « site web » de la fiche Google de l’établissement.
      url: "https://pierre-laurent.fr",
      image: "https://pierre-laurent.fr/opengraph-image",
      founder: { "@id": "https://pierre-laurent.fr/#pierre-laurent" },
      email: contact.email,
      telephone: contact.phoneIntl,
      address: {
        "@type": "PostalAddress",
        postalCode: "06140",
        addressLocality: contact.city,
        addressCountry: "FR",
      },
      areaServed: areaSchema,
      sameAs: [contact.googleMaps],
      priceRange: "690 € puis 59 € par mois",
    },
    {
      "@type": "WebSite",
      "@id": "https://pierre-laurent.fr/#website",
      url: "https://pierre-laurent.fr",
      name: "Pierre Laurent",
      author: { "@id": "https://pierre-laurent.fr/#pierre-laurent" },
      inLanguage: "fr-FR",
    },
  ],
};

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json">{safeJsonLd(jsonLd)}</script>
      <Header />
      {children}
      <Footer />
      <MobileCallBar />
      <ScrollReveal />
      <Spotlight />
    </>
  );
}
