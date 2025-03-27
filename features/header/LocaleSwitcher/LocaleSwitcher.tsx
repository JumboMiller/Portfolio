"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useTransition } from "react";

import CustomSelect from "@/shared/components/Select/Select";
import type { Locale } from "@/shared/i18n/routing";

interface LocaleOption {
  value: Locale;
  label: string;
}

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale() as Locale;
  const [isPending, startTransition] = useTransition();

  const availableLocales: LocaleOption[] = [
    { value: "en", label: "🇺🇸" },
    { value: "fr", label: "🇫🇷" },
    { value: "ua", label: "🇺🇦" },
    { value: "de", label: "🇩🇪" },
    { value: "es", label: "🇪🇸" },
    { value: "pl", label: "🇵🇱" },
    { value: "it", label: "🇮🇹" },
    { value: "cs", label: "🇨🇿" },
  ];

  const handleLocaleChange = (newLocale: Locale) => {
    startTransition(() => {
      document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=${60 * 60 * 24 * 365}`;
      const segments = pathname.split("/");
      segments[1] = newLocale;
      const newPathname = segments.join("/");
      router.push(newPathname);
    });
  };

  return (
    <CustomSelect
      options={availableLocales}
      value={currentLocale}
      onChange={(e) => handleLocaleChange(e.target.value as Locale)}
      disabled={isPending}
    />
  );
}
