import type { Metadata } from 'next';
import CityServicePage from '@/components/seo/CityServicePage';

export const metadata: Metadata = {
  title: 'Assistant administratif à Mougins — Bras droit admin & opérationnel OptiPro',
  description: 'Externalisation administrative pour artisans, indépendants et TPE à Mougins. Devis, factures, fournisseurs, suivi de chantier. Dès 650€/mois ou 75€/h.',
  alternates: { canonical: '/services/mougins' },
  openGraph: {
    title: 'Assistant administratif à Mougins — OptiPro',
    description: 'Le bras droit admin & opérationnel des artisans mouginois. Mission ou pack mensuel dès 650€/mois.',
    url: 'https://www.opti-pro.fr/services/mougins',
    type: 'website',
  },
};

export default function MouginsPage() {
  return (
    <CityServicePage
      cityName="Mougins"
      cityNameInClause="à Mougins"
      citySlug="mougins"
      postalCodes={['06250']}
      metaTitle={metadata.title as string}
      metaDescription={metadata.description as string}
      h1="Le bras droit administratif des artisans et TPE mouginois"
      intro="Vous êtes artisan ou dirigeant de TPE à Mougins. Entre le village perché, les zones résidentielles haut de gamme et les golfs, vous travaillez pour une clientèle exigeante qui ne tolère ni les délais ni l'amateurisme. OptiPro reprend tout votre admin opérationnel — devis structurés sous 1h, facturation J+1, relances pro — pour que votre image reste à la hauteur de la zone."
      economicContext="Mougins se distingue par une concentration de villas haut de gamme, un tissu de PME tech et créatives, et une clientèle internationale fortunée. Les artisans et indépendants mouginois travaillent souvent pour des propriétaires qui comparent les devis, exigent des prestations irréprochables et changent de prestataire au moindre faux pas administratif. Un devis qui arrive 48h après la visite, une facture envoyée avec 3 semaines de retard ou une relance maladroite peut faire perdre un client à vie. Sur cette zone, l'admin n'est pas une corvée — c'est un signal de qualité."
      geo={{ latitude: 43.6004, longitude: 7.0001 }}
      whyHere={[
        {
          title: 'Image et professionnalisme',
          description: 'Vos devis et factures vous représentent autant que votre travail. OptiPro structure tous vos documents commerciaux pour qu\'ils reflètent la qualité de votre prestation.',
        },
        {
          title: 'Réactivité face à une clientèle internationale',
          description: 'Les propriétaires de Mougins comparent souvent 2-3 devis. Celui qui arrive en premier (et bien fait) gagne dans 70% des cas.',
        },
        {
          title: 'Connaissance du tissu local',
          description: 'Pierre est basé à Vence, à 30 km de Mougins. Il connaît la zone, les habitudes commerciales et les délais réalistes du marché haut de gamme PACA.',
        },
        {
          title: 'Bilingue FR/EN si besoin',
          description: 'Beaucoup de propriétaires à Mougins sont anglophones. OptiPro peut produire vos devis et factures en bilingue sans surcoût.',
        },
      ]}
      services={[
        {
          icon: '📄',
          title: 'Devis premium sous 1h',
          description: 'Vocal WhatsApp depuis le chantier → devis structuré, design pro, envoyé au client dans l\'heure. Signature en ligne. Vous gagnez les dossiers à la rapidité.',
        },
        {
          icon: '💰',
          title: 'Relances professionnelles',
          description: 'Sur une clientèle haut de gamme, le ton des relances est crucial. OptiPro gère un cycle de relance courtois mais ferme (J+15, J+30, J+45).',
        },
        {
          icon: '🤝',
          title: 'Coordination sous-traitants',
          description: 'Sur les chantiers Mougins, vous mobilisez souvent 5-15 corps de métier. OptiPro suit les commandes, livraisons, points fournisseurs.',
        },
        {
          icon: '📋',
          title: 'Préparation comptable',
          description: 'Dossier mensuel propre livré à votre expert-comptable. Factures classées par chantier, frais OCR-isés, FEC à jour. Économie réelle sur les honoraires.',
        },
        {
          icon: '📊',
          title: 'Marge réelle par projet',
          description: 'Sur des chantiers à 80-300k€, la marge se joue sur la précision du suivi. OptiPro consolide fournitures, MO et sous-traitance en temps réel.',
        },
        {
          icon: '🗓️',
          title: 'Agenda commercial',
          description: 'Prise de RDV, confirmations, relances. Une clientèle exigeante n\'oublie rien — vous non plus.',
        },
      ]}
      useCases={[
        {
          profile: 'Architecte d\'intérieur indépendante à Mougins',
          situation: '8 ans d\'activité, clientèle 90% internationale. Devis complexes (mood boards, fournitures, planches techniques) qui prenaient 6-8h chacun. Délai moyen de 4-5 jours.',
          result: 'Pack Croissance 20h à 1 200€/mois. OptiPro structure les devis et gère les fournisseurs. Délai réduit à 24h. Taux de signature +20%.',
        },
        {
          profile: 'Paysagiste à Mougins-le-Haut',
          situation: '15 ans d\'activité, 3 salariés. Entretien de parcs et création paysagère pour villas haut de gamme. Facturation chaotique, 5-7k€ d\'impayés en cours.',
          result: 'Pack Croissance 20h. Facturation centralisée, relances pro. 4 200€ rattrapés en 2 mois. Le dirigeant retrouve du temps pour la conception.',
        },
        {
          profile: 'Consultant indépendant à Mougins (Sophia voisin)',
          situation: 'B2B services digitaux. 60 factures/mois pour PME locales. Gestion comptable lourde, pas de visibilité sur les impayés.',
          result: 'Pack Essentiel 10h à 650€/mois. Facturation et suivi automatisés. Dashboard trésorerie mis en place. Reprend 5h/semaine.',
        },
      ]}
      faq={[
        {
          question: 'Vous travaillez avec des artisans dans tout Mougins ?',
          answer: 'Oui. Mougins-Village, Mougins-le-Haut, Tournamy, Saint-Basile, et toute la commune. Service 100% à distance, sans frais de déplacement sur la zone PACA.',
        },
        {
          question: 'Vous gérez les devis et factures en anglais ?',
          answer: 'Oui. Beaucoup de propriétaires à Mougins sont anglophones. OptiPro produit vos devis et factures bilingues FR/EN sans surcoût. Les emails de relance peuvent aussi être adaptés.',
        },
        {
          question: 'Vous avez l\'habitude des chantiers haut de gamme ?',
          answer: 'Oui. Pierre a piloté des projets de 20k€ à 1M€ chez Factory pendant 5 ans (portefeuille ADV 7M€/an). Les méthodes scalent du petit chantier au gros projet villa.',
        },
        {
          question: 'Combien ça coûte pour un artisan mouginois ?',
          answer: 'Deux formules. Mission à l\'heure (75€/h HT) pour les besoins ponctuels. Pack mensuel reconductible : Pack Essentiel 10h à 650€/mois, Pack Croissance 20h à 1 200€/mois (le plus courant), Pack Pilotage 35h à 1 950€/mois. Préavis 15 jours fin de mois. Période d\'essai 30 jours sans frais.',
        },
        {
          question: 'Vous pouvez vous déplacer à Mougins ?',
          answer: 'Oui, possible pour un audit initial ou un point trimestriel. Vence est à 30 km de Mougins. Aucun frais de déplacement facturé sur la zone PACA.',
        },
      ]}
    />
  );
}
