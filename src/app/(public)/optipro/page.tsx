import type { Metadata } from "next";
import Link from "next/link";
import { contact, optipro, optiproAreaSchema, optiproOfferSchema } from "@/data/offer";
import { safeJsonLd } from "@/lib/json-ld";
import OfferCard from "@/components/offer/OfferCard";
import SiteShowcase from "@/components/offer/SiteShowcase";
import ProofStrip from "@/components/offer/ProofStrip";
import Deliverables from "@/components/offer/Deliverables";
import Guarantees from "@/components/offer/Guarantees";
import Trades from "@/components/offer/Trades";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import CallBlock from "@/components/ui/CallBlock";
import Icon from "@/components/ui/Icon";
import styles from "./optipro.module.css";

export const metadata: Metadata = {
  // Recherches visées : « création de site internet » + Vence, Nice, Alpes-Maritimes.
  title: { absolute: `Création de site internet à Vence et Nice (06) · ${optipro.brand}` },
  description: `Création de site internet pour TPE et PME à Vence, Nice et dans les ${contact.area} : ${optipro.setupPrice} de mise en ligne, puis ${optipro.monthlyPrice} par mois ou ${optipro.yearlyPrice} par an, ${optipro.includedEdits}.`,
  alternates: { canonical: "/optipro" },
};

const steps = [
  { title: "On en parle", copy: "Vous m’appelez ou vous m’écrivez. On fait le point sur votre activité, vos clients et ce que votre site doit leur dire." },
  { title: "Je construis votre site", copy: "Je rédige les textes et je conçois les pages à partir de ce que vous m’avez expliqué. Vous relisez, vous validez." },
  { title: `En ligne en ${optipro.deliveryTime}`, copy: "Votre site est publié avec son référencement local et sa mesure de vitesse, lisible sur ordinateur comme sur téléphone." },
  { title: "Ensuite, je le fais vivre", copy: "Une heure de modifications est comprise chaque mois : horaires, photos, textes, nouvelles prestations." },
];

const faq = [
  { q: "En combien de temps mon site est-il en ligne ?", a: `En ${optipro.deliveryTime}, à partir de notre premier échange, une fois vos informations reçues : activité, services, photos si vous en avez.` },
  { q: "Que se passe-t-il si je n’utilise pas mon heure de modifications ?", a: "Elle n’est pas reportée sur le mois suivant : l’heure de modifications mensuelle n’est pas cumulable." },
  { q: "Et si j’ai besoin de plus d’une heure dans le mois ?", a: `Chaque heure supplémentaire est facturée ${optipro.extraHourPrice}.` },
  { q: "Combien de temps suis-je engagé ?", a: `${optipro.commitment}. Vous choisissez de payer chaque mois (${optipro.monthlyPrice}) ou en une fois pour l’année (${optipro.yearlyPrice}). ${optipro.afterCommitment}` },
  { q: "L’hébergement et le nom de domaine sont-ils compris ?", a: `Oui. ${optipro.hostingIncluded} dans l’abonnement : vous n’avez ni hébergeur à choisir ni renouvellement à surveiller.` },
  { q: "À qui appartient mon site ?", a: `À vous. ${optipro.ownership}` },
  { q: "Pourquoi n’y a-t-il pas de TVA ?", a: `En tant qu’entrepreneur individuel en franchise en base, je ne facture pas la TVA : ${optipro.vatNotice}. Les prix affichés sont ceux que vous payez.` },
  { q: "Où intervenez-vous ?", a: `Je suis basé à ${contact.city} et j’interviens dans tout le département des ${contact.area} : Vence, Nice, Cagnes-sur-Mer, Saint-Laurent-du-Var, Antibes, Grasse… Et ${contact.remoteArea} : tout se fait par téléphone et par e-mail.` },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://pierre-laurent.fr/optipro#service",
  name: "Création de site internet OptiPro",
  serviceType: "Création de site internet",
  description: "Conception, mise en ligne et suivi de sites internet vitrines pour les TPE et PME de Vence, de Nice et des Alpes-Maritimes.",
  provider: { "@id": "https://pierre-laurent.fr/#optipro" },
  areaServed: optiproAreaSchema,
  url: "https://pierre-laurent.fr/optipro",
  isRelatedTo: { "@id": "https://pierre-laurent.fr/optipro/transport#service" },
  offers: optiproOfferSchema,
};

