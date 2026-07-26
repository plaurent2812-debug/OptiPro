/**
 * Blog OptiPro — données statiques
 *
 * Pas de CMS externe, pas de MDX : la source de vérité du blog
 * est ce fichier. Chaque article est un objet typé `Article` avec
 * du HTML maîtrisé en interne.
 */

export type Article = {
  slug: string;
  titre: string;
  description: string; // meta description ~155 chars
  datePublication: string; // ISO "YYYY-MM-DD"
  dateMaj?: string; // ISO "YYYY-MM-DD" — optionnel, fallback sur datePublication
  tempsLecture: number; // minutes
  categorie: string;
  motsCles: string[];
  contenu: string; // HTML interne maîtrisé (statique, pas d'input utilisateur)
  image?: string; // URL relative à /public, ex "/og-image.jpg"
};

export const articles: Article[] = [
  // ────────────────────────────────────────────────────────────────
  // Article 1 — Automatiser ses devis
  // ────────────────────────────────────────────────────────────────
  {
    slug: 'automatiser-devis-artisan',
    titre: "Comment automatiser ses devis en tant qu'artisan (sans se ruiner)",
    description:
      "Finies les heures perdues à recopier des devis dans Excel. Voici comment les artisans du bâtiment peuvent automatiser leur facturation avec des outils simples et abordables.",
    datePublication: '2026-04-15',
    dateMaj: '2026-07-26',
    tempsLecture: 6,
    categorie: 'Automatisation',
    motsCles: [
      'devis artisan',
      'automatisation devis',
      'logiciel devis artisan',
      'facturation artisan automatique',
      'artisan bâtiment gestion',
    ],
    contenu: `
<p class="lead">Vous êtes plombier, électricien ou maçon. Vous rentrez du chantier à 18h, fatigué. Et là, au lieu de souffler, vous ouvrez Excel pour faire vos devis. Une heure plus tard, vous avez recopié les mêmes lignes que la semaine dernière, vous avez oublié la TVA sur un poste, et le client n'a toujours pas reçu son chiffrage.</p>

<p>Si vous faites 10 devis par semaine, ça représente <strong>10 heures perdues</strong>. À 50 € de l'heure facturable (hypothèse haute, 48 semaines), c'est l'équivalent de 24 000 € de potentiel CA non facturé sur l'année si vous arriviez à reconvertir ces heures en chantiers. Pour des tâches que des outils peuvent gérer en grande partie à votre place.</p>

<p>Cet article vous explique concrètement comment passer de l'enfer du devis manuel à un système qui tourne presque tout seul, avec des outils accessibles à un artisan indépendant.</p>

<h2>Le devis manuel : un gouffre de temps souvent invisible</h2>

<p>Le problème avec le devis manuel, c'est qu'il ne se voit pas dans la compta. C'est du temps qui disparaît dans un fichier Excel, dans une boîte mail, dans un coin de bureau le dimanche soir. Mais les chiffres sont là.</p>

<p>Selon le <em>Baromètre ARTISANTE</em> de la CAPEB, <strong>42 % des artisans interrogés estiment que la gestion administrative représente entre 25 % et 75 % de leur charge de travail</strong>, en hausse de 4 points par rapport à 2021 (<a href="https://www.capeb.fr/actualites/9eme-edition-du-barometre-artisante" target="_blank" rel="noopener noreferrer">source CAPEB</a>). C'est du temps non facturable, et le devis en fait partie.</p>

<ul>
  <li><strong>Re-saisie des informations client</strong> à chaque nouveau devis (nom, adresse, téléphone, SIRET).</li>
  <li><strong>Calcul manuel</strong> des quantités, prix unitaires, TVA, totaux HT/TTC. Une erreur sur la TVA et c'est un client mécontent.</li>
  <li><strong>Mise en forme</strong> dans Word ou Excel pour que ça fasse pro.</li>
  <li><strong>Envoi manuel</strong> par email avec pièce jointe PDF générée à la main.</li>
  <li><strong>Suivi</strong> : « Le client a-t-il reçu ? Va-t-il signer ? » — dans la tête, pas dans un système.</li>
</ul>

<p>Multipliez ça par 10 devis par semaine et vous comprenez pourquoi vous travaillez 55 heures pour en facturer 35.</p>

<h2>Les 3 outils pour automatiser ses devis (selon votre profil)</h2>

<p>Bonne nouvelle : il n'est plus nécessaire d'avoir un comptable à temps plein ou un logiciel à 5 000 € pour automatiser. Voici les trois outils qui couvrent 95 % des besoins d'un artisan.</p>

<h3>1. Pennylane — le plus complet (à partir de 29 € HT/mois)</h3>

<p><em>Note de transparence : je n'ai aucun lien commercial avec Pennylane ni aucun des outils mentionnés dans cet article. Les recommandations reflètent mon avis personnel après tests.</em></p>

<p><strong>Pour qui ?</strong> Les artisans qui veulent un outil unique pour devis, factures, comptabilité et suivi de trésorerie. Idéal si vous avez déjà un expert-comptable (Pennylane est conçu pour collaborer avec lui).</p>

<p><strong>Ce qu'il fait bien :</strong></p>
<ul>
  <li>Modèles de devis pré-remplis avec votre logo, mentions légales, conditions de paiement.</li>
  <li>Catalogue produits/prestations : vous tapez « WC suspendu Geberit » et tout se remplit (description, prix, TVA).</li>
  <li>Conversion devis → facture en un clic une fois le chantier terminé.</li>
  <li>Synchronisation bancaire automatique : vous voyez en temps réel qui a payé.</li>
  <li>Relances de paiement programmées (J+7, J+15, J+30) automatiques.</li>
</ul>

<h3>2. Dolibarr — l'option open source (gratuit ou ~10 €/mois en cloud)</h3>

<p><strong>Pour qui ?</strong> Les artisans à l'aise avec l'informatique, qui veulent un outil gratuit et autonome, sans abonnement mensuel.</p>

<p><strong>Ce qu'il fait bien :</strong></p>
<ul>
  <li>Module devis/factures complet et personnalisable.</li>
  <li>Gestion clients/fournisseurs intégrée.</li>
  <li>Possibilité d'auto-héberger (gratuit) ou de prendre un cloud type DoliCloud (~10 €/mois).</li>
</ul>

<p><strong>Le bémol :</strong> l'interface est plus austère et la prise en main demande quelques heures. À réserver aux artisans qui aiment bidouiller.</p>

<h3>3. Batappli — spécialisé bâtiment (à partir de 25 € HT/mois)</h3>

<p><strong>Pour qui ?</strong> Les artisans du bâtiment qui veulent un logiciel qui parle leur métier — métrés, situations de travaux, sous-détails de prix, attestations TVA réduite.</p>

<p><strong>Ce qu'il fait bien :</strong></p>
<ul>
  <li>Bibliothèques de prix bâtiment intégrées (Batiprix, etc.).</li>
  <li>Métrés et calculs de surfaces directement dans le devis.</li>
  <li>Attestations de TVA à 10 % et 5,5 % gérées automatiquement.</li>
  <li>Situations de travaux pour les chantiers longs.</li>
</ul>

<h2>Comment ça marche concrètement (exemple type)</h2>

<p><em>Exemple type, à titre d'illustration.</em> Prenons un plombier qui faisait ses devis le soir sur Excel. Avec un outil de devis dédié, son processus ressemble à ça :</p>

<ol>
  <li><strong>Sur le chantier</strong> : il prend les mesures et photographie l'existant avec son téléphone.</li>
  <li><strong>Au bureau</strong> : il ouvre l'outil sur son téléphone, sélectionne le client (créé une fois pour toutes), pioche dans son catalogue (« Remplacement chauffe-eau 200L », « Pose mitigeur thermostatique »…), ajuste la main-d'œuvre.</li>
  <li><strong>Envoi (1 clic)</strong> : le PDF est généré automatiquement, envoyé par email avec un lien de signature électronique.</li>
  <li><strong>Suivi auto</strong> : si le client n'a pas répondu au bout de quelques jours, l'outil lui envoie un rappel poli signé de son nom.</li>
</ol>

<p>L'essentiel du gain ne vient pas de la vitesse de frappe : il vient de la <strong>suppression de la re-saisie</strong> et du fait que le suivi ne repose plus sur votre mémoire.</p>

<h2>Et si aucun logiciel du marché ne colle à votre métier ?</h2>

<p>C'est le cas de figure que je rencontre le plus souvent. Les trois outils ci-dessus couvrent la majorité des besoins, mais certains artisans ont un fonctionnement que le catalogue standard ne sait pas modéliser : chiffrage au métré avec des coefficients maison, devis qui dépendent d'un barème négocié par client, suivi de chantier en plusieurs phases, matériel loué à refacturer.</p>

<p>Dans ces cas-là, on construit un <strong>outil métier sur mesure</strong> : une petite application web qui reprend exactement votre logique de chiffrage, génère le devis au bon format et se branche sur votre facturation. C'est ce que je fais chez OptiPro, en complément des sites vitrines — le périmètre et le budget sont chiffrés au devis après un premier appel. Vous trouverez les repères de prix sur la <a href="/tarifs">page tarifs</a> et le détail de la méthode sur <a href="/le-service">la page du service</a>.</p>

<p>La règle que j'applique : <strong>on ne développe sur mesure que ce qu'aucun outil du marché ne sait faire</strong>. Si Pennylane fait le job à 29 € par mois, prenez Pennylane.</p>

<h2>Et si on veut aller plus loin ?</h2>

<p>Une fois la base en place, on peut empiler les automatisations malines :</p>

<ul>
  <li><strong>Notifications client automatiques</strong> : « Votre devis a été envoyé », « Votre facture est disponible », « Votre acompte a été reçu ».</li>
  <li><strong>Relances impayés</strong> programmées avec des messages adaptés au stade (rappel cordial → mise en demeure).</li>
  <li><strong>Synchronisation comptable</strong> : votre expert-comptable accède directement à Pennylane, plus besoin de lui envoyer les factures par mail à la fin du mois.</li>
  <li><strong>Tableaux de bord</strong> : CA mensuel, taux de transformation devis → facture, top 10 clients, panier moyen.</li>
  <li><strong>Connexion compte bancaire</strong> : le rapprochement bancaire se fait automatiquement, vous savez qui a payé sans avoir à éplucher vos relevés.</li>
</ul>

<h2>Combien ça coûte vraiment ?</h2>

<p>Faisons le calcul honnête. Pennylane à 29 € HT/mois, ça fait 348 € HT/an. Si vous récupérez ne serait-ce que <strong>4 heures par mois</strong> grâce à l'outil (très conservateur), à 50 € de l'heure facturable, vous gagnez 200 € par mois soit 2 400 € par an. ROI de plus de 600 %.</p>

<p>Et ça, c'est sans compter le confort mental, la baisse des erreurs de TVA, et la pro-image renvoyée au client qui reçoit un devis propre, signé électroniquement, suivi automatiquement.</p>

<h2>Par où commencer ?</h2>

<p>Pas besoin de tout révolutionner d'un coup. Voici la séquence que je recommande à un artisan qui démarre cette transition :</p>

<ol>
  <li><strong>Semaine 1</strong> : choisir un outil (Pennylane si vous voulez le plus simple) et créer son compte.</li>
  <li><strong>Semaine 2</strong> : importer ou ressaisir vos 20 clients principaux.</li>
  <li><strong>Semaine 3</strong> : construire votre catalogue produits/prestations (les 30 lignes que vous utilisez 80 % du temps).</li>
  <li><strong>Semaine 4</strong> : faire vos premiers devis dessus, en gardant Excel en sécurité.</li>
  <li><strong>Mois 2</strong> : basculer 100 % et fermer Excel pour les devis.</li>
</ol>

<p>En un mois, vous avez basculé. En trois, vous ne pourriez plus revenir en arrière.</p>

<p>Et si vos devis partent enfin vite, l'étape suivante est souvent la visibilité : à quoi sert un devis envoyé en 10 minutes si personne ne vous trouve sur Google ? C'est le sujet de l'article <a href="/blog/site-web-artisan-combien-ca-coute">Site web pour artisan : combien ça coûte vraiment</a>.</p>

<div class="callout">
  <p><strong>Besoin d'un outil que le marché ne propose pas ?</strong></p>
  <p>Premier appel de 30 minutes, gratuit et sans engagement : vous me décrivez votre façon de chiffrer et vos points de friction. Soit je vous oriente vers un logiciel existant (gratuitement, c'est souvent la bonne réponse), soit on cadre un outil sur mesure. Les repères de prix sont publics sur la page tarifs.</p>
  <a href="/contact" class="callout-link">Réserver un premier appel →</a>
  <a href="/tarifs" class="callout-link">Voir les tarifs →</a>
</div>
`,
  },

  // ────────────────────────────────────────────────────────────────
  // Article 2 — Outils qui font perdre du temps
  // ────────────────────────────────────────────────────────────────
  {
    slug: 'outils-qui-font-perdre-temps-artisans',
    titre:
      "Les 5 outils qui font perdre du temps aux artisans (et comment s'en sortir)",
    description:
      "Excel pour les devis, WhatsApp pour les relances, un cahier pour le planning... Ces outils du quotidien coûtent en réalité des heures aux artisans. Voici comment en sortir.",
    datePublication: '2026-04-08',
    dateMaj: '2026-07-26',
    tempsLecture: 5,
    categorie: 'Productivité',
    motsCles: [
      'outils artisan',
      'gestion temps artisan',
      'productivité artisan',
      'organisation artisan',
      'outils numériques artisan',
    ],
    contenu: `
<p class="lead">Vous êtes artisan, pas comptable. Alors pourquoi passez-vous 3 heures par semaine sur Excel ? Pourquoi votre planning est-il dans un cahier que vous trimballez du chantier au bureau ? Pourquoi cherchez-vous le numéro de M. Dupont dans 4 mois de WhatsApp ?</p>

<p>Ce n'est pas votre faute. Ce sont les outils qui sont mal adaptés. Ils étaient « gratuits » ou « pratiques » au début, ils sont devenus une habitude. Mais aujourd'hui, ils coûtent. En temps, en erreurs, en clients perdus.</p>

<p>Voici les 5 outils que je vois revenir très souvent — et comment passer à mieux sans complexifier sa vie.</p>

<h2>Outil 1 — Excel pour les devis</h2>

<p><strong>Le problème :</strong> Excel n'a pas été conçu pour faire des devis. Vous re-saisissez les coordonnées client à chaque fois, vous oubliez de mettre à jour la numérotation, vous calculez la TVA manuellement (et parfois mal), vous exportez en PDF qui se déforme à l'impression. Et surtout, vous n'avez aucune visibilité : qui a reçu son devis ? qui a signé ? qui a oublié ?</p>

<p><strong>Le coût caché :</strong> 30 à 45 minutes par devis × 8 devis/semaine = 4 à 6 heures perdues. Plus les erreurs de TVA qui peuvent coûter cher en cas de contrôle.</p>

<p><strong>L'alternative :</strong> un outil de devis dédié comme Pennylane (29 € HT/mois) ou Henrri (gratuit pour les fonctions de base). Vous éliminez la re-saisie et les erreurs de calcul, et vous avez enfin un suivi clair. Le détail des options est dans l'article <a href="/blog/automatiser-devis-artisan">comment automatiser ses devis</a>.</p>

<h2>Outil 2 — WhatsApp pour les relances clients</h2>

<p><strong>Le problème :</strong> WhatsApp est génial pour discuter. Catastrophique pour piloter une activité. Les messages se mélangent (perso et pro), les conversations se perdent dans le scroll, vous ne pouvez pas chercher « tous les clients qui n'ont pas répondu depuis 7 jours », et surtout… vous oubliez. Combien de devis dorment dans WhatsApp parce que vous avez oublié de relancer ?</p>

<p><strong>Le coût caché :</strong> des devis qui ne sont jamais relancés, donc jamais signés — alors que le client était simplement passé à autre chose. C'est la fuite la plus silencieuse et la plus chère de la liste.</p>

<p><strong>L'alternative :</strong> les relances automatiques d'un outil de devis. Vous envoyez le devis → le système relance à J+3, J+7, J+15, avec votre signature. Vous ne faites plus rien, et plus aucun devis ne dort par oubli.</p>

<h2>Outil 3 — Le cahier ou agenda papier pour le planning</h2>

<p><strong>Le problème :</strong> Le cahier, c'est rassurant. Mais : il ne se synchronise pas avec votre téléphone, vous ne pouvez pas le partager avec votre conjoint(e) qui prend les rendez-vous, vous ne pouvez pas voir votre dispo « en deux clics » quand un client vous appelle au feu rouge, et si vous le perdez… c'est la panique.</p>

<p><strong>Le coût caché :</strong> doubles bookings, rendez-vous oubliés, clients qui appellent pour confirmer parce qu'ils n'ont pas eu de rappel. Sans parler du temps passé à le recopier ou à chercher une date.</p>

<p><strong>L'alternative :</strong> Google Calendar (gratuit) ou un agenda intégré à votre outil de gestion. Avantages immédiats : accès depuis le téléphone, partage avec un proche, rappels automatiques aux clients par SMS la veille du rendez-vous, ce qui réduit nettement les rendez-vous manqués.</p>

<h2>Outil 4 — L'email classique pour les bons de commande fournisseurs</h2>

<p><strong>Le problème :</strong> Vous envoyez un bon de commande à votre grossiste par email, en pièce jointe Word. Vous ne savez pas s'il a été reçu, lu, traité. Vous appelez pour vérifier. Vous oubliez de noter ce que vous avez commandé. Et la facture arrive avec une référence que vous ne reconnaissez pas trois semaines plus tard.</p>

<p><strong>Le coût caché :</strong> erreurs de commande (mauvaise référence, mauvaise quantité), retours de matériel, retards de chantier, surstocks oubliés dans le camion.</p>

<p><strong>L'alternative :</strong> les portails fournisseurs (Cedeo, Rexel, Point.P ont tous des espaces pro avec historique des commandes), ou un outil de gestion qui crée le bon de commande à partir du devis automatiquement.</p>

<h2>Outil 5 — Les virements manuels et relevés papier pour la compta</h2>

<p><strong>Le problème :</strong> Vous faites vos virements à la banque depuis le site web, vous gardez les relevés en PDF dans un dossier, vous envoyez tout ça à votre comptable une fois par trimestre dans une grosse enveloppe ou un email à pièces jointes multiples. Le comptable galère, vous re-classez, et au final vous n'avez aucune visibilité sur votre trésorerie en temps réel.</p>

<p><strong>Le coût caché :</strong> stress de fin de trimestre, honoraires comptables plus élevés (parce que c'est plus long pour lui), aucune anticipation des trous de trésorerie.</p>

<p><strong>L'alternative :</strong> connecter son compte bancaire pro à un outil comme Pennylane ou Indy. Le rapprochement se fait tout seul, le comptable accède en direct, vous voyez votre trésorerie en temps réel, et la TVA se calcule automatiquement.</p>

<h2>Le vrai coût total de ces 5 outils</h2>

<p>Pris un par un, chacun de ces outils vous coûte quelques dizaines de minutes par semaine. Cumulés, ils occupent une part significative de votre temps de gestion — et selon le <a href="https://www.capeb.fr/actualites/9eme-edition-du-barometre-artisante" target="_blank" rel="noopener noreferrer">Baromètre ARTISANTE de la CAPEB</a>, 42 % des artisans interrogés estiment que la gestion administrative représente entre 25 % et 75 % de leur charge de travail.</p>

<p>L'important n'est pas le chiffre exact, c'est le constat : pour quelques dizaines d'euros par mois d'outils bien choisis, vous récupérez du temps que vous pouvez remettre sur des chantiers facturables — ou garder pour vous.</p>

<p>Le calcul détaillé du budget outils, et le moment où il devient plus pertinent de faire développer un outil à votre main, sont expliqués sur <a href="/le-service">la page du service</a>.</p>

<h2>Par où commencer ?</h2>

<p>N'essayez pas de tout changer d'un coup. Vous allez vous décourager. La méthode qui marche :</p>

<ol>
  <li><strong>Mois 1</strong> : remplacer Excel par un vrai outil de devis. C'est celui qui a le plus gros impact.</li>
  <li><strong>Mois 2</strong> : connecter le compte bancaire et basculer la compta.</li>
  <li><strong>Mois 3</strong> : passer le planning sur Google Calendar, activer les SMS de rappel.</li>
  <li><strong>Mois 4+</strong> : optimiser les relances, les fournisseurs, etc.</li>
</ol>

<p>En 90 jours, vous avez transformé votre entreprise sans drame. Et vous ne reviendrez plus en arrière.</p>

<div class="callout">
  <p><strong>Vous voulez savoir lesquels de ces outils vous coûtent le plus cher ?</strong></p>
  <p>Premier appel de 30 minutes, gratuit, sans engagement : vous me décrivez votre situation, on identifie ensemble les 2 ou 3 outils prioritaires à remplacer. Souvent la réponse est un logiciel du marché, et je vous le dis sans rien vous vendre. Quand le besoin ne rentre dans aucune case, je développe le site ou l'outil web qui va avec.</p>
  <a href="/contact" class="callout-link">Réserver un premier appel →</a>
  <a href="/tarifs" class="callout-link">Voir les tarifs →</a>
</div>
`,
  },

  // ────────────────────────────────────────────────────────────────
  // Article 3 — Site web artisan : combien ça coûte
  // ────────────────────────────────────────────────────────────────
  {
    slug: 'site-web-artisan-combien-ca-coute',
    titre: 'Site web pour artisan : combien ça coûte vraiment en 2026 ?',
    description:
      "De 0€ à 5000€, les prix d'un site web artisan varient énormément. Ce guide transparent compare les options : DIY, agence, freelance — avec les vrais coûts et pièges à éviter.",
    datePublication: '2026-04-01',
    dateMaj: '2026-07-26',
    tempsLecture: 7,
    categorie: 'Site web',
    motsCles: [
      'site web artisan prix',
      'créer site web artisan',
      'combien coûte site artisan',
      'site internet plombier',
      'site web artisan pas cher',
    ],
    contenu: `
<p class="lead">« J'ai besoin d'un site, mais je ne sais pas combien ça coûte. » C'est la phrase que j'entends le plus souvent quand un artisan me contacte. Et c'est normal : sur le marché du site web, on trouve tout et son contraire. 0 € chez Wix, 8 000 € chez une agence, 1 500 € chez un freelance. Qui dit vrai ?</p>

<p>Cet article est un guide transparent. Pas de discours commercial, pas de « ça dépend ». Juste les vrais prix, ce qu'on a pour son argent, et les pièges à éviter en 2026.</p>

<h2>Pourquoi un site est devenu indispensable en 2026</h2>

<p>Avant d'aller dans les prix, posons la question : <em>est-ce que c'est vraiment nécessaire ?</em></p>

<p>Réponse courte : <strong>oui</strong>. Voici pourquoi.</p>

<ul>
  <li><strong>Google est le premier réflexe</strong>. Quand quelqu'un cherche « plombier Vence », il tape sur Google. Sans site, vous n'existez pas dans cette recherche.</li>
  <li><strong>Les avis se vérifient en ligne</strong>. Avant d'appeler, le client va voir vos réalisations, vos avis, vos tarifs.</li>
  <li><strong>Le devis en ligne est devenu un standard</strong>. Un formulaire de contact bien fait capte les clients qui ne veulent pas téléphoner — le soir, le week-end, ou simplement parce qu'ils préfèrent écrire.</li>
  <li><strong>Crédibilité</strong>. Pas de site = entreprise « moins sérieuse » dans l'esprit du client, à tort ou à raison.</li>
</ul>

<p>Maintenant qu'on est d'accord sur le « pourquoi », parlons du « combien ».</p>

<h2>Les 4 options et leurs vrais coûts</h2>

<h3>Option 1 — DIY avec Wix, Squarespace ou Jimdo (0 à 300 €/an)</h3>

<p><strong>Comment ça marche :</strong> vous créez vous-même votre site avec un outil grand public. Templates pré-faits, glisser-déposer, hébergement inclus.</p>

<p><strong>Vrai coût :</strong> 0 € pour la version gratuite (avec pub Wix), 12 à 25 € HT/mois pour une version pro avec votre nom de domaine. Soit 144 à 300 €/an.</p>

<p><strong>Avantages :</strong></p>
<ul>
  <li>Coût bas et prévisible.</li>
  <li>Vous gardez la main sur tout.</li>
  <li>Pas de dépendance à un prestataire.</li>
</ul>

<p><strong>Inconvénients :</strong></p>
<ul>
  <li>Comptez <strong>15 à 30 heures</strong> de travail pour faire un site correct. Si votre temps vaut 50 €/h, c'est 750 à 1 500 € de coût caché.</li>
  <li>Le SEO (référencement Google) y est moyen. Difficile d'apparaître sur « plombier Vence » avec un site Wix mal optimisé.</li>
  <li>Design souvent « déjà-vu » — vous ressemblez à 10 000 autres artisans.</li>
  <li>Performances limitées (vitesse de chargement) qui pénalisent au passage.</li>
</ul>

<p><strong>Pour qui ?</strong> Vous êtes à l'aise avec l'informatique, vous démarrez votre activité, et un site « vitrine simple » suffit dans un premier temps.</p>

<h3>Option 2 — Template WordPress installé par un proche (500 à 1 500 € one-shot)</h3>

<p><strong>Comment ça marche :</strong> vous achetez un template WordPress pro (40 à 80 €), un nom de domaine + hébergement (60 à 100 €/an), et vous trouvez quelqu'un (cousin, freelance débutant, prestataire low-cost) pour l'installer et personnaliser.</p>

<p><strong>Vrai coût :</strong> 500 à 1 500 € à la création + 100 €/an d'hébergement et nom de domaine.</p>

<p><strong>Avantages :</strong></p>
<ul>
  <li>Plus pro qu'un Wix.</li>
  <li>Vous êtes propriétaire de tout (pas dépendant d'une plateforme).</li>
  <li>Bon rapport qualité/prix pour démarrer.</li>
</ul>

<p><strong>Inconvénients :</strong></p>
<ul>
  <li>Maintenance : WordPress demande des mises à jour régulières (sécurité, plugins). Si personne ne s'en occupe, le site se fait pirater.</li>
  <li>Le SEO doit être configuré manuellement.</li>
  <li>Si la personne qui l'a fait disparaît, vous êtes seul face à un système que vous ne maîtrisez pas.</li>
</ul>

<p><strong>Pour qui ?</strong> Vous avez quelqu'un de confiance qui s'y connaît, et vous prévoyez un budget annuel maintenance (~200 €) pour les mises à jour.</p>

<h3>Option 3 — Agence web (2 000 à 8 000 €)</h3>

<p><strong>Comment ça marche :</strong> vous mandatez une agence locale ou en ligne. Cahier des charges, design sur mesure, développement, livraison.</p>

<p><strong>Vrai coût :</strong> 2 000 à 8 000 € selon la taille de l'agence et la complexité. Souvent un contrat de maintenance à 50-100 €/mois en supplément.</p>

<p><strong>Avantages :</strong></p>
<ul>
  <li>Site qualitatif, design unique.</li>
  <li>Équipe complète (graphiste, dev, chef de projet, parfois rédacteur SEO).</li>
  <li>Suivi structuré.</li>
</ul>

<p><strong>Inconvénients :</strong></p>
<ul>
  <li>Cher pour un artisan : 5 000 € + 80 €/mois, c'est 6 000 € la première année.</li>
  <li>Vous parlez à un commercial, puis à un chef de projet, puis à un dev. Pas d'interlocuteur unique.</li>
  <li>Délais souvent longs (3 à 6 mois pour un projet simple).</li>
  <li>Souvent suréquipé pour vos besoins réels.</li>
</ul>

<p><strong>Pour qui ?</strong> TPE ou PME avec un budget conséquent et des besoins complexes (e-commerce, espace client, multi-langues).</p>

<h3>Option 4 — Freelance spécialisé (900 à 5 000 €)</h3>

<p><strong>Comment ça marche :</strong> vous travaillez en direct avec un développeur indépendant qui connaît votre métier (artisan, TPE). Pas de commercial, pas de couches intermédiaires.</p>

<p><strong>Vrai coût :</strong> 900 à 5 000 € selon la complexité, souvent avec un forfait maintenance optionnel à 30-130 €/mois. Pour situer : chez OptiPro, un site vitrine de 3-4 pages avec hébergement la première année, nom de domaine et email pro est à <strong>990 € HT</strong>, et la version Pro (formulaire fonctionnel, fiche Google Business, SEO local) à <strong>1 390 € HT</strong> — tout est détaillé sur la <a href="/tarifs">page tarifs</a>.</p>

<p><strong>Avantages :</strong></p>
<ul>
  <li>Interlocuteur unique du début à la fin.</li>
  <li>Site sur mesure, optimisé SEO local.</li>
  <li>Délais courts (comptez environ 3 semaines chez OptiPro pour un site vitrine).</li>
  <li>Bon rapport qualité/prix.</li>
</ul>

<p><strong>Inconvénients :</strong></p>
<ul>
  <li>Dépend d'une seule personne — vérifier sa fiabilité (références, avis, ancienneté).</li>
  <li>Si le freelance disparaît, savoir comment récupérer son site.</li>
</ul>

<p><strong>Pour qui ?</strong> La plupart des artisans et TPE. C'est le meilleur compromis qualité/prix dans 80 % des cas.</p>

<h2>Ce qu'un bon site artisan doit absolument avoir</h2>

<p>Quel que soit le budget, ces éléments sont non négociables :</p>

<ul>
  <li><strong>Formulaire de demande de devis</strong> bien visible, court (5 champs max), envoyé directement par email.</li>
  <li><strong>Numéro de téléphone cliquable</strong> en haut de page, visible sur mobile.</li>
  <li><strong>Carte Google Maps</strong> avec votre zone d'intervention.</li>
  <li><strong>Galerie photos de chantiers</strong> (avant/après si possible).</li>
  <li><strong>Avis clients</strong> intégrés (Google, Trustpilot ou témoignages directs).</li>
  <li><strong>Mobile-first</strong> : 70 % de vos visiteurs arrivent depuis un téléphone.</li>
  <li><strong>Pages dédiées par prestation</strong> (« plomberie », « rénovation salle de bain », etc.) pour le SEO.</li>
  <li><strong>Mentions légales et politique de confidentialité</strong> conformes RGPD.</li>
</ul>

<h2>Les 4 pièges à éviter absolument</h2>

<ol>
  <li><strong>Le contrat de maintenance caché</strong>. Certaines agences vendent un site « pas cher » mais avec un abonnement obligatoire à 80 €/mois pendant 3 ans. Faites le calcul total avant de signer.</li>
  <li><strong>Le design générique</strong>. Si votre site ressemble à celui de votre concurrent direct, vous perdez avant même d'avoir commencé.</li>
  <li><strong>Pas de SEO local</strong>. Un site qui n'apparaît pas sur « plombier Vence » est inutile, peu importe son design. Demandez quel travail SEO est prévu.</li>
  <li><strong>Vous ne gardez pas l'accès</strong>. Vérifiez que vous êtes propriétaire du nom de domaine, de l'hébergement, et que vous pouvez récupérer le code si besoin.</li>
</ol>

<h2>SEO local : pourquoi c'est critique pour un artisan</h2>

<p>Le SEO local, c'est la capacité à apparaître quand quelqu'un tape « plombier + ville » ou « électricien + ville ». Pour un artisan, c'est <strong>la</strong> source de leads la plus rentable.</p>

<p>Concrètement, ça passe par :</p>
<ul>
  <li>Une <strong>fiche Google Business Profile</strong> bien remplie (gratuite, à faire en priorité).</li>
  <li>Des <strong>pages locales</strong> sur votre site : « plombier Vence », « plombier Saint-Paul », « plombier Cagnes-sur-Mer ».</li>
  <li>Des <strong>avis clients</strong> réguliers sur votre fiche Google (10-20 avis = changement radical).</li>
  <li>Des <strong>backlinks locaux</strong> (artisans partenaires, fournisseurs, presse locale).</li>
</ul>

<p>Un bon freelance ou une bonne agence intègre tout ça dès la conception. Sinon, votre site est joli mais invisible.</p>

<h2>Mon conseil honnête</h2>

<p>Si vous démarrez et que vous êtes vraiment serré, allez sur Wix le temps de gagner de l'argent (3 à 6 mois). Mais à terme, l'option 4 (freelance spécialisé) est celle qui rapporte le plus. Un site bien fait, optimisé SEO local, travaille pour vous tous les mois pendant des années — pour un budget compris entre 990 et 3 000 € selon les besoins.</p>

<p>Évitez les agences sauf si vous avez plus de 5 000 € de budget et des besoins complexes — sinon vous payez pour des structures dont vous n'avez pas besoin.</p>

<p>Et une fois le site en ligne, le vrai sujet devient le temps que vous passez sur la gestion : voir <a href="/blog/automatiser-devis-artisan">comment automatiser ses devis</a> et <a href="/blog/outils-qui-font-perdre-temps-artisans">les 5 outils qui font perdre du temps aux artisans</a>.</p>

<div class="callout">
  <p><strong>Vous hésitez sur le bon budget pour votre site ?</strong></p>
  <p>Premier appel de 30 minutes, gratuit : vous me décrivez votre activité, votre concurrence locale et vos objectifs, et je vous donne une fourchette honnête — sans pression de vente. Mes propres tarifs sont publics : site vitrine 990 € HT, version Pro 1 390 € HT, maintenance à partir de 79 €/mois HT.</p>
  <a href="/contact" class="callout-link">Réserver un premier appel →</a>
  <a href="/tarifs" class="callout-link">Voir les tarifs détaillés →</a>
</div>
`,
  },

  // ────────────────────────────────────────────────────────────────
  // Article 4 — Facturation : 3h à 20 min
  // ────────────────────────────────────────────────────────────────
  {
    slug: 'facturation-artisan-gagner-du-temps',
    titre: 'Facturation artisan : la ramener à une routine de 20 minutes par semaine',
    description:
      "La facturation grignote vos soirées par petits bouts. Avec les bons outils et une routine hebdo simple, elle tient en 20 minutes. Méthode en 3 étapes et outils.",
    datePublication: '2026-03-25',
    dateMaj: '2026-07-26',
    tempsLecture: 5,
    categorie: 'Gestion',
    motsCles: [
      'facturation artisan',
      'logiciel facturation artisan',
      'gagner temps facturation',
      'facture artisan automatique',
      'Pennylane artisan',
    ],
    contenu: `
<p class="lead">Selon le <a href="https://www.capeb.fr/actualites/9eme-edition-du-barometre-artisante" target="_blank" rel="noopener noreferrer">Baromètre ARTISANTE de la CAPEB</a>, <strong>42 % des artisans interrogés estiment que la gestion administrative représente entre 25 % et 75 % de leur charge de travail</strong>. Et la facturation en est une grosse part : éditer les factures, les envoyer, relancer les impayés, vérifier qui a payé.</p>

<p>Cet article vous montre comment ramener cette charge à une routine courte, une fois par semaine. Pas avec une recette miracle : avec une méthode simple en 3 étapes — centraliser, automatiser, laisser l'outil relancer — et le bon outillage.</p>

<h2>Pourquoi la facturation prend autant de temps</h2>

<p>Avant de chercher la solution, comprenons le problème. La facturation est un voleur de temps invisible parce qu'elle se fait par petits bouts. 5 minutes ici, 15 minutes là, le dimanche soir, le lundi matin. Voici les principaux coupables :</p>

<ul>
  <li><strong>La re-saisie manuelle</strong>. Vous avez fait un devis. Le chantier est terminé. Vous re-saisissez les mêmes lignes dans la facture. Au lieu de cliquer sur « convertir le devis en facture », ce qui prend 3 secondes.</li>
  <li><strong>Les erreurs</strong>. Une TVA à 10 % au lieu de 20 %, un montant mal additionné, une faute sur l'adresse du client. Et c'est reparti pour un avoir, une nouvelle facture, des explications.</li>
  <li><strong>Les relances oubliées</strong>. Une facture envoyée le 5 du mois qui n'est pas payée. Vous oubliez de relancer. 60 jours plus tard, vous re-découvrez l'impayé. C'est trop tard, le client est froid.</li>
  <li><strong>La numérotation manuelle</strong>. « C'était quoi le numéro de la dernière facture ? ». Vous ouvrez 3 fichiers Excel pour vérifier.</li>
  <li><strong>L'envoi par email</strong>. Vous tapez le mail, vous joignez le PDF, vous oubliez parfois la pièce jointe…</li>
  <li><strong>Le suivi des paiements</strong>. Vous regardez votre relevé bancaire, vous cochez à la main qui a payé, vous mettez à jour un fichier Excel.</li>
</ul>

<p>Pris séparément, chaque action paraît courte. Cumulés, ils mangent vos soirées et vos dimanches.</p>

<h2>La méthode en 3 étapes</h2>

<h3>Étape 1 — Centraliser : un seul outil pour tout</h3>

<p>Le premier piège, c'est la dispersion. Excel pour les devis, Word pour les factures, un dossier Drive pour les PDF, votre boîte mail pour l'envoi, votre relevé bancaire pour le suivi. Chaque outil ajoute du temps.</p>

<p><strong>La solution :</strong> un outil unique qui fait <em>tout</em>. Devis, conversion en facture, envoi, relances, suivi paiements, lien banque.</p>

<p>Pour un artisan, je recommande Pennylane (29 € HT/mois) ou Indy (gratuit pour les indépendants). Les deux font le job. Indy est plus simple si vous êtes auto-entrepreneur, Pennylane plus complet si vous avez du volume ou une SARL.</p>

<h3>Étape 2 — Automatiser : laisser l'outil faire le travail</h3>

<p>Une fois centralisé, on automatise. Voici ce qui doit tourner sans vous :</p>

<ul>
  <li><strong>Conversion devis → facture en un clic</strong>. Plus jamais de re-saisie.</li>
  <li><strong>Numérotation automatique</strong>. F-2026-0042, F-2026-0043… L'outil incrémente, vous n'y pensez plus.</li>
  <li><strong>Envoi par email automatique</strong> avec PDF joint, signature électronique, message pré-écrit.</li>
  <li><strong>Modèles de factures</strong> avec votre logo, mentions légales, conditions de paiement.</li>
  <li><strong>Calcul automatique de la TVA</strong> (10 %, 20 %, 5,5 % pour le bâtiment).</li>
  <li><strong>Connexion bancaire</strong> : quand le client paie, la facture passe à « Réglée » toute seule.</li>
</ul>

<p>Comptez <strong>2 heures de paramétrage initial</strong>. Une fois fait, tout tourne.</p>

<h3>Étape 3 — Déléguer (à l'outil) : les relances</h3>

<p>Le plus gros voleur de temps après la saisie, c'est la relance des impayés. Et c'est aussi la source N°1 de problèmes de trésorerie. La bonne nouvelle : c'est totalement automatisable.</p>

<p>Configurez une fois pour toutes :</p>
<ul>
  <li><strong>J+7 après échéance</strong> : rappel cordial. « Bonjour, je me permets un petit rappel concernant la facture F-2026-0042. Cordialement, [votre nom]. »</li>
  <li><strong>J+15</strong> : rappel plus ferme avec mention des pénalités de retard légales.</li>
  <li><strong>J+30</strong> : mise en demeure préalable, copie en LRAR si vous le souhaitez.</li>
</ul>

<p>L'outil envoie tout seul, signé en votre nom. Vous n'intervenez que si le client appelle pour discuter.</p>

<p>L'effet principal n'est pas magique, il est mécanique : <strong>une facture en retard est toujours relancée, à date, sans que vous ayez à y penser ni à surmonter la gêne de le faire</strong>. Pour situer l'enjeu, la Banque de France indique dans son <a href="https://www.banque-france.fr/fr/publications-et-statistiques/publications/rapport-de-lobservatoire-des-delais-de-paiement-2024" target="_blank" rel="noopener noreferrer">rapport 2024 de l'Observatoire des délais de paiement</a> que les retards de paiement se sont dégradés en France, avec un retard moyen de 13,6 jours au quatrième trimestre.</p>

<h2>Pennylane : pourquoi c'est le meilleur choix pour beaucoup d'artisans</h2>

<p>Je n'ai aucun lien commercial avec Pennylane (ni aucun autre outil). Mais c'est le plus complet pour un artisan qui veut gagner du temps. Voici pourquoi :</p>

<ul>
  <li><strong>Tout en un</strong> : devis, factures, banque, comptabilité, trésorerie.</li>
  <li><strong>Connexion bancaire automatique</strong> avec quasiment toutes les banques françaises.</li>
  <li><strong>Collaboration expert-comptable</strong> : votre comptable accède directement, plus besoin de tout lui envoyer.</li>
  <li><strong>Application mobile</strong> propre : vous pouvez faire un devis depuis le chantier.</li>
  <li><strong>Tableau de bord trésorerie</strong> : vous voyez en un coup d'œil ce qui rentre, ce qui sort, qui doit payer.</li>
  <li><strong>Support client réactif</strong> en français.</li>
</ul>

<p>Le prix (29 à 49 € HT/mois selon le forfait) se compare simplement : mettez en face le temps que vous passez aujourd'hui sur la facturation et ce que vaut une heure de votre travail facturable. Dans la plupart des cas, le calcul se fait tout seul.</p>

<p><strong>Alternatives</strong> : Indy (gratuit, plus simple, idéal auto-entrepreneurs), Henrri (gratuit pour devis/factures uniquement), Tiime (similaire à Pennylane).</p>

<h2>La routine du vendredi soir (20 minutes)</h2>

<p>Voici la routine que je recommande, à faire chaque vendredi en fin de journée. 20 minutes, montre en main, et vous êtes à jour.</p>

<ol>
  <li><strong>5 min</strong> : convertir les devis signés de la semaine en factures (1 clic par devis).</li>
  <li><strong>5 min</strong> : envoyer les factures aux clients (l'outil fait l'envoi, vous validez).</li>
  <li><strong>3 min</strong> : vérifier le tableau de bord — qui a payé, qui n'a pas payé. Les relances partent toutes seules, vous regardez juste s'il y a une situation à gérer manuellement.</li>
  <li><strong>5 min</strong> : si un client doit être appelé (impayé sérieux, question), passer le coup de fil.</li>
  <li><strong>2 min</strong> : caler les rendez-vous chantier de la semaine suivante avec les clients qui viennent de signer.</li>
</ol>

<p>Et c'est tout. Vous fermez le PC à 18h30. Le week-end est libre.</p>

<h2>Le bénéfice qu'on n'imagine pas</h2>

<p>Au-delà du temps gagné, il y a un effet psychologique énorme. Quand votre facturation tourne sans vous, vous arrêtez d'y penser. Vous ne vous réveillez plus à 3h du matin en vous disant « est-ce que M. Dupont a payé ? ». Vous n'avez plus cette pile invisible de tâches admin qui plombe votre dimanche.</p>

<p>Vous êtes plus reposé, donc plus efficace sur les chantiers. Vous prenez de meilleures décisions commerciales (parce que vous avez les bons chiffres en temps réel). Et surtout, vous reprenez du plaisir à faire votre métier.</p>

<h2>Combien de temps pour mettre tout ça en place ?</h2>

<p>Soyons honnête : ça demande un effort initial. Comptez :</p>

<ul>
  <li><strong>2 heures</strong> pour choisir l'outil et créer le compte.</li>
  <li><strong>3 heures</strong> pour paramétrer (logo, modèles, catalogue produits, mentions légales).</li>
  <li><strong>2 heures</strong> pour importer les clients existants.</li>
  <li><strong>1 heure</strong> pour connecter la banque et configurer les relances automatiques.</li>
</ul>

<p><strong>Total : environ 8 heures</strong>. Un week-end intense, ou deux soirées. C'est le seul vrai obstacle — et il ne se présente qu'une fois.</p>

<h2>Quand l'outil du marché ne suffit plus</h2>

<p>Pennylane, Indy ou Henrri couvrent la grande majorité des situations. Mais il arrive qu'un artisan ait besoin de quelque chose qu'aucun logiciel standard ne fait : refacturer automatiquement des heures saisies sur chantier, appliquer un barème négocié par client, relier le suivi de chantier à la facturation, ou sortir un tableau de bord que l'outil ne sait pas produire.</p>

<p>C'est là que je développe un <strong>outil web sur mesure</strong>, branché sur l'outil de facturation existant plutôt qu'en remplacement. C'est du développement, chiffré au devis après un premier appel — voir <a href="/le-service">la page du service</a> et les repères de prix sur la <a href="/tarifs">page tarifs</a>.</p>

<p>À lire aussi si le sujet vous concerne : <a href="/blog/facturation-electronique-2026-2027-artisan-tpe">la réforme de la facturation électronique 2026-2027</a>, qui impose de toute façon de quitter Excel et Word avant septembre 2027.</p>

<div class="callout">
  <p><strong>Vous voulez accélérer la mise en place ?</strong></p>
  <p>Premier appel de 30 minutes, gratuit : on identifie l'outil le plus adapté à votre activité. Si un logiciel du marché fait le job, je vous le dis et vous repartez avec la réponse. Si votre fonctionnement demande un outil web à votre main, on cadre le périmètre et je vous fais un devis.</p>
  <a href="/contact" class="callout-link">Réserver un premier appel →</a>
  <a href="/tarifs" class="callout-link">Voir les tarifs →</a>
</div>
`,
  },

  // ────────────────────────────────────────────────────────────────
  // Article 6 — Reporting hebdo : 3h → 4 minutes (méthode)
  // ────────────────────────────────────────────────────────────────
  {
    slug: 'reporting-hebdo-excel-3h-en-4-minutes',
    titre: "Le point hebdo Excel que vous mettez des heures à faire — comment l'IA le fait en quelques minutes",
    description:
      "Suivi de chantiers et de marges sur Excel : le dimanche soir qui y passe. Le prompt exact, la méthode, et la mise en garde sur la confidentialité des données.",
    datePublication: '2026-05-03',
    dateMaj: '2026-07-26',
    tempsLecture: 8,
    categorie: 'Automatisation',
    motsCles: [
      'suivi chantier Excel',
      'automatisation Excel artisan',
      'IA reporting TPE',
      'tableau de bord artisan',
      'suivi marge chantier',
    ],
    contenu: `
<p class="lead">Dimanche soir. Vous ouvrez le classeur Excel « suivi 2026 ». Vous voulez juste savoir où vous en êtes : quels chantiers ont été facturés cette semaine, ce qui reste à encaisser, combien vous a coûté le matériel, et si le chantier de la rue des Écoles vous a rapporté quelque chose ou pas.</p>

<p>Deux heures plus tard, vous avez recopié les montants de vos factures, additionné les tickets de fournitures, cherché une facture Point.P qui manquait, et vous vous êtes trompé dans une somme.</p>

<p>Vous le faites parce qu'il faut le faire — c'est le seul moment où vous voyez vos marges réelles. Mais c'est du temps pris sur votre week-end, et le mardi le tableau est déjà périmé.</p>

<p>Cet article décrit <strong>la méthode pour ramener ce point hebdo de plusieurs heures à quelques minutes</strong> avec un prompt et deux fichiers. Aucun outil exotique. Pas de code. Une seule règle de méthode. Elle marche aussi bien pour un artisan qui suit ses chantiers que pour une TPE qui suit ses clients ou ses affaires.</p>

<h2>Le piège : l'IA face au suivi d'activité</h2>

<p>La première erreur, c'est de demander à ChatGPT <em>"fais-moi un point sur mon activité de la semaine"</em>. Vous obtenez un texte générique sur la gestion d'entreprise, qui ne sert à rien.</p>

<p>La deuxième erreur, c'est de coller votre Excel et de dire <em>"analyse-moi ça"</em>. Vous obtenez une analyse vague, parfois fausse parce que l'IA hallucine sur des chiffres qu'elle ne sait pas lire correctement.</p>

<p>La bonne approche tient en une phrase : <strong>on demande à l'IA de produire le tableau, pas de l'interpréter</strong>. Et on lui donne tout ce qu'il faut pour le produire — le bon contexte, les bons exports, la bonne structure attendue.</p>

<h2>Le matériel à préparer (15 minutes, une seule fois)</h2>

<p>Avant de pouvoir faire le point en quelques minutes la semaine prochaine, il faut 15 minutes pour préparer le terrain. Une seule fois. Après, c'est mécanique.</p>

<p><strong>1. L'export de la semaine.</strong> Format CSV. Toutes les solutions de facturation (Pennylane, Indy, Henrri, EBP…) savent exporter en CSV, et si vous tenez déjà un classeur Excel, il fait très bien l'affaire. Colonnes minimales : date, client, chantier ou prestation, montant facturé HT, coût matériel, heures passées, statut de paiement. Si vous avez plus, c'est mieux. Si vous avez moins, on s'adapte (voir plus bas).</p>

<p><strong>2. La structure du tableau que vous voulez lire.</strong> Celui que vous refaites chaque semaine à la main. Ouvrez-le, copiez les en-têtes des colonnes, la liste des chantiers ou clients dans l'ordre habituel, et la zone de commentaire. Tout ça va devenir le <strong>template</strong>.</p>

<p><strong>3. Une convention de nommage pour les fichiers.</strong> Toujours <code>export-semaine-XX.csv</code> et <code>template-suivi.xlsx</code>. Ça évite de chercher 10 minutes dans Téléchargements.</p>

<p>C'est tout. Pas de plug-in, pas d'API, pas de connecteur.</p>

<h2>Le prompt exact (à copier-coller)</h2>

<p>Voici le prompt à utiliser chaque semaine. Stockez-le dans une note épinglée sur votre téléphone. Vous le copiez-collez, vous joignez les deux fichiers, vous envoyez.</p>

<pre><code>Tu es l'assistant de gestion de mon entreprise artisanale. Je suis
[votre métier] et je te donne deux fichiers :

1. export-semaine-XX.csv : l'export brut de ma facturation pour la
   semaine. Une ligne = un chantier ou une prestation.

2. template-suivi.xlsx : la structure du tableau de suivi que je
   veux lire (en-têtes, chantiers par ordre, format).

Ta mission :

a) Génère le tableau rempli au format Excel, en respectant
   EXACTEMENT la structure du template. Mêmes colonnes, mêmes
   lignes, même ordre, même format de cellule.

b) Calcule pour chaque chantier ou client :
   - le montant facturé HT
   - le coût matériel engagé
   - la marge brute (facturé - matériel)
   - le taux de marge (marge / facturé, en %)
   - les heures passées
   - la marge horaire (marge / heures)

c) Compare avec la semaine précédente si je te fournis le tableau
   de la semaine N-1 en pièce jointe. Si oui, ajoute une colonne
   "Variation N-1" en % pour le facturé et la marge.

d) Écris-moi 3 phrases de commentaire à mettre en bas du tableau :
   - Le chantier le plus rentable de la semaine et pourquoi
   - Le point d'attention (marge faible, chantier qui dérape en
     heures, facture non encaissée qui traîne)
   - Une recommandation actionnable pour la semaine prochaine

Contraintes IMPORTANTES :
- Si une donnée est manquante dans l'export, écris "n/a" et
  mentionne-le dans le commentaire. NE devine PAS.
- Si tu détectes une incohérence (marge négative, heures à zéro
  avec un montant facturé, doublon de facture), signale-le-moi
  avant de finaliser le tableau.
- Garde TOUS les chiffres en euros, arrondis à l'euro près.
  Pas de centimes.

Livre :
1. Le fichier Excel rempli, prêt à utiliser.
2. Un récap de 5 lignes maximum dans le chat avec les chiffres clés.
3. La liste des incohérences détectées (s'il y en a).</code></pre>

<p>Ce prompt est long. C'est volontaire. C'est ce qui fait la différence entre un résultat moyen et un résultat utilisable.</p>

<h2>Le résultat, en ordre de grandeur</h2>

<p>Ce que vous pouvez raisonnablement attendre :</p>

<ul>
  <li><strong>Avant</strong> : une à trois heures selon le nombre de chantiers et l'état de vos justificatifs.</li>
  <li><strong>Après</strong> : quelques minutes, dont l'essentiel à joindre les fichiers, vérifier le résultat et corriger une ou deux erreurs typiques (un chantier mal classé, un commentaire à reformuler dans vos mots).</li>
</ul>

<p>Ce sont des ordres de grandeur, pas une promesse. Le gain réel dépend de la propreté de votre export, de la rigueur du template, et de votre capacité à vérifier rapidement le rendu. Ce qui compte, c'est que la corvée passe d'un créneau de week-end à une pause café.</p>

<p>Le vrai bénéfice n'est d'ailleurs pas le temps : c'est que vous le faites <em>vraiment</em>, chaque semaine, au lieu de le repousser un mois sur deux.</p>

<h2>Mise en garde — confidentialité des données</h2>

<p>Je ne peux pas conclure cet article sans cette section, et c'est la raison pour laquelle beaucoup de dirigeants hésitent à se lancer. À raison.</p>

<p><strong>Ce que vous ne devez JAMAIS coller dans un prompt grand public :</strong></p>

<ul>
  <li>Les noms et prénoms de vos clients particuliers.</li>
  <li>Les adresses de chantier, numéros de téléphone et emails directs.</li>
  <li>Les conditions tarifaires détaillées par client (vous ne voulez pas que ça parte dans un dataset d'entraînement).</li>
  <li>Les données nominatives de vos salariés ou apprentis (RGPD).</li>
</ul>

<p><strong>Trois solutions concrètes :</strong></p>

<ol>
  <li><strong>Anonymiser avant l'envoi.</strong> Renommez <em>Mme Durand, 12 rue des Écoles</em> en <em>Client A</em>, et <em>SARL Martin</em> en <em>Client B</em>. Une simple table de correspondance que vous gardez dans un fichier à part. Vous remettez les vrais noms à la fin.</li>
  <li><strong>Utiliser un compte payant professionnel</strong> (ChatGPT Team, Claude for Work). Les conditions diffèrent : pas de réutilisation des données pour l'entraînement, conservation maîtrisée, conformité RGPD documentée. Comptez quelques dizaines d'euros par mois.</li>
  <li><strong>Pour les données sensibles, rester sur du chiffre agrégé.</strong> Vous pouvez très bien envoyer <em>"3 chantiers représentent 70 % du facturé, marges respectives 12 %, 18 %, 22 %"</em> sans nommer personne. Le tableau reste utile.</li>
</ol>

<p>⚠ <strong>Le réflexe à garder :</strong> avant de coller un fichier dans un outil IA, demandez-vous si vous accepteriez de l'envoyer par erreur à un concurrent. Si la réponse est non, anonymisez d'abord.</p>

<h2>Et si votre logiciel sort un export mal foutu ?</h2>

<p>C'est le cas le plus fréquent. Beaucoup de logiciels métier sortent du CSV avec des séparateurs aléatoires, des dates en JJ/MM/AAAA ou MM/JJ/AAAA selon les exports, des en-têtes accentués qui cassent l'encodage.</p>

<p>Trois options :</p>

<ul>
  <li><strong>Une passe de nettoyage avec l'IA.</strong> Demandez-lui de normaliser le CSV avant de produire le tableau. Ajoutez en début de prompt : <em>"Si le séparateur est anormal ou les dates ambiguës, corrige avant de calculer et explique-moi ce que tu as fait."</em></li>
  <li><strong>Un mini-script généré par l'IA</strong>, lancé une fois pour transformer l'export brut en CSV propre. C'est typiquement ce que je mets en place quand le nettoyage revient chaque semaine : un script qui tourne ensuite tout seul.</li>
  <li><strong>Demander à votre éditeur un export propre</strong>, en vous appuyant sur la structure attendue. Vous découvrirez parfois que l'option existe déjà et que personne ne l'avait jamais cochée.</li>
</ul>

<h2>Quand arrêter de bricoler et passer à un outil</h2>

<p>Cette méthode est parfaite pour démarrer, et pour beaucoup d'artisans elle suffit durablement. Mais si vous refaites la même manipulation toutes les semaines depuis six mois, le prompt n'est plus la bonne réponse : c'est le signe qu'il faut un <strong>petit outil web</strong> qui affiche vos chantiers, vos marges et vos impayés en permanence, sans export ni copier-coller.</p>

<p>C'est le genre de web app que je développe sur mesure chez OptiPro, chiffrée au devis après un premier appel — voir <a href="/le-service">la page du service</a> et les repères de prix sur la <a href="/tarifs">page tarifs</a>. Et si votre facturation elle-même est encore éparpillée, commencez plutôt par <a href="/blog/facturation-artisan-gagner-du-temps">la routine de facturation hebdo</a>.</p>

<div class="callout">
  <p><strong>Vous suivez votre activité sur un Excel qui vous fatigue ?</strong></p>
  <p>30 minutes au téléphone, gratuit, sans engagement. Vous me montrez votre tableau et votre façon de travailler, je vous dis honnêtement si un prompt bien écrit suffit — souvent c'est le cas — ou si un outil web sur mesure se justifie. Dans les deux cas vous repartez avec une réponse claire.</p>
  <a href="/contact" class="callout-link">Réserver un premier appel →</a>
  <a href="/tarifs" class="callout-link">Voir les tarifs →</a>
</div>

<p style="margin-top:2rem">Le tableau Excel hebdo n'est pas un sujet glamour. Mais c'est probablement le levier IA avec le meilleur ratio temps-investi / temps-récupéré chez un artisan ou une TPE. Savoir chaque semaine quels chantiers gagnent de l'argent et quelles factures ne sont pas rentrées, ça change les décisions qu'on prend — quel devis accepter, quel client relancer, quel type de chantier arrêter de prendre.</p>

<p>— Pierre</p>
`,
  },

  // ────────────────────────────────────────────────────────────────
  // Article 7 — 3 prompts artisan 2026
  // ────────────────────────────────────────────────────────────────
  {
    slug: '3-prompts-qui-font-gagner-5h-par-semaine-artisan',
    titre: "3 prompts qui font gagner 5h par semaine à un artisan en 2026",
    description:
      "Devis depuis 3 lignes de notes, relance facture impayée, réponse à un avis Google négatif. Trois prompts copiables, testés, avec les variantes pour s'adapter à votre métier.",
    datePublication: '2026-05-02',
    dateMaj: '2026-07-26',
    tempsLecture: 7,
    categorie: 'Pour les artisans',
    motsCles: [
      'prompts artisan',
      'IA pour artisan',
      'devis automatique artisan',
      'relance facture impayée',
      'réponse avis Google',
    ],
    contenu: `
<p class="lead">Vous êtes plombier, électricien, peintre, paysagiste, coiffeur indépendant, photographe, traiteur. Vous avez une vraie compétence métier, deux mains qui savent faire, et une boîte mail qui déborde le dimanche soir.</p>

<p>Vous savez que l'IA peut vous aider. Vous avez peut-être ouvert un compte ChatGPT, posé deux questions, fermé l'onglet, et oublié.</p>

<p>Cet article ne vous explique pas l'IA. Il vous donne <strong>trois prompts à copier-coller</strong> qui couvrent <strong>80 % de l'admin chronophage</strong> d'un artisan. Pas de théorie. Pas de jargon. Vous lisez, vous copiez, vous adaptez, vous gagnez quelques heures par semaine.</p>

<h2>Ce que vous ne saviez peut-être pas</h2>

<p>L'IA gratuite (version de base de ChatGPT, Claude, Gemini) suffit largement pour les trois prompts ci-dessous. Pas besoin d'abonnement payant pour commencer. La différence entre un résultat médiocre et un résultat utilisable, ce n'est pas l'outil — c'est <strong>la précision du prompt</strong>.</p>

<p>Un bon prompt artisan, c'est 4 ingrédients :</p>
<ol>
  <li><strong>Qui vous êtes</strong> (votre métier, votre contexte).</li>
  <li><strong>Ce que vous voulez</strong> (rédige, écris, propose).</li>
  <li><strong>Le contexte précis</strong> (les notes, le message à traiter, la situation).</li>
  <li><strong>Le format</strong> (longueur, ton, structure).</li>
</ol>

<p>Tous les prompts ci-dessous suivent cette recette. Une fois que vous l'avez comprise, vous pouvez créer les vôtres.</p>

<h2>Prompt 1 — Le devis propre depuis 3 lignes de notes</h2>

<p><strong>Quand l'utiliser :</strong> vous rentrez d'un rendez-vous client. Vous avez pris des notes rapides sur votre téléphone : <em>"salle de bain 6m², lavabo + étanchéité + faïence, 2 jours avec matos"</em>. Il faut transformer ça en devis professionnel pour pouvoir l'envoyer le soir même.</p>

<pre><code>Tu es mon assistant administratif. Je suis [votre métier]. Je
viens de finir un rendez-vous client. Voici mes notes brutes :

[collez vos notes telles quelles, même mal écrites]

Rédige-moi le texte d'un devis professionnel avec :
- Une introduction courte et claire pour le client
- Les prestations détaillées en plusieurs lignes (une ligne par
  poste, format devis classique)
- Une phrase de conclusion qui invite à valider

Ton : direct, sérieux, mais humain. Pas de formule ampoulée
("Madame, Monsieur, soucieux de répondre à vos attentes...").

Si tu manques d'informations sur un point, pose-moi une question
maximum avant de rédiger. Sinon, va directement au devis.

Je ne te demande PAS les prix — je les mets moi-même. Donne juste
le texte.</code></pre>

<p><strong>Ce que vous obtenez en 30 secondes :</strong> un texte de devis propre. Vous le copiez dans votre logiciel de devis (ou Word), vous mettez les chiffres, vous envoyez.</p>

<p>Si vous n'avez pas encore de logiciel de devis et que vous travaillez sur Word ou Excel, l'IA ne fera que déplacer le problème : lisez d'abord <a href="/blog/automatiser-devis-artisan">comment automatiser ses devis</a>.</p>

<p><strong>Variante express :</strong> si vos notes font 2 lignes, ajoutez à la fin : <em>"Pose-moi 3 questions maximum si tu manques d'infos."</em></p>

<h2>Prompt 2 — La relance facture sans se mettre mal</h2>

<p><strong>Quand l'utiliser :</strong> la facture a été envoyée il y a trois semaines. Rien. Vous n'osez pas relancer parce que vous n'aimez pas avoir l'air de courir après votre argent. Résultat : la facture dort, et vous, vous bouillez.</p>

<pre><code>Je suis [votre métier]. J'ai envoyé une facture le [date] à un
client, d'un montant de [X] € pour [prestation réalisée]. Elle
devait être payée sous [délai standard, ex: 30 jours], on est
aujourd'hui en retard de [X] jours.

Écris-moi un email de relance :
- Ton courtois, pas accusateur, pas non plus servile
- Rappel clair de la facture (numéro, date, montant) et de son
  échéance
- Propose une solution si le client a un souci (paiement échelonné,
  question sur la prestation à clarifier)
- Fixe une date butoir explicite pour la suite (par exemple
  "merci de m'indiquer avant le X")

Garde ça court : 120 mots maximum. Ton "humain pro" — comme un
artisan sérieux qui ne se laisse pas marcher dessus mais ne
braque pas le client non plus.</code></pre>

<p><strong>Ce que vous obtenez :</strong> un email pro, court, qui règle souvent le problème. Quand ça ne marche pas, vous savez pourquoi (le client a un souci, ou il faut passer à la deuxième relance).</p>

<p><strong>Variante 2e relance :</strong> ajoutez <em>"Il s'agit d'une deuxième relance. Le ton doit rester poli mais plus ferme. Mentionne que sans réponse sous 7 jours, je transmets le dossier."</em></p>

<p><strong>Variante mise en demeure :</strong> demandez le modèle officiel ; l'IA connaît la mise en forme légale française. Vérifiez quand même avec votre comptable avant d'envoyer.</p>

<h2>Prompt 3 — La réponse à l'avis Google qui pique</h2>

<p><strong>Quand l'utiliser :</strong> un client mécontent a laissé un avis 2 étoiles sur Google. Vous le lisez, ça vous agace. Vous avez deux mauvaises options : répondre du tac au tac (le futur client lit la conversation et se dit que vous êtes susceptible) ou ne pas répondre (les futurs clients pensent que vous vous en fichez).</p>

<pre><code>Je suis [votre métier]. Un client vient de laisser cet avis
négatif sur Google :

"[copiez l'avis tel quel, fautes incluses]"

Voici ce qui s'est REELLEMENT passé de mon côté :

[décrivez en 3-4 phrases : le contexte, ce qui s'est mal passé
côté client ET côté vous, ce que vous avez tenté pour résoudre.
Sois honnête, ne minimise pas vos torts s'il y en a, mais ne
t'excuse pas pour des fautes que tu n'as pas commises]

Écris-moi une réponse publique à cet avis. Elle doit :
- Rester calme et professionnelle
- Reconnaître le ressenti du client SANS m'excuser d'une faute
  que je n'ai pas commise
- Proposer une résolution concrète OU un contact en privé pour
  avancer
- Faire bonne impression sur les FUTURS lecteurs de mon profil
  (c'est eux le vrai public, pas le client mécontent)

Donne-moi 3 variantes :
- Version 1 : la plus conciliante (si le tort est partagé)
- Version 2 : neutre et factuelle (si le client exagère)
- Version 3 : ferme mais polie (si le client est de mauvaise foi)</code></pre>

<p><strong>Ce que vous obtenez :</strong> trois versions. Vous choisissez celle qui correspond à la réalité, vous ajustez 2-3 mots pour que ça vous ressemble, vous postez. <strong>Gain : 20 minutes de réflexion stressante en moins, et un profil Google qui reste pro.</strong></p>

<p><strong>Variante avis positif :</strong> <em>"Rédige 5 réponses courtes et chaleureuses à des avis 5 étoiles, sans que ça sonne copier-coller. Variez les formulations."</em></p>

<h2>Le piège : ce que l'IA ne sait PAS faire</h2>

<p>Trois trucs à garder en tête. C'est ce qui sépare les artisans qui exploitent vraiment l'IA de ceux qui se cassent les dents.</p>

<p><strong>1. L'IA ne connaît pas votre marché local.</strong> Elle ne sait pas qu'à Vence un devis salle de bain de 6m² se chiffre différemment qu'à Paris. Pour les chiffres, c'est vous. Toujours.</p>

<p><strong>2. L'IA ne connaît pas votre personnalité.</strong> Si vous avez un humour particulier, une façon de parler à vos clients, l'IA va sortir des textes plus lisses, plus génériques. Il faut les <strong>relire et les ajuster</strong> — toujours. C'est vous le patron.</p>

<p><strong>3. L'IA peut se tromper avec assurance.</strong> Pour les normes techniques, les taux de TVA, les évolutions réglementaires — vérifiez toujours. L'IA ment parfois sans le savoir. Demandez-lui ses sources si c'est un sujet sensible.</p>

<p>La bonne image : l'IA est un <strong>stagiaire ultra-rapide</strong>. Il écrit vite, il propose plein d'idées, il ne fatigue pas. Mais il ne connaît ni votre métier ni vos clients. C'est vous le boss.</p>

<p>Et quand l'IA ne suffit plus — parce que vous voulez que vos devis, votre suivi de chantier ou vos relances tournent vraiment tout seuls plutôt que prompt par prompt — c'est qu'il est temps d'outiller. C'est mon métier : je développe des sites et des outils web sur mesure pour les artisans et les TPE. Le détail est sur <a href="/le-service">la page du service</a>, et les prix sur la <a href="/tarifs">page tarifs</a>.</p>

<div class="callout">
  <p><strong>Vous voulez des prompts adaptés à votre métier précis ?</strong></p>
  <p>Premier appel de 30 minutes, gratuit et sans engagement : vous me décrivez votre quotidien, je vous donne les prompts qui correspondent à vos tâches réelles. Sans rien vous vendre. Si derrière vous avez besoin d'un site ou d'un outil web, on en parle — sinon vous repartez juste avec les prompts.</p>
  <a href="/contact" class="callout-link">Réserver un premier appel →</a>
</div>

<p style="margin-top:2rem">— Pierre</p>
`,
  },

  // ────────────────────────────────────────────────────────────────
  // Article 8 — Démarrer avec l'IA quand on n'est pas tech
  // ────────────────────────────────────────────────────────────────
  {
    slug: 'ia-pour-artisan-par-ou-commencer-quand-on-est-pas-tech',
    titre: "L'IA pour un artisan ou un entrepreneur solo : par où commencer quand on n'est pas tech",
    description:
      "Pas besoin de coder. Pas besoin de comprendre les LLM. Juste 3 usages simples, les prompts exacts, et 30 minutes pour démarrer aujourd'hui.",
    datePublication: '2026-04-20',
    dateMaj: '2026-07-26',
    tempsLecture: 8,
    categorie: 'Pour les artisans',
    motsCles: [
      'IA artisan débutant',
      'commencer avec ChatGPT artisan',
      'IA TPE indépendant',
      'prompts artisan facile',
      'IA pour entrepreneur solo',
    ],
    contenu: `
<p class="lead">Lundi matin. 7h30. Vous ouvrez votre boîte mail. Trois demandes de devis à faire, une relance de facture qui traîne depuis trois semaines, un avis Google moyen auquel vous n'avez pas répondu. Et votre journée est déjà bouclée — un rendez-vous client à 9h, des dossiers à avancer, un prestataire à gérer.</p>

<p>Vous savez qu'il faudrait vous occuper de toute cette pile admin. Vous savez aussi qu'à la fin de la journée, vous serez trop crevé pour le faire.</p>

<p>Ce n'est pas un problème de compétence. Ce n'est pas un problème de motivation. <strong>C'est un problème de temps.</strong></p>

<p>Et c'est exactement là que l'IA devient utile.</p>

<p>Que vous soyez artisan qui sort des chantiers, commerçant avec une boutique à tenir, ou dirigeant d'une TPE qui court d'une réunion à l'autre — le problème est le même. L'admin mange le temps. L'IA peut en rendre une bonne partie.</p>

<h2>"L'IA, c'est pas pour moi, je suis pas tech"</h2>

<p>Si vous pensez ça, je comprends. C'est exactement ce que je me disais il y a encore quelques années.</p>

<p>Alors mettons une chose au clair.</p>

<p>Je ne suis pas ingénieur. Je n'ai pas fait d'école d'informatique. J'ai passé 10 ans à piloter des flux logistiques — je connais surtout les Excel, les bons de livraison et les clients qui râlent quand une commande est en retard.</p>

<p>Et pourtant, j'utilise l'IA tous les jours. Pour OptiPro, pour préparer mes interventions, pour ma vie perso.</p>

<p><strong>La seule compétence qu'il faut pour démarrer, c'est de savoir écrire un message clair en français.</strong></p>

<p>Pas de code. Pas de formule. Pas de logiciel compliqué.</p>

<p>Vous savez faire ça. Vous le faites déjà quand vous écrivez à un client.</p>

<h2>3 usages concrets qui vont vous faire gagner du temps</h2>

<p>Je vais vous donner <strong>trois prompts exacts</strong>. Vous les copiez, vous les collez dans ChatGPT ou Claude, vous adaptez avec votre contexte. C'est tout.</p>

<h3>Usage n°1 — Transformer 3 lignes de notes en un devis propre</h3>

<p><strong>Le problème :</strong> vous rentrez d'un rendez-vous (client, prospect, fournisseur), vous avez pris des notes rapides sur votre téléphone. Un artisan notera <em>"salle de bain 6m², remplacer lavabo, refaire étanchéité, 2 jours avec matos"</em>. Un consultant notera <em>"accompagnement 3 mois, 2 ateliers/mois, livrable final en PDF"</em>. Dans les deux cas, il faut transformer ces notes en devis professionnel. Normalement, ça prend 30 à 45 minutes.</p>

<pre><code>Tu es mon assistant administratif. Je suis [votre métier], je
viens de finir un rendez-vous client. Voici mes notes :

[collez vos notes brutes]

Rédige-moi un devis professionnel avec :
- Une introduction courte et claire pour le client
- Les prestations détaillées en plusieurs lignes
- Une phrase de conclusion qui invite à valider

Ton : direct, sérieux, mais humain. Pas de formule ampoulée.</code></pre>

<p><strong>Ce que vous obtenez en 30 secondes :</strong> un texte de devis propre, que vous n'avez plus qu'à mettre en forme et à chiffrer. <strong>Gain : 20 à 30 minutes par devis.</strong></p>

<h3>Usage n°2 — Répondre à un avis Google négatif sans perdre son sang-froid</h3>

<p><strong>Le problème :</strong> un client mécontent a laissé un avis 2 étoiles. Vous le lisez, ça vous agace, vous avez envie de répondre du tac au tac. Ou pire : vous ne répondez pas du tout, par peur de dire quelque chose de travers. Les deux sont de mauvaises solutions — les prochains clients qui cherchent votre entreprise vont lire cet avis.</p>

<pre><code>Je suis [votre métier]. Un client vient de laisser cet avis
négatif sur Google :

"[copiez l'avis tel quel]"

Voici ce qui s'est passé de mon côté :
[décrivez en 3-4 phrases ce qui s'est réellement passé]

Écris-moi une réponse publique à cet avis. Elle doit :
- Rester calme et professionnelle
- Reconnaître le ressenti du client sans m'excuser d'une faute
  que je n'ai pas commise
- Proposer une résolution concrète ou un contact en privé
- Faire bonne impression sur les futurs lecteurs de mon profil

Trois variantes, du plus conciliant au plus factuel.</code></pre>

<p><strong>Ce que vous obtenez :</strong> trois versions, vous choisissez celle qui vous ressemble. <strong>Gain : 20 minutes de stress et un profil Google qui reste pro.</strong></p>

<h3>Usage n°3 — Relancer un client qui ne paie pas, sans se mettre mal</h3>

<p><strong>Le problème :</strong> la facture a été envoyée il y a trois semaines. Rien. Vous n'osez pas relancer par peur de passer pour celui qui court après son argent. Ou vous relancez par SMS sur le pouce et ça passe mal. Résultat : soit vous n'êtes pas payé, soit vous perdez le client.</p>

<pre><code>Je suis [votre métier]. J'ai envoyé une facture le [date] à
un client, d'un montant de [X]€ pour [prestation réalisée].
Elle devait être payée sous [délai], on est aujourd'hui
en retard de [X] jours.

Écris-moi un email de relance :
- Ton courtois, pas accusateur
- Rappel clair de la facture et de son échéance
- Propose une solution si le client a un souci (paiement
  échelonné, question sur la prestation)
- Fixe une date butoir pour la suite

Garde ça court : 120 mots max.</code></pre>

<p><strong>Ce que vous obtenez :</strong> un email pro, court, qui règle souvent le problème. <strong>Gain : finies les relances oubliées, et vous êtes payé plus régulièrement.</strong></p>

<h2>L'IA peut aussi vous aider à trouver des clients</h2>

<p>Les trois usages ci-dessus font <strong>gagner du temps</strong>. Mais l'IA peut faire mieux : vous aider à <strong>être visible</strong>.</p>

<p>Un artisan qui ne communique pas, c'est un artisan invisible. Un consultant qui n'a pas de présence en ligne, c'est quelqu'un qu'on oublie entre deux missions. Dans les deux cas, c'est perdre des clients qu'on aurait pu avoir.</p>

<p>Voici quatre trucs concrets :</p>

<p><strong>Rédiger votre fiche Google Business.</strong> La plupart des fiches que je vois sont mal rédigées, vides, ou ressemblent à celles de dizaines de concurrents. Demandez à l'IA de vous rédiger une description de 300 caractères qui met en avant ce qui vous différencie. Précisez : votre métier, votre zone d'intervention, votre spécialité. La fiche Google est gratuite et c'est le meilleur point de départ — l'étape suivante étant un vrai site, dont j'explique le budget réel dans <a href="/blog/site-web-artisan-combien-ca-coute">combien coûte un site web pour artisan</a>.</p>

<p><strong>Écrire un post réseau social après un chantier, une mission, un livrable.</strong> Vous avez une belle photo avant/après ? Un témoignage client par message ? L'IA peut transformer <em>"on a refait la salle de bain de Mme Durand, elle est contente"</em> ou <em>"j'ai livré la stratégie à X, ils vont implémenter lundi"</em> en un post qui donne envie. En deux minutes.</p>

<p><strong>Créer des idées de posts régulières.</strong> Demandez à l'IA : <em>"donne-moi 10 idées de posts que je peux publier dans les 3 prochains mois, adaptés à un [votre métier] basé à [votre ville]."</em> Vous avez votre planning éditorial. Fini le "je sais pas quoi poster".</p>

<p><strong>Répondre aux demandes depuis votre mobile.</strong> Un prospect vous écrit un message un peu long sur Messenger, WhatsApp ou LinkedIn ? Vous n'avez pas le temps de formuler une réponse propre entre deux rendez-vous ? Copiez son message, demandez une réponse courte et pro à l'IA, adaptez en 30 secondes. Le prospect reçoit une vraie réponse au lieu d'un "ok je vous rappelle".</p>

<h2>Ce que l'IA ne peut PAS faire (et c'est important)</h2>

<p>Je ne vais pas vous vendre du rêve. L'IA a des limites. Voici ce qu'elle <strong>ne sait pas faire</strong>, et qu'il faut garder en tête.</p>

<p><strong>Elle ne connaît pas votre marché local.</strong> Elle ne sait pas que dans votre quartier, un devis de rénovation complète se chiffre différemment qu'à Paris. Elle ne connaît pas non plus les tarifs pratiqués dans votre secteur de conseil. Elle peut vous donner un modèle, mais les chiffres, c'est vous qui les mettez.</p>

<p><strong>Elle ne connaît pas votre personnalité.</strong> Si vous avez un ton particulier, un humour, une façon de parler à vos clients, l'IA va sortir des textes plus lisses, plus génériques. Il faut les relire et les adapter. Toujours.</p>

<p><strong>Elle n'est pas toujours à jour.</strong> Pour les réglementations, les taux de TVA, les normes techniques, les évolutions juridiques, vérifiez toujours. L'IA peut se tromper. Elle le fait même avec beaucoup d'assurance, ce qui est sournois.</p>

<p><strong>Elle ne remplace pas votre savoir-faire.</strong> Un plombier qui ferait rédiger un diagnostic d'installation par une IA sans avoir vu le chantier, c'est un plombier qui court à la catastrophe. Un consultant qui livrerait à son client un rapport généré sans réflexion propre, c'est la même chose. L'IA gère l'administratif, la communication, la paperasse. Pas le métier.</p>

<p>La bonne image, c'est de penser à l'IA comme un <strong>stagiaire ultra-rapide</strong> : il écrit vite, il propose plein d'idées, mais c'est vous le patron. Vous validez. Vous coupez. Vous ajustez.</p>

<h2>Par où commencer concrètement — 30 minutes, aujourd'hui</h2>

<p>Si vous lisez cet article à 10h, vous pouvez avoir votre premier prompt utile envoyé à 10h30.</p>

<p>Voici les 4 étapes :</p>

<p><strong>1. Créer un compte gratuit.</strong> ChatGPT sur chatgpt.com ou Claude sur claude.ai. Les deux fonctionnent, choisissez celui que vous voulez. La version gratuite suffit pour commencer.</p>

<p><strong>2. Copier-coller un des 3 prompts</strong> que je vous ai donnés plus haut. Adaptez les crochets (votre métier, vos notes, votre situation).</p>

<p><strong>3. Lisez ce que ça vous sort.</strong> Ne prenez pas tel quel. Demandez-vous : <em>"est-ce que c'est comme ça que je m'exprimerais ?"</em> Si non, demandez à l'IA de reformuler plus direct, plus simple, ou plus dans votre style.</p>

<p><strong>4. Gardez ce qui vous ressemble. Jetez le reste.</strong> C'est vous qui validez, toujours.</p>

<p>Voilà. Vous avez commencé.</p>

<div class="callout">
  <p><strong>Vous voulez aller plus vite ?</strong></p>
  <p>30 minutes au téléphone avec moi, gratuit, sans engagement : vous me décrivez votre métier et vos process, je vous propose 3 prompts ou outils concrets adaptés à votre activité. Pas de blabla commercial, juste du concret. Et si le sujet devient « il me faudrait un site ou un outil web », c'est justement ce que je développe — les prix sont publics sur la <a href="/tarifs">page tarifs</a>.</p>
  <a href="/contact" class="callout-link">Réserver un premier appel →</a>
  <a href="/le-service" class="callout-link">Découvrir le service →</a>
</div>

<p style="margin-top:2rem">L'IA ne remplacera pas votre savoir-faire. Mais elle peut vous libérer du temps pour le pratiquer, pour développer votre activité, et pour rentrer chez vous plus tôt le soir.</p>

<p>Ça vaut peut-être le coup d'essayer 30 minutes.</p>

<p>— Pierre</p>
`,
  },

  // ────────────────────────────────────────────────────────────────
  // Article 14 — Facturation électronique 2026-2027
  // ────────────────────────────────────────────────────────────────
  {
    slug: 'facturation-electronique-2026-2027-artisan-tpe',
    titre: 'Facturation électronique 2026-2027 : ce que les artisans et TPE doivent savoir',
    description:
      "Réforme PDP, calendrier, obligations, choix d'outils : tout ce qu'un artisan ou dirigeant de TPE doit savoir sur la facturation électronique 2026-2027 pour être conforme sans stress.",
    datePublication: '2026-05-13',
    dateMaj: '2026-07-26',
    tempsLecture: 8,
    categorie: 'Conformité',
    motsCles: [
      'facturation électronique 2026',
      'facturation électronique 2027',
      'PDP plateforme dématérialisation',
      'obligation facturation artisan',
      'réforme facturation TPE',
    ],
    image: '/og-image.jpg',
    contenu: `
<p>Depuis le 1er septembre 2026, toutes les entreprises françaises doivent <strong>recevoir</strong> leurs factures fournisseurs au format électronique. À partir du 1er septembre 2027, elles doivent aussi <strong>émettre</strong> leurs factures clients au format électronique.</p>

<p>La réforme est appelée "facturation électronique" mais elle change bien plus que le format. C'est un changement structurel du circuit de facturation en France, qui passe par des plateformes intermédiaires (PDP) avec transmission automatique à l'administration fiscale.</p>

<p>Cet article fait le point sur ce que ça change concrètement pour un artisan ou un dirigeant de TPE en 2026-2027. Sans jargon inutile, avec les vraies décisions à prendre.</p>

<h2>Le calendrier exact (à jour mai 2026)</h2>

<p><strong>1er septembre 2026 :</strong> toutes les entreprises (y compris artisans solo et TPE) doivent être en capacité de recevoir des factures électroniques de leurs fournisseurs. Pas d'émission obligatoire encore — juste réception.</p>

<p><strong>1er septembre 2027 :</strong> toutes les grandes entreprises et ETI doivent émettre leurs factures au format électronique.</p>

<p><strong>1er septembre 2027 (suite) :</strong> les PME, TPE et micro-entrepreneurs doivent aussi émettre. C'est la date qui concerne directement les artisans et indépendants.</p>

<p>Note importante : depuis 2024, le calendrier a déjà été reporté plusieurs fois. Il reste possible qu'il y ait des aménagements supplémentaires d'ici septembre 2027, mais la direction est claire et la réforme se fera.</p>

<h2>Ce qui change concrètement</h2>

<p>Aujourd'hui, vous envoyez vos factures à vos clients par email (PDF) ou par courrier (papier). À partir de septembre 2027, ce circuit direct ne sera plus autorisé entre entreprises françaises. Il faudra passer par une <strong>plateforme de dématérialisation partenaire (PDP)</strong> ou par le <strong>portail public de facturation (PPF)</strong>.</p>

<p>Concrètement :</p>

<ul>
  <li>Vous créez votre facture dans votre logiciel (Pennylane, Sage, EBP, ou outil dédié).</li>
  <li>Votre logiciel transmet la facture à votre PDP au format normalisé (Factur-X, UBL ou CII).</li>
  <li>La PDP transmet la facture à la PDP de votre client.</li>
  <li>La PDP de votre client la dépose dans son espace de réception.</li>
  <li>L'administration fiscale reçoit en parallèle les données (e-reporting) pour le contrôle TVA.</li>
</ul>

<p>Tout ça se fait en arrière-plan. Pour vous, ça reste presque transparent — à condition d'avoir choisi le bon outil.</p>

<h2>3 décisions à prendre dès maintenant</h2>

<h3>Décision 1 : quel outil de facturation utilisez-vous (ou allez-vous utiliser) ?</h3>

<p>Tous les logiciels de facturation ne seront pas compatibles. La règle est simple : <strong>votre outil doit être connecté à une PDP agréée</strong>.</p>

<p>Les principaux outils déjà conformes (mai 2026) :</p>

<ul>
  <li><strong>Pennylane</strong> : conformité native, PDP intégrée. Particulièrement adapté aux TPE et indépendants. Tarif 25-60€/mois.</li>
  <li><strong>Sage 50, Sage 100, Sage X3</strong> : versions mises à jour conformes. Plutôt orienté PME.</li>
  <li><strong>EBP Comptabilité</strong> : versions 2026 conformes. Très utilisé dans le BTP.</li>
  <li><strong>Cegid</strong> : conforme, orienté PME et cabinets comptables.</li>
  <li><strong>QuickBooks</strong> : conforme via partenaire PDP.</li>
</ul>

<p>Si vous utilisez encore Excel ou Word pour vos factures : il faudra passer à un outil dédié avant septembre 2027. Pas la peine de paniquer, mais autant le faire dès maintenant pour étaler la transition — et au passage récupérer du temps, ce qui est le sujet de <a href="/blog/outils-qui-font-perdre-temps-artisans">les 5 outils qui font perdre du temps aux artisans</a>.</p>

<h3>Décision 2 : quelle PDP choisir ?</h3>

<p>Si vous utilisez Pennylane ou Sage, la PDP est intégrée — pas de décision à prendre. Si vous utilisez un outil sans PDP intégrée, il faut en choisir une.</p>

<p>Critères de choix :</p>

<ul>
  <li><strong>Coût</strong> : entre 0 et 30€/mois selon le volume de factures et les services inclus.</li>
  <li><strong>Intégration avec votre comptable</strong> : si votre expert-comptable utilise lui-même une PDP, prendre la même simplifie tout.</li>
  <li><strong>Volumétrie incluse</strong> : nombre de factures émises/reçues par mois.</li>
  <li><strong>Services additionnels</strong> : archivage légal 10 ans, signature électronique, suivi du paiement.</li>
</ul>

<p>Liste des PDP agréées : disponible sur le site du Ministère de l'Économie (impots.gouv.fr/facturation-electronique). Demandez à votre comptable laquelle il recommande pour votre profil.</p>

<h3>Décision 3 : préparer ses fichiers clients</h3>

<p>La facturation électronique exige des données client précises et propres :</p>

<ul>
  <li>SIREN/SIRET du client</li>
  <li>Code TVA intracommunautaire si export UE</li>
  <li>Adresse normalisée</li>
  <li>Référence destinataire (pour les grandes structures qui filtrent leurs factures par service)</li>
</ul>

<p>Si votre base clients est partielle ou pas à jour, c'est le moment de nettoyer. Un fichier client propre = facturation fluide. Un fichier sale = factures rejetées, paiements retardés, casse-tête garanti.</p>

<h2>Ce qui ne change pas</h2>

<p>Pour rassurer : voici ce que la réforme <em>ne change pas</em> :</p>

<ul>
  <li><strong>Le contenu des factures</strong> : mentions légales, TVA, délais de paiement — pas de changement.</li>
  <li><strong>La facturation aux particuliers (B2C)</strong> : la facturation électronique obligatoire concerne uniquement le B2B (entre entreprises françaises). Vos factures aux particuliers restent en email/papier comme avant.</li>
  <li><strong>La facturation aux clients étrangers</strong> : exports hors France restent sur le mode actuel.</li>
  <li><strong>Votre relation avec votre expert-comptable</strong> : il reste votre interlocuteur fiscal. La PDP est juste un canal de transmission.</li>
</ul>

<p>Donc si vous êtes un artisan dont 90% des clients sont des particuliers (locataires, propriétaires de maison), la réforme aura peu d'impact concret sur votre quotidien.</p>

<h2>Le piège à éviter : attendre 2027 pour s'y mettre</h2>

<p>Plusieurs cabinets comptables et fournisseurs de logiciels prévoient un goulet d'étranglement énorme au S1 2027. Toutes les entreprises qui auront procrastiné voudront équiper leur facturation en même temps. Conséquences attendues :</p>

<ul>
  <li>Tarifs des PDP à la hausse (offre/demande).</li>
  <li>Délais de mise en place rallongés (au lieu de 1-2 semaines, on parlera de 1-2 mois).</li>
  <li>Indisponibilité temporaire des conseillers chez les éditeurs.</li>
  <li>Risque de non-conformité ponctuelle pendant la transition.</li>
</ul>

<p>Le bon timing pour se mettre en conformité : <strong>fin 2026 / début 2027</strong>. Pas plus tard, idéalement plus tôt. Si vous démarrez en mai 2026, vous avez tout le temps pour faire ça sereinement.</p>

<h2>Combien ça coûte de se mettre en conformité ?</h2>

<p>Pour une TPE artisan typique avec 20-40 factures/mois :</p>

<ul>
  <li>Pennylane Smart (tout-en-un avec PDP) : 30€/mois</li>
  <li>Sage 50 + PDP partenaire : 40-60€/mois</li>
  <li>QuickBooks + PDP : 35-55€/mois</li>
</ul>

<p>Plus une période de transition : comptez quelques heures de paramétrage, que vous pouvez faire vous-même ou avec votre expert-comptable, qui connaît déjà votre dossier et la PDP qu'il recommande.</p>

<p>Le surcoût annuel reste modéré, et il est en partie compensé par les gains de la dématérialisation : plus de courriers à imprimer, plus de PDF à archiver manuellement, moins d'erreurs de saisie.</p>

<p>Autant en profiter pour remettre à plat toute votre chaîne de facturation : la méthode est détaillée dans <a href="/blog/facturation-artisan-gagner-du-temps">facturation artisan : la ramener à une routine de 20 minutes par semaine</a>.</p>

<h2>Et si je n'ai rien fait avant septembre 2027 ?</h2>

<p>Vous serez en infraction. Concrètement :</p>

<ul>
  <li>Vos factures B2B émises hors PDP ne seront pas opposables fiscalement — vos clients pourront refuser de les payer.</li>
  <li>Vous risquez 15€ d'amende par facture non conforme (plafonné à 15 000€/an).</li>
  <li>Surtout, vous ne pourrez plus émettre de factures à vos clients pros — donc plus de CA B2B possible.</li>
</ul>

<p>Pas de panique : l'administration a toujours appliqué des périodes de tolérance lors de réformes similaires. Mais ne pas se préparer du tout est un vrai risque.</p>

<div class="callout">
  <p><strong>Vous voulez y voir clair sans vous prendre la tête ?</strong></p>
  <p>Premier appel de 30 minutes, gratuit : on fait le point sur votre situation et je vous dis quel outil du marché couvre votre cas. Dans la majorité des situations, un logiciel conforme suffit et vous n'avez besoin de personne d'autre — je vous le dis franchement. Si votre facturation passe par un outil web spécifique à faire évoluer ou à interfacer avec une PDP, c'est du développement, et c'est mon métier.</p>

  <a href="/contact" class="callout-link">Réserver un premier appel →</a>
  <a href="/tarifs" class="callout-link">Voir les tarifs →</a>
</div>

<p style="margin-top:2rem">La facturation électronique n'est pas un sujet technique réservé aux comptables. C'est un sujet d'organisation à anticiper. Avec 12-18 mois devant vous, c'est encore facile. Plus on s'approche de septembre 2027, plus ça deviendra coûteux et stressant.</p>

<p>— Pierre</p>
`,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRelatedArticles(currentSlug: string, limit = 3): Article[] {
  return articles
    .filter((a) => a.slug !== currentSlug)
    .sort((a, b) => b.datePublication.localeCompare(a.datePublication))
    .slice(0, limit);
}

export function getAllArticles(): Article[] {
  return [...articles].sort((a, b) =>
    b.datePublication.localeCompare(a.datePublication),
  );
}

export function formatDateFr(isoDate: string): string {
  const date = new Date(isoDate);
  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
