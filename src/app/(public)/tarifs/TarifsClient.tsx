// src/app/(public)/tarifs/TarifsClient.tsx
import Link from 'next/link';
import PricingCard from '@/components/ui/PricingCard';
import FondateurBanner from '@/components/ui/FondateurBanner';
import AccordionItem from '@/components/ui/AccordionItem';
import {
  PILOTE_FORFAITS,
  PILOTE_OPTIONS,
  PILOTE_VISIBILITE,
  MISE_EN_ROUTE_PRICE,
  computeFondateurPrice,
  formatPrice,
  type PilotePeriod,
} from '@/data/pricing';
import { FAQ_TARIFS } from '@/data/faq';

const INCLUS_DANS_TOUS = [
  'Devis (création, envoi, signature, archivage)',
  'Facturation (émission, relances auto, encaissement) — connecté Pennylane',
  'Conformité facturation électronique (PDP) 2026-2027',
  'Frais & dépenses (OCR auto + classement)',
  'Trésorerie en temps réel + reporting mensuel commenté',
  'Planning & RDV (notifs Telegram ou Push)',
  'Préparation dossier mensuel pour votre comptable',
  'Tableau de bord temps réel (interface client)',
  'Hotline WhatsApp dédiée + appels (9h-17h jours ouvrés)',
  'Visio bilan toutes les 2 semaines (30 min)',
];

const MISE_EN_ROUTE_INCLUS = [
  'Audit de votre existant (devis, factures, outils)',
  'Reprise de l\'historique (clients, projets, devis)',
  'Paramétrage Pennylane + Stripe (option) + WhatsApp',
  'Configuration de votre tableau de bord',
  'Formation 30 min en visio',
  'Premiers devis & factures envoyés ensemble',
];

const FONDATEUR_PERIODS: { period: PilotePeriod; label: string }[] = [
  { period: 'M1', label: 'M1 (Mise en route)' },
  { period: 'M2-M3', label: 'M2 & M3' },
  { period: 'M4-M6', label: 'M4 à M6' },
  { period: 'M7+', label: 'M7 et au-delà' },
];

