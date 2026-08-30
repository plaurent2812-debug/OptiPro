import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/visuals/CustomCursor";
import NeuralBackdrop from "@/components/visuals/NeuralBackdrop";
import { safeJsonLd } from "@/lib/json-ld";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.opti-pro.fr/#pierre-laurent",
      name: "Pierre Laurent",
      jobTitle: "Responsable des Opérations",
      description:
        "Responsable des opérations, passionné de tech et d’IA : parcours professionnel en logistique et exploitation, création d’applications et d’outils numériques.",
      url: "https://www.opti-pro.fr",
      email: "p.laurent@opti-pro.fr",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Vence",
        addressCountry: "FR",
      },
      sameAs: [
        "https://github.com/plaurent2812-debug",
        "https://www.linkedin.com/in/pierre-laurent-809410123",
      ],
      knowsAbout: [
        "Pilotage des opérations",
        "Logistique",
        "Management",
        "Administration des ventes",
        "Automatisation",
        "Product design",
        "Next.js",
        "React Native",
        "TypeScript",
        "Python",
        "PostgreSQL",
        "Data products",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.opti-pro.fr/#website",
      url: "https://www.opti-pro.fr",
      name: "Pierre Laurent — Site personnel",
      author: { "@id": "https://www.opti-pro.fr/#pierre-laurent" },
      inLanguage: "fr-FR",
    },
  ],
};

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json">{safeJsonLd(jsonLd)}</script>
      <NeuralBackdrop />
      <CustomCursor />
      <Header />
      {children}
      <Footer />
    </>
  );
}
