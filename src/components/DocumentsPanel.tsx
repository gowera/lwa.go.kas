import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n/LanguageProvider";
import { fetchDocuments, type WpDocument } from "@/lib/wordpress";
import { cn } from "@/lib/utils";

/** Documents published through WordPress, shared by the home band and the page. */
export function useDocuments() {
  return useQuery({ queryKey: ["documents"], queryFn: () => fetchDocuments() });
}

function formatSize(bytes: number) {
  const megabytes = bytes / (1024 * 1024);
  return megabytes >= 1
    ? `${megabytes.toFixed(1).replace(".", ",")} Mo`
    : `${Math.max(1, Math.round(bytes / 1024))} Ko`;
}

const DATE_LOCALES = { fr: "fr-FR", sw: "sw-TZ", en: "en-GB" } as const;

/** One published file with its download button. */
export function DocumentCard({ document: file, className }: { document: WpDocument; className?: string }) {
  const { t, locale } = useI18n();
  const published = new Date(file.date);
  const date = Number.isNaN(published.getTime())
    ? ""
    : published.toLocaleDateString(DATE_LOCALES[locale], { day: "2-digit", month: "long", year: "numeric" });
  const details = [date, file.size ? formatSize(file.size) : ""].filter(Boolean).join(" · ");
  return (
    <li className={cn("flex items-start justify-between gap-5 rounded-lg border border-line p-6", className)}>
      <div className="min-w-0">
        <span className="material-icon block text-[1.7rem] text-gold-deep" aria-hidden>picture_as_pdf</span>
        <h3 className="mt-3 break-words text-xl font-semibold text-primary">{file.title}</h3>
        {details && <p className="mt-2 text-sm text-muted-foreground">{details}</p>}
      </div>
      <Button asChild className="shrink-0">
        <a href={file.url} target="_blank" rel="noopener noreferrer">
          {t("documents.download")}
          <span className="material-icon text-[1.1rem]" aria-hidden>download</span>
        </a>
      </Button>
    </li>
  );
}

type DocumentsPanelProps = { limit?: number; className?: string };

/**
 * Compact document list for the home page. The empty state says the documents
 * are coming instead of inventing a file.
 */
export function DocumentsPanel({ limit, className }: DocumentsPanelProps) {
  const { t } = useI18n();
  const { data = [], isLoading } = useDocuments();

  if (isLoading) return <p className={cn("text-muted-foreground", className)}>{t("documents.loading")}</p>;

  if (data.length === 0) {
    return (
      <div className={cn("max-w-3xl", className)}>
        <h3 className="text-xl font-semibold text-primary">{t("documents.emptyTitle")}</h3>
        <p className="mt-3 leading-relaxed text-muted-foreground">{t("documents.emptyText")}</p>
        <Button asChild variant="link" className="mt-4 px-0">
          <Link to="/documents">
            {t("documents.cta")}
            <span className="material-icon text-[1.1rem]" aria-hidden>arrow_forward</span>
          </Link>
        </Button>
      </div>
    );
  }

  const shown = typeof limit === "number" ? data.slice(0, limit) : data;
  return (
    <div className={className}>
      <ul className="grid gap-5 md:grid-cols-2">
        {shown.map((file) => <DocumentCard key={file.id} document={file} />)}
      </ul>
      {data.length > shown.length && (
        <Button asChild variant="link" className="mt-4 px-0">
          <Link to="/documents">
            {t("documents.cta")}
            <span className="material-icon text-[1.1rem]" aria-hidden>arrow_forward</span>
          </Link>
        </Button>
      )}
    </div>
  );
}
