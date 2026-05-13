import { MISSION_PACKS } from '@/data/pricing';
import { safeJsonLd } from '@/lib/json-ld';

export default function OfferCatalogJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Packs mensuels OptiPro — Assistant administratif & opérationnel externalisé',
    itemListElement: MISSION_PACKS.map((pack) => ({
      '@type': 'Offer',
      name: pack.name,
      description: `${pack.cible} — ${pack.hours} heures dédiées par mois, équivalent ${pack.hourlyEquivalent}€/h (remise -${pack.discount}% vs tarif horaire).`,
      price: pack.monthlyPrice.toString(),
      priceCurrency: 'EUR',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: pack.monthlyPrice,
        priceCurrency: 'EUR',
        unitText: 'MONTH',
        valueAddedTaxIncluded: false,
      },
      areaServed: 'FR',
      seller: { '@id': 'https://www.opti-pro.fr/#organization' },
      eligibleQuantity: {
        '@type': 'QuantitativeValue',
        value: pack.hours,
        unitCode: 'HUR',
      },
    })),
  };

  return (
    <script type="application/ld+json">
      {safeJsonLd(data)}
    </script>
  );
}
