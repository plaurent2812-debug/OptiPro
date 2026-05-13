import { computeNextRelanceLevel, RELANCE_THRESHOLDS } from './relance-templates'

describe('computeNextRelanceLevel', () => {
  test('aucune relance avant J+7 même si jamais relancé', () => {
    expect(computeNextRelanceLevel(0, 0)).toBeNull()
    expect(computeNextRelanceLevel(5, 0)).toBeNull()
    expect(computeNextRelanceLevel(6, 0)).toBeNull()
  })

  test('jamais relancé → niveau 1 à J+7', () => {
    expect(computeNextRelanceLevel(7, 0)).toBe(1)
    expect(computeNextRelanceLevel(10, 0)).toBe(1)
  })

  test('jamais relancé mais facture déjà ancienne → niveau le plus haut atteint', () => {
    expect(computeNextRelanceLevel(20, 0)).toBe(2)
    expect(computeNextRelanceLevel(45, 0)).toBe(3)
  })

  test('niveau 1 envoyé → niveau 2 quand J+15 atteint', () => {
    expect(computeNextRelanceLevel(14, 1)).toBeNull()
    expect(computeNextRelanceLevel(15, 1)).toBe(2)
    expect(computeNextRelanceLevel(20, 1)).toBe(2)
  })

  test('niveau 2 envoyé → niveau 3 quand J+30 atteint', () => {
    expect(computeNextRelanceLevel(20, 2)).toBeNull()
    expect(computeNextRelanceLevel(30, 2)).toBe(3)
    expect(computeNextRelanceLevel(60, 2)).toBe(3)
  })

  test('niveau 3 atteint → plus aucune relance auto', () => {
    expect(computeNextRelanceLevel(60, 3)).toBeNull()
    expect(computeNextRelanceLevel(365, 3)).toBeNull()
  })

  test('RELANCE_THRESHOLDS strictement croissants', () => {
    expect(RELANCE_THRESHOLDS[1]).toBeLessThan(RELANCE_THRESHOLDS[2])
    expect(RELANCE_THRESHOLDS[2]).toBeLessThan(RELANCE_THRESHOLDS[3])
  })
})
