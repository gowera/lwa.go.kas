
import { useEffect, useState } from "react";
import { whatsappHref } from "@/data/company";
import { useI18n } from "@/i18n/LanguageProvider";

/** WhatsApp entry point that leaves the footer clear at the very bottom. */
export function WhatsAppFloat() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(true);
  const href = whatsappHref("Bonjour LWA.GO.KAS, je souhaite des informations.");

  useEffect(() => {
    let previousY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const hasScrollableContent = scrollHeight > window.innerHeight;
      const atBottom = hasScrollableContent && Math.ceil(currentY + window.innerHeight) >= scrollHeight;

      if (atBottom) {
        setVisible(false);
      } else if (currentY < previousY) {
        setVisible(true);
      }

      previousY = currentY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  if (!visible) return null;

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
