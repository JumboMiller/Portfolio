import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

import type { Locale } from "@/shared/i18n/routing";
import { routing } from "@/shared/i18n/routing";
import { ThemeType } from "@/shared/types/ThemeType";

// Initialize Redis and Rate Limiter
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(10, "1 m"), // 10 requests per minute
  analytics: true,
});

const countryToLocale: Record<string, string> = {
  US: "en",
  GB: "en",
  FR: "fr",
  UA: "ua",
  DE: "de",
  ES: "es",
  PL: "pl",
  IT: "it",
  CZ: "cs",
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

export async function middleware(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";


  const { success, limit, remaining, reset } = await ratelimit.limit(ip);

  if (!success) {
    return new NextResponse("Too many requests", {
      status: 429,
      headers: {
        "X-RateLimit-Limit": limit.toString(),
        "X-RateLimit-Remaining": remaining.toString(),
        "X-RateLimit-Reset": reset.toString(),
      },
    });
  }

  const intlMiddleware = createMiddleware(routing);
  const locale = getLocaleFromRequest(request);

  const pathname = request.nextUrl.pathname;
  const hasLocale = routing.locales.some(
    (loc) => pathname.startsWith(`/${loc}/`) || pathname === `/${loc}`
  );

  const response = hasLocale
    ? intlMiddleware(request)
    : (() => {
      const res = intlMiddleware(request);
      res.cookies.set("NEXT_LOCALE", locale, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
      });
      return res;
    })();

  const theme = request.cookies.get("theme")?.value;
  const validThemes = Object.values(ThemeType);
  const selectedTheme = validThemes.includes(theme as ThemeType)
    ? (theme as ThemeType)
    : ThemeType.DARK;

  response.headers.set("x-theme", selectedTheme);
  return response;
}

export const config = {
  matcher: ["/", "/(en|fr|ua|de|es|pl|it|cs)/:path*"],
};
