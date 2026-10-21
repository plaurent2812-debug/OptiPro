import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/layout/ScrollReveal";
import { contact, optiproAreaSchema } from "@/data/offer";
import { safeJsonLd } from "@/lib/json-ld";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://pierre-laurent.fr/#pierre-laurent",
      name: "Pierre Laurent",
      jobTitle: "Responsable des Opérations",
      description:
        "Fondateur d’OptiPro, création de sites internet pour les entreprises des Alpes-Maritimes. Dix ans dans les opérations et la logistique, créateur d’applications web et mobiles et d’automatisations.",
      url: "https://pierre-laurent.fr",
      email: contact.email,
      telephone: contact.phoneIntl,
      address: {
        "@type": "PostalAddress",
        addressLocality: contact.city,
        addressRegion: contact.area,
        addressCountry: "FR",
      },
      sameAs: [contact.github, contact.linkedin],
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
      "@id": "https://pierre-laurent.fr/#optipro",
      name: "OptiPro",
      description: `Création de sites internet pour les TPE et PME des ${contact.area}, et ${contact.remoteArea} : conception, mise en ligne et mises à jour mensuelles.`,
      url: "https://pierre-laurent.fr/optipro",
      founder: { "@id": "https://pierre-laurent.fr/#pierre-laurent" },
      email: contact.email,
      telephone: contact.phoneIntl,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Bâtiment Le Matisse, 541 Avenue Colonel Meyère",
        postalCode: "06140",
        addressLocality: contact.city,
        addressCountry: "FR",
      },
      areaServed: optiproAreaSchema,
      priceRange: "890 € puis 79 € par mois",
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
      <ScrollReveal />
    </>
  );
}
