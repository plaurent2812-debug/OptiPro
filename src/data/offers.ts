// Catalogue d'offres utilisé par le builder de devis et de factures côté back-office.
// Source de vérité tarifaire : src/data/pricing.ts (MISSION_PACKS, MISSION_HOURLY_RATE).

export interface Offer {
  id: string;
  name: string;
  description: string;
  price: string;
  delay?: string;
  features: string[];
}

export interface OfferCategory {
  id: 'packs' | 'mission' | 'projets';
  icon: string;
  tagline: string;
  title: string;
  subtitle: string;
  description: string;
  offers: Offer[];
  ctaLabel: string;
  ctaHref: string;
}

export const offerCategories: OfferCategory[] = [
  {
    id: 'packs',
    icon: '📦',
    tagline: 'Packs mensuels reconductibles',
    title: 'Packs mensuels',
    subtitle: "Assistant administratif et opérationnel — sans engagement long.",
    description:
      "Pour un suivi régulier : devis, factures, relances, trésorerie, dossier comptable. Préavis 15 jours fin de mois. Période d'essai 30 jours sans frais.",
    offers: [
      {
        id: 'pack-essentiel',
        name: 'Pack Essentiel — 10h',
        description: 'Pour démarrer en douceur ou stabiliser un volume d\'admin léger.',
        price: '650 € HT/mois',
        delay: 'Démarrage sous 2 semaines',
        features: [
          '10 heures dédiées par mois',
          'Devis, factures, relances, classement',
          'WhatsApp dédié, réponse sous 4h en jour ouvré',
          'Visio bilan mensuelle (30 min)',
          'Préavis 15 jours fin de mois',
        ],
      },
      {
        id: 'pack-croissance',
        name: 'Pack Croissance — 20h',
        description: 'L\'offre la plus courante. Bras droit administratif complet pour un artisan ou TPE en croissance.',
        price: '1 200 € HT/mois',
        delay: 'Démarrage sous 2 semaines',
        features: [
          '20 heures dédiées par mois',
          'Devis, ADV, suivi de projet, facturation',
          'Trésorerie suivie, reporting mensuel commenté',
          'Préparation du dossier mensuel comptable',
          'WhatsApp dédié, réponse sous 4h en jour ouvré',
          'Visio bilan mensuelle (30 min)',
        ],
      },
      {
        id: 'pack-pilotage',
        name: 'Pack Pilotage — 35h',
        description: 'Pour les TPE qui veulent déléguer l\'intégralité de l\'opérationnel admin et garder la main sur le pilotage.',
        price: '1 950 € HT/mois',
        delay: 'Démarrage sous 2 semaines',
        features: [
          '35 heures dédiées par mois',
          'Admin opérationnel complet, multi-projet',
          'Coordination fournisseurs / sous-traitants',
          'Reporting hebdomadaire + visio bilan mensuelle',
          'WhatsApp dédié, réponse sous 4h en jour ouvré',
          'Préavis 15 jours fin de mois',
        ],
      },
    ],
    ctaLabel: 'Réserver un appel découverte',
    ctaHref: '/contact',
  },
  {
    id: 'mission',
    icon: '⏱️',
    tagline: 'Mission ponctuelle',
    title: 'Mission à l\'heure',
    subtitle: 'Sans engagement — pour un besoin précis ou un dépannage.',
    description:
      "Pour un besoin ponctuel ou un dépannage : rattrapage admin, mise en place d'un process, audit ciblé. Facturé à l'heure réalisée, devis préalable.",
    offers: [
      {
        id: 'mission-heure',
        name: 'Mission à l\'heure',
        description: 'Tarif horaire pour interventions ponctuelles, sans engagement.',
        price: '75 € HT/h',
        delay: 'Sur devis',
        features: [
          'Devis préalable détaillé',
          'Heures facturées au réel',
          'Aucun engagement de durée',
          'Démarrage rapide après acceptation',
        ],
      },
    ],
    ctaLabel: 'Demander un devis',
    ctaHref: '/contact',
  },
  {
    id: 'projets',
    icon: '🚀',
    tagline: 'Projets sur mesure',
    title: 'Projets sur mesure',
    subtitle: 'Outils internes, automatisations, intégrations.',
    description:
      "Pour les besoins qui dépassent l'admin opérationnel : outil métier dédié, automatisation, intégration entre vos outils (Pennylane, Excel, TMS, CRM…). Cadrage avant devis.",
    offers: [
      {
        id: 'projet-sur-mesure',
        name: 'Projet sur mesure',
        description: 'Cadrage opérationnel et chiffrage selon vos besoins — outil interne, automatisation ou intégration.',
        price: 'Sur devis',
        delay: '2-8 semaines selon scope',
        features: [
          'Cahier des charges co-construit',
          'Architecture adaptée à votre volume',
          'Intégrations avec vos outils existants',
          'Formation et documentation complète',
        ],
      },
    ],
    ctaLabel: 'Cadrer mon projet',
    ctaHref: '/contact',
  },
];

export interface Subscription {
  name: string;
  price: string;
  description: string;
  features: string[];
}

export const subscription: Subscription = {
  name: 'Maintenance technique',
  price: '90 € HT / mois',
  description:
    "Pour garder un outil livré en projet sur mesure sécurisé et à jour, sans surprise. Les évolutions sont facturées à la demande.",
  features: [
    'Hébergement et nom de domaine maintenus',
    'Mises à jour techniques et sécurité',
    'Support technique sous 48h ouvrées',
    'Évolutions ponctuelles facturées 75 €/h HT',
    'Sans engagement, résiliable au mois',
  ],
};
