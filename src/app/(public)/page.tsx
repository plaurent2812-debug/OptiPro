import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects, type ProductProject } from "@/data/projects";
import { experiences, factoryGrowth } from "@/data/profile";
import { contact, optipro } from "@/data/offer";
import SystemMap from "@/components/visuals/SystemMap";
import OfferCard from "@/components/offer/OfferCard";
import Section from "@/components/ui/Section";
import CallBlock from "@/components/ui/CallBlock";
import Icon from "@/components/ui/Icon";
import { BrowserFrame, PhoneFrame, StatusPill } from "@/components/ui/Frames";
import styles from "./home.module.css";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const project = (slug: ProductProject["slug"]) => projects.find((item) => item.slug === slug)!;

// Frise : années 2015 à 2026, une colonne par année.
const FIRST_YEAR = 2015;
const years = Array.from({ length: 12 }, (_, index) => FIRST_YEAR + index);
const timeline = experiences.flatMap((experience) => (experience.timeline ? [{ ...experience.timeline, company: experience.company, id: experience.id }] : [])).reverse();

const automations = [
  { title: "Tableaux de bord automatisés", source: "GL Events Live, 2025–2026" },
  { title: "Chaîne de traitement et d’analyse des données", source: "ProbaLab" },
  { title: "Simulations interactives sourcées", source: "Le Fond du sujet" },
  { title: "8\u202f500 références suivies avec seuils et réassort", source: "DBS Drive, 2017–2019" },
];

const stack = [
  { name: "Python", use: "calculs et automatisations" },
  { name: "PostgreSQL / Supabase", use: "bases de données" },
  { name: "API & IA", use: "relier vos logiciels entre eux et à l’IA" },
  { name: "Next.js", use: "sites et applications web" },
  { name: "React Native", use: "applications mobiles iOS et Android" },
  { name: "TypeScript", use: "un code plus fiable, avec moins d’erreurs" },
];

const apps = [project("ferdinand"), project("probalab"), project("ideoscope-2027"), project("odysio")];
const [ideoscope, ferdinand, probalab] = [project("ideoscope-2027"), project("ferdinand"), project("probalab")];
const [featuredSite, ...otherSites] = [project("ro-nutritionniste"), project("la-parallaxe"), project("le-fond-du-sujet")];
const chartLabel = `Chiffre d’affaires annuel du portefeuille de projets chez Factory : 400 000 euros en ${factoryGrowth.start.year}, 10 millions d’euros en ${factoryGrowth.end.year}.`;

function SiteCaption({ site }: { site: ProductProject }) {
  return (
    <figcaption>
      <div><Link href={`/projets#${site.slug}`}><b>{site.name}</b></Link><span>{site.pitch}</span></div>
      <StatusPill tone={site.badgeTone}>{site.badge}</StatusPill>
    </figcaption>
  );
}

