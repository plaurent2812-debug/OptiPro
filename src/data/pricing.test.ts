import {
  PILOTE_FORFAITS,
  computeFondateurPrice,
  formatPrice,
  MISE_EN_ROUTE_PRICE,
  MISE_EN_ROUTE_FONDATEUR_PRICE,
} from './pricing';

describe('pricing', () => {
  test('PILOTE_FORFAITS has 3 entries with correct prices', () => {
    expect(PILOTE_FORFAITS).toHaveLength(3);
    expect(PILOTE_FORFAITS[0]).toMatchObject({ id: 'pilote-30', price: 750 });
    expect(PILOTE_FORFAITS[1]).toMatchObject({ id: 'pilote-60', price: 1150 });
    expect(PILOTE_FORFAITS[2]).toMatchObject({ id: 'pilote-100', price: 1500 });
  });

  test('mise en route prices', () => {
    expect(MISE_EN_ROUTE_PRICE).toBe(750);
    expect(MISE_EN_ROUTE_FONDATEUR_PRICE).toBe(375);
  });

  test('computeFondateurPrice: M1 = 375 (setup unique)', () => {
    expect(computeFondateurPrice(750, 'M1')).toBe(375);
    expect(computeFondateurPrice(1150, 'M1')).toBe(375);
    expect(computeFondateurPrice(1500, 'M1')).toBe(375);
  });

  test('computeFondateurPrice: M2-M3 = -50% du forfait, arrondi 5€', () => {
    expect(computeFondateurPrice(750, 'M2-M3')).toBe(375);
    expect(computeFondateurPrice(1150, 'M2-M3')).toBe(575);
    expect(computeFondateurPrice(1500, 'M2-M3')).toBe(750);
  });

  test('computeFondateurPrice: M4-M6 = -25% du forfait, arrondi 5€', () => {
    expect(computeFondateurPrice(750, 'M4-M6')).toBe(565);
    expect(computeFondateurPrice(1150, 'M4-M6')).toBe(865);
    expect(computeFondateurPrice(1500, 'M4-M6')).toBe(1125);
  });

  test('computeFondateurPrice: M7+ = tarif plein', () => {
    expect(computeFondateurPrice(750, 'M7+')).toBe(750);
    expect(computeFondateurPrice(1150, 'M7+')).toBe(1150);
  });

  test('formatPrice: euro français avec espace pour milliers', () => {
    expect(formatPrice(750)).toBe('750€');
    expect(formatPrice(1150)).toBe('1 150€');
    expect(formatPrice(1500)).toBe('1 500€');
  });
});
