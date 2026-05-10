// src/app/(public)/programme-fondateur/FondateurClient.tsx
import Link from 'next/link';
import {
  PILOTE_FORFAITS,
  computeFondateurPrice,
  formatPrice,
  MISE_EN_ROUTE_PRICE,
  type PilotePeriod,
} from '@/data/pricing';

const PERIODS: { period: PilotePeriod; label: string; subLabel: string }[] = [
  { period: 'M1', label: 'M1 — Mise en route', subLabel: '-50% sur le setup (375€ au lieu de 750€)' },
  { period: 'M2-M3', label: 'M2 et M3', subLabel: '-50% sur le forfait mensuel' },
  { period: 'M4-M6', label: 'M4 à M6', subLabel: '-25% sur le forfait mensuel' },
  { period: 'M7+', label: 'M7 et au-delà', subLabel: 'Tarif plein' },
];

const CONTREPARTIES = [
  {
    when: 'À M3',
    title: 'Témoignage écrit signé',
    desc: "Utilisable site web + réseaux sociaux d'OptiPro.",
  },
  {
    when: 'À M6',
    title: 'Témoignage vidéo court (2-3 min)',
    desc: 'Utilisable site + réseaux sociaux + publicités d\'OptiPro.',
  },
  {
    when: 'Pendant 6 mois',
    title: 'Autorisation de communication active',
    desc: 'Possibilité pour OptiPro de communiquer sur votre cas (chiffres anonymisés ou nommés selon accord).',
  },
  {
    when: 'Dans les 6 mois',
    title: 'Au minimum 2 recommandations',
    desc: 'À des confrères artisans ou TPE bâtiment qui matchent la cible.',
  },
];

const CONDITIONS = [
  {
    label: "Si à M6 vous n'êtes pas satisfait",
    detail: "Résiliation sans frais (préavis 1 mois depuis date anniversaire 6 mois). Vos données sont restituées sous 30 jours.",
  },
  {
    label: 'Si témoignage non livré à M3',
    detail: 'Bascule au tarif normal dès M4 (perte de la réduction -25% des mois 4-6).',
  },
  {
    label: 'Si recommandations non livrées à M6',
    detail: 'Bascule normale (le contenu marketing créé reste utilisable par OptiPro).',
  },
];

