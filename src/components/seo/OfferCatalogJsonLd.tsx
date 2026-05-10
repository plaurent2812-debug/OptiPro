import { PILOTE_FORFAITS } from '@/data/pricing';
import { safeJsonLd } from '@/lib/json-ld';

export default function OfferCatalogJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Forfaits Pilote — Assistant administratif externalisé OptiPro',
    itemListElement: PILOTE_FORFAITS.map((forfait) => ({
      '@type': 'Offer',
      name: forfait.name,
      description: `${forfait.cible}. Jusqu'à ${forfait.volumeDocs} documents et ${forfait.volumeFrais} frais par mois.`,
      price: forfait.price.toString(),
      priceCurrency: 'EUR',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: forfait.price,
        priceCurrency: 'EUR',
        unitText: 'MONTH',
        valueAddedTaxIncluded: false,
      },
      areaServed: 'FR',
      seller: { '@id': 'https://www.opti-pro.fr/#organization' },
    })),
  };

  return (
    <script type="application/ld+json">
      {safeJsonLd(data)}
    </script>
  );
}
