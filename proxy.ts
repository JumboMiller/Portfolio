import { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";

import { setDefaultThemeCookie } from "@/shared/lib/theme";
import { routing } from "@/shared/i18n/routing";

export async function proxy(request: NextRequest) {
  const intlMiddleware = createMiddleware(routing);
  const response = intlMiddleware(request);
 
  setDefaultThemeCookie(response, request.cookies.get("theme")?.value);

  return response;
}

export const config = {
  matcher: [ 
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|pdf|ico|webmanifest|json)).*)",
  ],
};
