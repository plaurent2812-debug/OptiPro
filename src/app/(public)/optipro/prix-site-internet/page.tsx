import type { Metadata } from "next";
import Link from "next/link";
import { contact, optipro } from "@/data/offer";
import { domainRenewal, marketFigures, marketSource } from "@/data/market";
import { safeJsonLd } from "@/lib/json-ld";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import CallBlock from "@/components/ui/CallBlock";
import Icon from "@/components/ui/Icon";
import styles from "../optipro.module.css";

// Guide des prix : uniquement des chiffres sourcés (data/market.ts) ou tirés de l’offre (data/offer.ts).
const PUBLISHED = "2026-10-21";

export const metadata: Metadata = {
  title: { absolute: `Prix d’un site internet pour une TPE dans les Alpes-Maritimes · ${optipro.brand}` },
  description: "Combien coûte un site internet pour une TPE ? Les repères du marché, les coûts qui reviennent chaque année, paiement unique ou abonnement, et les questions à poser avant de signer.",
  alternates: { canonical: "/optipro/prix-site-internet" },
};

const factors = [
  { title: "Le nombre de pages et les textes", copy: "Un site de quelques pages ne demande pas le même travail qu’un site complet. Le temps passé à rédiger vos textes compte autant que le développement." },
  { title: "Les fonctionnalités", copy: "Prise de rendez-vous, demande de devis, boutique en ligne, plusieurs langues : chaque fonction ajoutée alourdit le projet." },
  { title: "L’outil utilisé", copy: "Un créateur de site en ligne, WordPress ou un développement sur mesure n’ont ni le même coût ni la même liberté." },
  { title: "Qui le fait", copy: "Vous-même, un indépendant ou une agence : vous payez soit votre temps, soit une prestation, avec plus ou moins d’accompagnement." },
  { title: "Le suivi après la mise en ligne", copy: "Un site qui n’est jamais mis à jour vieillit vite. Les modifications et la maintenance sont souvent oubliées dans le premier devis." },
];

const recurring = [
  { title: "Le nom de domaine", copy: `Votre adresse en .fr ou en .com, à renouveler chaque année. À titre d’exemple, un .fr chez OVHcloud coûte ${domainRenewal} au renouvellement (relevé du même baromètre, octobre 2026).` },
  { title: "L’hébergement", copy: "Le serveur qui rend votre site accessible. Il est parfois compris dans un abonnement : vérifiez-le." },
  { title: "La maintenance", copy: "Mises à jour, sauvegardes et correctifs de sécurité. Sur un site WordPress, ce poste n’est pas facultatif." },
  { title: "Les modifications", copy: "Changer des horaires, des photos, un tarif ou ajouter un service. Demandez combien coûte une modification avant de signer." },
];

const questions = [
  "Qu’est-ce qui est compris : nombre de pages, rédaction des textes, photos, formulaire de contact ?",
  "L’hébergement et le nom de domaine sont-ils inclus ? À quel prix au renouvellement ?",
  "À qui appartiennent le nom de domaine, le site, les contenus et les accès ?",
  "Combien coûte une modification une fois le site en ligne ?",
  "Y a-t-il un engagement ? Que se passe-t-il à la fin, ou si vous arrêtez ?",
  "Le site s’affiche-t-il correctement sur téléphone ?",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://pierre-laurent.fr/optipro/prix-site-internet#article",
      headline: "Combien coûte un site internet pour une TPE dans les Alpes-Maritimes ?",
      description: "Repères du marché, coûts annuels, paiement unique ou abonnement, et questions à poser avant de signer.",
      datePublished: PUBLISHED,
      dateModified: PUBLISHED,
      inLanguage: "fr-FR",
      author: { "@id": "https://pierre-laurent.fr/#pierre-laurent" },
      publisher: { "@id": "https://pierre-laurent.fr/#optipro" },
      mainEntityOfPage: "https://pierre-laurent.fr/optipro/prix-site-internet",
      citation: marketSource.url,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: optipro.brand, item: "https://pierre-laurent.fr/optipro" },
        { "@type": "ListItem", position: 2, name: "Prix d’un site internet", item: "https://pierre-laurent.fr/optipro/prix-site-internet" },
      ],
    },
  ],
};

