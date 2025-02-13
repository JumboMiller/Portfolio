import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";

import { routing } from "@/shared/i18n/routing";
import { ThemeType } from "@/shared/types/ThemeType";

export function middleware(request: NextRequest) {

  const intlMiddleware = createMiddleware(routing);

  const intlResponse = intlMiddleware(request);

  const theme = request.cookies.get("theme")?.value;
  const validThemes = Object.values(ThemeType);

  const selectedTheme = validThemes.includes(theme as ThemeType)
    ? (theme as ThemeType)
    : ThemeType.LIGHT;

  intlResponse.headers.set("x-theme", selectedTheme);
  return intlResponse;
}

export const config = {
  matcher: [
    "/", 
    "/(en|fr|ua)/:path*", 
  ],
};
