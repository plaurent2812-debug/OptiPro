import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Geist pour le texte, Geist Mono réservé aux graduations des graphiques.
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  preload: false,
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
      "Je relie le terrain au logiciel : logistique, applications, automatisation, data et sites vitrines OptiPro.",
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
  colorScheme: "dark",
  themeColor: "#0a0d12",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth" className={`${geist.variable} ${geistMono.variable}`}>
      <body>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
