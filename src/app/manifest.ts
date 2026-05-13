import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'OptiPro — Le bras droit administratif des artisans et TPE',
    short_name: 'OptiPro',
    description:
      'Assistant administratif et opérationnel externalisé pour artisans, indépendants et TPE. Devis, factures, relances, trésorerie, dossier comptable. Dès 650 €/mois ou 75 €/h.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0d1b40',
    icons: [
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
