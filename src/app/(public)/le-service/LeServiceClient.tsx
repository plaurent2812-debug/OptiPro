// src/app/(public)/le-service/LeServiceClient.tsx
import Link from 'next/link';
import MockupTableauDeBord from '@/components/ui/MockupTableauDeBord';
import ComparisonCards from '@/components/ui/ComparisonCards';
import FondateurBanner from '@/components/ui/FondateurBanner';
import { PILOTE_FORFAITS, formatPrice } from '@/data/pricing';

const LIVRABLES = [
  {
    icon: '📄',
    title: 'Devis',
    description: 'Vous m\'envoyez un vocal WhatsApp depuis le chantier. Je crée le devis, je l\'envoie au client, je le relance s\'il ne signe pas. Conforme légalement, signature en ligne.',
  },
  {
    icon: '💰',
    title: 'Facturation',
    description: 'Émission, envoi, relances automatiques (J+15, J+30, J+45), encaissement. Connecté à Pennylane (ou autre). Conforme à la facturation électronique 2026-2027.',
  },
  {
    icon: '🧾',
    title: 'Frais & dépenses',
    description: 'Vous prenez en photo un ticket fournisseur, je le saisis et le classe automatiquement par chantier ou catégorie. OCR + IA pour aller vite.',
  },
  {
    icon: '📊',
    title: 'Trésorerie & pilotage',
    description: 'Tableau de bord temps réel avec votre CA, vos factures à relancer, votre trésorerie. Plus un reporting mensuel commenté avec les chiffres qui comptent.',
  },
  {
    icon: '📅',
    title: 'Planning & RDV',
    description: 'Calendrier de vos chantiers et rendez-vous tenu à jour. Notifs Telegram ou Push à votre choix pour les événements importants (signature, paiement, RDV).',
  },
  {
    icon: '📋',
    title: 'Préparation comptable',
    description: 'Chaque mois, je prépare un dossier propre pour votre comptable : export FEC, factures classées, justificatifs vérifiés. Il fait son métier plus vite, vous économisez sur ses honoraires.',
  },
  {
    icon: '🤝',
    title: 'Coordination prestataires',
    description: 'Option : je deviens votre point de contact unique avec votre comptable, banquier, assureur. Vous gagnez le temps des allers-retours administratifs.',
  },
];

export default function LeServiceClient() {
  return (
    <main style={{ paddingTop: '5rem', paddingBottom: '4rem' }}>
      {/* HERO */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem 4rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: 'var(--primary)', lineHeight: 1.15, margin: '0 0 1.5rem' }}>
          Tout votre admin opérationnel. Pris en charge.
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--secondary)', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto' }}>
          Vous bossez sur le chantier. Je gère votre bureau. Voilà ce qui est inclus dans le forfait Pilote, à partir de {formatPrice(PILOTE_FORFAITS[0].price)}/mois.
        </p>
      </section>

      {/* LIVRABLES — grid 2 colonnes alternées */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary)', textAlign: 'center', margin: '0 0 3rem' }}>
          Ce que je prends en charge
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {LIVRABLES.map((item) => (
            <article key={item.title} style={{
              padding: '1.75rem',
              border: '1px solid var(--border)',
              borderRadius: '1rem',
              background: 'var(--background)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem',
            }}>
              <span style={{ fontSize: '2rem', lineHeight: 1 }} aria-hidden="true">{item.icon}</span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0, color: 'var(--primary)' }}>{item.title}</h3>
              <p style={{ margin: 0, color: 'var(--secondary)', lineHeight: 1.6 }}>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* TABLEAU DE BORD */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 1rem' }}>
            Vous gardez la main grâce à votre tableau de bord
          </h2>
          <p style={{ color: 'var(--secondary)', fontSize: '1.05rem', maxWidth: '620px', margin: '0 auto', lineHeight: 1.6 }}>
            Votre activité est visible en temps réel. Vous voyez ce que je fais sans avoir à demander.
          </p>
        </div>
        <MockupTableauDeBord />
      </section>

      {/* COMPARAISON */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 1rem' }}>
            Pourquoi pas un(e) assistant(e) classique ?
          </h2>
          <p style={{ color: 'var(--secondary)', fontSize: '1.05rem', maxWidth: '620px', margin: '0 auto', lineHeight: 1.6 }}>
            Comparé aux solutions traditionnelles, voilà ce que vous gagnez.
          </p>
        </div>
        <ComparisonCards />
      </section>

      {/* PROGRAMME FONDATEUR */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <FondateurBanner variant="inline" />
      </section>

      {/* CTA FINAL */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 1rem' }}>
          Prêt à déléguer votre admin ?
        </h2>
        <p style={{ color: 'var(--secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>
          30 minutes en visio, gratuit, sans engagement. Je vous dis si on est faits pour bosser ensemble.
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
