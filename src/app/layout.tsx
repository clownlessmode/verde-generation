import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/lib/ConvexClientProvider";
import ClientWrapper from "./components/clientwrapper/ClientWrapper";
import Script from "next/script";

const inter = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    shortcut: [
      {
        url: "favicon.ico", // Используйте 'url' вместо 'src'
        type: "image/x-icon",
      },
    ],
  },
  title: "Verde: Разработка Нефтегазовых Месторождений",
  description:
    "Verde - оператор управления активами в нефтегазовой отрасли. Специализируемся на разработке месторождений, управлении активами, инновационных технологиях и обеспечении экологической и социальной ответственности.",
  keywords: [
    "Verde",
    "нефтегазовая отрасль",
    "разработка месторождений",
    "управление активами",
    "инновационные технологии",
    "экологическая ответственность",
    "социальная ответственность",
    "нефть",
    "газ",
    "энергетика",
    "добыча",
    "эксплуатация",
    "эффективность",
    "устойчивое развитие",
    "тонн",
    "сутки",
    "добыча",
    "проект",
    "баррелей",
  ],
  openGraph: {
    title: "Verde: Эффективная Разработка Нефтегазовых Месторождений",
    description:
      "Verde - ваш надежный партнер в нефтегазовой отрасли. Мы предлагаем комплексные решения для разработки месторождений, управления активами и внедрения инновационных технологий с фокусом на экологическую и социальную ответственность.", // Более подробное описание
    url: "https://www.verdeg.com",
    type: "website",
    images: [
      {
        url: "https://verdeg.com/assets/hero/background2.webp",
        width: 1200,
        height: 630,
        alt: "Verde: Разработка Нефтегазовых Месторождений",
      },
    ],
    siteName: "Verde",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <ConvexClientProvider>
          <ClientWrapper>{children}</ClientWrapper>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
