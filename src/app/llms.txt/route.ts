import { contact, deliverables, optipro } from "@/data/offer";
import { home, zones } from "@/data/zones";

// Résumé du site pour les assistants et moteurs de réponse (convention llms.txt).
// Généré depuis les mêmes données que les pages : aucun prix ni contact écrit en dur.
export const dynamic = "force-static";

export function GET() {
  const base = "https://pierre-laurent.fr";
  const body = [
    `# ${optipro.brand} — Pierre Laurent`,
    "",
    `> Création de sites internet pour les ${optipro.audience} des ${contact.area}, par Pierre Laurent, entrepreneur individuel installé à ${contact.city} (${home.postalCode}). ${optipro.setupPrice} de mise en ligne, puis ${optipro.monthlyPrice} par mois ou ${optipro.yearlyPrice} par an. ${optipro.vatNotice}.`,
    "",
    "## Offre",
    `- Mise en ligne en ${optipro.deliveryTime}, engagement de ${optipro.commitment}, ${optipro.includedEdits}, heure supplémentaire à ${optipro.extraHourPrice}.`,
    `- ${optipro.hostingIncluded}. ${optipro.ownership}`,
    ...deliverables.map((item) => `- ${item.title} : ${item.copy}`),
    "",
    "## Pages",
    `- [Offre et tarifs](${base}/optipro) : création de site internet dans les ${contact.area}`,
    `- [Création de site internet à ${home.name}](${base}/optipro/${home.slug})`,
    ...zones.map((zone) => `- [Création de site internet ${zone.at}](${base}/optipro/${zone.slug})`),
    `- [Combien coûte un site internet ?](${base}/optipro/prix-site-internet)`,
    `- [Réalisations](${base}/projets)`,
    `- [Qui suis-je](${base}/a-propos)`,
    "",
    "## Contact",
    `- Téléphone : ${contact.phoneDisplay}`,
    `- E-mail : ${contact.email}`,
    `- Zone : ${contact.area}, et ${contact.remoteArea}`,
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
