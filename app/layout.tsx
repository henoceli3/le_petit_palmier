import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { ConfigProvider } from "antd";
import { JSX } from "react";
import { Analytics } from "@vercel/analytics/next";

// Elegant serif font for headings
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

// Clean sans-serif font for body text
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Le Petit Palmier - Fondation Chrétienne",
  description:
    "Fondation chrétienne dédiée au développement spirituel des enfants et des jeunes",
  icons: {
    icon: "./favicon.ico",
  },
};

/**
 * Composant racine de l'application.
 * Il gère le rendu de la page HTML, le thème des composants Antd,
 * et applique les polices Playfair Display et Montserrat.
 * @param {{ children: React.ReactNode }} props
 * @returns {JSX.Element}
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${playfair.variable} ${montserrat.variable}`}
    >
      <body className={montserrat.className}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#d97706",
              borderRadius: 8,
              fontFamily: "var(--font-montserrat)",
            },
            components: {
              Button: {
                colorPrimary: "#d97706",
              },
            },
          }}
        >
          {children}
          <Analytics />
        </ConfigProvider>
      </body>
    </html>
  );
}
