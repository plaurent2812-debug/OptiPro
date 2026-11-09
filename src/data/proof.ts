// Mesure Google Lighthouse de ce site, relevée par Claude le 9 novembre 2026 : Lighthouse 12.8.2,
// Chrome, production https://pierre-laurent.fr/, profil mobile, médiane de 3 passages
// (performance 99, 100 et 100 ; LCP 2 061, 1 892 et 1 893 ms). Un passage isolé peut donner 97 ou 98
// (PageSpeed Insights du 5 novembre : 97) : la page le dit et renvoie vers PageSpeed.
// Mesure précédente : 21 octobre 2026, mêmes valeurs affichées.
// À mettre à jour après chaque refonte : ne jamais afficher une valeur non remesurée.
export const lighthouse = {
  measuredOn: "9 novembre 2026",
  tool: "Google Lighthouse 12.8",
  profile: "sur téléphone, réseau mobile simulé",
  page: "page d’accueil",
  scores: [
    { label: "Performance", value: 100 },
    { label: "Accessibilité", value: 100 },
    { label: "Bonnes pratiques", value: 100 },
    { label: "Référencement", value: 100 },
  ],
  lcp: "1,9 s",
};