export default function OptiProPage() {
  return (
    <main id="contenu" tabIndex={-1}>
      <script type="application/ld+json">{safeJsonLd(jsonLd)}</script>

      <PageHero
        titleId="optipro-title"
        kicker={`${optipro.brand}, création de sites internet pour les ${optipro.audience}`}
        tone="green"
        icon="site"
        title={<>Création de site internet à Vence et Nice, <span>sans vous en occuper.</span></>}
        after={<ProofStrip />}
        actions={
          <>
            <a className="btn btn-primary" href={contact.phoneHref}><Icon name="tel" /><span>Appeler le <span className="num">{contact.phoneDisplay}</span></span></a>
            <a className="btn btn-ghost" href={contact.emailHref}><Icon name="mail" />Écrire un e-mail</a>
          </>
        }
      >
        <p>Je crée le site internet de votre entreprise, je le mets en ligne, puis je m’occupe de vos modifications chaque mois. <strong>Un seul interlocuteur et un prix clair, de Vence à Nice, et {contact.remoteArea}.</strong></p>
      </PageHero>

      <Section
        id="tarif"
        titleId="price-title"
        tone="green"
        icon="site"
        tag="Le tarif"
        title="Votre site vitrine, clé en main, à un prix clair."
        lede={`${optipro.setupPrice} de mise en ligne, payés une seule fois, puis l’abonnement au mois ou à l’année. Choisissez le rythme pour voir le montant.`}
      >
        <OfferCard />
        <p className={styles.sectorLink}><Link href="/optipro/prix-site-internet" className={styles.textLink}>Comparer avec les prix du marché</Link></p>
      </Section>

      <Section
        id="livrables"
        titleId="deliverables-title"
        tone="green"
        icon="site"
        tag="Compris dans la mise en ligne"
        title={`Ce que comprennent les ${optipro.setupPrice}.`}
        lede="Un site complet, rédigé, référencé dans votre ville et mesuré, prêt à être trouvé et appelé."
        alt
      >
        <Deliverables />
      </Section>

      <Section
        id="exemples"
        titleId="examples-title"
        tone="green"
        icon="site"
        tag="Exemples"
        title="Des sites réalisés"
        lede="Un site vitrine et deux sites éditoriaux, conçus et développés de bout en bout. Votre site est construit de la même façon, à partir de votre activité."
      >
        <SiteShowcase />
        <h3 className={styles.subhead}>Pour votre métier</h3>
        <Trades withPageLinks />
      </Section>

      <Section
        id="deroule"
        titleId="steps-title"
        tone="cyan"
        icon="route"
        tag="Le déroulé"
        title="Comment ça se passe"
        lede={`Quatre étapes, du premier appel au suivi mensuel. En ligne en ${optipro.deliveryTime}, sans rien de technique à gérer.`}
        alt
      >
        <ol className={styles.steps}>
          {steps.map((step, index) => (
            <li key={step.title}>
              <span className={styles.port} aria-hidden="true" />
              <p className={styles.stepCount}>Étape {index + 1} sur {steps.length}</p>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        id="rythme"
        titleId="billing-title"
        tone="green"
        icon="doc"
        tag="Au mois ou à l’année"
        title="Le même service, deux rythmes de paiement."
        lede={`Le site, le suivi et l’heure de modifications mensuelle, non cumulable, sont les mêmes. Seul le rythme de paiement change, après les ${optipro.setupPrice} de mise en ligne.`}
      >
        <div className={styles.plans}>
          <article>
            <h3>Au mois</h3>
            <p className={styles.amount}><b>{optipro.monthlyPrice}</b><span>par mois</span></p>
            <p>Soit {optipro.monthlyTotal} sur les {optipro.commitment} d’engagement.</p>
          </article>
          <article className={styles.planBest}>
            <h3>À l’année</h3>
            <p className={styles.amount}><b>{optipro.yearlyPrice}</b><span>par an</span></p>
            <p>Soit <strong>{optipro.yearlySaving} d’économie</strong> sur l’année.</p>
          </article>
        </div>
      </Section>

      <Section id="engagements" titleId="guarantees-title" tone="green" icon="doc" tag="Mes engagements" title="Ce que je vous garantis, noir sur blanc." alt>
        <Guarantees />
      </Section>

      <Section
        id="terrain"
        titleId="why-title"
        tone="amber"
        icon="terrain"
        tag="Pourquoi moi"
        title="Quelqu’un qui connaît le terrain"
        intro={
          <div className={styles.why}>
            <p>J’ai passé dix ans dans les opérations et la logistique, de l’entrepôt à la renégociation de contrats transporteurs. Je commence donc par comprendre votre activité, pas par parler de technique.</p>
            <p>Je développe aussi des applications et des automatisations. Si votre site doit un jour aller plus loin, c’est le même interlocuteur.</p>
            <Link href="/a-propos" className={styles.textLink}>Qui suis-je</Link>
          </div>
        }
      />

      <Section id="questions" titleId="faq-title" tone="cyan" icon="question" tag="Questions fréquentes" title="Vos questions" alt>
        <div className={styles.faq}>
          {faq.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <CallBlock titleId="cta-title" title="Parlons de votre site. Un appel suffit pour savoir si l’offre vous convient." />
    </main>
  );
}
