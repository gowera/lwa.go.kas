import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MapPin, Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { TranslationNotice } from "./TranslationNotice";
import { navItems } from "@/data/site";
import { company, primaryPhone, telHref } from "@/data/company";
import { useI18n } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

export function Header() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "relative py-1 text-[0.82rem] font-semibold tracking-[0.01em] transition-colors",
      isActive ? "text-gold-deep" : "text-primary/80 hover:text-primary",
    );

  return (
    <header className="sticky top-0 z-40">
      <TranslationNotice />

      {/* Utility row */}
      <div className="bg-primary text-primary-foreground">
        <div className="container-page flex h-9 items-center justify-between gap-4 text-[0.72rem]">
          <span className="flex min-w-0 items-center gap-2 text-navy-300">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-gold-soft" aria-hidden />
            <span className="truncate">
              {company.headquarters.city}, {company.headquarters.province} — {company.country ?? ""}
              {company.headquarters.address}
            </span>
          </span>
          <span className="flex items-center gap-4">
            <a
              href={telHref(primaryPhone.dial)}
              className="hidden items-center gap-1.5 font-semibold text-primary-foreground hover:text-gold-soft sm:flex"
            >
              <Phone className="h-3.5 w-3.5 text-gold-soft" aria-hidden />
              {primaryPhone.display}
            </a>
            <LanguageSwitcher tone="dark" />
          </span>
        </div>
      </div>

      {/* Main bar */}
      <div className={cn("border-b border-line bg-background/95 backdrop-blur transition-shadow", scrolled && "shadow-soft")}>
        <div className="container-page flex items-center justify-between gap-4 py-3">
          <Link to="/" aria-label="LWA.GO.KAS — Accueil" onClick={() => setMenuOpen(false)}>
            <Logo size={44} />
          </Link>

          <nav aria-label={t("nav.more")} className="hidden items-center gap-5 lg:flex xl:gap-7">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === "/"} className={linkClass}>
                {t(item.key)}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link to="/contact" className="btn-gold hidden px-4 py-2 text-[0.72rem] lg:inline-flex">
              {t("nav.contactCta")}
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? t("nav.close") : t("nav.menu")}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-primary transition-colors hover:bg-navy-100/60 lg:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav
            aria-label={t("nav.menu")}
            className="max-h-[calc(100vh-8rem)] overflow-y-auto border-t border-line bg-background lg:hidden"
          >
            <ul className="container-page py-3">
              {[...navItems, { to: "/contact", key: "nav.contact" }].map((item) => (
                <li key={item.to} className="border-b border-line/70 last:border-0">
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "block py-3 text-[0.95rem] font-semibold transition-colors",
                        isActive ? "text-gold-deep" : "text-primary",
                      )
                    }
                  >
                    {t(item.key)}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="container-page flex flex-wrap items-center justify-between gap-3 pb-5">
              <LanguageSwitcher />
              <Link to="/contact" onClick={() => setMenuOpen(false)} className="btn-gold px-4 py-2 text-[0.72rem]">
                {t("nav.contactCta")}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
