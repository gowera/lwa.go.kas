import { Mail, MessageCircle, Phone } from "lucide-react";
import { mailtoHref, primaryPhone, telHref, whatsappHref } from "@/data/company";
import { useI18n } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

type ContactChannelsProps = {
  subject?: string;
  message?: string;
  className?: string;
  size?: "sm" | "md";
};

/** The three direct channels: phone call, WhatsApp and e-mail. */
export function ContactChannels({ subject = "Contact LWA.GO.KAS", message, className, size = "md" }: ContactChannelsProps) {
  const { t } = useI18n();
  const padding = size === "sm" ? "px-4 py-2 text-[0.78rem]" : "px-5 py-3 text-[0.85rem]";

  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <a href={telHref(primaryPhone.dial)} className={cn("btn-navy", padding)}>
        <Phone className="h-4 w-4" aria-hidden />
        {t("common.callUs")}
      </a>
      <a
        href={whatsappHref(message ?? "Bonjour LWA.GO.KAS, je souhaite des informations.")}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("btn-gold", padding)}
      >
        <MessageCircle className="h-4 w-4" aria-hidden />
        {t("common.whatsapp")}
      </a>
      <a href={mailtoHref(subject, message)} className={cn("btn-outline", padding)}>
        <Mail className="h-4 w-4" aria-hidden />
        {t("common.sendEmail")}
      </a>
    </div>
  );
}

export default ContactChannels;
