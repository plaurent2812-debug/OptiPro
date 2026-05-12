// src/app/(public)/tarifs/TarifsClient.tsx
import Link from 'next/link';
import AccordionItem from '@/components/ui/AccordionItem';
import {
  MISSION_PACKS,
  MISSION_HOURLY_RATE,
  formatPrice,
} from '@/data/pricing';
import { FAQ_TARIFS } from '@/data/faq';

const INCLUS_DANS_TOUS = [
  'WhatsApp dédié (réponse sous 4h en jour ouvré)',
  'Visio bilan mensuelle (30 min)',
  "Utilisation de VOS outils (Pennylane, Sage, Excel, etc.) — pas d'imposition",
  'Reporting mensuel détaillé des heures consommées par tâche',
  'Conformité RGPD + facturation électronique 2026-2027',
  'Vos données restent votre propriété — export à tout moment',
];

const COMPARATEUR_ROWS = [
  { label: 'Mi-temps salarié(e) interne', price: '~2 300€/mois', detail: 'chargés, + équipement, + formation, + gestion RH' },
  { label: 'Assistant·e indépendant·e (20h/mois)', price: '900-1 200€/mois', detail: 'profil junior, sans expérience opérationnelle senior' },
  { label: 'Cabinet comptable + admin externe', price: '800-1 200€/mois cumulés', detail: 'coordination à votre charge' },
  { label: 'OptiPro Pack 20h', price: '1 400€/mois', detail: "10 ans en pilotage exploitation, préavis 15 jours, zéro charge", highlight: true },
];

