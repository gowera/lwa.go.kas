import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n/LanguageProvider";
import { fetchPosts, isDocumentPost, type WpPost } from "@/lib/wordpress";
import { cn } from "@/lib/utils";

/** WordPress posts in the dedicated documents category, shared by home and page. */
export function useDocuments() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(),
    select: (posts) => posts.filter(isDocumentPost),
  });
}

const DATE_LOCALES = { fr: "fr-FR", sw: "sw-TZ", en: "en-GB" } as const;

/** One published document article with a link to its WordPress page. */
export function DocumentCard({ document: post, className }: { document: WpPost; className?: string }) {
  const { t, locale } = useI18n();
  const published = new Date(post.date);
  const date = Number.isNaN(published.getTime())
    ? ""
    : published.toLocaleDateString(DATE_LOCALES[locale], { day: "2-digit", month: "long", year: "numeric" });
  return (
    <li className={cn("flex items-start justify-between gap-5 rounded-lg border border-line p-6", className)}>
      <div className="min-w-0">
        <h3 className="break-words text-xl font-semibold text-primary">{post.title.replace(/<[^>]*>/g, "")}</h3>
        {date && <p className="mt-2 text-sm text-muted-foreground">{date}</p>}
        {post.excerpt && <p className="mt-3 text-muted-foreground">{post.excerpt}</p>}
      </div>
      <Button asChild className="shrink-0">
        <Link to={`/actualites/${post.slug}`}>
          {t("common.readArticle")}
          <span className="material-icon text-[1.1rem]" aria-hidden>arrow_forward</span>
        </Link>
      </Button>
    </li>
  );
}

type DocumentsPanelProps = { limit?: number; className?: string };

/** Compact list of document-category articles for the home page and Documents page. */
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
