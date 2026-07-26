import Link from 'next/link';
import { safeJsonLd } from '@/lib/json-ld';

export interface CityPageProps {
  // Identité géographique
  cityName: string; // "Nice"
  cityNameInClause: string; // "à Nice" / "à Antibes"
  citySlug: string; // "nice"
  postalCodes: string[]; // ["06000", "06100", ...]

  // SEO
  metaTitle: string;
  metaDescription: string;

  // Hero
  h1: string;
  intro: string;

  // Contexte économique local (1 paragraphe, 80-120 mots, unique par ville)
  economicContext: string;

  // Pourquoi OptiPro est pertinent ici (3-4 raisons)
  whyHere: Array<{ title: string; description: string }>;

  // Services adaptés au contexte local (4-6 items)
  services: Array<{ icon: string; title: string; description: string }>;

  // FAQ locale (5 questions spécifiques à la ville)
  faq: Array<{ question: string; answer: string }>;

  // Latitude/longitude pour le schema Place
  geo: { latitude: number; longitude: number };

  // Maillage interne : pages métier / offres pertinentes pour cette ville (optionnel)
  relatedLinks?: Array<{ href: string; label: string; description?: string }>;
}

export default function CityServicePage({
  cityName,
  cityNameInClause,
  citySlug,
  postalCodes,
  h1,
  intro,
  economicContext,
  whyHere,
  services,
  faq,
  geo,
  relatedLinks = [],
}: CityPageProps) {
  const url = `https://www.opti-pro.fr/services/${citySlug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.opti-pro.fr' },
          { '@type': 'ListItem', position: 2, name: 'Le service', item: 'https://www.opti-pro.fr/le-service' },
          { '@type': 'ListItem', position: 3, name: cityName, item: url },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: `Création de site internet ${cityNameInClause}`,
        serviceType: 'WebDevelopment',
        description: intro,
        provider: { '@id': 'https://www.opti-pro.fr/#organization' },
        areaServed: {
          '@type': 'City',
          name: cityName,
          address: {
            '@type': 'PostalAddress',
            addressLocality: cityName,
            postalCode: postalCodes[0],
            addressRegion: "Provence-Alpes-Côte d'Azur",
            addressCountry: 'FR',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: geo.latitude,
            longitude: geo.longitude,
          },
        },
        audience: { '@type': 'Audience', name: 'Artisans, indépendants et TPE' },
        offers: {
          '@type': 'AggregateOffer',
          lowPrice: '990',
          highPrice: '1390',
          priceCurrency: 'EUR',
          offerCount: 2,
        },
        url,
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      },
    ],
  };

  return (
    <main style={{ paddingTop: '5rem' }}>
      <script type="application/ld+json">{safeJsonLd(jsonLd)}</script>

      {/* HERO */}
      <section style={{ padding: '3rem 0 4rem' }}>
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <span style={{
            display: 'inline-block',
            padding: '0.5rem 1rem',
            background: 'rgba(249, 115, 22, 0.08)',
            border: '1px solid rgba(249, 115, 22, 0.2)',
            borderRadius: '999px',
            color: 'var(--accent)',
            fontSize: '0.85rem',
            fontWeight: 600,
            marginBottom: '1.5rem',
            letterSpacing: '0.02em',
          }}>
            Développeur web pour artisans &amp; TPE {cityNameInClause}
          </span>
          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            fontWeight: 800,
            color: 'var(--primary)',
            marginBottom: '1.25rem',
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
          }}>
            {h1}
          </h1>
          <p style={{
            color: 'var(--secondary)',
            fontSize: '1.1rem',
            lineHeight: 1.7,
            marginBottom: '2rem',
            maxWidth: '680px',
            margin: '0 auto 2rem',
          }}>
            {intro}
          </p>
          <Link href="/contact" style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            background: 'var(--primary)',
            color: 'var(--on-primary)',
            borderRadius: '0.75rem',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '1.05rem',
          }}>
            Réserver mon appel découverte (gratuit, 30 min)
          </Link>
          <p style={{
            marginTop: '1rem',
            marginBottom: 0,
            color: 'var(--secondary)',
            fontSize: '0.95rem',
          }}>
            Site vitrine 990&nbsp;€ HT · Site vitrine Pro 1&nbsp;390&nbsp;€ HT · Web app sur devis
          </p>
        </div>
      </section>

      {/* CONTEXTE ÉCONOMIQUE LOCAL */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 1.25rem' }}>
          {cityName} et ses entrepreneurs
        </h2>
        <p style={{ color: 'var(--secondary)', lineHeight: 1.7, margin: 0 }}>
          {economicContext}
        </p>
      </section>

      {/* POURQUOI OPTIPRO ICI */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary)', textAlign: 'center', margin: '0 0 3rem' }}>
          Pourquoi OptiPro {cityNameInClause}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {whyHere.map((item) => (
            <article key={item.title} style={{
              padding: '1.75rem',
              background: 'var(--background)',
              border: '1px solid var(--border)',
              borderRadius: '1rem',
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 0.75rem' }}>
                {item.title}
              </h3>
              <p style={{ margin: 0, color: 'var(--secondary)', lineHeight: 1.6 }}>
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* SERVICES ADAPTÉS */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary)', textAlign: 'center', margin: '0 0 1rem' }}>
          Ce que je construis {cityNameInClause}
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--secondary)', maxWidth: '640px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
          Sites vitrines, outils métier et web apps sur mesure. Périmètre et livrables définis au devis, un seul interlocuteur du premier appel à la mise en ligne.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {services.map((s) => (
            <article key={s.title} style={{
              padding: '1.75rem',
              background: 'var(--background)',
              border: '1px solid var(--border)',
              borderRadius: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}>
              <span aria-hidden="true" style={{ fontSize: '2rem', lineHeight: 1 }}>{s.icon}</span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary)', margin: 0 }}>
                {s.title}
              </h3>
              <p style={{ margin: 0, color: 'var(--secondary)', lineHeight: 1.55 }}>
                {s.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* MAILLAGE INTERNE — offres & pages métier */}
      {relatedLinks.length > 0 && (
        <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary)', textAlign: 'center', margin: '0 0 1rem' }}>
            À consulter aussi
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--secondary)', maxWidth: '640px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
            Les tarifs détaillés, le déroulé d&apos;un projet et les pages dédiées aux métiers les plus représentés {cityNameInClause}.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: 'block',
                  padding: '1.25rem 1.5rem',
                  background: 'var(--background)',
                  border: '1px solid var(--border)',
                  borderRadius: '0.75rem',
                  textDecoration: 'none',
                }}
              >
                <span style={{ display: 'block', fontWeight: 700, color: 'var(--primary)', marginBottom: link.description ? '0.4rem' : 0 }}>
                  {link.label}
                </span>
                {link.description && (
                  <span style={{ display: 'block', color: 'var(--secondary)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                    {link.description}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* FAQ LOCALE */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary)', textAlign: 'center', margin: '0 0 2.5rem' }}>
          Questions fréquentes
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {faq.map((item) => (
            <article key={item.question} style={{
              padding: '1.5rem',
              background: 'var(--background)',
              border: '1px solid var(--border)',
              borderRadius: '0.75rem',
            }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 0.75rem' }}>
                {item.question}
              </h3>
              <p style={{ margin: 0, color: 'var(--secondary)', lineHeight: 1.6 }}>
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 1rem' }}>
          Vous êtes {cityNameInClause} ? Parlons-en.
        </h2>
        <p style={{ color: 'var(--secondary)', lineHeight: 1.6, margin: '0 auto 2rem', maxWidth: '560px' }}>
          30 minutes au téléphone ou en visio pour cadrer votre projet de site ou d&apos;outil métier. Gratuit, sans engagement. Vous ressortez avec un périmètre clair et un prix.
        </p>
        <Link href="/contact" style={{
          display: 'inline-block',
          padding: '1rem 2rem',
          background: 'var(--primary)',
          color: 'var(--on-primary)',
          borderRadius: '0.75rem',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '1.05rem',
        }}>
          Réserver mon appel découverte
        </Link>
      </section>
    </main>
  );
}
