import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { safeJsonLd } from "@/lib/json-ld";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.opti-pro.fr/#pierre-laurent",
      name: "Pierre Laurent",
      description:
        "Site personnel de Pierre Laurent : projets, applications, outils, parcours et centres d’intérêt.",
      url: "https://www.opti-pro.fr",
      email: "p.laurent@opti-pro.fr",
      image: "https://www.opti-pro.fr/pierre-laurent-tech-hero.png",
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
      <Header />
      {children}
      <Footer />
    </>
  );
}
