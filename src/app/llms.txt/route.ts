import { contact, deliverables, offer } from "@/data/offer";
import { home, zones } from "@/data/zones";

// Résumé du site pour les assistants et moteurs de réponse (convention llms.txt).
// Généré depuis les mêmes données que les pages : aucun prix ni contact écrit en dur.
export const dynamic = "force-static";

export function GET() {
  const base = "https://pierre-laurent.fr";
  const body = [
    `# ${contact.name} — Création de sites internet`,
    "",
    `> Création de sites internet pour les ${offer.audience} des ${contact.area}, par Pierre Laurent, entrepreneur individuel installé à ${contact.city} (${home.postalCode}). ${offer.setupPrice} de mise en ligne, puis ${offer.monthlyPrice} par mois ou ${offer.yearlyPrice} par an. ${offer.vatNotice}.`,
    "",
    "## Offre",
    `- Mise en ligne en ${offer.deliveryTime}, engagement de ${offer.commitment}, ${offer.includedEdits}, heure supplémentaire à ${offer.extraHourPrice}.`,
    `- ${offer.hostingIncluded}. ${offer.ownership}`,
    ...deliverables.map((item) => `- ${item.title} : ${item.copy}`),
    "",
    "## Pages",
    `- [Offre et tarifs](${base}/creation-site-internet) : création de site internet dans les ${contact.area}`,
    `- [Création de site internet à ${home.name}](${base}/creation-site-internet/${home.slug})`,
    ...zones.map((zone) => `- [Création de site internet ${zone.at}](${base}/creation-site-internet/${zone.slug})`),
    `- [Combien coûte un site internet ?](${base}/creation-site-internet/prix)`,
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
