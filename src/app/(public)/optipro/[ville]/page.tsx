import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { contact, optipro, optiproOfferSchema } from "@/data/offer";
import { zoneBySlug, zones } from "@/data/zones";
import { safeJsonLd } from "@/lib/json-ld";
import OfferCard from "@/components/offer/OfferCard";
import SiteShowcase from "@/components/offer/SiteShowcase";
import ProofStrip from "@/components/offer/ProofStrip";
import Guarantees from "@/components/offer/Guarantees";
import ZoneMap from "@/components/visuals/ZoneMap";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import CallBlock from "@/components/ui/CallBlock";
import Icon from "@/components/ui/Icon";
import styles from "../optipro.module.css";
import { shareMeta } from "@/lib/share-meta";

// Pages locales des Alpes-Maritimes (Nice, Cagnes-sur-Mer, Antibes, Cannes, Grasse).
// Le contenu propre à chaque ville vient de data/zones.ts ; prix, délai et conditions de data/offer.ts.
// Aucun client, chiffre ni avis ; aucun déplacement promis : Pierre est installé à Vence.
type Props = { params: Promise<{ ville: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return zones.map((zone) => ({ ville: zone.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const zone = zoneBySlug((await params).ville);
  if (!zone) return {};
  const path = `/optipro/${zone.slug}`;
  const metaTitle = `Création de site internet ${zone.at} (${zone.postalCode}) · ${optipro.brand}`;
  const metaDescription = `Création de site internet ${zone.at} pour les commerces, artisans et restaurants : ${optipro.setupPrice} puis ${optipro.monthlyPrice} par mois, en ligne en ${optipro.deliveryTime}. Un seul interlocuteur, installé à ${contact.city}.`;
  return {
    title: { absolute: metaTitle },
    description: metaDescription,
    alternates: { canonical: path },
    ...shareMeta(metaTitle, metaDescription, path),
  };
}

const list = (items: string[]) => `${items.slice(0, -1).join(", ")} et ${items[items.length - 1]}`;

export default async function OptiProZonePage({ params }: Props) {
  const zone = zoneBySlug((await params).ville);
  if (!zone) notFound();
  const url = `https://pierre-laurent.fr/optipro/${zone.slug}`;

  // Questions propres à la ville, puis les conditions de l’offre.
  const faq = [
    ...zone.faq,
    { q: `Combien coûte un site internet ${zone.at} ?`, a: `${optipro.setupPrice} de mise en ligne, payés une seule fois, puis ${optipro.monthlyPrice} par mois ou ${optipro.yearlyPrice} par an, avec un engagement de ${optipro.commitment}. ${optipro.hostingIncluded}. ${optipro.vatNotice}.` },
    { q: "En combien de temps mon site est-il en ligne ?", a: `En ${optipro.deliveryTime} ${optipro.deliveryNote}, à partir de notre premier échange, une fois vos informations reçues : activité, services, photos si vous en avez.` },
    { q: "À qui appartiennent le site et le nom de domaine ?", a: `À vous. ${optipro.ownership} ${optipro.afterCommitment}` },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: `Création de site internet ${zone.at}`,
        serviceType: "Création de site internet",
        description: `Conception, mise en ligne et suivi de sites internet pour les commerces, artisans et restaurants de ${zone.name} et des communes voisines.`,
        provider: { "@id": "https://pierre-laurent.fr/#optipro" },
        areaServed: [
          { "@type": "City", name: zone.name },
          ...zone.nearby.map((name) => ({ "@type": "City", name })),
          { "@type": "AdministrativeArea", name: contact.area },
        ],
        url,
        isRelatedTo: { "@id": "https://pierre-laurent.fr/optipro#service" },
        offers: optiproOfferSchema,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: optipro.brand, item: "https://pierre-laurent.fr/optipro" },
          { "@type": "ListItem", position: 2, name: zone.name, item: url },
        ],
      },
    ],
  };

  return (
    <main id="contenu" tabIndex={-1}>
      <script type="application/ld+json">{safeJsonLd(jsonLd)}</script>

      <PageHero
        titleId="zone-title"
        kicker={`${optipro.brand}, création de sites internet ${zone.at} (${zone.postalCode})`}
        tone="green"
        after={<ProofStrip />}
        title={<>Création de site internet {zone.at}, <span>{zone.h1Tail}</span></>}
        actions={
          <>
            <a className="btn btn-primary" href={contact.phoneHref}><Icon name="tel" /><span>Appeler le <span className="num">{contact.phoneDisplay}</span></span></a>
            <a className="btn btn-ghost" href="#tarif">Voir le tarif</a>
          </>
        }
      >
        <p>{zone.intro} <strong>Pour en parler, un appel suffit.</strong></p>
      </PageHero>

      <Section
        id="ville"
        titleId="local-title"
        tone="amber"
        tag={zone.name}
        title={zone.localTitle}
        intro={
          <div className={styles.why}>
            {zone.local.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        }
      />

      <Section
        id="essentiel"
        titleId="essentials-title"
        tone="cyan"
        tag="L’essentiel"
        title={`Ce que votre site doit montrer ${zone.at}`}
        lede={`Sur des recherches comme ${zone.searches.map((search) => `« ${search} »`).join(", ")}, vos clients veulent des réponses simples avant d’appeler ou de se déplacer.`}
        alt
      >
        <ul className={styles.checklist}>
          {zone.essentials.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <p className={styles.sectorLink}>J’écris ces textes à partir de notre échange : vous relisez et vous validez.</p>
      </Section>

      <Section
        id="tarif"
        titleId="price-title"
        tone="green"
        tag="Le tarif"
        title="Un prix affiché, le même dans tout le département."
        lede={`${optipro.setupPrice} de mise en ligne, payés une seule fois, puis l’abonnement au mois ou à l’année, engagement de ${optipro.commitment}.`}
      >
        <OfferCard />
        <Guarantees compact />
        <p className={styles.sectorLink}>
          <Link href="/optipro" className={styles.textLink}>Voir le détail de l’offre {optipro.brand}</Link>
        </p>
      </Section>

      <Section
        id="exemples"
        titleId="examples-title"
        tone="green"
        tag="Exemples"
        title="Des sites réalisés"
        lede={`Conçus et mis en ligne de bout en bout. Le vôtre est construit de la même façon, à partir de votre activité ${zone.at}.`}
        alt
      >
        <SiteShowcase />
      </Section>

      <Section
        id="zones"
        titleId="zones-title"
        tone="green"
        tag="Autour"
        title={`${zone.name} et les communes voisines`}
        lede={`Même offre pour les entreprises de ${list(zone.nearby)}. Mon point d’attache est à ${contact.city}.`}
      >
        <ZoneMap active={zone.slug} />
      </Section>

      <Section id="questions" titleId="faq-title" tone="cyan" tag="Questions fréquentes" title="Vos questions" alt>
        <div className={styles.faq}>
          {faq.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
        <p className={styles.sectorLink}>
          <Link href="/optipro/prix-site-internet" className={styles.textLink}>Combien coûte un site internet&nbsp;?</Link>
        </p>
      </Section>

      <CallBlock titleId="cta-title" title={`Vous travaillez ${zone.at} ? Un appel suffit pour en parler.`} />
    </main>
  );
}
