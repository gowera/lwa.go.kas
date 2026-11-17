/**
 * WordPress bridge for https://lwagokas.org.
 * The endpoint is not live yet: with no VITE_WORDPRESS_URL configured the
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

/** Returns [] when WordPress is not configured, so pages show an honest empty state. */
export async function fetchPosts(perPage = 9): Promise<WpPost[]> {
  if (!wordpressEnabled) return [];
  try {
    const data = await getJson(`${WP_URL}/wp-json/wp/v2/posts?_embed&per_page=${perPage}`);
    if (!Array.isArray(data)) return [];
    return data.map((raw) => {
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
        categories: terms.filter((t) => t?.taxonomy === "category").map((t) => asString(t?.name)),
        featuredImage: media ? asString((media.guid_raw ?? media.guid) as unknown) || null : null,
      } satisfies WpPost;
    });
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
