import { useI18n } from "@/i18n/LanguageProvider";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";

type Crumb = { label: string; to?: string };

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  crumbs?: Crumb[];
  children?: ReactNode;
  className?: string;
};

/** Shared opening band for interior pages. */
export function PageHero({ eyebrow, title, lead, crumbs, children, className }: PageHeroProps) {
  const { t } = useI18n();
  return (
    <section className={cn("relative overflow-hidden bg-navy-gradient text-primary-foreground", className)}>
      <div className="container-page relative py-14 sm:py-16">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label={t("common.breadcrumb")} className="mb-5 flex flex-wrap items-center gap-1.5 text-[0.75rem] text-navy-300">
            {crumbs.map((crumb, index) => (
              <span key={crumb.label} className="flex items-center gap-1.5">
                {crumb.to ? (
                  <Link to={crumb.to} className="transition-colors hover:text-gold-soft">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gold-soft">{crumb.label}</span>
                )}
                {index < crumbs.length - 1 && <span className="material-icon text-[0.85rem]" aria-hidden>chevron_right</span>}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <span className="eyebrow text-gold-soft">{eyebrow}</span>}
        <h1 className="mt-3 max-w-3xl text-[2rem] font-semibold leading-[1.1] sm:text-[2.6rem] lg:text-[3rem]">{title}</h1>
        {lead && <p className="mt-4 max-w-2xl text-[0.98rem] leading-relaxed text-navy-300">{lead}</p>}
        {children && <div className="mt-7">{children}</div>}
      </div>
    </section>
  );
}

export default PageHero;
