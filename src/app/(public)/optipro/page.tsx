import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { contact, optipro } from "@/data/offer";
import { projects } from "@/data/projects";
import { safeJsonLd } from "@/lib/json-ld";
import PhoneIcon from "@/components/layout/PhoneIcon";
import styles from "./optipro.module.css";

export const metadata: Metadata = {
  title: "OptiPro — Sites vitrines pour TPE et PME des Alpes-Maritimes",
  description: `Création de sites vitrines pour les TPE et PME des Alpes-Maritimes : ${optipro.setupPrice} de mise en ligne, puis ${optipro.monthlyPrice} par mois ou ${optipro.yearlyPrice} par an, ${optipro.includedEdits}. ${optipro.vatNotice}.`,
  alternates: { canonical: "/optipro" },
};

const steps = [
  { title: "On en parle", copy: "Vous m’appelez ou vous m’écrivez. On fait le point sur votre activité, vos clients et ce que votre site doit leur dire." },
  { title: "Je construis votre site", copy: "Je conçois et je réalise les pages à partir de ce que vous m’avez expliqué. Vous n’avez rien de technique à gérer." },
  { title: "Mise en ligne", copy: "Votre site est publié, lisible sur ordinateur comme sur téléphone, et vos clients peuvent vous trouver." },
  { title: "Ensuite, je le fais vivre", copy: "Une heure de modifications est comprise chaque mois : horaires, photos, textes, nouvelles prestations." },
];

const faq = [
  { q: "Que se passe-t-il si je n’utilise pas mon heure de modifications ?", a: "Elle n’est pas reportée sur le mois suivant : l’heure de modifications mensuelle n’est pas cumulable." },
  { q: "Et si j’ai besoin de plus d’une heure dans le mois ?", a: `Chaque heure supplémentaire est facturée ${optipro.extraHourPrice}.` },
  { q: "Combien de temps suis-je engagé ?", a: `${optipro.commitment}. Vous choisissez de payer chaque mois (${optipro.monthlyPrice}) ou en une fois pour l’année (${optipro.yearlyPrice}).` },
  { q: "Pourquoi n’y a-t-il pas de TVA ?", a: `En tant qu’entrepreneur individuel en franchise en base, je ne facture pas la TVA : ${optipro.vatNotice}. Les prix affichés sont ceux que vous payez.` },
  { q: "Où intervenez-vous ?", a: `Dans les ${contact.area}. Je suis basé à ${contact.city}.` },
];

const examples = ["ro-nutritionniste", "la-parallaxe", "le-fond-du-sujet"].map((slug) => projects.find((project) => project.slug === slug)!);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://pierre-laurent.fr/optipro#service",
  name: "Création de sites vitrines OptiPro",
  serviceType: "Création de site vitrine",
  description: "Conception, mise en ligne et suivi de sites vitrines pour les TPE et PME des Alpes-Maritimes.",
  provider: { "@id": "https://pierre-laurent.fr/#optipro" },
  areaServed: { "@type": "AdministrativeArea", name: "Alpes-Maritimes" },
  url: "https://pierre-laurent.fr/optipro",
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    priceSpecification: [
      { "@type": "UnitPriceSpecification", name: "Mise en ligne", price: 890, priceCurrency: "EUR" },
      { "@type": "UnitPriceSpecification", name: "Abonnement mensuel", price: 79, priceCurrency: "EUR", unitCode: "MON" },
      { "@type": "UnitPriceSpecification", name: "Abonnement annuel", price: 790, priceCurrency: "EUR", unitCode: "ANN" },
    ],
  },
};

