import { NextResponse } from "next/server";

import { ThemeType } from "@/shared/types/ThemeType";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export function setDefaultThemeCookie(
  response: NextResponse,
  currentTheme?: string
): void {
  const isValidTheme = currentTheme && 
    Object.values(ThemeType).includes(currentTheme as ThemeType);

  if (!isValidTheme) {
    response.headers.append(
      "Set-Cookie",
      `theme=${ThemeType.DARK}; Path=/; Max-Age=${COOKIE_MAX_AGE}; SameSite=Lax`
    );
  }
}
