// src/app/(public)/programme-fondateur/page.tsx
import type { Metadata } from 'next';
import FondateurClient from './FondateurClient';

export const metadata: Metadata = {
  title: { absolute: 'Programme Fondateur — 3 places exceptionnelles | OptiPro' },
  description:
    "Vous êtes parmi les 3 premiers à rejoindre OptiPro ? Tarif progressif sur 6 mois (-50% / -25% / plein) en échange d'un témoignage et d'autorisation de communication. Économie totale ~3 400€ sur Pilote 60.",
  alternates: { canonical: '/programme-fondateur' },
  openGraph: {
    title: 'Programme Fondateur OptiPro — 3 places, tarif progressif sur 6 mois',
    description:
      "Tarif progressif (-50% / -25% / plein) en échange d'un témoignage. Fermeture dès le 3e signé.",
  },
};

export default function ProgrammeFondateurPage() {
  return <FondateurClient />;
}
