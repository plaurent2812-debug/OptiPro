import type { Metadata } from 'next';
import PourquoiClient from './PourquoiClient';

export const metadata: Metadata = {
  title: { absolute: 'Pourquoi 80€/h — Le calcul honnête | OptiPro' },
  description: "Pourquoi 80€/h et pas 150€ ? 10 ans en pilotage d'exploitation et logistique, indépendant qui démarre. Sans bullshit.",
  alternates: { canonical: '/pourquoi-ce-prix' },
  openGraph: {
    title: 'Pourquoi 80€/h — La transparence sur le pricing OptiPro',
    description: "10 ans en pilotage d'exploitation, tarif d'entrée d'un indépendant qui démarre. Le calcul complet sans bullshit.",
  },
};

export default function PourquoiCePrixPage() {
  return <PourquoiClient />;
}
