import type { Metadata } from "next";
import Link from "next/link";
import { contact, optipro, optiproAreaSchema, optiproOfferSchema } from "@/data/offer";
import { safeJsonLd } from "@/lib/json-ld";
import OfferCard from "@/components/offer/OfferCard";
import SiteShowcase from "@/components/offer/SiteShowcase";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import CallBlock from "@/components/ui/CallBlock";
import Icon, { type IconName } from "@/components/ui/Icon";
import styles from "../optipro.module.css";

// Page à joindre aux e-mails de prospection des transporteurs du 06.
// Aucun client, chiffre ni avis : uniquement l’offre et ce que le site fait.
export const metadata: Metadata = {
  title: { absolute: `Sites internet pour transporteurs des Alpes-Maritimes · ${optipro.brand}` },
  description: `Site internet pour transporteurs des ${contact.area} : demande de devis guidée, recrutement de conducteurs, ${optipro.includedEdits}. ${optipro.setupPrice} puis ${optipro.monthlyPrice} par mois.`,
  alternates: { canonical: "/optipro/transport" },
};

const features: { icon: IconName; title: string; copy: string }[] = [
  {
    icon: "doc",
    title: "Des demandes de devis complètes",
    copy: "Votre client remplit un formulaire guidé : départ, arrivée, date, nature de la marchandise, nombre de palettes ou poids. Vous recevez la demande par e-mail avec ce qu’il faut pour chiffrer, sans rappeler pour les détails.",
  },
  {
    icon: "user",
    title: "Une page pour recruter vos conducteurs",
    copy: "Vos postes ouverts (SPL, PL, VL), le type de tournées, les permis demandés et la zone. Les candidats vous laissent leurs coordonnées depuis le site, et je retire l’annonce dès que vous avez embauché.",
  },
  {
    icon: "site",
    title: "Un site géré sans y penser",
    copy: "Une heure de modifications est comprise chaque mois : nouvelle offre d’emploi, nouveau service, nouvelles photos de la flotte. Vous m’appelez ou vous m’écrivez, je m’en occupe.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://pierre-laurent.fr/optipro/transport#service",
      name: "Création de site internet pour transporteurs",
      serviceType: "Création de site internet",
      description: "Sites internet pour les entreprises de transport des Alpes-Maritimes : demande de devis guidée, recrutement de conducteurs, mises à jour mensuelles comprises.",
      provider: { "@id": "https://pierre-laurent.fr/#optipro" },
      audience: { "@type": "BusinessAudience", name: "Entreprises de transport routier de marchandises" },
      areaServed: optiproAreaSchema,
      url: "https://pierre-laurent.fr/optipro/transport",
      isRelatedTo: { "@id": "https://pierre-laurent.fr/optipro#service" },
      offers: optiproOfferSchema,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: optipro.brand, item: "https://pierre-laurent.fr/optipro" },
        { "@type": "ListItem", position: 2, name: "Transporteurs", item: "https://pierre-laurent.fr/optipro/transport" },
      ],
    },
  ],
};

export default function OptiProTransportPage() {
  return (
    <main id="contenu" tabIndex={-1}>
      <script type="application/ld+json">{safeJsonLd(jsonLd)}</script>

      <PageHero
        titleId="transport-title"
        kicker={`${optipro.brand} pour les transporteurs du 06`}
        tone="amber"
        icon="truck"
        title={<>Sites internet pour transporteurs <span>des {contact.area}.</span></>}
        actions={
          <>
            <a className="btn btn-primary" href={contact.phoneHref}><Icon name="tel" /><span>Appeler le <span className="num">{contact.phoneDisplay}</span></span></a>
            <a className="btn btn-ghost" href="#tarif">Voir le tarif</a>
          </>
        }
      >
        <p>Un site qui vous apporte des demandes de devis complètes, vous aide à recruter des conducteurs, et que je tiens à jour pour vous. <strong>Vous gérez vos tournées, je m’occupe du site.</strong></p>
      </PageHero>

      <Section
        id="atouts"
        titleId="features-title"
        tone="amber"
        icon="route"
        tag="Ce que fait votre site"
        title="Trois choses dont un transporteur a besoin"
        lede="Un site de transporteur n’a pas besoin d’en faire beaucoup. Il doit rassurer un client pressé, recevoir des demandes exploitables et vous aider à embaucher."
      >
        <ul className={styles.features}>
          {features.map((feature) => (
            <li key={feature.title}>
              <span className={styles.featureWell} aria-hidden="true"><Icon name={feature.icon} /></span>
              <h3>{feature.title}</h3>
              <p>{feature.copy}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="exemples"
        titleId="example-title"
        tone="green"
        icon="site"
        tag="Exemples"
        title="Des sites réalisés"
        lede="Conçus et développés de bout en bout. Le vôtre reprend votre activité, vos véhicules et votre zone, avec la demande de devis et la page de recrutement."
        alt
      >
        <SiteShowcase />
      </Section>

      <Section
        id="terrain"
        titleId="why-title"
        tone="amber"
        icon="terrain"
        tag="Pourquoi moi"
        title="Je connais le transport de l’autre côté du téléphone"
        intro={
          <div className={styles.why}>
            <p>J’ai passé dix ans dans les opérations et la logistique. Responsable d’exploitation chez GL Events Live, j’ai renégocié les contrats transporteurs : je sais ce qu’un donneur d’ordres cherche avant d’appeler, la zone couverte, les moyens et la réactivité.</p>
            <p>Votre site doit répondre à ces questions en quelques secondes. Je l’écris avec vous, je le mets en ligne et je le fais vivre.</p>
            <Link href="/a-propos" className={styles.textLink}>Voir mon parcours</Link>
          </div>
        }
      />

      <Section
        id="tarif"
        titleId="price-title"
        tone="green"
        icon="site"
        tag="Le tarif"
        title="Le même prix que pour toute entreprise."
        lede={`${optipro.setupPrice} de mise en ligne, payés une seule fois, puis l’abonnement au mois ou à l’année, engagement de ${optipro.commitment}.`}
        alt
      >
        <OfferCard />
        <p className={styles.sectorLink}>
          <Link href="/optipro#questions" className={styles.textLink}>Détails de l’offre et questions fréquentes</Link>
        </p>
      </Section>

      <CallBlock titleId="cta-title" title="Vous êtes transporteur dans le 06 ? Un appel suffit pour savoir si l’offre vous convient." />
    </main>
  );
}
