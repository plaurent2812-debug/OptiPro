import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.opti-pro.fr"),
  title: {
    default: "Pierre Laurent — Product builder",
    template: "%s · Pierre Laurent",
  },
  description:
    "Je conçois et développe des produits numériques utiles, du moteur de données à l’expérience mobile. Créateur de ProbaLab et Ferdinand.",
  authors: [{ name: "Pierre Laurent", url: "https://www.opti-pro.fr" }],
  creator: "Pierre Laurent",
  category: "technology",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Pierre Laurent — Product builder",
    title: "Pierre Laurent — Je construis des systèmes utiles",
    description:
      "Produits numériques, données, web et mobile. Découvrez ProbaLab, Ferdinand et les prochains systèmes.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pierre Laurent — Product builder",
    description: "Produits numériques, données, web et mobile.",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#05080d",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" data-theme="dark" data-scroll-behavior="smooth">
      <body className={`${spaceGrotesk.variable} ${jetBrainsMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