export default function TarifsClient() {
  return (
    <main style={{ paddingTop: 0, paddingBottom: '4rem' }}>
      {/* SECTION 1 — HERO TARIFS */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 1.5rem 3rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.75rem)', fontWeight: 800, color: 'var(--primary)', lineHeight: 1.15, margin: '0 0 1rem' }}>
          Un tarif clair. À l&apos;heure ou en pack. Sans engagement long.
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--secondary)', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto' }}>
          Mission ponctuelle ou accompagnement régulier — vous payez ce que vous consommez.
        </p>
      </section>

      {/* SECTION 2 — 3 CARTES PACKS */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {MISSION_PACKS.map((pack) => (
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
              <p style={{ color: 'var(--secondary)', fontSize: '0.9rem', lineHeight: 1.5, margin: '0 0 1rem' }}>{pack.cible}</p>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)', margin: '0 0 0.25rem', lineHeight: 1 }}>
                {formatPrice(pack.monthlyPrice)}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--secondary)', marginBottom: '1.5rem' }}>HT par mois</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.55rem', flex: 1 }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--secondary)' }}>
                  <span aria-hidden="true" style={{ color: 'var(--accent)', fontWeight: 700 }}>✓</span>
                  <span>{pack.hours} heures dédiées par mois</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--secondary)' }}>
                  <span aria-hidden="true" style={{ color: 'var(--accent)', fontWeight: 700 }}>✓</span>
                  <span>{pack.hourlyEquivalent}€/h équivalent (-{pack.discount}% vs tarif horaire)</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--secondary)' }}>
                  <span aria-hidden="true" style={{ color: 'var(--accent)', fontWeight: 700 }}>✓</span>
                  <span>Heures non reportées d&apos;un mois sur l&apos;autre</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--secondary)' }}>
                  <span aria-hidden="true" style={{ color: 'var(--accent)', fontWeight: 700 }}>✓</span>
                  <span>Reconductible tacitement — préavis 15 jours</span>
                </li>
              </ul>
              <Link href="/contact" style={{
                display: 'block', textAlign: 'center', padding: '0.85rem 1.25rem',
                background: pack.recommended ? 'var(--accent)' : 'var(--primary)',
                color: pack.recommended ? 'var(--on-accent)' : 'var(--on-primary)',
                borderRadius: '0.75rem', textDecoration: 'none', fontWeight: 600,
                fontSize: '0.95rem',
              }}>
                Réserver mon appel
              </Link>
            </article>
          ))}
        </div>
        <p style={{ textAlign: 'center', color: 'var(--secondary)', marginTop: '2rem', fontSize: '0.95rem' }}>
          Au-delà de 30h/mois → devis sur mesure.
        </p>
      </section>

      {/* SECTION 3 — MISSION À L'HEURE */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <div style={{
          padding: '2rem',
          background: 'rgba(14, 165, 233, 0.05)',
          border: '1px solid rgba(14, 165, 233, 0.2)',
          borderRadius: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
        }}>
          <div>
            <h2 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary)' }}>Mission à l&apos;heure</h2>
            <p style={{ margin: '0.5rem 0 0', color: 'var(--secondary)', lineHeight: 1.5 }}>
              Pour les missions ponctuelles, sans engagement.
            </p>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)', whiteSpace: 'nowrap' }}>
            {MISSION_HOURLY_RATE}€/h HT
          </div>
        </div>
      </section>

      {/* SECTION 4 — INCLUS DANS TOUS LES PACKS */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary)', textAlign: 'center', margin: '0 0 2.5rem' }}>
          Inclus dans tous les packs
        </h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '0.85rem' }}>
          {INCLUS_DANS_TOUS.map((item) => (
            <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.95rem', color: 'var(--secondary)', lineHeight: 1.5 }}>
              <span aria-hidden="true" style={{ color: 'var(--accent)', fontWeight: 700 }}>✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* SECTION 5 — ENGAGEMENT & RÉSILIATION */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <article style={{
          padding: '2rem',
          background: 'var(--background)',
          border: '1px solid var(--border)',
          borderRadius: '1rem',
        }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 1rem' }}>
            Engagement &amp; résiliation
          </h2>
          <p style={{ color: 'var(--secondary)', lineHeight: 1.65, marginBottom: '0.85rem' }}>
            <strong style={{ color: 'var(--primary)' }}>Mission à l&apos;heure</strong> : aucun engagement. Devis à la mission, payé à l&apos;exécution.
          </p>
          <p style={{ color: 'var(--secondary)', lineHeight: 1.65, marginBottom: '0.85rem' }}>
            <strong style={{ color: 'var(--primary)' }}>Pack mensuel</strong> : 1 mois reconductible tacitement.
          </p>
          <p style={{ color: 'var(--secondary)', lineHeight: 1.65, marginBottom: '0.85rem' }}>
            <strong style={{ color: 'var(--primary)' }}>Résiliation</strong> : par email à p.laurent@opti-pro.fr, préavis 15 jours fin de mois.
          </p>
          <p style={{ color: 'var(--secondary)', lineHeight: 1.65, margin: 0 }}>
            <strong style={{ color: 'var(--primary)' }}>Vos données</strong> restent les vôtres, exportables à tout moment.
          </p>
        </article>
      </section>

      {/* SECTION 6 — COMPARATEUR "ÇA COÛTE COMBIEN AILLEURS ?" */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary)', textAlign: 'center', margin: '0 0 2.5rem' }}>
          Ça coûte combien ailleurs ?
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--secondary)', maxWidth: '620px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
          Pour un suivi régulier (~20h/mois).
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {COMPARATEUR_ROWS.map((row) => (
            <div key={row.label} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '1.5rem',
              padding: '1.25rem 1.5rem',
              background: row.highlight ? 'rgba(249, 115, 22, 0.08)' : 'transparent',
              border: row.highlight ? '1px solid rgba(249, 115, 22, 0.3)' : '1px solid var(--border)',
              borderRadius: '0.85rem',
              flexWrap: 'wrap',
            }}>
              <div style={{ flex: '1 1 280px', minWidth: 0 }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.25rem' }}>{row.label}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--secondary)' }}>{row.detail}</div>
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: row.highlight ? 'var(--accent)' : 'var(--primary)', whiteSpace: 'nowrap' }}>
                {row.price}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7 — FAQ */}
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

      {/* SECTION 8 — MENTION TVA */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 4rem', textAlign: 'center' }}>
        <p style={{ color: 'var(--secondary)', fontSize: '0.85rem', fontStyle: 'italic', margin: 0 }}>
          Tarifs HT — TVA non applicable, art. 293 B du CGI.
        </p>
      </section>

      {/* SECTION 9 — CTA FINAL */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 3rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 1rem' }}>
          Pas sûr du pack adapté ? Discutons-en.
        </h2>
        <p style={{ color: 'var(--secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>
          30 minutes en visio, gratuit. Je vous guide vers le bon palier selon votre besoin.
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
