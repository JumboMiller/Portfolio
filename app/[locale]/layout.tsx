import "@/shared/styles/globals.scss";
import "animate.css";

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

const Font = IBM_Plex_Mono({ weight: "400", subsets: ["latin"] });

export const metadata = {
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
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const cookiesStore = await cookies();
  const themeCookie = cookiesStore.get("theme")?.value;

  const theme = Object.values(ThemeType).includes(themeCookie as ThemeType)
    ? (themeCookie as ThemeType)
    : ThemeType.LIGHT;

  const messages = await getMessages();

  return (
    <html lang={locale} dir="ltr" data-theme={theme} suppressHydrationWarning>
      <head>
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
