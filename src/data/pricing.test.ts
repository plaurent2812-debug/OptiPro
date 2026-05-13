import {
  PILOTE_FORFAITS,
  formatPrice,
  MISE_EN_ROUTE_PRICE,
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

  test('mise en route price', () => {
    expect(MISE_EN_ROUTE_PRICE).toBe(750);
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
