// src/data/comparison.ts

export interface ComparisonCard {
  vs: string;
  eux: string;
  moi: string;
}

export const COMPARISON_CARDS: ComparisonCard[] = [
  {
    vs: 'Un(e) assistant(e) indépendant(e)',
    eux: '1 050€ à 1 500€/mois pour 30h. Pas d\'outil intégré, reporting Excel mensuel.',
    moi: '750€ tout inclus, outil + tableau de bord temps réel, hotline 9h-17h.',
  },
  {
    vs: 'Un mi-temps salarié(e)',
    eux: '~2 300€ chargés/mois. Engagement 18-24 mois. Charges patronales, congés, gestion RH.',
    moi: '750€ tout inclus. Cycles 3 mois sans engagement long. Pas de charges sociales.',
  },
  {
    vs: 'Un cabinet comptable',
    eux: 'Limité à la compta. Pas de relances, pas de devis, pas de pilotage temps réel.',
    moi: 'Je gère tout l\'admin opérationnel. Votre comptable garde son rôle.',
  },
];
