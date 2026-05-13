// src/data/testimonials.ts
//
// Source de vérité des témoignages clients OptiPro.
// Ajouter un témoignage = ajouter un objet ici. Le site se met à jour
// automatiquement (page /temoignages + cards homepage + AggregateRating).

export interface Testimonial {
  id: string;
  // Identité (anonymisable selon préférence client)
  firstName: string;
  lastName?: string; // initiale seulement si anonymisation
  profession: string; // "Plombier", "Consultant indépendant", "Dirigeant TPE"
  company?: string; // entreprise (si autorisée)
  city: string; // ville d'activité
  // Contenu
  rating: 1 | 2 | 3 | 4 | 5;
  shortQuote: string; // 1 phrase, ≤ 120 caractères, pour cards homepage
  fullText: string; // témoignage complet 100-400 mots
  // Métriques chiffrées (impact concret)
  metrics?: Array<{ value: string; label: string }>;
  // Métadonnées
  pack: 'Essentiel' | 'Croissance' | 'Pilotage' | 'Mission ponctuelle';
  collaborationStart: string; // "Mars 2026"
  publishedAt: string; // ISO "YYYY-MM-DD"
  // Optionnels
  photo?: string; // /testimonials/firstname.jpg (depuis /public)
  videoUrl?: string; // YouTube/Vimeo embed
  verifiedReview?: boolean; // avis Google vérifié
}

// Liste des témoignages publiés.
// Vide pour le moment — se remplira dès que les premiers Fondateurs signent
// et autorisent la publication de leur retour.
export const TESTIMONIALS: Testimonial[] = [
  // Exemple de structure (commenté, sert de template) :
  //
  // {
  //   id: 'jean-d-plombier-cannes',
  //   firstName: 'Jean',
  //   lastName: 'D.',
  //   profession: 'Plombier indépendant',
  //   company: 'Plomberie Dupont',
  //   city: 'Cannes',
  //   rating: 5,
  //   shortQuote: "Mes devis partent en 1h. Mon CA a augmenté de 15% en 3 mois.",
  //   fullText: "Quand j'ai signé avec OptiPro en mars, je faisais mes devis le dimanche soir...",
  //   metrics: [
  //     { value: '+15%', label: 'de CA en 3 mois' },
  //     { value: '8h/sem', label: 'récupérées' },
  //     { value: '3 200€', label: "d'impayés rattrapés" },
  //   ],
  //   pack: 'Croissance',
  //   collaborationStart: 'Mars 2026',
  //   publishedAt: '2026-06-15',
  //   verifiedReview: true,
  // },
];

// Helpers
export function getPublishedTestimonials(): Testimonial[] {
  return TESTIMONIALS.filter((t) => !!t.publishedAt);
}

export function getFeaturedTestimonials(count = 3): Testimonial[] {
  return getPublishedTestimonials()
    .sort((a, b) => b.rating - a.rating)
    .slice(0, count);
}

export function getAggregateRating(): { value: number; count: number } | null {
  const published = getPublishedTestimonials();
  if (published.length === 0) return null;
  const sum = published.reduce((acc, t) => acc + t.rating, 0);
  return {
    value: Math.round((sum / published.length) * 10) / 10,
    count: published.length,
  };
}
