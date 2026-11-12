import { useEffect, useRef, useState } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { LOCALES, useI18n, type Locale } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  tone?: "light" | "dark";
  className?: string;
};

export function LanguageSwitcher({ tone = "light", className }: LanguageSwitcherProps) {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const wrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!wrapper.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

  return (
    <div ref={wrapper} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("nav.language")}
        className={cn(
          "flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.12em] transition-colors",
          tone === "dark"
            ? "border-white/25 text-primary-foreground hover:bg-white/10"
            : "border-line text-primary hover:bg-navy-100/60",
        )}
      >
        <Globe className="h-3.5 w-3.5" aria-hidden />
        {current.short}
        <ChevronDown className={cn("h-3 w-3 transition-transform", open && "rotate-180")} aria-hidden />
      </button>
      {open && (
        <ul
          role="listbox"
          aria-label={t("nav.language")}
          className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-lg border border-line bg-card py-1 shadow-card"
        >
          {LOCALES.map((option) => (
            <li key={option.code} role="option" aria-selected={option.code === locale}>
              <button
                type="button"
                onClick={() => {
                  setLocale(option.code as Locale);
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full items-center justify-between px-3 py-2 text-left text-[0.85rem] transition-colors hover:bg-navy-100/70",
                  option.code === locale ? "font-bold text-primary" : "text-muted-foreground",
                )}
              >
                {option.label}
                <span className="text-[0.7rem] font-semibold uppercase tracking-widest">{option.short}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LanguageSwitcher;
