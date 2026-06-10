// src/data/faq.ts

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_HOMEPAGE: FaqItem[] = [
  {
    question: 'Combien coûte un site vitrine ?',
    answer:
      "990€ pour un site vitrine complet : 3 à 4 pages, hébergement 1 an, nom de domaine et adresse email professionnelle inclus. La version Pro à 1 390€ ajoute un formulaire de contact fonctionnel, votre fiche Google My Business et le SEO local.",
  },
  {
    question: "Qu'est-ce qu'un outil métier sur mesure ?",
    answer:
      "Une application web construite autour de vos process : suivi de chantiers, catalogue produits, portail client, gestion de commandes… Tout ce que vous gérez aujourd'hui sur papier ou sur Excel peut devenir un outil simple, accessible depuis n'importe quel appareil. Chiffrage sur devis après un premier appel gratuit.",
  },
  {
    question: "Qui s'occupe du site après la mise en ligne ?",
    answer:
      "Moi, si vous le souhaitez. La maintenance Essentiel (79€/mois, 1h/mois) couvre les mises à jour de contenu. La maintenance Pro (129€/mois, 2h/mois) ajoute les petites évolutions et un traitement prioritaire. Sans maintenance, vous restez propriétaire de votre site et libre de le faire évoluer ailleurs.",
  },
  {
    question: "En quoi êtes-vous différent d'une agence web ?",
    answer:
      "J'ai passé 10 ans en opérations et logistique avant de devenir développeur. Je comprends vos contraintes de terrain — devis, planning, fournisseurs, stocks — avant d'écrire une ligne de code. Un seul interlocuteur, un périmètre et des livrables définis au devis, pas de réunions à rallonge.",
  },
  {
    question: 'Comment se passe un projet ?',
    answer:
      "On commence par un premier appel gratuit pour comprendre votre besoin. Je vous envoie ensuite un devis avec un périmètre et des livrables définis. Vous validez, je construis, vous suivez l'avancement — et vous ne payez que ce qui a été convenu.",
  },
];

export const FAQ_TARIFS: FaqItem[] = [
  {
    question: "Que comprend le prix d'un site vitrine ?",
    answer:
      "990€ tout compris : 3 à 4 pages sur mesure, hébergement pendant 1 an, nom de domaine et adresse email professionnelle. Pas de coûts cachés.",
  },
  {
    question: 'Quelle différence entre Site vitrine et Site vitrine Pro ?',
    answer:
      "Le pack Pro (1 390€) ajoute un formulaire de contact fonctionnel, la création ou l'optimisation de votre fiche Google My Business et le SEO local — pour être visible quand un client cherche votre métier dans votre ville.",
  },
  {
    question: 'Comment est chiffré un outil métier sur mesure ?',
    answer:
      "Sur devis, après un premier appel gratuit. Le devis détaille le périmètre exact et les livrables — vous savez ce que vous payez avant de vous engager.",
  },
  {
    question: 'À quoi sert la maintenance mensuelle ?',
    answer:
      "À garder votre site à jour sans y penser. Essentiel (79€/mois) : 1h/mois pour les mises à jour de contenu — textes, photos, horaires. Pro (129€/mois) : 2h/mois pour le contenu et les petites évolutions, avec un traitement prioritaire.",
  },
  {
    question: 'TVA ?',
    answer:
      "Tarifs HT. Franchise en base de TVA (art. 293 B du CGI) — pas de TVA à payer en plus pour vous.",
  },
];

export function buildFaqJsonLd(faq: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