export default function TarifsClient() {
  return (
    <main style={{ paddingTop: 0, paddingBottom: '4rem' }}>
      {/* SECTION 2 — BANDEAU FONDATEUR STICKY (en premier, juste sous le header) */}
      <FondateurBanner variant="sticky" />

      {/* SECTION 1 — HERO TARIFS */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 1.5rem 3rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.75rem)', fontWeight: 800, color: 'var(--primary)', lineHeight: 1.15, margin: '0 0 1rem' }}>
          Un tarif clair. Tout inclus. Aucune mauvaise surprise.
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--secondary)', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto' }}>
          Trois forfaits selon votre volume d&apos;activité. Vous payez ce que vous utilisez, pas plus.
        </p>
      </section>

      {/* SECTION 3 — 3 CARTES FORFAITS */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {PILOTE_FORFAITS.map((forfait) => (
            <PricingCard key={forfait.id} forfait={forfait} />
          ))}
        </div>
        <p style={{ textAlign: 'center', color: 'var(--secondary)', marginTop: '2rem', fontSize: '0.95rem' }}>
          Au-delà de 100 documents/mois → devis sur mesure.
        </p>
      </section>

      {/* SECTION 4 — INCLUS DANS TOUS LES FORFAITS */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary)', textAlign: 'center', margin: '0 0 2.5rem' }}>
          Inclus dans tous les forfaits
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

      {/* SECTION 5 — MISE EN ROUTE */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <article style={{
          padding: '2.5rem',
          border: '1px solid var(--border)',
          borderRadius: '1.25rem',
          background: 'var(--background)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 0.25rem' }}>
                Mise en route (Mois 1)
              </h2>
              <p style={{ margin: 0, color: 'var(--secondary)', fontSize: '0.9rem' }}>
                Facturé une seule fois. Sans engagement à l&apos;issue.
              </p>
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)', whiteSpace: 'nowrap' }}>
              {formatPrice(MISE_EN_ROUTE_PRICE)}
            </div>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {MISE_EN_ROUTE_INCLUS.map((item) => (
              <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.95rem', color: 'var(--secondary)' }}>
                <span aria-hidden="true" style={{ color: 'var(--accent)', fontWeight: 700 }}>✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      {/* SECTION 6 — OPTIONS */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary)', textAlign: 'center', margin: '0 0 2.5rem' }}>
          Options additionnelles
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
          {PILOTE_OPTIONS.map((option) => (
            <article key={option.id} style={{
              padding: '1.5rem',
              border: '1px solid var(--border)',
              borderRadius: '0.85rem',
              background: 'var(--background)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.6rem',
            }}>
              <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '0.85rem', flexWrap: 'wrap' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: 0, color: 'var(--primary)' }}>{option.name}</h3>
                <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent)', whiteSpace: 'nowrap' }}>{option.price}</span>
              </header>
              <p style={{ margin: 0, color: 'var(--secondary)', fontSize: '0.9rem', lineHeight: 1.55 }}>{option.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION 6 BIS — OPTION VISIBILITÉ (SITE VITRINE) */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <article style={{
          padding: '2.5rem',
          background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.05) 0%, rgba(249, 115, 22, 0.02) 100%)',
          border: '1px solid rgba(249, 115, 22, 0.25)',
          borderRadius: '1.25rem',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <span style={{
                display: 'inline-block',
                padding: '0.25rem 0.75rem',
                background: 'var(--accent)',
                color: 'var(--on-accent)',
                borderRadius: '999px',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}>Nouveau</span>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 0.4rem' }}>
                Option Visibilité — votre site vitrine inclus
              </h2>
              <p style={{ margin: 0, color: 'var(--secondary)', fontSize: '0.95rem', lineHeight: 1.55 }}>
                Un site pro intégré à votre Pilote, sans gestion technique de votre côté.
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary)', whiteSpace: 'nowrap', lineHeight: 1 }}>
                +{PILOTE_VISIBILITE.monthlyPrice}€<span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--secondary)' }}>/mois</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--secondary)', marginTop: '0.35rem' }}>
                + {formatPrice(PILOTE_VISIBILITE.setupPrice)} de mise en place
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--accent)', marginTop: '0.2rem', fontWeight: 600 }}>
                ou {PILOTE_VISIBILITE.setupInstallments.count}× {PILOTE_VISIBILITE.setupInstallments.amount}€
              </div>
            </div>
          </div>

          <ul style={{ listStyle: 'none', padding: 0, margin: '1.25rem 0 1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.6rem' }}>
            {PILOTE_VISIBILITE.features.map((feature) => (
              <li key={feature} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--secondary)', lineHeight: 1.5 }}>
                <span aria-hidden="true" style={{ color: 'var(--accent)', fontWeight: 700 }}>✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div style={{
            padding: '1rem 1.25rem',
            background: 'rgba(249, 115, 22, 0.1)',
            border: '1px dashed rgba(249, 115, 22, 0.4)',
            borderRadius: '0.65rem',
            marginBottom: '1rem',
            fontSize: '0.9rem',
            color: 'var(--primary)',
          }}>
            <strong>Offert sur Pilote 100</strong> — la mise en place ({formatPrice(PILOTE_VISIBILITE.setupPrice)}) est incluse. Vous payez uniquement le supplément mensuel de +{PILOTE_VISIBILITE.monthlyPrice}€.
          </div>

          <p style={{ fontSize: '0.85rem', color: 'var(--secondary)', margin: 0, fontStyle: 'italic' }}>
            Engagement {PILOTE_VISIBILITE.engagementMonths} mois sur l&apos;option Visibilité (durée d&apos;amortissement de la mise en place).
            Besoin d&apos;un site plus complexe (e-commerce, multi-pages, application métier) ? Voir le bloc projet spécifique ci-dessous.
          </p>
        </article>
      </section>

      {/* SECTION 7 — ENGAGEMENT & RÉSILIATION */}
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
            <strong style={{ color: 'var(--primary)' }}>Mois 1 (Mise en route)</strong> sans engagement à l&apos;issue.
          </p>
          <p style={{ color: 'var(--secondary)', lineHeight: 1.65, marginBottom: '0.85rem' }}>
            <strong style={{ color: 'var(--primary)' }}>À partir du Mois 2</strong>, cycles de 3 mois renouvelables tacitement.
          </p>
          <p style={{ color: 'var(--secondary)', lineHeight: 1.65, marginBottom: '0.85rem' }}>
            <strong style={{ color: 'var(--primary)' }}>Résiliation</strong> possible à chaque date anniversaire (M4, M7, M10…) avec préavis d&apos;1 mois.
          </p>
          <p style={{ color: 'var(--secondary)', lineHeight: 1.65, margin: 0 }}>
            <strong style={{ color: 'var(--primary)' }}>Vos données</strong> restent les vôtres, exportables à tout moment.
          </p>
        </article>
      </section>

      {/* SECTION 8 — COMPARATEUR "ÇA COÛTE COMBIEN AILLEURS ?" */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary)', textAlign: 'center', margin: '0 0 2.5rem' }}>
          Ça coûte combien ailleurs ?
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--secondary)', maxWidth: '620px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
          Pour un artisan avec 2 salariés (volume Pilote 60).
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {[
            { label: 'Mi-temps salarié(e) interne', price: '~2 300€/mois', detail: 'chargés, + équipement, + formation, + gestion RH' },
            { label: 'Assistant·e indépendant·e (30h/mois)', price: '1 050 à 1 500€/mois', detail: 'sans outil intégré, reporting Excel mensuel' },
            { label: 'Cabinet comptable + admin externe', price: '800 à 1 200€/mois cumulés', detail: 'coordination à votre charge' },
            { label: 'OptiPro Pilote 60', price: `${formatPrice(PILOTE_FORFAITS[1].price)}/mois`, detail: 'tout inclus, outil + tableau de bord + visio bilan + hotline 9h-17h', highlight: true },
          ].map((row) => (
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

      {/* SECTION 9 — PROGRAMME FONDATEUR (tableau de bascule) */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <FondateurBanner variant="inline" />

        {/* Tableau de bascule */}
        <div style={{ marginTop: '2.5rem', overflowX: 'auto' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 1.5rem', textAlign: 'center' }}>
            Tableau de bascule par forfait
          </h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '560px' }}>
            <thead>
              <tr>
                <th scope="col" style={{ padding: '0.85rem 1rem', textAlign: 'left', borderBottom: '2px solid var(--border)', fontSize: '0.85rem', color: 'var(--secondary)', fontWeight: 600 }}>Période</th>
                {PILOTE_FORFAITS.map((f) => (
                  <th key={f.id} scope="col" style={{ padding: '0.85rem 1rem', textAlign: 'right', borderBottom: '2px solid var(--border)', fontSize: '0.85rem', color: 'var(--secondary)', fontWeight: 600 }}>
                    {f.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {FONDATEUR_PERIODS.map(({ period, label }) => (
                <tr key={period}>
                  <th scope="row" style={{ padding: '0.85rem 1rem', textAlign: 'left', borderBottom: '1px solid var(--border)', fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 600 }}>
                    {label}
                  </th>
                  {PILOTE_FORFAITS.map((f) => (
                    <td key={f.id} style={{ padding: '0.85rem 1rem', textAlign: 'right', borderBottom: '1px solid var(--border)', fontSize: '0.95rem', color: 'var(--primary)', fontWeight: period === 'M7+' ? 700 : 500 }}>
                      {formatPrice(computeFondateurPrice(f.price, period))}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ textAlign: 'center', color: 'var(--secondary)', fontSize: '0.85rem', marginTop: '1rem', fontStyle: 'italic' }}>
            M1 = mise en route à -50% (375€). Puis -50% pendant 2 mois et -25% pendant 3 mois, arrondis au multiple de 5€. Tarif plein à partir du M7.
          </p>
        </div>
      </section>

      {/* SECTION 10 — FAQ */}
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

      {/* SECTION 11 — MENTION TVA */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 4rem', textAlign: 'center' }}>
        <p style={{ color: 'var(--secondary)', fontSize: '0.85rem', fontStyle: 'italic', margin: 0 }}>
          Tarifs HT — TVA non applicable, art. 293 B du CGI.
        </p>
      </section>

      {/* SECTION 12 — CTA FINAL */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 3rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 1rem' }}>
          Pas sûr du forfait adapté ? Discutons-en.
        </h2>
        <p style={{ color: 'var(--secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>
          30 minutes en visio, gratuit. Je vous guide vers le bon palier selon votre volume.
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

      {/* SECTION 13 — PROJET SPÉCIFIQUE */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <article style={{
          padding: '1.75rem 2rem',
          background: 'var(--background)',
          border: '1px solid var(--border)',
          borderRadius: '1rem',
          textAlign: 'center',
        }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 0.5rem' }}>
            Besoin d&apos;un projet spécifique&nbsp;?
          </h3>
          <p style={{ color: 'var(--secondary)', fontSize: '0.95rem', lineHeight: 1.6, margin: '0 0 1.25rem' }}>
            Refonte complète, application métier sur mesure, automatisation avancée, intégration spécifique&nbsp;: chaque projet hors Pilote est étudié au cas par cas.
          </p>
          <Link href="/contact?cible=projets" style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            border: '1px solid var(--primary)',
            color: 'var(--primary)',
            borderRadius: '0.65rem',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '0.95rem',
          }}>
            Décrire mon projet →
          </Link>
        </article>
      </section>
    </main>
  );
}
