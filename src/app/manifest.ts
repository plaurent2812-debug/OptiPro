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
    icons: [
      // Icône carrée servie par src/app/icon.png (640x640).
      // Ne pas pointer vers /logo.png : format 800x255, non carré, inadapté à une icône PWA.
      {
        src: '/icon.png',
        sizes: '640x640',
        type: 'image/png',
      },
    ],
  };
}
