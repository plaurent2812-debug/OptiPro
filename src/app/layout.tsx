import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Barlow s'inspire de la signalétique routière : une seule famille, deux largeurs.
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pierre-laurent.fr"),
  title: {
    default: "Pierre Laurent — Opérations, applications et sites pour entreprises",
    template: "%s · Pierre Laurent",
  },
  description:
    "Dix ans dans les opérations et la logistique, des applications web et mobiles, de l’automatisation, de l’IA et de la data. Et OptiPro : des sites vitrines pour les TPE et PME des Alpes-Maritimes.",
  authors: [{ name: "Pierre Laurent", url: "https://pierre-laurent.fr" }],
  creator: "Pierre Laurent",
  category: "business",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Pierre Laurent",
    title: "Pierre Laurent — Opérations, applications et sites pour entreprises",
    description:
      "Je fais tourner les opérations et je construis les outils qui vont avec : logistique, applications, automatisation, data et sites vitrines OptiPro.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pierre Laurent — Opérations, applications et sites pour entreprises",
    description: "Logistique, applications, automatisation, data et sites vitrines OptiPro pour les entreprises des Alpes-Maritimes.",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#eef0eb",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <body className={`${barlow.variable} ${barlowCondensed.variable}`}>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
