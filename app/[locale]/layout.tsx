import "@/shared/styles/globals.scss"

import type { Metadata } from "next";
import {  IBM_Plex_Mono} from "next/font/google";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import Header, { HeaderItem } from "@/features/header/Header";
import { Locale, routing } from "@/shared/i18n/routing";
import { ThemeType } from "@/shared/types/ThemeType";


/*const carroisGothic = Carrois_Gothic({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});*/
const Font = IBM_Plex_Mono({weight:"400",subsets:["latin"]}) 
/*,variable:"--Manrope"*/ 
export const metadata: Metadata = {
  title: "Damir Portnov",
  description: "Damir Portnov Portfolio",
};

const headerItems: HeaderItem[] = [
  { text: "About" },
  { text: "Skills" },
  { text: "Portfolio" },
  { text: "Work Experience" },
  { text: "Contacts" }
]

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
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Portnov" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body style={{ fontFamily: Font.style.fontFamily }}>
        <NextIntlClientProvider messages={messages}>
          <div className="flow-container">
            <Header headerItems={headerItems} />
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
