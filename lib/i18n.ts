import en from "@/dictionaries/en";
import vi from "@/dictionaries/vi";
import ja from "@/dictionaries/ja";
import zh from "@/dictionaries/zh";
import ko from "@/dictionaries/ko";
import th from "@/dictionaries/th";

export const locales = ["vi", "en", "zh", "ja", "ko", "th"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, { native: string; short: string }> = {
  vi: { native: "Tiếng Việt", short: "VI" },
  en: { native: "English", short: "EN" },
  zh: { native: "简体中文", short: "中文" },
  ja: { native: "日本語", short: "JA" },
  ko: { native: "한국어", short: "KO" },
  th: { native: "ภาษาไทย", short: "TH" },
};

export const htmlLang: Record<Locale, string> = {
  vi: "vi",
  en: "en",
  zh: "zh-CN",
  ja: "ja",
  ko: "ko",
  th: "th",
};

const dictionaries = { en, vi, ja, zh, ko, th };

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDict(locale: Locale) {
  return dictionaries[locale];
}

import dEn from "@/dictionaries/details/en";
import dVi from "@/dictionaries/details/vi";
import dJa from "@/dictionaries/details/ja";
import dZh from "@/dictionaries/details/zh";
import dKo from "@/dictionaries/details/ko";
import dTh from "@/dictionaries/details/th";

const details = { en: dEn, vi: dVi, ja: dJa, zh: dZh, ko: dKo, th: dTh };

export function getDetails(locale: Locale) {
  return details[locale];
}
