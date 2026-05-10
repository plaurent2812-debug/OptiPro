import type { Metadata } from 'next';
import MethodeClient from './MethodeClient';

export const metadata: Metadata = {
  title: { absolute: 'La méthode OptiPro — Comment ça se passe en vrai' },
  description: 'Du jour 1 au quotidien : appel découverte gratuit, mois 1 mise en route, quotidien (vocaux WhatsApp), rythme régulier (visio bi-mensuelle, hotline 9h-17h). Voilà à quoi ressemble travailler avec moi.',
  alternates: { canonical: '/methode' },
  openGraph: {
    title: 'La méthode OptiPro — Comment ça se passe',
    description: 'Vocal WhatsApp depuis le chantier, je gère le bureau. Visio bilan toutes les 2 semaines, hotline 9h-17h.',
  },
};

export default function MethodePage() {
  return <MethodeClient />;
}
