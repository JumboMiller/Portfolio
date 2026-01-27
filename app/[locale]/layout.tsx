import "@/shared/styles/globals.scss";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { IBM_Plex_Mono } from "next/font/google";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import Footer from "@/features/footer/Footer";
import Header from "@/features/header/Header";
import { Locale, routing } from "@/shared/i18n/routing";
import { ThemeType } from "@/shared/types/ThemeType";

const Font = IBM_Plex_Mono({ 
  weight: "400", 
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const baseUrl = "https://damir-portnov.com";
  
  return {
    title: "Damir Portnov | Portfolio",
    description: "Frontend & Blockchain Developer Portfolio",
    keywords: [
      "Damir Portnov",
      "Frontend Developer",
      "React",
      "TypeScript",
      "Blockchain",
      "Web3",
      "Next.js",
    ],
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "x-default": "/en",
        en: "/en",
        fr: "/fr",
        ua: "/ua",
        de: "/de",
        es: "/es",
        pl: "/pl",
        it: "/it",
        cs: "/cs",
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const cookiesStore = await cookies();
  const themeCookie = cookiesStore.get("theme")?.value;

  const theme = Object.values(ThemeType).includes(themeCookie as ThemeType)
    ? (themeCookie as ThemeType)
    : ThemeType.DARK;

  const messages = await getMessages();

  return (
    <html lang={locale} dir="ltr" data-theme={theme} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="apple-mobile-web-app-title" content="Portnov" />
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
