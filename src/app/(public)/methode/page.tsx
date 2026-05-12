import type { Metadata } from 'next';
import MethodeClient from './MethodeClient';

export const metadata: Metadata = {
  title: { absolute: 'La méthode OptiPro — Comment ça se passe en vrai' },
  description: 'Du jour 1 au quotidien : appel découverte gratuit, démarrage rapide, quotidien (vocaux WhatsApp), visio bilan mensuelle. Voilà à quoi ressemble travailler avec moi sur une mission ou en pack.',
  alternates: { canonical: '/methode' },
  openGraph: {
    title: 'La méthode OptiPro — Comment ça se passe',
    description: 'Vocal WhatsApp depuis votre activité, je gère le bureau. Visio bilan mensuelle. Préavis 15 jours sur les packs.',
  },
};

export default function MethodePage() {
  return <MethodeClient />;
}
