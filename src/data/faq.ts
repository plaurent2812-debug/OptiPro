// src/data/faq.ts

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_HOMEPAGE: FaqItem[] = [
  {
    question: 'Vous remplacez mon comptable ?',
    answer:
      "Non. Je gère l'admin opérationnel (devis, facturation, suivi, fournisseurs, relances), votre comptable garde sa mission de certification, liasse fiscale et conseil fiscal. Je lui livre un dossier propre chaque mois — il gagne du temps, vous économisez.",
  },
  {
    question: "Pas d'engagement long ?",
    answer:
      "Je travaille à l'heure (mission ponctuelle) ou en pack mensuel reconductible tacitement. Pour les packs, le préavis de résiliation est de 15 jours fin de mois. Vous gardez la main.",
  },
  {
    question: 'Comment je vous transmets les infos au quotidien ?',
    answer:
      "Vocal, photo ou message WhatsApp. Je réponds sous 4h en jour ouvré. Vous n'avez aucun logiciel à apprendre.",
  },
  {
    question: 'C’est conforme RGPD et facturation électronique 2026-2027 ?',
    answer:
      "Oui. Toutes vos données sont hébergées en Europe. La facturation électronique (réforme PDP) est intégrée dans la préparation des factures que je gère via vos outils existants (Pennylane, Sage, etc.).",
  },
  {
    question: 'Comment je calcule combien d’heures il me faut ?',
    answer:
      "Estimation rapide : 1 devis ≈ 30-45 min, 1 facture ≈ 15-20 min, 1 relance ≈ 10 min. Pour ~10 devis et 15 factures par mois avec un peu de suivi, le Pack 10h (720€) suffit. Pour un accompagnement plus complet (incluant trésorerie + coordination fournisseurs), c'est plutôt le Pack 20h (1 400€). On en discute en appel découverte.",
  },
];

export const FAQ_TARIFS: FaqItem[] = [
  {
    question: 'Comment fonctionne la facturation des heures ?',
    answer:
      "En pack mensuel : forfait fixe quel que soit le nombre exact d'heures consommées (dans la limite du pack). En mission ponctuelle : tarif horaire 80€/h HT, facturation au temps réellement passé (arrondi au quart d'heure supérieur).",
  },
  {
    question: 'Et si je dépasse mon pack un mois ?',
    answer:
      "Si dépassement ponctuel (1 mois isolé) : facturation des heures supplémentaires à 80€/h HT. Si dépassement récurrent (>20% pendant 2 mois consécutifs) : on bascule au pack supérieur le mois suivant. Pas de surfacturation cachée.",
  },
  {
    question: 'Et si je sous-consomme un mois ?',
    answer:
      "Les heures du pack mensuel ne se reportent pas. Si vous sous-consommez 2 mois consécutifs, on bascule au pack inférieur. Mon objectif n'est pas de vous facturer du vide.",
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
