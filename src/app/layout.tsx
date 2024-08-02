import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { ConvexClientProvider } from "@/lib/ConvexClientProvider";
import { EdgeStoreProvider } from "@/lib/edgestore";

const inter = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
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
          <Header />
          <EdgeStoreProvider>{children}</EdgeStoreProvider>
          <Footer />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
