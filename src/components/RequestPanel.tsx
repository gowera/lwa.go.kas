import { useState, type FormEvent } from "react";

import { mailtoHref, whatsappHref } from "@/data/company";
import { useI18n } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { PendingField } from "./PendingField";

export type RequestField = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  options?: string[];
  required?: boolean;
  placeholder?: string;
};

type RequestPanelProps = {
  title: string;
  intro?: string;
  fields: RequestField[];
  subject: string;
  /** Label of the submit button. */
  submitLabel: string;
  /** Note explaining where the request actually goes. */
  note: string;
  sentTitle: string;
  sentText: string;
  className?: string;
};

const inputClass =
  "w-full rounded-md border border-line bg-background px-3.5 py-2.5 text-[0.9rem] text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold focus:ring-2 focus:ring-gold/25";

/**
 * Collects the request, validates it, then hands it to the direct channels.
 * Nothing is stored: the composed message opens in e-mail or WhatsApp.
 */
export function RequestPanel({
  title,
  intro,
  fields,
  subject,
  submitLabel,
  note,
  sentTitle,
  sentText,
  className,
}: RequestPanelProps) {
  const { t } = useI18n();
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [consent, setConsent] = useState(false);
  const [composed, setComposed] = useState<string | null>(null);

  const set = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};
    fields.forEach((field) => {
      const value = (values[field.name] ?? "").trim();
      if (field.required && !value) nextErrors[field.name] = t("common.required");
      if (field.type === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        nextErrors[field.name] = t("common.required");
      }
    });
    if (!consent) nextErrors.consent = t("common.required");
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const lines = fields
      .map((field) => {
        const value = (values[field.name] ?? "").trim();
        return value ? `${field.label} : ${value}` : "";
      })
      .filter(Boolean);
    setComposed([subject, "", ...lines].join("\n"));
  };

  return (
    <div className={cn("card-premium p-6 sm:p-8", className)}>
      <h3 className="text-[1.35rem] font-semibold text-primary">{title}</h3>
      {intro && <p className="mt-2 text-[0.9rem] leading-relaxed text-muted-foreground">{intro}</p>}

      {composed ? (
        <div className="mt-6 rounded-lg border border-gold/35 bg-gold/8 p-5">
          <p className="text-[0.95rem] font-semibold text-primary">{sentTitle}</p>
          <p className="mt-1 text-[0.85rem] leading-relaxed text-muted-foreground">{sentText}</p>
          <pre className="mt-4 max-h-56 overflow-auto whitespace-pre-wrap rounded-md border border-line bg-background p-3 font-body text-[0.8rem] leading-relaxed text-foreground">
            {composed}
          </pre>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href={mailtoHref(subject, composed)} className="btn-navy px-4 py-2 text-[0.78rem]">
              <span className="material-icon text-[1.1rem]" aria-hidden>mail</span>
              {t("common.sendEmail")}
            </a>
            <a
              href={whatsappHref(composed)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-4 py-2 text-[0.78rem]"
            >
              <span className="material-icon text-[1.1rem]" aria-hidden>chat</span>
              {t("common.whatsapp")}
            </a>
            <Button variant="outline"
              type="button"
              onClick={() => setComposed(null)}
              className="btn-outline px-4 py-2 text-[0.78rem]"
            >
              {t("common.backHome")}
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate className="mt-6 grid gap-4 sm:grid-cols-2">
          {fields.map((field) => {
            const wide = field.type === "textarea" || field.options;
            const error = errors[field.name];
            return (
              <label key={field.name} className={cn("block", wide && "sm:col-span-2")}>
                <span className="mb-1.5 block text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {field.label}
                  {field.required && <span className="ml-1 text-gold-deep">*</span>}
                </span>
                {field.options ? (
                  <select
                    value={values[field.name] ?? ""}
                    onChange={(e) => set(field.name, e.target.value)}
                    className={cn(inputClass, error && "border-destructive")}
                  >
                    <option value="">—</option>
                    {field.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : field.type === "textarea" ? (
                  <textarea
                    rows={5}
                    value={values[field.name] ?? ""}
                    placeholder={field.placeholder}
                    onChange={(e) => set(field.name, e.target.value)}
                    className={cn(inputClass, "resize-y", error && "border-destructive")}
                  />
                ) : (
                  <input
                    type={field.type ?? "text"}
                    value={values[field.name] ?? ""}
                    placeholder={field.placeholder}
                    onChange={(e) => set(field.name, e.target.value)}
                    className={cn(inputClass, error && "border-destructive")}
                  />
                )}
                {error && <span className="mt-1 block text-[0.75rem] font-medium text-destructive">{error}</span>}
              </label>
            );
          })}

          <div className="sm:col-span-2">
            <label className="flex items-start gap-2.5 text-[0.82rem] leading-relaxed text-muted-foreground">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => {
                  setConsent(e.target.checked);
                  setErrors((prev) => {
                    const next = { ...prev };
                    delete next.consent;
                    return next;
                  });
                }}
                className="mt-1 h-4 w-4 shrink-0 accent-[hsl(var(--gold))]"
              />
              <span>
                {t("common.consent")}
                <span className="mt-0.5 block text-[0.72rem] text-muted-foreground/80">{t("common.legalNotice")}</span>
              </span>
            </label>
            {errors.consent && (
              <span className="mt-1 block text-[0.75rem] font-medium text-destructive">{errors.consent}</span>
            )}
          </div>

          <div className="sm:col-span-2">
            <Button variant="secondary" type="submit" className="btn-gold w-full sm:w-auto">
              <span className="material-icon text-[1.1rem]" aria-hidden>send</span>
              {submitLabel}
            </Button>
          </div>

          <p className="sm:col-span-2 text-[0.78rem] leading-relaxed text-muted-foreground">{note}</p>
          <PendingField label={t("partners.form.attachment")} className="sm:col-span-2" hint={t("partners.form.attachmentText")} />
        </form>
      )}
    </div>
  );
}

export default RequestPanel;
