// src/data/pricing.ts

export type PilotePeriod = 'M1' | 'M2-M3' | 'M4-M6' | 'M7+';

export interface PiloteForfait {
  id: 'pilote-30' | 'pilote-60' | 'pilote-100';
  name: string;
  price: number; // HT mensuel
  volumeDocs: number;
  volumeFrais: number;
  cible: string;
  recommended?: boolean;
}

export interface PiloteOption {
  id: string;
  name: string;
  description: string;
  price: string;
}

export interface VisibiliteOffer {
  monthlyPrice: number; // HT mensuel ajouté au Pilote
  setupPrice: number; // one-shot
  setupInstallments: { count: number; amount: number }; // paiement étalé
  engagementMonths: number;
  offeredOnForfaitId: PiloteForfait['id'];
  features: string[];
}

// === MISSION (offre transitoire mai-juillet 2026) ===

export interface MissionPack {
  id: 'pack-10' | 'pack-20' | 'pack-30';
  name: string;
  hours: number;
  monthlyPrice: number; // HT/mois
  hourlyEquivalent: number; // arrondi à l'euro
  discount: number; // % vs tarif horaire
  cible: string;
  recommended?: boolean;
}

/**
 * Tarif horaire des missions ponctuelles ou packs.
 * Référence : responsable d'exploitation indépendant confirmé débutant.
 */
export const MISSION_HOURLY_RATE = 75;

export const MISSION_PACKS: MissionPack[] = [
  {
    id: 'pack-10',
    name: 'Pack Essentiel',
    hours: 10,
    monthlyPrice: 650,
    hourlyEquivalent: 65,
    discount: 13,
    cible: 'Artisan ou petite TPE qui veut tester la délégation — relances, factures, organisation de base.',
  },
  {
    id: 'pack-20',
    name: 'Pack Croissance',
    hours: 20,
    monthlyPrice: 1200,
    hourlyEquivalent: 60,
    discount: 20,
    cible: 'TPE ou artisan déjà débordé qui veut un vrai bras droit récurrent — facturation, fournisseurs, planning, optimisations.',
    recommended: true,
  },
  {
    id: 'pack-30',
    name: 'Pack Pilotage',
    hours: 35,
    monthlyPrice: 1950,
    hourlyEquivalent: 56,
    discount: 26,
    cible: 'TPE en croissance qui veut un responsable opérations externalisé — process, dashboards, automatisations, pilotage.',
  },
];

export const PILOTE_VISIBILITE: VisibiliteOffer = {
  monthlyPrice: 75,
  setupPrice: 990,
  setupInstallments: { count: 3, amount: 330 },
  engagementMonths: 12,
  offeredOnForfaitId: 'pilote-100',
  features: [
    'Site vitrine professionnel (2 à 3 pages)',
    'Formulaire de contact intégré',
    'Hébergement Vercel + nom de domaine inclus',
    'Mises à jour de contenu (textes, photos)',
    'Maintenance technique + sécurité',
    'Vous restez propriétaire du contenu',
  ],
};

export const PILOTE_FORFAITS: PiloteForfait[] = [
  {
    id: 'pilote-30',
    name: 'Pilote 30',
    price: 690,
    volumeDocs: 30,
    volumeFrais: 50,
    cible: 'Artisan solo ou avec 1 salarié',
  },
  {
    id: 'pilote-60',
    name: 'Pilote 60',
    price: 1150,
    volumeDocs: 60,
    volumeFrais: 100,
    cible: 'Artisan + 1-3 salariés',
    recommended: true,
  },
  {
    id: 'pilote-100',
    name: 'Pilote 100',
    price: 1500,
    volumeDocs: 100,
    volumeFrais: 200,
    cible: 'TPE 4-8 personnes',
  },
];

// Frais de mise en route (Mois 1 — facturé une seule fois). Coïncide actuellement
// avec le prix mensuel de Pilote 30, mais les deux valeurs sont indépendantes et
// peuvent diverger.
export const MISE_EN_ROUTE_PRICE = 750;

export const PILOTE_OPTIONS: PiloteOption[] = [
  {
    id: 'coordination-leger',
    name: 'Coordination prestataires — léger',
    description: "Moins de 30 min/semaine d'échanges avec un prestataire externe.",
    price: '+50€/mois',
  },
  {
    id: 'coordination-regulier',
    name: 'Coordination prestataires — régulier',
    description: "30 min à 1h/semaine d'échanges (suivi actif).",
    price: '+120€/mois',
  },
  {
    id: 'coordination-soutenu',
    name: 'Coordination prestataires — soutenu',
    description: '1 à 2h/semaine (prestataire critique, demandes fréquentes).',
    price: '+220€/mois',
  },
  {
    id: 'reporting-setup',
    name: 'Setup KPI custom (one-shot)',
    description: "Création initiale d'un nouveau tableau ou KPI sur mesure.",
    price: '150€ une fois',
  },
  {
    id: 'reporting-pack',
    name: 'Pack reporting avancé',
    description: "Jusqu'à 5 KPI custom + 1 dashboard dédié + ajustements illimités.",
    price: '+120€/mois',
  },
  {
    id: 'paie-prep',
    name: 'Préparation éléments de paie',
    description:
      "Mise en forme des éléments variables transmis à votre comptable. Jusqu'à 3 salariés (+20€/salarié au-delà). OptiPro ne fait pas la paie réglementaire.",
    price: '+50€/mois',
  },
  {
    id: 'multi-societe',
    name: 'Multi-société / Holding / SCI',
    description:
      'Sur devis (entre +50% et +70% du forfait par entité additionnelle, selon complexité).',
    price: 'Sur devis',
  },
];

export function formatPrice(price: number): string {
  return price >= 1000
    ? `${Math.floor(price / 1000)} ${(price % 1000).toString().padStart(3, '0')}€`
    : `${price}€`;
}
