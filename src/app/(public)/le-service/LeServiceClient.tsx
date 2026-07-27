// src/app/(public)/le-service/LeServiceClient.tsx
import Link from 'next/link';

const SERVICES = [
  {
    icon: '🌐',
    title: 'Sites vitrines',
    description: "Un site professionnel qui vous représente correctement : présentation de vos services, formulaire de contact, hébergement et nom de domaine inclus. Référencé sur Google dès la mise en ligne.",
    details: [
      "Site vitrine — 990€ (3–4 pages, hébergement 1 an, domaine, email pro)",
      "Site vitrine Pro — 1 390€ (+ formulaire, Google My Business, SEO local)",
    ],
  },
  {
    icon: '⚙️',
    title: 'Web apps & outils métier',
    description: "Tout ce que vous gérez sur papier ou sur Excel peut devenir un outil web simple, accessible depuis n'importe quel appareil et adapté à vos process.",
    details: [
      "Catalogue produits et portail client",
      "Suivi de chantiers et gestion de commandes",
      "Tableaux de bord et reporting",
      "Sur devis après premier appel gratuit",
    ],
    reference: "Référence client — SAPAL Signalisation : plateforme B2B catalogue 2 500+ références, portail client, intégrations API.",
  },
  {
    icon: '🔧',
    title: 'Maintenance',
    description: "Votre site évolue avec votre activité. Mises à jour de contenu, petites évolutions, corrections — sans avoir à tout réapprendre ni à déranger un prestataire inconnu.",
    details: [
      "Maintenance Essentiel — 79€/mois (1h/mois, mises à jour contenu)",
      "Maintenance Pro — 129€/mois (2h/mois, contenu + petites évolutions, priorité)",
    ],
  },
];

const DIFFERENCIATEURS = [
  {
    icon: '🏭',
    title: 'Profil hybride ops + dev',
    description: "Avant d'être développeur, j'ai piloté des flux, coordonné des prestataires et structuré des process. Je comprends vos problèmes métier — pas seulement la technique.",
  },
  {
    icon: '🎯',
    title: 'Un seul interlocuteur',
    description: "Du premier appel à la mise en ligne : pas de commercial, pas de chef de projet, pas de sous-traitance. C'est moi qui construis.",
  },
  {
    icon: '📋',
    title: 'Périmètre défini au devis',
    description: "Vous savez ce que vous payez avant de démarrer. Pas de dérive, pas de surprise à la livraison.",
  },
  {
    icon: '⚡',
    title: 'Compatible CDI',
    description: "Missions ponctuelles à périmètre défini. Pas d'engagement horaire hebdomadaire — vous payez le livrable, pas le temps.",
  },
];

export default function LeServiceClient() {
  return (
    <main style={{ paddingTop: '5rem', paddingBottom: '4rem' }}>
      {/* HERO */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem 4rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: 'var(--primary)', lineHeight: 1.15, margin: '0 0 1.5rem' }}>
          Sites vitrines sur mesure.
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--secondary)', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto' }}>
          Je construis ce qui vous manque — et je comprends votre métier avant d&apos;écrire la première ligne de code.
        </p>
      </section>

      {/* RÉPONSE DIRECTE (pour LLM/AI Overviews) */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 4rem' }}>
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
            <strong style={{ color: 'var(--primary)' }}>OptiPro</strong>
            {' '}conçoit et développe des sites vitrines (990€ et 1 390€), des web apps et des outils métier sur mesure pour artisans et TPE. Profil hybride : 10 ans en opérations et logistique, reconversion dev via Claude Code et Cursor. Un seul interlocuteur, périmètre et livrables définis au devis.
          </p>
        </div>
      </section>

      {/* CE QUE JE CONSTRUIS — 3 blocs */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary)', textAlign: 'center', margin: '0 0 3rem' }}>
          Ce que je construis
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '1.5rem' }}>
          {SERVICES.map((item) => (
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
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {item.details.map((detail) => (
                  <li key={detail} style={{ color: 'var(--secondary)', fontSize: '0.95rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <span aria-hidden="true" style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.1rem' }}>✓</span>
                    {detail}
                  </li>
                ))}
              </ul>
              {item.reference && (
                <div style={{
                  background: 'rgba(249, 115, 22, 0.06)',
                  border: '1px solid rgba(249, 115, 22, 0.2)',
                  borderRadius: '0.75rem',
                  padding: '1rem 1.25rem',
                  marginTop: '1rem',
                  fontSize: '0.9rem',
                  color: 'var(--secondary)',
                  lineHeight: 1.5,
                }}>
                  {item.reference}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* CE QUI ME DIFFÉRENCIE */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 1rem' }}>
            Pas un dev classique.
          </h2>
          <p style={{ color: 'var(--secondary)', fontSize: '1.05rem', maxWidth: '620px', margin: '0 auto', lineHeight: 1.6 }}>
            10 ans en opérations et logistique — je comprends vos contraintes terrain avant de coder.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {DIFFERENCIATEURS.map((item) => (
            <article key={item.title} style={{
              padding: '1.75rem',
              border: '1px solid var(--border)',
              borderRadius: '1rem',
              background: 'var(--background)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}>
              <span style={{ fontSize: '1.75rem', lineHeight: 1 }} aria-hidden="true">{item.icon}</span>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, color: 'var(--primary)' }}>{item.title}</h3>
              <p style={{ margin: 0, color: 'var(--secondary)', lineHeight: 1.6, fontSize: '0.97rem' }}>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', margin: '0 0 1rem' }}>
          Un projet en tête ?
        </h2>
        <p style={{ color: 'var(--secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>
          30 minutes en visio pour en parler. Si c&apos;est réalisable, je vous envoie un devis. Sinon, je vous dis pourquoi.
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
