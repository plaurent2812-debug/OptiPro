import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { showcaseSites } from "@/data/projects";
import { portrait } from "@/data/portrait";
import { contact, optipro } from "@/data/offer";
import OfferCard from "@/components/offer/OfferCard";
import ProofStrip from "@/components/offer/ProofStrip";
import Deliverables from "@/components/offer/Deliverables";
import LighthouseProof from "@/components/offer/LighthouseProof";
import Guarantees from "@/components/offer/Guarantees";
import Trades from "@/components/offer/Trades";
import { lighthouse } from "@/data/proof";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import CallBlock from "@/components/ui/CallBlock";
import Icon from "@/components/ui/Icon";
import { BrowserFrame, PhoneFrame, StatusPill } from "@/components/ui/Frames";
import styles from "./home.module.css";

// Accueil = page de vente OptiPro. Le parcours et le CV restent sur /a-propos et /cv.
// L’accueil vise le département ; /optipro vise Vence et Nice.
export const metadata: Metadata = {
  title: { absolute: `Création de site internet dans les Alpes-Maritimes · ${optipro.brand}` },
  description: `Création de site internet pour les ${optipro.audience} des ${contact.area} : conçu, mis en ligne et mis à jour pour vous. ${optipro.setupPrice} puis ${optipro.monthlyPrice} par mois, ${optipro.includedEdits}.`,
  alternates: { canonical: "/" },
};

// Premier écran : le site de démonstration Ro, sur ordinateur et sur téléphone (captures du même jour).
const [featuredSite] = showcaseSites;
const featuredMobile = featuredSite.mobileImage!;

const scores = lighthouse.scores.map((score) => score.value);
const scoreRange = Math.min(...scores) === Math.max(...scores) ? `${Math.max(...scores)}/100` : `${Math.min(...scores)} à ${Math.max(...scores)}/100`;

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
          <figure className={styles.stage}>
            <div className={styles.glow} aria-hidden="true" />
            <BrowserFrame label={featuredSite.name} className={styles.desk}>
              <Image src={featuredSite.image} alt={featuredSite.imageAlt} width={featuredSite.imageWidth} height={featuredSite.imageHeight} sizes="(max-width: 959px) 92vw, 1040px" priority />
            </BrowserFrame>
            <PhoneFrame className={styles.mobile}>
              <Image src={featuredMobile.src} alt={featuredMobile.alt} width={featuredMobile.width} height={featuredMobile.height} sizes="(max-width: 759px) 32vw, 240px" priority />
            </PhoneFrame>
            <figcaption className={styles.stageCaption}>
              <span><b>{featuredSite.name}</b> {featuredSite.pitch.charAt(0).toLowerCase()}{featuredSite.pitch.slice(1)}, sur ordinateur et sur téléphone.</span>
              <StatusPill tone={featuredSite.badgeTone}>{featuredSite.badge}</StatusPill>
              <Link href="/projets" className={styles.stageLink}>Voir toutes les réalisations</Link>
            </figcaption>
          </figure>
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
        <Deliverables variant="spec" />
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
        id="tarif"
        titleId="offer-title"
        tone="green"
        icon="site"
        tag={`L’offre ${optipro.brand}`}
        title="Votre site internet, clé en main, à un prix clair."
        lede={`${optipro.setupPrice} de mise en ligne, payés une seule fois, puis l’abonnement au mois ou à l’année. Engagement de ${optipro.commitment}, puis sans engagement.`}
        alt
      >
        <OfferCard />
        <Guarantees compact />
        <p className={styles.more}><Link href="/optipro">Voir le détail de l’offre et les questions fréquentes</Link><Link href="/optipro#comparatif">Comparer avec une agence</Link><Link href="/optipro/prix-site-internet">Combien coûte un site internet&nbsp;?</Link></p>
      </Section>

      <Section
        id="metiers"
        titleId="trades-title"
        tone="cyan"
        icon="user"
        tag="Pour qui"
        title="Un site pensé pour votre métier."
        lede="Artisan, salon de coiffure, commerce, restaurant ou transporteur : chaque site part de votre activité et de ce que vos clients cherchent en premier."
      >
        <Trades compact />
      </Section>

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
