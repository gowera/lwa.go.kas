/**
 * WordPress bridge for https://lwagokas.com.
 * With no VITE_WORDPRESS_URL configured the
 * adapter returns empty data instead of fabricating articles or submissions.
 */

export type WpPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  link: string;
  author: string;
  categories: string[];
  featuredImage: string | null;
};

export const DOCUMENTS_CATEGORY_NAME = "Documents, rapports";
export const isDocumentPost = (post: Pick<WpPost, "categories">) =>
  post.categories.includes(DOCUMENTS_CATEGORY_NAME);

const WP_URL = ((import.meta.env.VITE_WORDPRESS_URL as string | undefined) ?? "").replace(/\/$/, "");

export const wordpressEnabled = WP_URL.length > 0;

async function getJson(url: string): Promise<unknown> {
  const response = await fetch(url, { headers: { Accept: "application/json" } });
  if (!response.ok) throw new Error(`WordPress request failed: ${response.status}`);
  return response.json();
}

function asString(value: unknown, fallback = ""): string {
  if (typeof value === "string") return value;
  if (value && typeof value === "object" && "rendered" in value) {
    const rendered = (value as { rendered?: unknown }).rendered;
    if (typeof rendered === "string") return rendered;
  }
  return fallback;
}

export function mapPost(raw: unknown): WpPost {
  const item = raw as Record<string, unknown>;
  const embedded = (item._embedded ?? {}) as Record<string, unknown>;
  const author = Array.isArray(embedded.author) ? (embedded.author as Record<string, unknown>[])[0] : undefined;
  const media = Array.isArray(embedded["wp:featuredmedia"])
    ? (embedded["wp:featuredmedia"] as Record<string, unknown>[])[0]
    : undefined;
  const terms = Array.isArray(embedded["wp:term"])
    ? (embedded["wp:term"] as Record<string, unknown>[][]).flat()
    : [];
  return {
    id: Number(item.id ?? 0),
    slug: asString(item.slug),
    title: asString(item.title),
    excerpt: asString(item.excerpt).replace(/<[^>]+>/g, "").trim(),
    content: asString(item.content),
    date: asString(item.date),
    link: asString(item.link),
    author: asString(author?.name, ""),
    categories: terms.filter((term) => term?.taxonomy === "category").map((term) => asString(term?.name)),
    featuredImage: media
      ? asString(media.source_url) || asString((media.guid_raw ?? media.guid) as unknown) || null
      : null,
  } satisfies WpPost;
}

/** Returns [] when WordPress is not configured, so pages show an honest empty state. */
export async function fetchPosts(perPage = 9): Promise<WpPost[]> {
  if (!wordpressEnabled) return [];
  try {
    const data = await getJson(`${WP_URL}/wp-json/wp/v2/posts?_embed&per_page=${perPage}`);
    if (!Array.isArray(data)) return [];
    return data.map(mapPost);
  } catch {
    return [];
  }
}

export async function fetchPostBySlug(slug: string): Promise<WpPost | null> {
  if (!wordpressEnabled) return null;
  const data = await getJson(`${WP_URL}/wp-json/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed`);
  if (!Array.isArray(data)) return null;
  return data.length > 0 ? mapPost(data[0]) : null;
}

export type WpDocument = {
  id: number;
  title: string;
  url: string;
  date: string;
  size: number | null;
};

/**
 * PDF files published in the WordPress media library.
 * Returns [] while WordPress is not configured, so the documents page shows an
 * honest empty state instead of inventing files.
 */
export async function fetchDocuments(perPage = 30): Promise<WpDocument[]> {
  if (!wordpressEnabled) return [];
  try {
    const data = await getJson(
      `${WP_URL}/wp-json/wp/v2/media?mime_type=application%2Fpdf&orderby=date&order=desc&per_page=${perPage}`,
    );
    if (!Array.isArray(data)) return [];
    return data
      .map((raw) => {
        const item = raw as Record<string, unknown>;
        const details = (item.media_details ?? {}) as Record<string, unknown>;
        const size = Number(details.filesize ?? details.size);
        const source = asString(item.source_url);
        const fileName = decodeURIComponent(source.split("/").pop() ?? "");
        return {
          id: Number(item.id ?? 0),
          title: asString(item.title).replace(/<[^>]+>/g, "").trim() || fileName,
          url: source,
          date: asString(item.date),
          size: Number.isFinite(size) && size > 0 ? size : null,
        } satisfies WpDocument;
      })
      .filter((document) => document.url.length > 0);
  } catch {
    return [];
  }
}

export type WpSubmission = {
  type: "partenariat" | "contact";
  fields: Record<string, string>;
};
/**
 * Partnership and contact submissions target WordPress once it is configured.
 * While it is unavailable the call reports `not-configured` rather than
 * pretending the request was recorded.
 */
export async function submitToWordPress(
  submission: WpSubmission,
): Promise<{ ok: true } | { ok: false; reason: "not-configured" | "error" }> {
  if (!wordpressEnabled) return { ok: false, reason: "not-configured" };
  try {
    const response = await fetch(`${WP_URL}/wp-json/lwagokas/v1/${submission.type}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submission.fields),
    });
    return response.ok ? { ok: true } : { ok: false, reason: "error" };
  } catch {
    return { ok: false, reason: "error" };
  }
}
