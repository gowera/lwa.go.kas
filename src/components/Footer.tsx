import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { sectors } from "@/data/sectors";
import { navItems, socialIcons, values } from "@/data/site";
import { company, fullAddress, mailtoHref, primaryPhone, socials, telHref, whatsappHref } from "@/data/company";
import { useI18n } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

const OREDY_URL = "https://oredytech.com";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-gradient text-primary-foreground">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Logo onDark size={54} textClassName="text-primary-foreground" />
          <p className="mt-4 text-[0.82rem] font-medium uppercase tracking-[0.12em] text-gold-soft">{company.slogan}</p>
          <p className="mt-3 max-w-xs text-[0.85rem] leading-relaxed text-navy-300">{t("footer.about")}</p>
        </div>

        {/* Quick links */}
        <nav aria-label={t("footer.quickLinks")}>
          <h3 className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-gold-soft">{t("footer.quickLinks")}</h3>
          <ul className="mt-4 space-y-2.5">
            {[...navItems, { to: "/contact", key: "nav.contact" }].map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-[0.87rem] text-navy-300 transition-colors hover:text-gold-soft">
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sectors */}
        <nav aria-label={t("footer.sectors")}>
          <h3 className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-gold-soft">{t("footer.sectors")}</h3>
          <ul className="mt-4 space-y-2.5">
            {values.length > 0 && (
              <li>
                <Link to="/services" className="text-[0.87rem] text-navy-300 transition-colors hover:text-gold-soft">
                  {t("services.title")}
                </Link>
              </li>
            )}
            {sectors.map(s => s.slug).map(
              (slug) => (
                <li key={slug}>
                  <Link
                    to={`/services/${slug}`}
                    className="text-[0.87rem] text-navy-300 transition-colors hover:text-gold-soft"
                  >
                    {t(`sector.${slug}.name`)}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        {/* Contact + socials */}
        <div>
          <h3 className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-gold-soft">{t("footer.contact")}</h3>
          <ul className="mt-4 space-y-3 text-[0.85rem] text-navy-300">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-soft" aria-hidden />
              <span>{fullAddress}</span>
            </li>
            {company.phones.map((phone) => (
              <li key={phone.dial} className="flex gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-soft" aria-hidden />
                <a href={telHref(phone.dial)} className="transition-colors hover:text-gold-soft">
                  {phone.display}
                </a>
              </li>
            ))}
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-soft" aria-hidden />
              <a href={mailtoHref("Contact LWA.GO.KAS")} className="break-all transition-colors hover:text-gold-soft">
                {company.email}
              </a>
            </li>
          </ul>

          <h3 className="mt-6 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-gold-soft">{t("footer.follow")}</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {socials.map((social) => {
              const Icon = socialIcons[social.id];
              const href = social.url ?? (social.id === "whatsapp" ? whatsappHref("Bonjour LWA.GO.KAS") : null);
              if (!href) {
                return (
                  <li key={social.id}>
                    <span
                      title={`${social.label} — ${t("footer.followNote")}`}
                      aria-label={`${social.label} — ${t("footer.followNote")}`}
                      className="flex h-9 w-9 items-center justify-center rounded-md border border-primary-foreground/15 bg-primary-foreground/5 text-navy-300"
                    >
                      {Icon && <Icon className="h-4 w-4" aria-hidden />}
                    </span>
                  </li>
                );
              }
              return (
                <li key={social.id}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-primary-foreground/15 bg-primary-foreground/5 text-navy-300 transition-colors hover:border-gold/50 hover:text-gold-soft"
                  >
                    {Icon && <Icon className="h-4 w-4" aria-hidden />}
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="mt-3 text-[0.72rem] text-navy-300/80">{t("footer.followNote")}</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-page flex flex-col gap-3 py-5 text-[0.78rem] text-navy-300 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {company.legalName}. {t("footer.rights")}
          </span>
          <span className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link to="/mentions-legales" className="transition-colors hover:text-gold-soft">
              {t("footer.mentions")}
            </Link>
            <Link to="/politique-de-confidentialite" className="transition-colors hover:text-gold-soft">
              {t("footer.privacy")}
            </Link>
            <a
              href={OREDY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn("font-semibold text-gold-soft transition-colors hover:text-gold")}
            >
              {t("footer.credit")}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
