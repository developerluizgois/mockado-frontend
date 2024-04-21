"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import React, { useTransition } from "react";
import { useTranslations } from "next-intl";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LocalSwitcher() {
  const [isPeding, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const t = useTranslations("navigation.languages");
  const pathname = usePathname();

  const onSelectChange = (e: string) => {
    const nextLocale = e;
    startTransition(() => {
      router.replace(
        `/${nextLocale}/${pathname.replace(
          new RegExp(`\/${localActive}/`),
          ""
        )}`
      );
    });
  };

  return (
    <Select defaultValue={localActive} onValueChange={(e) => onSelectChange(e)}>
      <SelectTrigger className="w-[150px]">
        <SelectValue placeholder={localActive} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value={t("english.code")}>{t("english.name")}</SelectItem>
          <SelectItem value={t("portuguese.code")}>{t("portuguese.name")}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