export default function HomePage() {
  return (
    <main id="contenu" tabIndex={-1}>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className="shell">
          <div className={styles.heroGrid}>
            <h1 className={styles.h1} id="hero-title">Je relie le terrain au&nbsp;logiciel.</h1>
            <div className={styles.heroSide}>
              <p><strong>Dix ans à faire tourner des entrepôts, des dépôts et des transports.</strong> Aujourd’hui, je construis les outils qui vont avec&nbsp;: applications, automatisations et sites vitrines pour les {optipro.audience}, depuis {contact.city}.</p>
              <div className={styles.ctaRow}>
                <Link className="btn btn-primary" href="/optipro">Découvrir l’offre {optipro.brand}</Link>
                <a className="btn btn-ghost" href={contact.phoneHref}><Icon name="tel" /><span className="num">{contact.phoneDisplay}</span></a>
              </div>
            </div>
          </div>
          <SystemMap />
        </div>
      </section>

      <Section
        id="savoir-faire"
        titleId="operations-title"
        tone="amber"
        icon="terrain"
        tag="Opérations & logistique"
        title="Dix ans sur le terrain, avant d’écrire la moindre ligne de code."
        lede="Préparer, stocker, livrer, acheter, négocier, encadrer. Je connais ces métiers parce que je les ai exercés, et c’est ce qui rend mes outils utiles."
      >
        <div className={styles.frise} role="list" aria-label="Parcours dans les opérations, de 2015 à aujourd’hui">
          <div className={`${styles.friseRow} ${styles.axis}`} aria-hidden="true">
            <span className={styles.axisLabel}>Entreprise</span>
            <div className={styles.years}>{years.map((year) => <span key={year}>{year}</span>)}</div>
            <span className={styles.axisLabel}>Ce qui a été fait</span>
          </div>
          <div className={styles.shortYears} aria-hidden="true">{years.map((year) => <span key={year}>{String(year).slice(2)}</span>)}</div>
          {timeline.map((entry) => (
            <div key={entry.id} className={`${styles.friseRow} ${styles.item}`} role="listitem">
              <p className={styles.who}><b>{entry.label ?? entry.company}</b><span>{entry.from === entry.to ? entry.from : `${entry.from}–${entry.to}`}</span></p>
              <div className={styles.track} aria-hidden="true">
                <i className={`${styles.bar} ${entry.current ? styles.now : ""}`} style={{ gridColumn: `${entry.from - FIRST_YEAR + 1} / ${entry.to - FIRST_YEAR + 2}` }} />
              </div>
              <div className={styles.fact}><b>{entry.headline}</b><p>{entry.detail}</p></div>
            </div>
          ))}
          <p className={styles.note}>Chaque barre couvre les années d’activité réelles, de la première à la dernière.</p>
        </div>
      </Section>

      <Section
        id="data"
        titleId="data-title"
        tone="cyan"
        icon="data"
        tag="Automatisation, IA & data"
        title={<>Vos chiffres rassemblés, à&nbsp;jour, lisibles en un coup d’œil.</>}
        lede="Je relie vos fichiers et vos logiciels pour que les tableaux de bord se remplissent seuls et que les tâches répétitives ne vous prennent plus de temps."
        alt
      >
        <div className={styles.dataGrid}>
          <div className={styles.win}>
            <div className={styles.winBar}>Factory, portefeuille de projets <span>Chiffre d’affaires annuel</span></div>
            <div className={styles.chartWrap}>
              <div className={styles.kpis}>
                <div className={styles.kpi}><span>{factoryGrowth.start.year}</span><b>{factoryGrowth.start.value}</b></div>
                <div className={`${styles.kpi} ${styles.up}`}><span>{factoryGrowth.end.year}</span><b>{factoryGrowth.end.value}</b></div>
              </div>
              {/* Échelle linéaire : 400 k€ = 9,6 unités sur 240, 10 M€ = 240 unités */}
              <svg className={`${styles.chart} ${styles.chartWide}`} viewBox="0 0 640 300" role="img" aria-label={chartLabel}>
                <g className={styles.grid}>
                  <line x1="64" x2="628" y1="40" y2="40" /><line x1="64" x2="628" y1="100" y2="100" /><line x1="64" x2="628" y1="160" y2="160" /><line x1="64" x2="628" y1="220" y2="220" /><line className={styles.baseline} x1="64" x2="628" y1="280" y2="280" />
                </g>
                <g className={styles.axisText} textAnchor="end">
                  <text x="52" y="44">10 M€</text><text x="52" y="104">7,5 M€</text><text x="52" y="164">5 M€</text><text x="52" y="224">2,5 M€</text><text x="52" y="284">0</text>
                </g>
                <rect className={styles.chartBar} x="150" y="270.4" width="84" height="9.6" rx="2" opacity=".6" />
                <rect className={styles.chartBar} x="458" y="40" width="84" height="240" rx="3" />
                <text className={styles.value} x="192" y="258" textAnchor="middle">{factoryGrowth.start.value}</text>
                <text className={styles.value} x="500" y="28" textAnchor="middle">{factoryGrowth.end.value}</text>
                <text className={styles.yearText} x="192" y="298" textAnchor="middle">{factoryGrowth.start.year}</text>
                <text className={styles.yearText} x="500" y="298" textAnchor="middle">{factoryGrowth.end.year}</text>
                <path className={styles.ref} d="M238 270.4H452" />
                <text className={styles.refText} x="448" y="262" textAnchor="end">niveau de {factoryGrowth.start.year}</text>
              </svg>
              <svg className={`${styles.chart} ${styles.chartNarrow}`} viewBox="0 0 320 232" role="img" aria-label={chartLabel}>
                <g className={styles.grid}>
                  <line x1="48" x2="316" y1="30" y2="30" /><line x1="48" x2="316" y1="72.5" y2="72.5" /><line x1="48" x2="316" y1="115" y2="115" /><line x1="48" x2="316" y1="157.5" y2="157.5" /><line className={styles.baseline} x1="48" x2="316" y1="200" y2="200" />
                </g>
                <g className={styles.axisText} textAnchor="end">
                  <text x="40" y="34">10 M€</text><text x="40" y="76.5">7,5 M€</text><text x="40" y="119">5 M€</text><text x="40" y="161.5">2,5 M€</text><text x="40" y="204">0</text>
                </g>
                <rect className={styles.chartBar} x="78" y="193.2" width="58" height="6.8" rx="1.5" opacity=".6" />
                <rect className={styles.chartBar} x="226" y="30" width="58" height="170" rx="2.5" />
                <path className={styles.ref} d="M140 193.2H222" />
                <text className={styles.value} x="107" y="183" textAnchor="middle">{factoryGrowth.start.value}</text>
                <text className={styles.value} x="255" y="21" textAnchor="middle">{factoryGrowth.end.value}</text>
                <text className={styles.yearText} x="107" y="222" textAnchor="middle">{factoryGrowth.start.year}</text>
                <text className={styles.yearText} x="255" y="222" textAnchor="middle">{factoryGrowth.end.year}</text>
              </svg>
              <p className={styles.chartNote}>Seules les deux valeurs connues sont affichées. Aucune valeur intermédiaire n’est inventée.</p>
            </div>
          </div>

          <div className={`${styles.win} ${styles.winList}`}>
            <div className={styles.winBar}>Ce que j’ai déjà automatisé ou analysé</div>
            <ul className={styles.rows}>
              {automations.map((item) => (
                <li key={item.title}><i aria-hidden="true" /><div><b>{item.title}</b><span>{item.source}</span></div></li>
              ))}
            </ul>
          </div>
        </div>

        <ul className={styles.stack} aria-label="Outils utilisés, expliqués simplement">
          {stack.map((tool) => <li key={tool.name}><b>{tool.name}</b><span>{tool.use}</span></li>)}
        </ul>
      </Section>

      <Section
        id="realisations"
        titleId="apps-title"
        tone="green"
        icon="app"
        tag="Applications web & mobiles"
        title="Des applications que je conçois et développe moi-même."
        lede="Sur téléphone ou dans un navigateur, de l’idée à l’écran. Voici de vraies captures, sans retouche."
      >
        <div className={styles.appsGrid}>
          <div className={styles.deviceStage}>
            <BrowserFrame label={ideoscope.name} className={styles.ideo}>
              <Image src={ideoscope.image} alt={ideoscope.imageAlt} width={ideoscope.imageWidth} height={ideoscope.imageHeight} sizes="(max-width: 759px) 92vw, (max-width: 959px) 60vw, 460px" />
            </BrowserFrame>
            <div className={styles.phones}>
              <PhoneFrame inset={ferdinand.insetScreen} className={styles.phone}>
                <Image src={ferdinand.image} alt={ferdinand.imageAlt} width={ferdinand.imageWidth} height={ferdinand.imageHeight} sizes="(max-width: 759px) 46vw, 232px" />
              </PhoneFrame>
              <PhoneFrame inset={probalab.insetScreen} className={`${styles.phone} ${styles.phoneLow}`}>
                <Image src={probalab.image} alt={probalab.imageAlt} width={probalab.imageWidth} height={probalab.imageHeight} sizes="(max-width: 759px) 46vw, 232px" />
              </PhoneFrame>
            </div>
            <div className={styles.devCaption} aria-hidden="true"><span>{ferdinand.name}, sur iPhone</span><span>{probalab.name}, sur mobile</span></div>
          </div>

          <div>
            <ul className={styles.plist}>
              {apps.map((app) => (
                <li key={app.slug}>
                  <Link href={`/projets#${app.slug}`}><b>{app.name}</b></Link>
                  <StatusPill tone={app.badgeTone}>{app.badge}</StatusPill>
                  <p>{app.pitch}</p>
                  <span className={styles.platforms}>{app.reach}</span>
                </li>
              ))}
            </ul>
            <p className={styles.appsNote}>La même méthode sert pour un outil interne à votre entreprise&nbsp;: partir de votre façon de travailler, pas l’inverse.</p>
          </div>
        </div>
      </Section>

      <Section
        id="sites"
        titleId="sites-title"
        tone="green"
        icon="site"
        tag={`Sites vitrines ${optipro.brand}`}
        title="Un site qui présente bien votre entreprise, et qui donne envie d’appeler."
        lede={<>Des sites sur mesure pour les {optipro.audience}&nbsp;: clairs, soignés, faciles à parcourir sur téléphone. Conçus, mis en ligne et entretenus par la même personne.</>}
        alt
      >
        <div className={styles.sites}>
          <figure className={`${styles.site} ${styles.siteBig}`}>
            <BrowserFrame label={featuredSite.name}>
              <Image src={featuredSite.image} alt={featuredSite.imageAlt} width={featuredSite.imageWidth} height={featuredSite.imageHeight} sizes="(max-width: 1290px) 94vw, 1240px" />
            </BrowserFrame>
            <SiteCaption site={featuredSite} />
          </figure>
          {otherSites.map((site) => (
            <figure key={site.slug} className={styles.site}>
              <BrowserFrame label={site.name}>
                <Image src={site.image} alt={site.imageAlt} width={site.imageWidth} height={site.imageHeight} sizes="(max-width: 959px) 94vw, 610px" />
              </BrowserFrame>
              <SiteCaption site={site} />
            </figure>
          ))}
        </div>
      </Section>

      <Section
        id="optipro"
        titleId="offer-title"
        tone="green"
        icon="site"
        tag={`L’offre ${optipro.brand}`}
        title="Votre site vitrine, clé en main, à un prix clair."
        lede="Je conçois votre site, je le mets en ligne et je m’en occupe ensuite. Vous n’avez qu’un interlocuteur, joignable par téléphone."
      >
        <OfferCard />
        <p className={styles.more}><Link href="/optipro">Voir le détail de l’offre, le déroulé et les questions fréquentes</Link></p>
      </Section>

      <Section
        id="parcours"
        titleId="journey-title"
        tone="amber"
        icon="route"
        tag="Parcours"
        title="Un responsable des opérations qui code ses propres outils."
        alt
        intro={
          <>
            <div className={styles.bio}>
              <p>Je m’appelle Pierre Laurent et je vis à {contact.city}. J’ai passé dix ans dans les opérations&nbsp;: préparation de commandes, direction d’agence, création d’une filiale, gestion de projets, transport.</p>
              <p>Je suis aujourd’hui Responsable des Opérations (logistique, administration, data). Sous la marque {optipro.brand}, je conçois en entrepreneur individuel des sites et des outils pour les {optipro.audience} des {contact.area}.</p>
            </div>
            <p className={styles.more}><Link href="/a-propos">Mon parcours complet</Link><Link href="/cv">Mon CV</Link></p>
          </>
        }
      />

      <CallBlock titleId="contact-title" title="Parlons de votre entreprise. Le plus simple, c’est d’appeler." />
    </main>
  );
}