export default function PriceGuidePage() {
  return (
    <main id="contenu" tabIndex={-1}>
      <script type="application/ld+json">{safeJsonLd(jsonLd)}</script>

      <PageHero
        titleId="guide-title"
        kicker="Guide, prix d’un site internet"
        tone="green"
        title={<>Combien coûte un site internet pour une TPE <span>dans les {contact.area}&nbsp;?</span></>}
        actions={
          <>
            <a className="btn btn-primary" href={contact.phoneHref}><Icon name="tel" /><span>Appeler le <span className="num">{contact.phoneDisplay}</span></span></a>
            <Link className="btn btn-ghost" href="/optipro">Voir l’offre {optipro.brand}</Link>
          </>
        }
      >
        <p>Les repères du marché, les coûts qui reviennent chaque année et les questions à poser avant de signer. <strong>Mis à jour le {marketSource.consulted}.</strong></p>
      </PageHero>

      <Section
        id="reperes"
        titleId="figures-title"
        tone="green"
        tag="La réponse courte"
        title="Les repères du marché"
        lede="Ces chiffres viennent de budgets réels de création de sites, pas d’une grille théorique. Ils donnent un ordre de grandeur, pas un devis."
        alt
      >
        <ul className={styles.stats}>
          {marketFigures.map((figure) => (
            <li key={figure.label}>
              <b className="num">{figure.value}</b>
              <p>{figure.label}</p>
              <small>{figure.detail}</small>
            </li>
          ))}
        </ul>
        <p className={styles.source}>
          Source&nbsp;: <a href={marketSource.url} target="_blank" rel="noopener noreferrer">{marketSource.name}<span className="sr-only"> (nouvel onglet)</span></a>, {marketSource.scope}, consulté le {marketSource.consulted}. Ces chiffres portent sur des agences&nbsp;; la source ne publie pas de repère propre aux indépendants.
        </p>
      </Section>

      <Section id="leviers" titleId="factors-title" tone="cyan" tag="Ce qui fait varier le prix" title="Cinq choses qui font le prix d’un site">
        <ol className={`${styles.steps} ${styles.fiveSteps}`}>
          {factors.map((factor, index) => (
            <li key={factor.title}>
              <span className={styles.port} aria-hidden="true" />
              <p className={styles.stepCount}>{index + 1} sur {factors.length}</p>
              <h3>{factor.title}</h3>
              <p>{factor.copy}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        id="couts-annuels"
        titleId="recurring-title"
        tone="amber"
        tag="Après la mise en ligne"
        title="Les coûts qui reviennent chaque année"
        lede="La création paie la mise en ligne. Ensuite, un site coûte chaque année, même s’il ne change pas."
        alt
      >
        <ul className={`${styles.features} ${styles.twoCols}`}>
          {recurring.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="abonnement"
        titleId="model-title"
        tone="green"
        tag="Paiement unique ou abonnement"
        title="Deux façons de payer, à comparer sur la même durée"
        intro={
          <div className={styles.why}>
            <p>Avec un <strong>paiement unique</strong>, vous réglez la création, puis l’hébergement, la maintenance et chaque modification à part. Avec un <strong>abonnement</strong>, une partie de ces coûts est comprise dans un montant fixe.</p>
            <p>Pour comparer, ramenez tout sur la même période. Avec l’offre {optipro.brand}, les 12 premiers mois reviennent à <strong>{optipro.firstYearMonthly}</strong> en payant au mois ({optipro.setupPrice} + 12 × {optipro.monthlyPrice}), ou <strong>{optipro.firstYearYearly}</strong> en payant l’année ({optipro.setupPrice} + {optipro.yearlyPrice}), avec {optipro.includedEdits}. {optipro.vatNotice}.</p>
            <p>Dans tous les cas, demandez à qui appartiennent le site et le nom de domaine, et ce qui se passe à la fin de l’engagement. Avec {optipro.brand}&nbsp;: <strong>{optipro.hostingIncluded.toLowerCase()}</strong>, {optipro.ownership.charAt(0).toLowerCase()}{optipro.ownership.slice(1)} {optipro.afterCommitment}</p>
            <Link href="/optipro#tarif" className={styles.textLink}>Voir le détail de l’offre {optipro.brand}</Link>
          </div>
        }
      />

      <Section id="questions" titleId="questions-title" tone="cyan" tag="Avant de signer" title="Les questions à poser à tout prestataire" alt>
        <ul className={styles.checklist}>
          {questions.map((question) => <li key={question}>{question}</li>)}
        </ul>
        <p className={styles.sectorLink}>Posez-les-moi aussi&nbsp;: je vous réponds au téléphone.</p>
      </Section>

      <CallBlock titleId="cta-title" title="Vous voulez savoir ce que coûterait votre site ? Un appel suffit." />
    </main>
  );
}
