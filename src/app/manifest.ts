import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'OptiPro — Sites & outils web sur mesure pour artisans et TPE',
    short_name: 'OptiPro',
    description:
      'Création de sites vitrines, web apps et outils métier sur mesure pour artisans, indépendants et TPE en PACA. Site vitrine dès 990 €, maintenance dès 79 €/mois.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0d1b40',
    // Icônes PNG carrées dédiées, générées depuis le logo et encodées en palette
    // réduite (logo texte = peu de couleurs). Ne pas pointer vers /logo.png :
    // format 800x255, non carré, 63 KiB — inadapté à une icône PWA.
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        // Safe-zone respectée (logo à 60% du canvas) pour le recadrage Android.
        src: '/icon-maskable-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
