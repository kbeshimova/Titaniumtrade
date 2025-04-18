import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "./animation.css";
import { LanguageProvider } from "./context/langContext";
import { TabProvider, useTab } from "./context/tabsContext";

export const metadata = {
  title: "Titanium Trade Limited",
  description: "Welcome",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Titanium Trade Limited</title>
        <meta
          name="description"
          content="Titanium Trade Limited — ваш надежный партнер в экспорте фруктов, овощей и сухофруктов. Мы предоставляем качественные решения для вашего бизнеса."
        />
        <meta
          name="keywords"
          content="Titanium Trade, экспорт фруктов, экспорт овощей, экспорт сухофруктов, торговля, бизнес-решения"
        />
        <meta name="author" content="Titanium Trade Limited" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Titanium Trade Limited" />
        <meta
          property="og:description"
          content="Titanium Trade Limited — ваш надежный партнер в экспорте фруктов, овощей и сухофруктов. Мы предоставляем качественные решения для вашего бизнеса."
        />
        <meta property="og:image" content="/path-to-your-image.jpg" />
        <meta property="og:url" content="https://titaniumtradelimited.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Titanium Trade Limited" />
        <meta
          name="twitter:description"
          content="Titanium Trade Limited — ваш надежный партнер в экспорте фруктов, овощей и сухофруктов. Мы предоставляем качественные решения для вашего бизнеса."
        />
        <meta name="twitter:image" content="/path-to-your-image.jpg" />
        <link rel="canonical" href="https://titaniumtradelimited.com" />
        <link rel="icon" href="/public/ttFavWh.svg" />
      </head>
      <body>
        <TabProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </TabProvider>
      </body>
    </html>
  );
}
