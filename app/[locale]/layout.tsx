import "@/shared/styles/globals.scss"
import "animate.css";

import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import Footer from "@/features/footer/Footer";
import Header from "@/features/header/Header";
import { Locale, routing } from "@/shared/i18n/routing";
import { ThemeType } from "@/shared/types/ThemeType";



const Font = IBM_Plex_Mono({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Damir Portnov | Portfolio",
  description: "Damir Portnov | Portfolio",
  keywords: "Damir Portnov, Jumbo Miller, Frontend Developer, Blockchain Developer, Web3 Developer, React Developer, TypeScript, Next.js, Web Development, Blockchain Projects, Decentralized Applications, ReactJS Portfolio, Full-stack Developer, UI/UX Design, JavaScript, Node.js, Ethereum, Smart Contracts",
};



export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const cookiesStore = await cookies();
  const themeCookie = cookiesStore.get("theme");
  const theme = Object.values(ThemeType).includes(themeCookie?.value as ThemeType)
    ? (themeCookie?.value as ThemeType)
    : ThemeType.LIGHT;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} data-theme={theme}>
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Portnov" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body style={{ fontFamily: Font.style.fontFamily }}>
        <NextIntlClientProvider messages={messages}>
          <div className="flow-container">
            <Header />
            {children}
            <Footer />
          </div>
        </NextIntlClientProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
