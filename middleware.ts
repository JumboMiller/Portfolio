import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

import type { Locale } from "@/shared/i18n/routing";
import { routing } from "@/shared/i18n/routing";
import { ThemeType } from "@/shared/types/ThemeType";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(10, "1 m"),
  analytics: true,
});

const countryToLocale: Record<string, string> = {
  US: "en", GB: "en", FR: "fr", UA: "ua", DE: "de",
  ES: "es", PL: "pl", IT: "it", CZ: "cs",
};

function getLocaleFromRequest(request: NextRequest): Locale {
  const saved = request.cookies.get("NEXT_LOCALE")?.value as Locale | undefined;
  if (saved && routing.locales.includes(saved)) return saved;

  const country = request.headers.get("x-vercel-ip-country");
  const geoLocale = countryToLocale[country ?? ""] as Locale | undefined;
  if (geoLocale && routing.locales.includes(geoLocale)) return geoLocale;

  const acceptLang = request.headers.get("accept-language") ?? "";
  const preferred = acceptLang.split(",")[0].split("-")[0].toLowerCase() as Locale;
  if (routing.locales.includes(preferred)) return preferred;

  return routing.defaultLocale;
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith("/_next/") || pathname.startsWith("/static/")) {
    return NextResponse.next();
  }

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

  const hasLocale = routing.locales.some(
    (loc) => pathname.startsWith(`/${loc}/`) || pathname === `/${loc}`
  );

  if (!hasLocale) {
    const locale = getLocaleFromRequest(request);
    const redirectUrl = new URL(`/${locale}${pathname}`, request.url);
    const response = NextResponse.redirect(redirectUrl);
    response.headers.append(
      "Set-Cookie",
      `NEXT_LOCALE=${locale}; Path=/; Max-Age=${60 * 60 * 24 * 365}`
    );
    return response;
  }

  const intlMiddleware = createMiddleware(routing);
  const response = intlMiddleware(request);

  const themeCookie = request.cookies.get("theme")?.value ?? ThemeType.DARK;
  const selectedTheme = Object.values(ThemeType).includes(themeCookie as ThemeType)
    ? (themeCookie as ThemeType)
    : ThemeType.DARK;

  response.headers.set("x-theme", selectedTheme);
  response.headers.append(
    "Set-Cookie",
    `theme=${selectedTheme}; Path=/; Max-Age=${60 * 60 * 24 * 365}`
  );

  return response;
}

export const config = {
  matcher: ["/", "/(en|fr|ua|de|es|pl|it|cs)/:path*"],
};
