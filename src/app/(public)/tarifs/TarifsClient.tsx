// src/app/(public)/tarifs/TarifsClient.tsx
import Link from 'next/link';
import AccordionItem from '@/components/ui/AccordionItem';
import { FAQ_TARIFS } from '@/data/faq';

const OFFRES_WEB = [
  {
    id: 'vitrine',
    name: 'Site vitrine',
    price: '990€',
    soustitre: 'Pour être trouvé sur Google avec un site professionnel.',
    recommended: false,
    features: [
      '3 à 4 pages sur mesure',
      'Hébergement 1 an inclus',
      'Nom de domaine inclus',
      'Adresse email professionnelle',
    ],
  },
  {
    id: 'vitrine-pro',
    name: 'Site vitrine Pro',
    price: '1 390€',
    soustitre: 'Pour convertir les visiteurs en clients.',
    recommended: true,
    features: [
      'Tout le pack Site vitrine',
      'Formulaire de contact fonctionnel',
      'Fiche Google My Business',
      'SEO local',
    ],
  },
  {
    id: 'webapp',
    name: 'Web app / outil métier',
    price: 'Sur devis',
    soustitre: 'Pour remplacer le papier et les fichiers Excel par une plateforme sur mesure.',
    recommended: false,
    features: [
      'Plateforme web sur mesure',
      'Conçue autour de vos process métier',
      'Périmètre et livrables définis au devis',
    ],
  },
];

const MAINTENANCE_PACKS = [
  {
    id: 'essentiel',
    name: 'Maintenance Essentiel',
    price: '79€/mois',
    recommended: false,
    features: [
      '1h par mois',
      'Mises à jour de contenu (textes, photos, horaires)',
    ],
  },
  {
    id: 'pro',
    name: 'Maintenance Pro',
    price: '129€/mois',
    recommended: true,
    features: [
      '2h par mois',
      'Mises à jour de contenu + petites évolutions',
      'Traitement prioritaire',
    ],
  },
];

const INCLUS_DANS_CHAQUE_PROJET = [
  'Un seul interlocuteur du premier appel à la mise en ligne',
  'Périmètre et livrables définis au devis — pas de surprise',
  'Vous restez propriétaire de votre site et de votre code',
  'Premier appel découverte gratuit (30 min)',
  'TVA non applicable — franchise en base art. 293 B du CGI',
];

