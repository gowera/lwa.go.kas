
import { useI18n } from "@/i18n/LanguageProvider";

/**
 * Tells the reader that the active language is not complete yet, instead of
 * silently mixing French text into a Kiswahili or English page.
 */
export function TranslationNotice() {
  const { locale, missingCount, t } = useI18n();
  if (locale === "fr" || missingCount === 0) return null;
  return (
    <p className="flex items-start gap-2 border-b border-gold/30 bg-gold/10 px-5 py-2 text-[0.78rem] leading-relaxed text-gold-deep">
      <span className="material-icon mt-0.5 shrink-0 text-[1rem]" aria-hidden>info</span>
      <span>{t("common.translationNotice")}</span>
    </p>
  );
}

export default TranslationNotice;
