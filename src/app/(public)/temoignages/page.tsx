import type { Metadata } from 'next';
import Link from 'next/link';
import { getPublishedTestimonials } from '@/data/testimonials';
import TestimonialCard from '@/components/ui/TestimonialCard';
import ReviewJsonLd from '@/components/seo/ReviewJsonLd';
import { safeJsonLd } from '@/lib/json-ld';

export const metadata: Metadata = {
  title: { absolute: 'Témoignages clients — OptiPro' },
  description:
    "Retours des artisans, indépendants et TPE accompagnés par OptiPro. Avis vérifiés, métriques chiffrées, période de collaboration. Honnête, sans bullshit.",
  alternates: { canonical: '/temoignages' },
  openGraph: {
    title: 'Témoignages OptiPro — Ce que disent les clients',
    description:
      "Avis vérifiés d'artisans et TPE accompagnés par OptiPro. Métriques chiffrées, période de collaboration.",
    url: 'https://www.opti-pro.fr/temoignages',
    type: 'website',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.opti-pro.fr' },
    { '@type': 'ListItem', position: 2, name: 'Témoignages', item: 'https://www.opti-pro.fr/temoignages' },
  ],
};

export default function TemoignagesPage() {
  const testimonials = getPublishedTestimonials();
  const hasTestimonials = testimonials.length > 0;

  return (
    <main style={{ paddingTop: '5rem', paddingBottom: '4rem' }}>
      <script type="application/ld+json">{safeJsonLd(breadcrumbJsonLd)}</script>
      <ReviewJsonLd />

      {/* HERO */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem 3rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.75rem)', fontWeight: 800, color: 'var(--primary)', lineHeight: 1.15, margin: '0 0 1.25rem' }}>
          Ce que disent les clients OptiPro
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--secondary)', lineHeight: 1.6, maxWidth: '640px', margin: '0 auto' }}>
          Pas de témoignages bidons ni d&apos;avis génériques. Uniquement de vrais retours d&apos;artisans, indépendants et dirigeants de TPE accompagnés par OptiPro, avec métriques chiffrées et période de collaboration.
        </p>
      </section>

      {hasTestimonials ? (
        <>
          {/* Liste des témoignages publiés */}
          <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {testimonials.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} variant="full" />
              ))}
            </div>
          </section>

          {/* Bandeau "vous voulez en lire plus / déposer un avis" */}
          <section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
            <div style={{
              padding: '2rem 2.25rem',
              background: 'rgba(34, 197, 94, 0.05)',
              border: '1px solid rgba(34, 197, 94, 0.2)',
              borderRadius: '1rem',
              textAlign: 'center',
            }}>
              <p style={{ margin: '0 0 1rem', color: 'var(--primary)', fontWeight: 600 }}>
                Vous êtes client OptiPro et vous voulez laisser un retour ?
              </p>
              <p style={{ margin: 0, color: 'var(--secondary)', lineHeight: 1.6 }}>
                Vous pouvez déposer un avis Google directement sur la fiche OptiPro, ou m&apos;envoyer un témoignage écrit à p.laurent@opti-pro.fr. Les avis sont publiés tels quels — y compris les critiques constructives.
              </p>
            </div>
          </section>
        </>
      ) : (
        <>
          {/* État vide : page propre, honnête, qui ne fait pas de promesse fictive */}
          <section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 4rem' }}>
            <div style={{
              padding: '2.5rem 2rem',
              background: 'rgba(249, 115, 22, 0.05)',
              border: '1px solid rgba(249, 115, 22, 0.2)',
              borderRadius: '1.25rem',
              textAlign: 'center',
            }}>
              <p style={{ fontSize: '1.15rem', color: 'var(--primary)', lineHeight: 1.5, margin: '0 0 1.25rem', fontWeight: 600 }}>
                Les premiers clients sont en cours d&apos;onboarding.
              </p>
              <p style={{ color: 'var(--secondary)', lineHeight: 1.65, margin: '0 0 1.25rem' }}>
                OptiPro a démarré en mai 2026. Les premiers témoignages écrits seront publiés à partir du M3 (vers août 2026), avec de vrais résultats chiffrés. Les avis vidéo suivront à partir du M6.
              </p>
              <p style={{ color: 'var(--secondary)', lineHeight: 1.65, margin: 0, fontStyle: 'italic' }}>
                Plutôt qu&apos;inventer des témoignages ou recopier des avis génériques, je préfère cette page transparente. Elle se remplira avec de vrais retours clients vérifiés.
              </p>
            </div>
          </section>

          {/* Ce qu'on PEUT déjà voir : preuves d'expertise (sans inventer de témoignages) */}
          <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem 4rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary)', textAlign: 'center', margin: '0 0 2.5rem' }}>
              En attendant : ce qui vous permet de juger
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {/* Card 1 — Parcours pro */}
              <article style={{
                padding: '1.75rem',
                background: 'var(--background)',
                border: '1px solid var(--border)',
                borderRadius: '1rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
              }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary)', margin: 0 }}>
                  10 ans d&apos;expérience opérationnelle
                </h3>
                <p style={{ margin: 0, color: 'var(--secondary)', lineHeight: 1.55 }}>
                  Factory (Top 150 Champions de la Croissance Les Échos/Statista 2023), BTP second œuvre, GL Events Live, Eddifis, DBS Drive. Pas un débutant qui se reconvertit.
                </p>
                <Link href="/a-propos" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
                  Voir le parcours complet →
                </Link>
              </article>

              {/* Card 2 — Méthode */}
              <article style={{
                padding: '1.75rem',
                background: 'var(--background)',
                border: '1px solid var(--border)',
                borderRadius: '1rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
              }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary)', margin: 0 }}>
                  Méthode documentée
                </h3>
                <p style={{ margin: 0, color: 'var(--secondary)', lineHeight: 1.55 }}>
                  Toute la méthode OptiPro est expliquée publiquement : process de démarrage, outils utilisés, livrables, cadence. Pas de boîte noire.
                </p>
                <Link href="/methode" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
                  Voir la méthode →
                </Link>
              </article>

              {/* Card 3 — Période d'essai */}
              <article style={{
                padding: '1.75rem',
                background: 'var(--background)',
                border: '1px solid var(--border)',
                borderRadius: '1rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
              }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary)', margin: 0 }}>
                  Période d&apos;essai 30 jours
                </h3>
                <p style={{ margin: 0, color: 'var(--secondary)', lineHeight: 1.55 }}>
                  Sans risque pour vous : vous ou moi pouvons arrêter dans les 30 premiers jours sans préavis ni frais. Seules les heures effectuées sont facturées.
                </p>
                <Link href="/tarifs" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
                  Voir les tarifs →
                </Link>
              </article>
            </div>
          </section>

          {/* Mention de la transparence */}
          <section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 4rem' }}>
            <details style={{
              padding: '1.25rem 1.5rem',
              background: 'var(--background)',
              border: '1px solid var(--border)',
              borderRadius: '0.75rem',
            }}>
              <summary style={{ cursor: 'pointer', fontWeight: 600, color: 'var(--primary)' }}>
                Pourquoi cette page est honnête plutôt que remplie de faux témoignages ?
              </summary>
              <div style={{ marginTop: '1rem', color: 'var(--secondary)', lineHeight: 1.65, fontSize: '0.95rem' }}>
                <p style={{ margin: '0 0 0.85rem' }}>
                  Sur Google, 80% des sites prestataires affichent des témoignages dès leur lancement. La plupart sont inventés, recopiés ou achetés. C&apos;est un signal de confiance instantané, mais c&apos;est aussi le degré zéro de l&apos;intégrité.
                </p>
                <p style={{ margin: '0 0 0.85rem' }}>
                  Je préfère cette page vide pendant 3-4 mois et la remplir ensuite avec de vrais retours, qu&apos;avoir l&apos;air crédible artificiellement dès le premier jour. C&apos;est aussi un signal de la façon dont je travaille — pas de bullshit, pas de raccourcis, pas de cosmétique.
                </p>
                <p style={{ margin: 0 }}>
                  Si ça vous parle, vous savez déjà comment je vais traiter votre admin.
                </p>
              </div>
            </details>
          </section>
        </>
      )}

      {/* CTA FINAL */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 1.25rem' }}>
          {hasTestimonials ? 'Envie d\'en faire partie ?' : 'Vous voulez être l\'un des premiers ?'}
        </h2>
        <p style={{ color: 'var(--secondary)', lineHeight: 1.6, margin: '0 auto 2rem', maxWidth: '560px' }}>
          {hasTestimonials
            ? '30 minutes au téléphone, gratuit, sans engagement. On regarde si OptiPro est fait pour vous.'
            : '30 minutes au téléphone, gratuit, sans engagement. On regarde si OptiPro est fait pour votre activité.'}
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
      </section>
    </main>
  );
}
