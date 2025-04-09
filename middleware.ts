import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";

import type { Locale } from "@/shared/i18n/routing";
import { routing } from "@/shared/i18n/routing";
import { ThemeType } from "@/shared/types/ThemeType";

// Маппинг стран к локалям
const countryToLocale: Record<string, string> = {
  US: "en",
  GB: "en",
  FR: "fr",
  UA: "ua",
  DE: "de",
  ES: "es",
  PL: "pl",
  IT: "it",
  CZ: "cs"
};

function getLocaleFromRequest(request: NextRequest): Locale {
  const savedLocale = request.cookies.get("NEXT_LOCALE")?.value as Locale | undefined;
  if (savedLocale && routing.locales.includes(savedLocale)) {
    return savedLocale;
  }

  const country = request.headers.get("x-vercel-ip-country");
  if (country && countryToLocale[country]) {
    const geoLocale = countryToLocale[country] as Locale;
    if (routing.locales.includes(geoLocale)) {
      return geoLocale;
    }
  }

  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const preferredLocale = acceptLanguage
    .split(",")[0]
    .split("-")[0]
    .toLowerCase() as Locale;
  
  if (routing.locales.includes(preferredLocale)) {
    return preferredLocale;
  }

  return routing.defaultLocale;
}

export function middleware(request: NextRequest) {
  const intlMiddleware = createMiddleware(routing);

  const locale = getLocaleFromRequest(request);
  
  const pathname = request.nextUrl.pathname;
  const hasLocale = routing.locales.some(
    (loc) => pathname.startsWith(`/${loc}/`) || pathname === `/${loc}`
  );

  if (!hasLocale) {
    const response = intlMiddleware(request);
    
    response.cookies.set("NEXT_LOCALE", locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365, // 1 год
    });

    const theme = request.cookies.get("theme")?.value;
    const validThemes = Object.values(ThemeType);
    const selectedTheme = validThemes.includes(theme as ThemeType)
      ? (theme as ThemeType)
      : ThemeType.LIGHT;
    
    response.headers.set("x-theme", selectedTheme);
    return response;
  }

  const response = intlMiddleware(request);
  
  const theme = request.cookies.get("theme")?.value;
  const validThemes = Object.values(ThemeType);
  const selectedTheme = validThemes.includes(theme as ThemeType)
    ? (theme as ThemeType)
    : ThemeType.LIGHT;
  
  response.headers.set("x-theme", selectedTheme);
  return response;
}

export const config = {
  matcher: [
    "/", 
    "/(en|fr|ua|de|es|pl|it|cs)/:path*", 
  ],
};