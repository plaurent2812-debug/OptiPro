import type { Metadata } from "next";
import Link from "next/link";
import { contact, optipro, optiproOfferSchema } from "@/data/offer";
import { safeJsonLd } from "@/lib/json-ld";
import OfferCard from "@/components/offer/OfferCard";
import SiteShowcase from "@/components/offer/SiteShowcase";
import ProofStrip from "@/components/offer/ProofStrip";
import Guarantees from "@/components/offer/Guarantees";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import CallBlock from "@/components/ui/CallBlock";
import Icon from "@/components/ui/Icon";
import styles from "../optipro.module.css";

// Page de référencement local : recherche « création site internet Vence ».
// Aucun client, chiffre ni avis : uniquement l’offre (data/offer.ts) et ce qu’un site de commerce ou d’artisan doit montrer.
export const metadata: Metadata = {
  title: { absolute: `Création de site internet à Vence (06140) · ${optipro.brand}` },
  description: `Création de site internet à Vence pour les commerces, artisans et restaurants : un interlocuteur installé à ${contact.city}, en ligne en ${optipro.deliveryTime}. ${optipro.setupPrice} puis ${optipro.monthlyPrice} par mois.`,
  alternates: { canonical: "/optipro/vence" },
};

// Communes voisines citées sur la page et dans les données structurées.
const nearby = ["Saint-Paul-de-Vence", "La Colle-sur-Loup", "Tourrettes-sur-Loup", "La Gaude", "Saint-Jeannet", "Cagnes-sur-Mer"];
const nearbyText = `${nearby.slice(0, -1).join(", ")} et ${nearby[nearby.length - 1]}`;

const essentials = [
  "Vos horaires, à jour, avec les jours de fermeture et les changements de saison.",
  "Votre adresse et un plan Google Maps ; dans la cité historique, où se garer et par quelle porte entrer.",
  "Votre numéro de téléphone, qui s’appelle d’un geste depuis un téléphone.",
  "Ce que vous proposez : prestations, carte ou produits, avec des prix quand c’est possible.",
  "Pour un artisan, la zone où vous intervenez : Vence et les communes que vous couvrez.",
  "Le lien vers votre fiche Google, avec les mêmes informations que sur le site.",
];

const steps = [
  { title: "On en parle", copy: "Vous m’appelez ou vous m’écrivez. On fait le point sur votre activité, vos clients et ce que votre site doit leur dire." },
  { title: "Je construis votre site", copy: "Je rédige les textes et je conçois les pages à partir de ce que vous m’avez expliqué. Vous relisez, vous validez." },
  { title: `En ligne en ${optipro.deliveryTime}`, copy: "Votre site est publié avec son référencement local pour Vence et votre métier, lisible sur ordinateur comme sur téléphone." },
  { title: "Je le tiens à jour", copy: "Horaires d’été, nouvelle carte, fermeture exceptionnelle : une heure de modifications est comprise chaque mois." },
];

const faq = [
  { q: "Comment se passent nos échanges ?", a: `Par téléphone et par e-mail. Je suis installé à ${contact.city} : vous avez un interlocuteur du coin, joignable directement au ${contact.phoneDisplay}.` },
  { q: "Je suis à Saint-Paul-de-Vence ou à La Gaude, est-ce la même offre ?", a: `Oui. Mêmes conditions et même prix dans tout le département des ${contact.area}, et ${contact.remoteArea}.` },
  { q: "Combien coûte un site internet à Vence ?", a: `${optipro.setupPrice} de mise en ligne, payés une seule fois, puis ${optipro.monthlyPrice} par mois ou ${optipro.yearlyPrice} par an, avec un engagement de ${optipro.commitment}. ${optipro.hostingIncluded}. ${optipro.vatNotice}.` },
  { q: "En combien de temps mon site est-il en ligne ?", a: `En ${optipro.deliveryTime}, à partir de notre premier échange, une fois vos informations reçues : activité, services, photos si vous en avez.` },
  { q: "Je change mes horaires ou ma carte selon la saison, qui met le site à jour ?", a: `Moi. ${optipro.includedEdits.charAt(0).toUpperCase()}${optipro.includedEdits.slice(1)} est comprise dans l’abonnement : vous m’appelez ou vous m’écrivez, je m’en occupe. Au-delà, chaque heure supplémentaire est facturée ${optipro.extraHourPrice}.` },
  { q: "À qui appartiennent le site et le nom de domaine ?", a: `À vous. ${optipro.ownership} ${optipro.afterCommitment}` },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://pierre-laurent.fr/optipro/vence#service",
      name: "Création de site internet à Vence",
      serviceType: "Création de site internet",
      description: "Conception, mise en ligne et suivi de sites internet pour les commerces, artisans et restaurants de Vence et des communes voisines.",
      provider: { "@id": "https://pierre-laurent.fr/#optipro" },
      areaServed: [
        { "@type": "City", name: "Vence" },
        ...nearby.map((name) => ({ "@type": "City", name })),
        { "@type": "AdministrativeArea", name: contact.area },
      ],
      url: "https://pierre-laurent.fr/optipro/vence",
      isRelatedTo: { "@id": "https://pierre-laurent.fr/optipro#service" },
      offers: optiproOfferSchema,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: optipro.brand, item: "https://pierre-laurent.fr/optipro" },
        { "@type": "ListItem", position: 2, name: "Vence", item: "https://pierre-laurent.fr/optipro/vence" },
      ],
    },
  ],
};

