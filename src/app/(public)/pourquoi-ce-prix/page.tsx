import type { Metadata } from 'next';
import PourquoiClient from './PourquoiClient';

export const metadata: Metadata = {
  title: { absolute: 'Pourquoi ce prix — Le calcul honnête | OptiPro' },
  description: 'Pourquoi je peux faire ça à 750€/mois. La question que tout le monde me pose, et la réponse complète. Sans bullshit.',
  alternates: { canonical: '/pourquoi-ce-prix' },
  openGraph: {
    title: 'Pourquoi 750€/mois — La transparence sur le pricing OptiPro',
    description: '10 ans d\'exploitation, un outil interne qui automatise 70%, 8-10 clients fidèles. Voilà comment je peux proposer un assistant admin à ce tarif.',
  },
};

export default function PourquoiCePrixPage() {
  return <PourquoiClient />;
}
