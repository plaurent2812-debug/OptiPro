import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { showcaseSites, type ProductProject } from "@/data/projects";
import { portrait } from "@/data/portrait";
import { contact, optipro } from "@/data/offer";
import OfferCard from "@/components/offer/OfferCard";
import ProofStrip from "@/components/offer/ProofStrip";
import Deliverables from "@/components/offer/Deliverables";
import LighthouseProof from "@/components/offer/LighthouseProof";
import Comparison from "@/components/offer/Comparison";
import Guarantees from "@/components/offer/Guarantees";
import { lighthouse } from "@/data/proof";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import CallBlock from "@/components/ui/CallBlock";
import Icon from "@/components/ui/Icon";
import { BrowserFrame, StatusPill } from "@/components/ui/Frames";
import styles from "./home.module.css";

// Accueil = page de vente OptiPro. Le parcours et le CV restent sur /a-propos et /cv.
// L’accueil vise le département ; /optipro vise Vence et Nice.
export const metadata: Metadata = {
  title: { absolute: `Création de site internet dans les Alpes-Maritimes · ${optipro.brand}` },
  description: `Création de site internet pour les ${optipro.audience} des ${contact.area} : conçu, mis en ligne et mis à jour pour vous. ${optipro.setupPrice} puis ${optipro.monthlyPrice} par mois, ${optipro.includedEdits}.`,
  alternates: { canonical: "/" },
};

const [featuredSite, ...otherSites] = showcaseSites;

const scores = lighthouse.scores.map((score) => score.value);
const scoreRange = Math.min(...scores) === Math.max(...scores) ? `${Math.max(...scores)}/100` : `${Math.min(...scores)} à ${Math.max(...scores)}/100`;

function SiteCaption({ site }: { site: ProductProject }) {
  return (
    <figcaption>
      <div><Link href={`/projets#${site.slug}`}><b>{site.name}</b></Link><span>{site.pitch}</span></div>
      <StatusPill tone={site.badgeTone}>{site.badge}</StatusPill>
    </figcaption>
  );
}

