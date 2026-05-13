import { getPublishedTestimonials, getAggregateRating } from '@/data/testimonials';
import { safeJsonLd } from '@/lib/json-ld';

export default function ReviewJsonLd() {
  const testimonials = getPublishedTestimonials();
  const aggregate = getAggregateRating();

  // Pas de témoignage publié = pas de schema (évite données vides)
  if (testimonials.length === 0 || !aggregate) return null;

  const reviews = testimonials.map((t) => ({
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: t.lastName ? `${t.firstName} ${t.lastName}` : t.firstName,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: t.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: t.fullText,
    datePublished: t.publishedAt,
    itemReviewed: { '@id': 'https://www.opti-pro.fr/#organization' },
  }));

  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      // AggregateRating attaché à l'organisation
      {
        '@type': 'Organization',
        '@id': 'https://www.opti-pro.fr/#organization',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: aggregate.value,
          reviewCount: aggregate.count,
          bestRating: 5,
          worstRating: 1,
        },
      },
      // Reviews individuels
      ...reviews,
    ],
  };

  return (
    <script type="application/ld+json">
      {safeJsonLd(data)}
    </script>
  );
}
