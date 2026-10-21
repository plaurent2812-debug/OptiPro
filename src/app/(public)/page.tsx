import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { showcaseSites, type ProductProject } from "@/data/projects";
import { contact, optipro } from "@/data/offer";
import OfferCard from "@/components/offer/OfferCard";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import CallBlock from "@/components/ui/CallBlock";
import Icon, { type IconName } from "@/components/ui/Icon";
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

const benefits: { icon: IconName; title: string; copy: string }[] = [
  { icon: "site", title: "Un site à votre image", copy: "Je construis les pages à partir de ce que vous m’expliquez : votre activité, vos clients, votre zone. Vous n’avez rien de technique à gérer." },
  { icon: "app", title: "Lisible sur téléphone", copy: "Votre site s’affiche aussi bien sur téléphone que sur ordinateur, et votre numéro s’appelle d’un geste." },
  { icon: "doc", title: "Des modifications chaque mois", copy: "Une heure de modifications comprise chaque mois : horaires, photos, textes, nouveaux services. Vous m’appelez, je m’en occupe." },
  { icon: "tel", title: "Un seul interlocuteur", copy: `Basé à ${contact.city}, joignable par téléphone. Vous parlez directement à celui qui fait votre site.` },
];

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
        }
      >
        <p>Je conçois le site de votre entreprise, je le mets en ligne, puis je le tiens à jour chaque mois. <strong>{optipro.setupPrice} de mise en ligne, puis {optipro.monthlyPrice} par mois.</strong></p>
      </PageHero>

      <Section
        id="avantages"
        titleId="benefits-title"
        tone="green"
        icon="site"
        tag="Ce que vous obtenez"
        title="Un site professionnel, sans y passer vos soirées."
        lede="Vous gérez votre entreprise. Je m’occupe de votre site, de sa création à ses mises à jour."
        alt
      >
        <ul className={styles.benefits}>
          {benefits.map((benefit) => (
            <li key={benefit.title}>
              <span className={styles.benefitWell} aria-hidden="true"><Icon name={benefit.icon} /></span>
              <h3>{benefit.title}</h3>
              <p>{benefit.copy}</p>
            </li>
          ))}
        </ul>
      </Section>


      <Section
        id="tarif"
        titleId="offer-title"
        tone="green"
        icon="site"
        tag={`L’offre ${optipro.brand}`}
        title="Votre site internet, clé en main, à un prix clair."
        lede={`${optipro.setupPrice} de mise en ligne, payés une seule fois, puis l’abonnement au mois ou à l’année. Engagement de ${optipro.commitment}.`}
      >
        <OfferCard />
        <p className={styles.more}><Link href="/optipro">Voir le détail de l’offre, le déroulé et les questions fréquentes</Link><Link href="/optipro/prix-site-internet">Combien coûte un site internet&nbsp;?</Link></p>
      </Section>

      <Section
        id="transporteurs"
        titleId="transport-title"
        tone="amber"
        icon="truck"
        tag="Transporteurs"
        title="Vous êtes transporteur dans le 06 ?"
        lede="Une page dédiée à votre métier : demande de devis guidée, recrutement de conducteurs, site géré pour vous."
        alt
        intro={<p className={styles.more}><Link href="/optipro/transport">Voir l’offre pour les transporteurs</Link></p>}
      />

      <Section
        id="pourquoi-moi"
        titleId="why-title"
        tone="amber"
        icon="terrain"
        tag="Pourquoi moi"
        title="Dix ans sur le terrain avant de faire des sites."
        intro={
          <>
            <div className={styles.bio}>
              <p>J’ai passé dix ans dans les opérations et la logistique : entrepôts, agences, transport. Je commence donc par comprendre votre activité, pas par parler de technique.</p>
              <p>Je développe aussi des applications et des automatisations. Si votre site doit un jour aller plus loin, c’est le même interlocuteur.</p>
            </div>
            <p className={styles.more}><Link href="/a-propos">Qui suis-je</Link><Link href="/projets">Mes réalisations</Link></p>
          </>
        }
      />

      <CallBlock titleId="contact-title" title="Parlons de votre site. Le plus simple, c’est d’appeler." />
    </main>
  );
}
