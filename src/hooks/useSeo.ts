import { useEffect } from "react";

type Seo = {
  title: string;
  description: string;
  /** Path used for the canonical URL, e.g. "/a-propos". */
  path?: string;
  type?: "website" | "article";
};

const setMeta = (attr: "name" | "property", key: string, content: string) => {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

/** Per-page SEO: title, description, canonical, Open Graph and Twitter tags. */
export function useSeo({ title, description, path = "/", type = "website" }: Seo) {
  useEffect(() => {
    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", type);
    setMeta("property", "og:site_name", "LWA.GO.KAS");
    setMeta("property", "og:url", `${window.location.origin}${path}`);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}${path}`;
  }, [title, description, path, type]);
}
