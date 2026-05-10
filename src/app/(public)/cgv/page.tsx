import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Conditions Générales de Vente — OptiPro' },
  description: 'Conditions Générales de Vente d\'OptiPro — service d\'assistant administratif externalisé. Engagement, résiliation, données, programme Fondateur.',
  alternates: { canonical: '/cgv' },
  robots: { index: true, follow: false },
};

export default function CgvPage() {
  return (
    <main style={{ maxWidth: '780px', margin: '0 auto', padding: '5rem 1.5rem 4rem', lineHeight: 1.7 }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>
        Conditions Générales de Vente
      </h1>
      <p style={{ color: 'var(--secondary)', fontSize: '0.9rem', marginBottom: '2.5rem' }}>
        Dernière mise à jour : 9 mai 2026
      </p>

      <section>
        <h2>1. Identification du prestataire</h2>
        <p>
          Pierre Laurent — Entrepreneur Individuel exerçant sous le nom commercial <strong>OptiPro</strong>.<br />
          Adresse : Vence (06140), France — sur rendez-vous.<br />
          SIREN : <em>(à renseigner)</em> — TVA non applicable, art. 293 B du CGI.<br />
          Email : <a href="mailto:p.laurent@opti-pro.fr">p.laurent@opti-pro.fr</a>.
        </p>
      </section>

      <section>
        <h2>2. Description du service Pilote</h2>
        <p>
          OptiPro propose un service d&apos;assistant administratif externalisé («&nbsp;Pilote&nbsp;») pour artisans et TPE. Le service comprend la gestion des devis, factures, relances, frais &amp; dépenses, suivi de trésorerie, planning et préparation du dossier mensuel pour le comptable du client.
        </p>
        <p>
          <strong>Périmètre exclu</strong> : OptiPro ne réalise pas de prestation de comptabilité réglementée (certification des comptes, liasse fiscale, conseil fiscal), ni de bulletins de paie réglementaires. Ces prestations relèvent du comptable et/ou gestionnaire de paie du client, dont la mission est conservée.
        </p>
      </section>

      <section>
        <h2>3. Tarifs</h2>
        <p>
          Tarifs Hors Taxes — TVA non applicable, article 293 B du Code Général des Impôts (franchise en base de TVA).
        </p>
        <ul>
          <li>Pilote 30 — 750€/mois (≤30 documents et ≤50 frais/mois, 1 société).</li>
          <li>Pilote 60 — 1 150€/mois (≤60 documents et ≤100 frais/mois, 1 société).</li>
          <li>Pilote 100 — 1 500€/mois (≤100 documents et ≤200 frais/mois, 1 société).</li>
          <li>Mise en route (Mois 1) — 750€ HT, facturé une seule fois.</li>
        </ul>
        <p>Les options additionnelles et la facturation multi-société sont détaillées sur la page Tarifs.</p>
      </section>

      <section>
        <h2>4. Engagement et résiliation</h2>
        <p>
          Le Mois 1 (Mise en route) est sans engagement à l&apos;issue. À partir du Mois 2, l&apos;abonnement se renouvelle par <strong>cycles de 3 mois renouvelables tacitement</strong>. La résiliation est possible à chaque date anniversaire (M4, M7, M10, etc.) avec un préavis d&apos;<strong>1 mois</strong>, par email à p.laurent@opti-pro.fr.
        </p>
      </section>

      <section>
        <h2>5. Programme Fondateur</h2>
        <p>
          Pour les 3 premiers clients signés, OptiPro propose un tarif progressif sur 6 mois (-50% les 3 premiers mois, -25% les 3 mois suivants, tarif plein à partir du M7) en contrepartie de :
        </p>
        <ul>
          <li>Un témoignage écrit signé à M3 (utilisable site web et réseaux sociaux d&apos;OptiPro).</li>
          <li>Un témoignage vidéo court (2-3 minutes) à M6 (utilisable site web, réseaux sociaux et publicités d&apos;OptiPro).</li>
          <li>Une autorisation de communication active pendant les 6 premiers mois.</li>
          <li>Au minimum 2 recommandations à des confrères artisans ou TPE bâtiment dans les 6 mois.</li>
        </ul>
        <p>
          En cas de non-respect des contreparties (témoignage non livré à M3 ou recommandations non livrées à M6), la bascule au tarif normal s&apos;applique sans réduction supplémentaire. Le contenu marketing créé reste utilisable par OptiPro.
        </p>
      </section>

      <section>
        <h2>6. Propriété et exportabilité des données</h2>
        <p>
          Les données saisies dans le cadre du service restent l&apos;entière propriété du client. À tout moment, le client peut demander un export complet de ses données. À la résiliation, OptiPro fournit l&apos;export final dans un délai de 30 jours.
        </p>
      </section>

      <section>
        <h2>7. Données personnelles &amp; RGPD</h2>
        <p>
          Le traitement des données personnelles est décrit dans la <a href="/confidentialite">politique de confidentialité</a>. Les données sont hébergées en Europe (Supabase EU).
        </p>
      </section>

      <section>
        <h2>8. Limitation de responsabilité</h2>
        <p>
          OptiPro intervient en tant que prestataire opérationnel, sans pouvoir de représentation légale ni fiscale. Aucune décision de gestion engageant la responsabilité du dirigeant ne peut être prise sans son accord exprès. OptiPro ne garantit pas un délai d&apos;exécution inférieur à 24h ouvrées sur les sollicitations courantes.
        </p>
      </section>

      <section>
        <h2>9. Force majeure</h2>
        <p>
          Aucune partie ne pourra être tenue responsable d&apos;un manquement consécutif à un cas de force majeure au sens de l&apos;article 1218 du Code civil.
        </p>
      </section>

      <section>
        <h2>10. Médiation et litiges</h2>
        <p>
          Conformément à l&apos;article L612-1 du Code de la consommation, en cas de litige, le client peut recourir gratuitement à un médiateur de la consommation : <em>(coordonnées à compléter — Médiateur des entreprises ou équivalent)</em>.
        </p>
        <p>
          Droit applicable : droit français. Juridiction compétente : tribunaux du ressort de Grasse, sauf disposition d&apos;ordre public contraire.
        </p>
      </section>

      <style>{`
        section { margin-bottom: 2rem; }
        h2 { font-size: 1.2rem; font-weight: 700; color: var(--primary); margin: 0 0 0.75rem; }
        p, ul { color: var(--secondary); }
        ul { padding-left: 1.25rem; }
        li { margin-bottom: 0.35rem; }
        a { color: var(--accent); }
      `}</style>
    </main>
  );
}
