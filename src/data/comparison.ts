// src/data/comparison.ts

import { MISSION_PACKS, formatPrice } from './pricing';

export interface ComparisonCard {
  vs: string;
  eux: string;
  moi: string;
}

// On compare au Pack 20h (le palier recommandé)
const refPack = MISSION_PACKS[1]; // pack-20

export const COMPARISON_CARDS: ComparisonCard[] = [
  {
    vs: 'Un(e) assistant(e) indépendant(e)',
    eux: "45-60€/h pour 20-30h/mois (900€ à 1 800€). Profil junior, focus exécution, sans expérience opérationnelle senior.",
    moi: `${formatPrice(refPack.monthlyPrice)} pour 20h/mois (${refPack.hourlyEquivalent}€/h équivalent). 10 ans en pilotage d'exploitation et logistique, je vais 2-3 fois plus vite sur ce qui compte vraiment.`,
  },
  {
    vs: 'Un mi-temps salarié(e)',
    eux: "~2 300€/mois chargés, engagement 18-24 mois, charges patronales, congés payés, gestion RH. Vous portez le risque.",
    moi: `${formatPrice(refPack.monthlyPrice)} en pack mensuel reconductible. Préavis 15 jours, zéro charge sociale, zéro paperasse RH. Vous testez sans risque.`,
  },
  {
    vs: 'Un cabinet comptable',
    eux: "Périmètre limité à la comptabilité réglementée. Pas de devis client, pas de relances, pas de pilotage des fournisseurs, pas de coordination chantier.",
    moi: "Je gère tout l'admin opérationnel quotidien. Votre comptable garde sa mission réglementaire — je lui livre un dossier propre chaque mois.",
  },
];