export default function HomePage() {
  return (
    <main id="contenu" tabIndex={-1}>
      <PageHero
        titleId="hero-title"
        kicker={`${optipro.brand}, sites internet pour les ${optipro.audience} des ${contact.area}`}
        tone="green"
        icon="site"
        title={<>Création de site internet dans les Alpes-Maritimes. <span>Je m’occupe de tout.</span></>}
        actions={
          <>
            <a className="btn btn-primary" href={contact.phoneHref}><Icon name="tel" /><span>Appeler le <span className="num">{contact.phoneDisplay}</span></span></a>
            <Link className="btn btn-ghost" href="/optipro">Voir l’offre et les tarifs</Link>
          </>
        }
        after={
          <>
          <ProofStrip />
          <div className={styles.heroVisual}>
            <div className={styles.heroMain}>
              <figure className={styles.site}>
                <BrowserFrame label={featuredSite.name}>
                  <Image src={featuredSite.image} alt={featuredSite.imageAlt} width={featuredSite.imageWidth} height={featuredSite.imageHeight} sizes="(max-width: 959px) 94vw, 820px" priority />
                </BrowserFrame>
                <SiteCaption site={featuredSite} />
              </figure>
              <p className={styles.more}><Link href="/projets">Voir toutes les réalisations</Link></p>
            </div>
            <div className={styles.heroSide}>
              {otherSites.map((site) => (
                <figure key={site.slug} className={styles.site}>
                  <BrowserFrame label={site.name}>
                    <Image src={site.image} alt={site.imageAlt} width={site.imageWidth} height={site.imageHeight} sizes="(max-width: 959px) 47vw, 400px" />
                  </BrowserFrame>
                  <SiteCaption site={site} />
                </figure>
              ))}
            </div>
          </div>
          </>
        }
      >
        <p>Un site rapide, référencé dans votre ville, rédigé pour vous et en ligne en {optipro.deliveryTime}. Ensuite, je le fais vivre chaque mois. <strong>{optipro.setupPrice} de mise en ligne, puis {optipro.monthlyPrice} par mois.</strong></p>
      </PageHero>

      <Section
        id="livrables"
        titleId="deliverables-title"
        tone="green"
        icon="site"
        tag="Ce que vous obtenez"
        title="Tout ce qu’il faut pour être trouvé, puis appelé."
        lede={`Compris dans la mise en ligne à ${optipro.setupPrice}. Vous gérez votre entreprise, je m’occupe du reste.`}
        alt
      >
        <Deliverables />
      </Section>

      <Section
        id="preuve"
        titleId="proof-title"
        tone="green"
        icon="auto"
        tag="La preuve par ce site"
        title={`Ce site obtient ${scoreRange} chez Google.`}
        lede="Mesuré avec Google Lighthouse, l’outil qui évalue la vitesse, l’accessibilité, les bonnes pratiques et le référencement d’une page. Votre site est livré avec sa propre mesure."
      >
        <LighthouseProof />
      </Section>

      <Section
        id="comparatif"
        titleId="comparison-title"
        tone="cyan"
        icon="route"
        tag="Comparez"
        title="Agence, faire soi‑même ou OptiPro ?"
        lede="Les mêmes critères pour les trois solutions, avec les repères publics du marché pour les deux premières."
        alt
      >
        <Comparison />
      </Section>

      <Section
        id="tarif"
        titleId="offer-title"
        tone="green"
        icon="site"
        tag={`L’offre ${optipro.brand}`}
        title="Votre site internet, clé en main, à un prix clair."
        lede={`${optipro.setupPrice} de mise en ligne, payés une seule fois, puis l’abonnement au mois ou à l’année. Engagement de ${optipro.commitment}, puis sans engagement.`}
      >
        <OfferCard />
        <p className={styles.more}><Link href="/optipro">Voir le détail de l’offre, le déroulé et les questions fréquentes</Link><Link href="/optipro/prix-site-internet">Combien coûte un site internet&nbsp;?</Link></p>
      </Section>

      <Section id="engagements" titleId="guarantees-title" tone="green" icon="doc" tag="Mes engagements" title="Ce que je vous garantis, noir sur blanc." alt>
        <Guarantees />
      </Section>

      <Section
        id="transporteurs"
        titleId="transport-title"
        tone="amber"
        icon="truck"
        tag="Transporteurs"
        title="Vous êtes transporteur dans le 06 ?"
        lede="Une page dédiée à votre métier : demande de devis guidée, recrutement de conducteurs, site géré pour vous."
        intro={<p className={styles.more}><Link href="/optipro/transport">Voir l’offre pour les transporteurs</Link></p>}
      />

      <Section
        id="pourquoi-moi"
        titleId="why-title"
        tone="amber"
        icon="terrain"
        tag="Pourquoi moi"
        title="Dix ans sur le terrain avant de faire des sites."
        alt
        intro={
          <div className={styles.me}>
            <figure className={styles.portrait}>
              <Image src={portrait.src} alt={portrait.alt} width={portrait.width} height={portrait.height} sizes="(max-width: 759px) 132px, 220px" />
              <figcaption>Pierre Laurent<span>{optipro.brand}, {contact.city}</span></figcaption>
            </figure>
            <div>
              <div className={styles.bio}>
                <p>J’ai passé dix ans dans les opérations et la logistique : entrepôts, agences, transport. Je commence donc par comprendre votre activité, pas par parler de technique.</p>
                <p>Je conçois et je code moi-même : ce site, noté {scoreRange} chez Google, comme des applications web et mobiles. Si votre site doit un jour aller plus loin, c’est le même interlocuteur.</p>
              </div>
              <p className={styles.more}><Link href="/a-propos">Qui suis-je</Link><Link href="/projets">Mes réalisations</Link></p>
            </div>
          </div>
        }
      />

      <CallBlock titleId="contact-title" title="Parlons de votre site. Le plus simple, c’est d’appeler." />
    </main>
  );
}
