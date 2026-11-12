import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n/LanguageProvider";

type PendingFieldProps = {
  label: string;
  className?: string;
  /** Extra hint shown under the pending value. */
  hint?: string;
};

/**
 * Renders a company field that has not been supplied yet. The label stays
 * visible so the gap is obvious and editable, never replaced by invented data.
 */
export function PendingField({ label, className, hint }: PendingFieldProps) {
  const { t } = useI18n();
  return (
    <div className={cn("min-w-0", className)}>
      <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </span>
      <span className="mt-1 flex items-center gap-2 rounded-md border border-dashed border-gold/50 bg-gold/8 px-2.5 py-1.5 text-[0.8rem] font-medium text-gold-deep">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
        {t("common.pending")}
      </span>
      {hint && <span className="mt-1 block text-[0.72rem] text-muted-foreground">{hint}</span>}
    </div>
  );
}

export default PendingField;