export default function FondateurClient() {
  return (
    <main style={{ paddingTop: '5rem', paddingBottom: '4rem' }}>
      {/* HERO */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem 3rem', textAlign: 'center' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.5rem 1rem',
          background: 'var(--accent)',
          color: 'var(--on-accent)',
          borderRadius: '999px',
          fontSize: '0.85rem',
          fontWeight: 700,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          marginBottom: '1.5rem',
        }}>
          3 places · fermeture dès le 3e signé
        </div>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: 'var(--primary)', lineHeight: 1.15, margin: '0 0 1.5rem' }}>
          Programme Fondateur
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--secondary)', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto' }}>
          Vous êtes parmi les 3 premiers à me rejoindre ? Vous bénéficiez d&apos;un tarif progressif sur 6 mois en échange d&apos;un témoignage et d&apos;autorisation de communication.
        </p>
      </section>

      {/* TABLEAU DE BASCULE */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary)', textAlign: 'center', margin: '0 0 1rem' }}>
          Tableau de bascule par forfait
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--secondary)', maxWidth: '620px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
          Voilà ce que vous payez selon le forfait choisi.
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '640px' }}>
            <thead>
              <tr>
                <th scope="col" style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid var(--border)', fontSize: '0.85rem', color: 'var(--secondary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Période
                </th>
                {PILOTE_FORFAITS.map((f) => (
                  <th key={f.id} scope="col" style={{ padding: '1rem', textAlign: 'right', borderBottom: '2px solid var(--border)', fontSize: '0.85rem', color: 'var(--secondary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {f.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PERIODS.map(({ period, label, subLabel }) => (
                <tr key={period}>
                  <th scope="row" style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid var(--border)', fontWeight: 600, color: 'var(--primary)' }}>
                    <div style={{ fontSize: '0.95rem' }}>{label}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--secondary)', fontWeight: 400, marginTop: '0.15rem' }}>{subLabel}</div>
                  </th>
                  {PILOTE_FORFAITS.map((f) => (
                    <td key={f.id} style={{ padding: '1rem', textAlign: 'right', borderBottom: '1px solid var(--border)', fontSize: '1rem', fontWeight: period === 'M7+' ? 700 : 600, color: period === 'M7+' ? 'var(--primary)' : 'var(--accent)' }}>
                      {formatPrice(computeFondateurPrice(f.price, period))}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ textAlign: 'center', color: 'var(--secondary)', fontSize: '0.85rem', marginTop: '1.5rem', fontStyle: 'italic' }}>
          Tarifs HT — TVA non applicable, art. 293 B du CGI. Arrondi au multiple de 5€.
        </p>
      </section>

      {/* CONTREPARTIES */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary)', textAlign: 'center', margin: '0 0 1rem' }}>
          Vos contreparties
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--secondary)', maxWidth: '620px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
          En échange du tarif réduit, j&apos;ai besoin de votre soutien marketing pour que d&apos;autres artisans découvrent OptiPro.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {CONTREPARTIES.map((c) => (
            <article key={c.title} style={{
              padding: '1.5rem',
              border: '1px solid var(--border)',
              borderRadius: '0.85rem',
              background: 'var(--background)',
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              gap: '1.25rem',
              alignItems: 'flex-start',
            }}>
              <div style={{
                padding: '0.4rem 0.75rem',
                background: 'rgba(249, 115, 22, 0.1)',
                color: 'var(--accent)',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: 700,
                whiteSpace: 'nowrap',
              }}>
                {c.when}
              </div>
              <div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 0.4rem' }}>
                  {c.title}
                </h3>
                <p style={{ margin: 0, color: 'var(--secondary)', lineHeight: 1.55 }}>{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONDITIONS DE BASCULE */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 1.5rem' }}>
          Conditions
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {CONDITIONS.map((c) => (
            <div key={c.label}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 0.4rem' }}>
                {c.label}
              </h3>
              <p style={{ margin: 0, color: 'var(--secondary)', lineHeight: 1.6 }}>{c.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CALCUL D'ÉCONOMIE */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary)', textAlign: 'center', margin: '0 0 1rem' }}>
          Combien vous économisez sur 6 mois
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--secondary)', maxWidth: '620px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
          Sur la durée du programme Fondateur, vs tarif normal.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
          {PILOTE_FORFAITS.map((f) => {
            // Tarif normal sur 6 mois : 750€ setup + 5 × forfait
            const normalCost = MISE_EN_ROUTE_PRICE + 5 * f.price;
            // Tarif Fondateur : M1 (375) + M2-M3 (2 × -50%) + M4-M6 (3 × -25%)
            const foundateurCost = computeFondateurPrice(f.price, 'M1')
              + 2 * computeFondateurPrice(f.price, 'M2-M3')
              + 3 * computeFondateurPrice(f.price, 'M4-M6');
            const economy = normalCost - foundateurCost;

            return (
              <article key={f.id} style={{
                padding: '1.75rem',
                border: '1px solid var(--border)',
                borderRadius: '1rem',
                background: 'var(--background)',
                textAlign: 'center',
              }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 0.5rem' }}>
                  {f.name}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--secondary)', margin: '0 0 1.25rem', lineHeight: 1.5 }}>
                  Normal : {formatPrice(normalCost)}<br />
                  Fondateur : {formatPrice(foundateurCost)}
                </p>
                <div style={{
                  padding: '0.85rem',
                  background: 'rgba(22, 163, 74, 0.08)',
                  border: '1px solid rgba(22, 163, 74, 0.25)',
                  borderRadius: '0.65rem',
                }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                    Économie
                  </div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--success)' }}>
                    {formatPrice(economy)}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 1rem' }}>
          Vous êtes intéressé(e) ?
        </h2>
        <p style={{ color: 'var(--secondary)', marginBottom: '2rem', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto 2rem' }}>
          Réservez un appel découverte. Si on est faits pour bosser ensemble et qu&apos;une place est encore disponible, vous démarrez en Fondateur.
        </p>
        <Link href="/contact?cible=fondateur" style={{
          display: 'inline-block',
          padding: '1rem 2rem',
          background: 'var(--accent)',
          color: 'var(--on-accent)',
          borderRadius: '0.75rem',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '1.05rem',
        }}>
          Candidater au programme Fondateur →
        </Link>
        <p style={{ color: 'var(--secondary)', fontSize: '0.85rem', marginTop: '1rem', fontStyle: 'italic' }}>
          Si les 3 places sont déjà prises, je vous proposerai le tarif normal et vous mettrai sur liste d&apos;attente pour une éventuelle ouverture.
        </p>
      </section>
    </main>
  );
}
