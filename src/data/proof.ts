// Mesure Google Lighthouse de ce site, relevée par Claude le 12 novembre 2026, après la refonte visuelle
// (PR #44) : Lighthouse 12.8.2, Chrome, production https://pierre-laurent.fr/, profil mobile,
// médiane de 3 passages (performance 99, 99 et 99 ; LCP 2 044, 2 048 et 2 047 ms).
// Une première série, juste après le déploiement, donnait 95, 99 et 99 et 2 421, 2 197 et 2 054 ms.
// Mesure précédente : 9 novembre 2026, performance 100 et LCP 1,9 s.
// À mettre à jour après chaque refonte : ne jamais afficher une valeur non remesurée.
export const lighthouse = {
  measuredOn: "12 novembre 2026",
  tool: "Google Lighthouse 12.8",
  profile: "sur téléphone, réseau mobile simulé",
  page: "page d’accueil",
  scores: [
    { label: "Performance", value: 99 },
    { label: "Accessibilité", value: 100 },
    { label: "Bonnes pratiques", value: 100 },
    { label: "Référencement", value: 100 },
  ],
  lcp: "2,0 s",
};
