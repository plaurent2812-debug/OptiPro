import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Conditions Générales de Vente — OptiPro' },
  description: "Conditions Générales de Vente d'OptiPro — création de sites vitrines, web apps et maintenance. Devis, livraison, paiement, propriété, résiliation.",
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
        Dernière mise à jour : 26 juillet 2026
      </p>

      <section>
        <h2>1. Identification du prestataire</h2>
        <p>
          Pierre Laurent — Entrepreneur Individuel exerçant sous le nom commercial <strong>OptiPro</strong>.<br />
          Adresse : Vence (06140), France — sur rendez-vous.<br />
          SIREN : 934 301 987 — TVA non applicable, art. 293 B du CGI.<br />
          Email : <a href="mailto:p.laurent@opti-pro.fr">p.laurent@opti-pro.fr</a>.
        </p>
      </section>

      <section>
        <h2>2. Description du service</h2>
        <p>
          OptiPro conçoit et développe des <strong>sites vitrines</strong>, des <strong>web apps</strong> et des <strong>outils métier sur mesure</strong> pour artisans, indépendants et TPE. Une prestation de <strong>maintenance</strong> mensuelle facultative est proposée en complément.
        </p>
        <p>
          Chaque prestation fait l&apos;objet d&apos;un <strong>devis préalable</strong> détaillant le périmètre, les livrables et le délai. Le devis signé par le client vaut acceptation des présentes conditions et constitue le contrat entre les parties. Toute demande sortant du périmètre défini au devis fait l&apos;objet d&apos;un avenant ou d&apos;un devis complémentaire.
        </p>
        <p>
          <strong>Périmètre exclu</strong> : sauf mention expresse au devis, la prestation ne comprend pas la rédaction des contenus éditoriaux, la fourniture de photographies, l&apos;achat de licences ou de visuels payants, la gestion de campagnes publicitaires, ni la maintenance au-delà de la période d&apos;hébergement incluse.
        </p>
      </section>

      <section>
        <h2>3. Tarifs</h2>
        <p>
          Tarifs Hors Taxes — TVA non applicable, article 293 B du Code Général des Impôts (franchise en base de TVA).
        </p>
        <ul>
          <li>Site vitrine — 990€ HT : 3 à 4 pages sur mesure, hébergement 1 an inclus, nom de domaine inclus, adresse email professionnelle.</li>
          <li>Site vitrine Pro — 1 390€ HT : prestation Site vitrine, formulaire de contact fonctionnel, fiche Google My Business et SEO local.</li>
          <li>Web app / outil métier — sur devis, après définition du périmètre lors d&apos;un premier échange.</li>
          <li>Maintenance Essentiel — 79€/mois HT : 1 heure par mois de mises à jour de contenu.</li>
          <li>Maintenance Pro — 129€/mois HT : 2 heures par mois de mises à jour de contenu et petites évolutions, traitement prioritaire.</li>
        </ul>
        <p>
          Les prestations de création sont facturées <strong>au livrable</strong> et non au temps passé. Sauf mention contraire au devis, le paiement s&apos;effectue en deux fois : <strong>40% à la commande</strong> et le solde à la livraison, par virement, à 30 jours date de facture. Les heures de maintenance non consommées au cours d&apos;un mois ne sont pas reportables.
        </p>
        <p>
          À l&apos;issue de la première année, le renouvellement de l&apos;hébergement et du nom de domaine est à la charge du client, qui peut en reprendre la gestion directement ou en confier le suivi à OptiPro. Le détail des prestations figure sur la page <a href="/tarifs">Tarifs</a>.
        </p>
      </section>

      <section>
        <h2>4. Délais, collaboration et livraison</h2>
        <p>
          Le délai de livraison est indiqué au devis. Pour un site vitrine, le délai annoncé est de <strong>3 semaines</strong>. Ce délai court à compter de la réception de l&apos;acompte <em>et</em> de l&apos;ensemble des éléments nécessaires à la réalisation (textes, images, informations légales, accès techniques éventuels).
        </p>
        <p>
          Le client s&apos;engage à fournir ces éléments et à répondre aux demandes de validation dans un délai raisonnable. Le délai de livraison est suspendu pendant les périodes d&apos;attente imputables au client.
        </p>
        <p>
          À la livraison, le client dispose de <strong>14 jours</strong> pour signaler par écrit les non-conformités au périmètre défini au devis. Les corrections de non-conformité sont réalisées sans surcoût. Passé ce délai, la prestation est réputée acceptée ; les demandes ultérieures relèvent de la maintenance ou d&apos;un nouveau devis.
        </p>

        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary)', margin: '1.25rem 0 0.5rem' }}>
          Résiliation
        </h3>
        <p>
          Les prestations de création sont des <strong>projets à périmètre défini</strong>, sans engagement de durée. En cas d&apos;abandon du projet par le client après démarrage, les travaux effectivement réalisés à la date de notification restent dus, à hauteur de l&apos;avancement constaté ; l&apos;acompte versé est acquis au prestataire.
        </p>
        <p>
          Les prestations de <strong>maintenance</strong> sont mensuelles et reconductibles tacitement. Elles sont résiliables à tout moment par l&apos;une ou l&apos;autre des parties, par email à <a href="mailto:p.laurent@opti-pro.fr">p.laurent@opti-pro.fr</a>, avec effet à la fin du mois en cours. Aucune indemnité n&apos;est due.
        </p>
      </section>

      <section>
        <h2>5. Propriété intellectuelle et données</h2>
        <p>
          Les <strong>contenus fournis par le client</strong> (textes, images, logo, marques) restent sa propriété exclusive. Le client garantit détenir les droits nécessaires sur les éléments qu&apos;il transmet.
        </p>
        <p>
          Après <strong>paiement intégral</strong> de la prestation, le client devient propriétaire du site ou de l&apos;outil livré et des contenus qu&apos;il héberge. Le nom de domaine est enregistré au nom du client, qui en reste titulaire. OptiPro conserve la propriété intellectuelle des composants techniques génériques et des briques réutilisables développées en amont, et se réserve le droit de les réemployer sur d&apos;autres projets, sans reprise des contenus ni de l&apos;identité visuelle du client.
        </p>
        <p>
          Les données saisies dans le cadre du service restent l&apos;entière propriété du client, qui peut en demander un export complet à tout moment. En fin de relation, OptiPro fournit l&apos;export final et les accès dans un délai de 30 jours.
        </p>
        <p>
          Sauf refus écrit du client, OptiPro peut citer la prestation et en présenter des visuels à titre de référence commerciale.
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
          OptiPro est tenu à une obligation de moyens dans la réalisation des prestations. Sa responsabilité est limitée aux dommages directs et ne peut excéder le montant hors taxes effectivement payé pour la prestation concernée.
        </p>
        <p>
          OptiPro ne saurait être tenu responsable des indisponibilités imputables aux prestataires tiers (hébergeur, registrar, services externes), des conséquences d&apos;une modification effectuée par le client ou un tiers sur le site livré, ni de l&apos;exactitude des contenus fournis par le client. <strong>Aucun résultat de positionnement dans les moteurs de recherche, de trafic ou de chiffre d&apos;affaires n&apos;est garanti</strong>, ces éléments dépendant de facteurs extérieurs à la prestation.
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