export default function OptiProVencePage() {
  return (
    <main id="contenu" tabIndex={-1}>
      <script type="application/ld+json">{safeJsonLd(jsonLd)}</script>

      <PageHero
        titleId="vence-title"
        kicker={`${optipro.brand}, création de sites internet à ${contact.city} (06140)`}
        tone="green"
        after={<ProofStrip />}
        title={<>Création de site internet à Vence, <span>avec quelqu’un d’ici.</span></>}
        actions={
          <>
            <a className="btn btn-primary" href={contact.phoneHref}><Icon name="tel" /><span>Appeler le <span className="num">{contact.phoneDisplay}</span></span></a>
            <a className="btn btn-ghost" href="#tarif">Voir le tarif</a>
          </>
        }
      >
        <p>Je suis installé à Vence. Je conçois et je réalise les sites internet des commerces, artisans et restaurants de la ville et des villages voisins, je les mets en ligne, puis je les tiens à jour. <strong>Pour en parler, un appel suffit.</strong></p>
      </PageHero>

      <Section
        id="sur-place"
        titleId="local-title"
        tone="amber"
        tag="À Vence"
        title="Un interlocuteur installé à Vence"
        intro={
          <div className={styles.why}>
            <p>Vous avez un seul interlocuteur, installé dans la ville où vous travaillez et joignable directement par téléphone. C’est lui qui écrit votre site, le met en ligne et le tient à jour.</p>
            <p>À Vence, une partie de vos clients habite la ville ou les environs, une autre est de passage pour la cité historique. Votre site doit répondre aux deux : à celui qui vous connaît déjà et cherche vos horaires, à celui qui vous découvre et cherche comment venir.</p>
            <p>Autour de Vence, je travaille aussi pour les entreprises de {nearbyText}, aux mêmes conditions.</p>
          </div>
        }
      />

      <Section
        id="essentiel"
        titleId="essentials-title"
        tone="cyan"
        tag="L’essentiel"
        title="Ce qu’un client cherche sur le site d’un commerce ou d’un artisan"
        lede="Avant d’appeler ou de se déplacer, vos clients veulent des réponses simples. Votre site les donne dès le premier écran, surtout sur téléphone."
        alt
      >
        <ul className={styles.checklist}>
          {essentials.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <p className={styles.sectorLink}>J’écris ces textes à partir de notre échange : vous relisez et vous validez.</p>
      </Section>

      <Section
        id="fiche-google"
        titleId="google-title"
        tone="green"
        tag="Fiche Google"
        title="Votre site et votre fiche Google disent la même chose"
        intro={
          <div className={styles.why}>
            <p>Sur une recherche comme « boulangerie Vence » ou « plombier Vence », Google peut afficher des fiches d’établissement sur une carte avant les sites. La fiche donne l’essentiel ; votre site donne le détail : ce que vous faites, vos prix, vos photos, comment vous joindre.</p>
            <p>Les deux doivent concorder : même nom, même adresse, même téléphone, mêmes horaires. Votre site renvoie vers votre fiche, et votre fiche peut indiquer l’adresse de votre site. Le site est livré avec son référencement local : Search Console, plan du site, balises et données structurées pour Vence et votre métier.</p>
            <p>La fiche Google n’est pas comprise dans l’offre : vous la gérez depuis votre compte Google. Le site, je le tiens à jour pour vous : un changement d’horaires entre dans l’heure de modifications comprise chaque mois.</p>
          </div>
        }
        alt
      />

      <Section
        id="deroule"
        titleId="steps-title"
        tone="cyan"
        tag="Le déroulé"
        title={`En ligne en ${optipro.deliveryTime}`}
        lede={`${optipro.deliveryTime} à partir de notre premier échange, une fois vos informations reçues : activité, services, photos si vous en avez.`}
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
        id="exemples"
        titleId="examples-title"
        tone="green"
        tag="Exemples"
        title="Des sites réalisés"
        lede="Conçus et mis en ligne de bout en bout. Le vôtre est construit de la même façon, à partir de votre activité et de votre adresse à Vence."
        alt
      >
        <SiteShowcase />
      </Section>

      <Section
        id="tarif"
        titleId="price-title"
        tone="green"
        tag="Le tarif"
        title="Un prix affiché, le même pour toute entreprise."
        lede={`${optipro.setupPrice} de mise en ligne, payés une seule fois, puis l’abonnement au mois ou à l’année, engagement de ${optipro.commitment}.`}
      >
        <OfferCard />
        <p className={styles.sectorLink}>
          <Link href="/optipro/prix-site-internet" className={styles.textLink}>Comparer avec les prix du marché</Link>
        </p>
      </Section>

      <Section id="engagements" titleId="guarantees-title" tone="green" tag="Mes engagements" title="Ce que je vous garantis, noir sur blanc." alt>
        <Guarantees />
      </Section>

      <Section id="questions" titleId="faq-title" tone="cyan" tag="Questions fréquentes" title="Vos questions">
        <div className={styles.faq}>
          {faq.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
        <p className={styles.sectorLink}>
          <Link href="/optipro" className={styles.textLink}>Voir le détail de l’offre {optipro.brand}</Link>
        </p>
      </Section>

      <CallBlock titleId="cta-title" title="Vous êtes à Vence ou à côté ? Un appel suffit pour en parler." />
    </main>
  );
}
