import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Conditions Générales de Vente — OptiPro' },
  description: 'Conditions Générales de Vente d\'OptiPro — missions ponctuelles et packs mensuels d\'admin opérationnel. Engagement, résiliation, données.',
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
        Dernière mise à jour : 12 mai 2026
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
        <h2>2. Description du service</h2>
        <p>
          OptiPro propose un service d&apos;externalisation administrative pour artisans, indépendants et TPE. Le service comprend la gestion des devis, factures, relances, frais &amp; dépenses, suivi de trésorerie, planning, coordination de fournisseurs et préparation du dossier mensuel pour le comptable du client.
        </p>
        <p>
          Le service est proposé sous deux formats : <strong>mission ponctuelle à l&apos;heure</strong> ou <strong>pack mensuel reconductible</strong>.
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
          <li>Mission à l&apos;heure — 80€/h HT, facturation au temps réellement passé (arrondi au quart d&apos;heure supérieur).</li>
          <li>Pack 10h — 720€/mois HT (72€/h équivalent, -10%).</li>
          <li>Pack 20h — 1 400€/mois HT (70€/h équivalent, -12%).</li>
          <li>Pack 30h — 1 950€/mois HT (65€/h équivalent, -19%).</li>
          <li>Au-delà de 30h/mois — devis sur mesure.</li>
        </ul>
        <p>Les options additionnelles sont détaillées sur la page Tarifs.</p>
      </section>

      <section>
        <h2>4. Engagement et résiliation</h2>
        <p>
          La <strong>mission à l&apos;heure</strong> est sans engagement : devis par mission, payé à l&apos;exécution.
        </p>
        <p>
          Les <strong>packs mensuels</strong> sont reconductibles tacitement chaque mois. La résiliation est possible à tout moment avec un préavis de <strong>15 jours fin de mois</strong>, par email à <a href="mailto:p.laurent@opti-pro.fr">p.laurent@opti-pro.fr</a>.
        </p>
      </section>

      <section>
        <h2>5. Propriété et exportabilité des données</h2>
        <p>
          Les données saisies dans le cadre du service restent l&apos;entière propriété du client. À tout moment, le client peut demander un export complet de ses données. À la résiliation, OptiPro fournit l&apos;export final dans un délai de 30 jours.
        </p>
      </section>

      <section>
        <h2>6. Données personnelles &amp; RGPD</h2>
        <p>
          Le traitement des données personnelles est décrit dans la <a href="/confidentialite">politique de confidentialité</a>. Les données sont hébergées en Europe (Supabase EU).
        </p>
      </section>

      <section>
        <h2>7. Limitation de responsabilité</h2>
        <p>
          OptiPro intervient en tant que prestataire opérationnel, sans pouvoir de représentation légale ni fiscale. Aucune décision de gestion engageant la responsabilité du dirigeant ne peut être prise sans son accord exprès. OptiPro ne garantit pas un délai d&apos;exécution inférieur à 24h ouvrées sur les sollicitations courantes.
        </p>
      </section>

      <section>
        <h2>8. Force majeure</h2>
        <p>
          Aucune partie ne pourra être tenue responsable d&apos;un manquement consécutif à un cas de force majeure au sens de l&apos;article 1218 du Code civil.
        </p>
      </section>

      <section>
        <h2>9. Médiation et litiges</h2>
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
