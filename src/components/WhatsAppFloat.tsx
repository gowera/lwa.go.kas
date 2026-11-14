
import { whatsappHref } from "@/data/company";
import { useI18n } from "@/i18n/LanguageProvider";

/** Always-visible WhatsApp entry point, the most used channel in the region. */
export function WhatsAppFloat() {
  const { t } = useI18n();
  const href = whatsappHref("Bonjour LWA.GO.KAS, je souhaite des informations.");
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("float.whatsapp")}
      title={t("float.whatsapp")}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-gold transition-transform duration-300 hover:scale-105 focus-visible:scale-105 sm:bottom-7 sm:right-7"
    >
      <span className="material-icon text-[1.7rem]" aria-hidden>chat</span>
    </a>
  );
}

export default WhatsAppFloat;
