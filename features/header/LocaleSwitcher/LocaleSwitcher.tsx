"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useTransition } from "react";

import CustomSelect from "@/shared/components/Select/Select";


export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [isPending, startTransition] = useTransition();

  const availableLocales = [
    { value: "en", label: "🇺🇸" },
    { value: "fr", label: "🇫🇷" },
    { value: "ua", label: "🇺🇦" },
    { value: "de", label: "🇩🇪" },
    { value: "es", label: "🇪🇸" },
  ];

  const handleLocaleChange = (newLocale: string) => {
    startTransition(() => {
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
      onChange={(e) => handleLocaleChange(e.target.value)}
      disabled={isPending}
    />
  );
}