export default function TarifsClient() {
  return (
    <main style={{ paddingTop: '5rem', paddingBottom: '4rem' }}>
      {/* SECTION 1 — HERO */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem 3rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.75rem)', fontWeight: 800, color: 'var(--primary)', lineHeight: 1.15, margin: '0 0 1rem' }}>
          Des tarifs clairs. Des livrables définis.
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--secondary)', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto' }}>
          Site vitrine, web app ou maintenance — vous savez ce que vous payez avant de démarrer.
        </p>
      </section>

      {/* SECTION 1 BIS — RÉPONSE DIRECTE (pour LLM/AI Overviews) */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 3rem' }}>
        <div style={{
          padding: '2rem 2.25rem',
          background: 'var(--background)',
          border: '1px solid var(--border)',
          borderRadius: '1rem',
          lineHeight: 1.75,
          color: 'var(--secondary)',
          fontSize: '1.05rem',
        }}>
          <p style={{ margin: 0 }}>
            <strong style={{ color: 'var(--primary)' }}>Les tarifs OptiPro</strong> pour la création de sites et outils web sont : Site vitrine <strong style={{ color: 'var(--primary)' }}>990€ HT</strong> (3–4 pages, hébergement 1 an, domaine, email pro) ; Site vitrine Pro <strong style={{ color: 'var(--primary)' }}>1 390€ HT</strong> (+ formulaire fonctionnel, Google My Business, SEO local) ; Web app / outil métier sur devis après premier appel gratuit. Maintenance Essentiel <strong style={{ color: 'var(--primary)' }}>79€/mois HT</strong> (1h/mois, mises à jour contenu) ; Maintenance Pro <strong style={{ color: 'var(--primary)' }}>129€/mois HT</strong> (2h/mois, contenu + petites évolutions, priorité). TVA non applicable, franchise en base art. 293 B du CGI.
          </p>
        </div>
      </section>

      {/* SECTION 2 — OFFRES WEB (3 cartes) */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {OFFRES_WEB.map((pack) => (
            <article key={pack.id} style={{
              padding: '2rem 1.75rem',
              background: 'var(--background)',
              border: pack.recommended ? '2px solid var(--accent)' : '1px solid var(--border)',
              borderRadius: '1.25rem',
              marginTop: pack.recommended ? '0.85rem' : 0,
              position: 'relative',
              boxShadow: pack.recommended ? '0 8px 32px rgba(249, 115, 22, 0.15)' : 'none',
              display: 'flex',
              flexDirection: 'column',
            }}>
              {pack.recommended && (
                <span style={{
                  position: 'absolute', top: '-0.85rem', left: '50%', transform: 'translateX(-50%)',
                  background: 'var(--accent)', color: 'var(--on-accent)',
                  padding: '0.3rem 0.85rem', borderRadius: '999px',
                  fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}>Recommandé</span>
              )}
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 0.5rem' }}>{pack.name}</h3>
              <p style={{ color: 'var(--secondary)', fontSize: '0.9rem', lineHeight: 1.5, margin: '0 0 1rem' }}>{pack.soustitre}</p>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)', margin: '0 0 0.25rem', lineHeight: 1 }}>
                {pack.price}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--secondary)', marginBottom: '1.5rem' }}>HT</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.55rem', flex: 1 }}>
                {pack.features.map((feature) => (
                  <li key={feature} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--secondary)' }}>
                    <span aria-hidden="true" style={{ color: 'var(--accent)', fontWeight: 700 }}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" style={{
                display: 'block', textAlign: 'center', padding: '0.85rem 1.25rem',
                background: pack.recommended ? 'var(--accent)' : 'var(--primary)',
                color: pack.recommended ? 'var(--on-accent)' : 'var(--on-primary)',
                borderRadius: '0.75rem', textDecoration: 'none', fontWeight: 600,
                fontSize: '0.95rem',
              }}>
                {pack.id === 'webapp' ? 'Demander un devis' : 'Démarrer mon projet'}
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION 3 — MAINTENANCE MENSUELLE */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary)', textAlign: 'center', margin: '0 0 1rem' }}>
          Maintenance mensuelle
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--secondary)', maxWidth: '580px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
          Pour garder votre site à jour sans y penser.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {MAINTENANCE_PACKS.map((pack) => (
            <article key={pack.id} style={{
              padding: '2rem 1.75rem',
              background: 'var(--background)',
              border: pack.recommended ? '2px solid var(--accent)' : '1px solid var(--border)',
              borderRadius: '1.25rem',
              marginTop: pack.recommended ? '0.85rem' : 0,
              position: 'relative',
              boxShadow: pack.recommended ? '0 8px 32px rgba(249, 115, 22, 0.15)' : 'none',
              display: 'flex',
              flexDirection: 'column',
            }}>
              {pack.recommended && (
                <span style={{
                  position: 'absolute', top: '-0.85rem', left: '50%', transform: 'translateX(-50%)',
                  background: 'var(--accent)', color: 'var(--on-accent)',
                  padding: '0.3rem 0.85rem', borderRadius: '999px',
                  fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}>Recommandé</span>
              )}
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 1rem' }}>{pack.name}</h3>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)', margin: '0 0 0.25rem', lineHeight: 1 }}>
                {pack.price}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--secondary)', marginBottom: '1.5rem' }}>HT</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.55rem', flex: 1 }}>
                {pack.features.map((feature) => (
                  <li key={feature} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--secondary)' }}>
                    <span aria-hidden="true" style={{ color: 'var(--accent)', fontWeight: 700 }}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" style={{
                display: 'block', textAlign: 'center', padding: '0.85rem 1.25rem',
                background: pack.recommended ? 'var(--accent)' : 'var(--primary)',
                color: pack.recommended ? 'var(--on-accent)' : 'var(--on-primary)',
                borderRadius: '0.75rem', textDecoration: 'none', fontWeight: 600,
                fontSize: '0.95rem',
              }}>
                Choisir cette formule
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION 4 — CE QUI EST INCLUS */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary)', textAlign: 'center', margin: '0 0 2.5rem' }}>
          Inclus dans chaque projet
        </h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '0.85rem' }}>
          {INCLUS_DANS_CHAQUE_PROJET.map((item) => (
            <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.95rem', color: 'var(--secondary)', lineHeight: 1.5 }}>
              <span aria-hidden="true" style={{ color: 'var(--accent)', fontWeight: 700 }}>✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* SECTION 5 — FAQ */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary)', textAlign: 'center', margin: '0 0 2.5rem' }}>
          Questions fréquentes
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {FAQ_TARIFS.map((item) => (
            <AccordionItem key={item.question} title={item.question}>
              <p style={{ margin: 0 }}>{item.answer}</p>
            </AccordionItem>
          ))}
        </div>
      </section>

      {/* SECTION 6 — MENTION TVA */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 4rem', textAlign: 'center' }}>
        <p style={{ color: 'var(--secondary)', fontSize: '0.85rem', fontStyle: 'italic', margin: 0 }}>
          Tarifs HT — TVA non applicable, art. 293 B du CGI.
        </p>
      </section>

      {/* SECTION 7 — CTA FINAL */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 3rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 1rem' }}>
          Pas sûr de ce dont vous avez besoin ?
        </h2>
        <p style={{ color: 'var(--secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>
          30 minutes en visio, gratuit. On parle de votre projet, je vous propose la bonne formule.
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
          Réserver mon appel découverte (gratuit)
        </Link>
      </section>
    </main>
  );
}
