import type { Metadata } from 'next';
import CityServicePage from '@/components/seo/CityServicePage';

export const metadata: Metadata = {
  title: 'Assistant administratif à Nice — Bras droit admin & opérationnel OptiPro',
  description: 'Externalisation administrative pour artisans, indépendants et TPE à Nice. Devis, factures, relances, fournisseurs. Dès 650€/mois ou 75€/h. Vence (06) à 20 km, intervention sur Nice et Alpes-Maritimes.',
  alternates: { canonical: '/services/nice' },
  openGraph: {
    title: 'Assistant administratif à Nice — OptiPro',
    description: 'Le bras droit admin & opérationnel des artisans et TPE niçois. Mission ou pack mensuel dès 650€/mois.',
    url: 'https://www.opti-pro.fr/services/nice',
    type: 'website',
  },
};

export default function NicePage() {
  return (
    <CityServicePage
      cityName="Nice"
      cityNameInClause="à Nice"
      citySlug="nice"
      postalCodes={['06000', '06100', '06200', '06300']}
      metaTitle={metadata.title as string}
      metaDescription={metadata.description as string}
      h1="Le bras droit administratif des artisans et TPE niçois"
      intro="Vous êtes artisan ou dirigeant de TPE à Nice. Vous bossez entre Magnan, le Vieux-Nice et l'arrière-pays, et chaque semaine 5 à 10h partent en admin au lieu d'aller sur vos chantiers ou vos rendez-vous clients. OptiPro prend en charge devis, facturation, relances, suivi fournisseurs et préparation comptable — vous récupérez votre temps."
      economicContext="Nice concentre une part importante des artisans, indépendants et petites TPE de la Côte d'Azur — du bâtiment au tertiaire en passant par la restauration et les services à la personne. Le tissu économique niçois se caractérise par une forte saisonnalité (pic touristique d'avril à octobre), des chantiers fragmentés sur un territoire dense, et une concurrence élevée qui rend chaque devis envoyé sous 24h décisif. La marge ne se perd presque jamais dans le métier — presque toujours dans l'organisation autour."
      geo={{ latitude: 43.7102, longitude: 7.2620 }}
      whyHere={[
        {
          title: 'Proximité immédiate',
          description: 'OptiPro est basé à Vence, à 20 km de Nice. Déplacement physique possible si besoin (audit initial, point trimestriel) — mais 95% du travail se fait à distance via WhatsApp et visio.',
        },
        {
          title: 'Connaissance du tissu local',
          description: 'Pierre a 10 ans d\'expérience en pilotage d\'exploitation, dont plusieurs années auprès d\'artisans BTP en PACA. Il connaît les habitudes commerciales locales, les délais de paiement réalistes, les sous-traitants récurrents.',
        },
        {
          title: 'Réactivité sur les pics saisonniers',
          description: 'D\'avril à octobre, les artisans niçois sont sur les chantiers. C\'est là que les devis explosent et que les factures s\'accumulent. OptiPro absorbe ce pic sans que vous ayez à embaucher.',
        },
        {
          title: 'Aucun déplacement facturé',
          description: 'Service 100% à distance pour Nice et Alpes-Maritimes. WhatsApp dédié, réponse sous 4h en jour ouvré. Aucun frais de déplacement caché.',
        },
      ]}
      services={[
        {
          icon: '📄',
          title: 'Devis & factures express',
          description: 'Vous m\'envoyez un vocal depuis le chantier ou le RDV, je crée le devis et l\'envoie au client dans l\'heure. Conforme à la facturation électronique 2026-2027.',
        },
        {
          icon: '💰',
          title: 'Relances et trésorerie',
          description: 'Calendrier de relance personnalisé (J+15, J+30, J+45). 2 à 5k€/mois récupérés sur les factures qui passaient à la trappe.',
        },
        {
          icon: '🤝',
          title: 'Coordination fournisseurs',
          description: 'Suivi des commandes, relances livraisons, gestion des litiges sous-traitants. Particulièrement utile pour les artisans BTP avec 5-20 fournisseurs réguliers.',
        },
        {
          icon: '📋',
          title: 'Préparation comptable mensuelle',
          description: 'Dossier propre livré chaque mois à votre expert-comptable niçois. Factures classées, frais saisis, FEC à jour. Votre comptable gagne du temps, vous économisez sur ses honoraires.',
        },
        {
          icon: '📊',
          title: 'Tableaux de bord',
          description: 'Visibilité sur votre trésorerie, vos en-cours, vos marges par chantier ou client. Visio bilan mensuelle de 30 min.',
        },
        {
          icon: '🗓️',
          title: 'Planning & RDV',
          description: 'Gestion de votre agenda commercial : prises de RDV clients, confirmations, relances. Vous n\'oubliez plus un rendez-vous.',
        },
      ]}
      faq={[
        {
          question: 'Vous travaillez avec des artisans dans toute la métropole de Nice ?',
          answer: 'Oui. Nice-Centre, Magnan, Cimiez, Saint-Roch, Nice-Nord, Nice-Ouest, mais aussi La Trinité, Saint-André, Cagnes-sur-Mer, Saint-Laurent-du-Var et toute la métropole Nice Côte d\'Azur. Service 100% à distance.',
        },
        {
          question: 'Vous vous déplacez à Nice si besoin ?',
          answer: 'Oui, c\'est possible pour un audit initial ou un point trimestriel. Vence est à 20 km de Nice — aucun frais de déplacement facturé sur la zone métropolitaine niçoise.',
        },
        {
          question: 'Vous connaissez les expert-comptables de Nice ?',
          answer: 'Je n\'ai pas de partenariat exclusif. Je travaille avec n\'importe quel expert-comptable que vous avez déjà (à Nice ou ailleurs) en lui livrant un dossier propre chaque mois. Pennylane, Sage, Cegid, Quickbooks, Excel — j\'utilise vos outils existants, pas l\'inverse.',
        },
        {
          question: 'Combien ça coûte pour un artisan niçois ?',
          answer: 'Deux formules. Mission à l\'heure (75€/h HT) pour les besoins ponctuels — sans engagement. Pack mensuel reconductible : Pack Essentiel 10h à 650€/mois, Pack Croissance 20h à 1 200€/mois (le plus courant), Pack Pilotage 35h à 1 950€/mois. Préavis 15 jours fin de mois. Période d\'essai 30 jours sans frais.',
        },
        {
          question: 'Vous pouvez démarrer rapidement ?',
          answer: 'Oui. Appel découverte gratuit de 30 min sous 48h après votre demande. Si on est d\'accord, démarrage en moins de 2 semaines. La mise en route est incluse dans les premières heures du pack — pas facturée à part.',
        },
      ]}
    />
  );
}
