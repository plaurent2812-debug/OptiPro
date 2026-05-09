// src/components/ui/PricingCard.test.tsx
import { render, screen } from '@testing-library/react';
import PricingCard from './PricingCard';
import { PILOTE_FORFAITS } from '@/data/pricing';

describe('PricingCard', () => {
  test('affiche nom, prix, volume et cible du forfait', () => {
    render(<PricingCard forfait={PILOTE_FORFAITS[1]} />);
    expect(screen.getByText('Pilote 60')).toBeInTheDocument();
    expect(screen.getByText(/1 150€/)).toBeInTheDocument();
    expect(screen.getByText(/60 documents/i)).toBeInTheDocument();
    expect(screen.getByText(/1-3 salariés/i)).toBeInTheDocument();
  });

  test('affiche le badge "Recommandé" si recommended=true', () => {
    render(<PricingCard forfait={PILOTE_FORFAITS[1]} />);
    expect(screen.getByText('Recommandé')).toBeInTheDocument();
  });

  test('n\'affiche pas le badge sur les autres forfaits', () => {
    render(<PricingCard forfait={PILOTE_FORFAITS[0]} />);
    expect(screen.queryByText('Recommandé')).not.toBeInTheDocument();
  });
});