export default function OptiProPage() {
  return (
    <main id="contenu" tabIndex={-1}>
      <script type="application/ld+json">{safeJsonLd(jsonLd)}</script>

      <section className={`shell ${styles.hero}`} aria-labelledby="optipro-title">
        <div className={styles.heroCopy}>
          <p className={styles.brandLine}><span aria-hidden="true">S</span>{optipro.brand}, sites vitrines pour les {optipro.audience}</p>
          <h1 id="optipro-title">Un site professionnel pour votre entreprise, sans vous en occuper.</h1>
          <p className={styles.lede}>Je conçois le site de votre entreprise, je le mets en ligne, puis je m’occupe de vos modifications chaque mois. Un seul interlocuteur et un prix clair, dans les {contact.area}.</p>
          <div className={styles.actions}>
            <a href={contact.phoneHref} className="button-primary"><PhoneIcon />Appeler le {contact.phoneDisplay}</a>
            <a href={contact.emailHref} className="button-secondary">Écrire à {contact.email}</a>
          </div>
        </div>

        <aside className={styles.ticket} aria-labelledby="ticket-title">
          <h2 id="ticket-title">Votre site vitrine</h2>
          <dl>
            <div><dt>Mise en ligne</dt><dd><strong>{optipro.setupPrice}</strong>une seule fois</dd></div>
            <div><dt>Abonnement</dt><dd><strong>{optipro.monthlyPrice}<small> par mois</small></strong>ou {optipro.yearlyPrice} par an</dd></div>
            <div><dt>Modifications</dt><dd><strong>1 h<small> par mois</small></strong>non cumulable, puis {optipro.extraHourPrice} de l’heure</dd></div>
            <div><dt>Engagement</dt><dd><strong>{optipro.commitment}</strong></dd></div>
            <div><dt>Zone</dt><dd><strong>{contact.area}</strong></dd></div>
          </dl>
          <p>{optipro.vatNotice}</p>
        </aside>
      </section>

      <section className={styles.steps} aria-labelledby="steps-title">
        <div className="shell">
          <h2 id="steps-title" className="section-title">Comment ça se passe</h2>
          <ol>
            {steps.map((step) => <li key={step.title}><h3>{step.title}</h3><p>{step.copy}</p></li>)}
          </ol>
        </div>
      </section>

      <section className={`shell ${styles.billing}`} aria-labelledby="billing-title">
        <div>
          <h2 id="billing-title" className="section-title">Au mois ou à l’année</h2>
          <p className="section-copy">Le site et le service sont les mêmes. Seul le rythme de paiement change, après les {optipro.setupPrice} de mise en ligne.</p>
        </div>
        <div className={styles.plans}>
          <article>
            <h3>Au mois</h3>
            <p className={styles.amount}>{optipro.monthlyPrice}<small> par mois</small></p>
            <p>Soit 948 € sur les {optipro.commitment} d’engagement.</p>
          </article>
          <article className={styles.planBest}>
            <h3>À l’année</h3>
            <p className={styles.amount}>{optipro.yearlyPrice}<small> par an</small></p>
            <p>Soit {optipro.yearlySaving} d’économie sur l’année.</p>
          </article>
        </div>
      </section>

      <section className={styles.why} aria-labelledby="why-title">
        <div className={`shell ${styles.whyInner}`}>
          <div>
            <h2 id="why-title" className="section-title">Quelqu’un qui connaît le terrain</h2>
            <p>J’ai passé dix ans dans les opérations et la logistique, de l’entrepôt à la renégociation de contrats transporteurs. Je commence donc par comprendre votre activité, pas par parler de technique.</p>
            <p>Je développe aussi des applications et des automatisations. Si votre site doit un jour aller plus loin, c’est le même interlocuteur.</p>
            <Link href="/#reseau" className={styles.textLink}>Voir tout ce que je sais faire</Link>
          </div>
          <ul className={styles.examples} aria-label="Exemples de sites réalisés">
            {examples.map((project) => (
              <li key={project.slug}>
                <Link href={`/projets#${project.slug}`}>
                  <Image src={project.image} alt={project.imageAlt} width={project.imageWidth} height={project.imageHeight} sizes="(max-width: 820px) 90vw, 360px" />
                  <strong>{project.name}</strong>
                  <span>{project.status === "Prototype avancé" ? "Démonstration de site" : project.status}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`shell ${styles.faq}`} aria-labelledby="faq-title">
        <h2 id="faq-title" className="section-title">Vos questions</h2>
        <div>
          {faq.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="cta-title">
        <div className={`shell ${styles.ctaInner}`}>
          <h2 id="cta-title">Parlons de votre site.</h2>
          <p>Un appel suffit pour savoir si l’offre vous convient.</p>
          <div className={styles.actions}>
            <a href={contact.phoneHref} className={styles.inkButton}><PhoneIcon />Appeler le {contact.phoneDisplay}</a>
            <a href={contact.emailHref} className={styles.ctaMail}>Écrire à {contact.email}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
