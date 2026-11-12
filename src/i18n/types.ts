export type Dict = Record<string, string>;

export const LOCALES = [
  { code: "fr", label: "Français", short: "FR" },
  { code: "sw", label: "Kiswahili", short: "SW" },
  { code: "en", label: "English", short: "EN" },
] as const;

export type Locale = (typeof LOCALES)[number]["code"];

export const DEFAULT_LOCALE: Locale = "fr";
export const STORAGE_KEY = "lwagokas-locale";
