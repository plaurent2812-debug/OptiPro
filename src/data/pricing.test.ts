import {
  PILOTE_FORFAITS,
  computeFondateurPrice,
  formatPrice,
  MISE_EN_ROUTE_PRICE,
  MISE_EN_ROUTE_FONDATEUR_PRICE,
  MISSION_PACKS,
  MISSION_HOURLY_RATE,
} from './pricing';

describe('pricing', () => {
  test('PILOTE_FORFAITS has 3 entries with correct prices', () => {
    expect(PILOTE_FORFAITS).toHaveLength(3);
    expect(PILOTE_FORFAITS[0]).toMatchObject({ id: 'pilote-30', price: 690 });
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

describe('mission pricing', () => {
  test('MISSION_HOURLY_RATE is 75', () => {
    expect(MISSION_HOURLY_RATE).toBe(75);
  });

  test('MISSION_PACKS has 3 entries with correct prices and hours', () => {
    expect(MISSION_PACKS).toHaveLength(3);
    expect(MISSION_PACKS[0]).toMatchObject({ id: 'pack-10', name: 'Pack Essentiel', hours: 10, monthlyPrice: 650, hourlyEquivalent: 65 });
    expect(MISSION_PACKS[1]).toMatchObject({ id: 'pack-20', name: 'Pack Croissance', hours: 20, monthlyPrice: 1200, hourlyEquivalent: 60, recommended: true });
    expect(MISSION_PACKS[2]).toMatchObject({ id: 'pack-30', name: 'Pack Pilotage', hours: 35, monthlyPrice: 1950, hourlyEquivalent: 56 });
  });

  test('MISSION_PACKS discounts compute correctly vs hourly rate', () => {
    expect(MISSION_PACKS[0].discount).toBe(13);
    expect(MISSION_PACKS[1].discount).toBe(20);
    expect(MISSION_PACKS[2].discount).toBe(26);
  });

  test('Only Pack Croissance is marked as recommended', () => {
    const recommended = MISSION_PACKS.filter((p) => p.recommended);
    expect(recommended).toHaveLength(1);
    expect(recommended[0].id).toBe('pack-20');
  });
});
