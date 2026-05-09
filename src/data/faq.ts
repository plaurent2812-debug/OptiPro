// src/data/faq.ts

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_HOMEPAGE: FaqItem[] = [
  {
    question: 'Vous remplacez mon comptable ?',
    answer: 'Non. Je gère l\'admin opérationnel, votre comptable continue son métier. Je lui livre un dossier propre chaque mois pour qu\'il fasse mieux son boulot.',
  },
  {
    question: 'Et si je ne suis pas satisfait ?',
    answer: 'Le 1er mois est un test. À l\'issue, vous décidez. Pas d\'engagement caché, pas de clause cachée. Si on continue, c\'est par cycles de 3 mois renouvelables.',
  },
  {
    question: 'Comment je vous transmets les infos depuis le chantier ?',
    answer: 'Vocal ou photo WhatsApp. Vous parlez 30 secondes, je fais le reste. Vous n\'apprenez aucun logiciel.',
  },
  {
    question: 'C\'est conforme RGPD et facturation électronique 2026-2027 ?',
    answer: 'Oui. Je suis prêt pour la réforme PDP (Plateformes de Dématérialisation Partenaires) et toutes vos données sont hébergées en Europe.',
  },
  {
    question: 'Combien ça coûte exactement pour mon activité ?',
    answer: '750€/mois jusqu\'à 30 documents, 1 150€ jusqu\'à 60, 1 500€ jusqu\'à 100. Voir la page Tarifs pour le détail.',
  },
];

export const FAQ_TARIFS: FaqItem[] = [
  {
    question: 'C\'est quoi un "document" exactement ?',
    answer: 'Un devis OU une facture. 30 documents/mois = par exemple 15 devis + 15 factures.',
  },
  {
    question: 'Et si je dépasse mon forfait un mois ?',
    answer: 'Si dépassement ponctuel (1 mois isolé) : aucun surcoût. Si dépassement régulier (>30% pendant 2 mois consécutifs) : on bascule au palier supérieur le mois suivant.',
  },
  {
    question: 'Et si mon volume baisse ?',
    answer: 'Même logique inverse : bascule au palier inférieur si sous-utilisation prolongée.',
  },
  {
    question: 'TVA ?',
    answer: 'Tarifs HT. Je suis en franchise en base de TVA (auto-entrepreneur, art. 293 B du CGI), donc pas de TVA à payer en plus pour vous.',
  },
  {
    question: 'Frais Stripe : qui les paie ?',
    answer: 'Refacturés en transparence (1,4% + 0,25€ par transaction réussie). Vous voyez le détail sur votre tableau de bord.',
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
