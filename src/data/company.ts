/**
 * Single source of truth for LWA.GO.KAS identity and contacts.
 * Nothing here is invented: every value comes from the company brief.
 * Fields the company has not supplied are `null` and render as pending.
 */

export const company = {
  name: "LWA.GO.KAS",
  legalName: "LWA.GO.KAS / SAU",
  expandedName: "LWANZO GODSEE KASEREKA",
  slogan: "Professionnalisme, engagement et développement durable.",
  headquarters: {
    label: "Siège social",
    address: "N° 59, cellule Muhayirwa, quartier Kalemire, commune Bulengera",
    city: "Butembo",
    province: "Nord-Kivu",
    country: "République démocratique du Congo",
  },
  phones: [
    { label: "Ligne principale", display: "+243 991 426 986", dial: "+243991426986" },
    { label: "Ligne secondaire", display: "+243 812 658 624", dial: "+243812658624" },
  ],
  email: "Lwagokas6@gmail.com",
  /** Not confirmed by the company — rendered as a slot, never as a live link. */
  website: null as string | null,
  wordpress: {
    /** Set VITE_WORDPRESS_URL to https://lwagokas.org when the site is live. */
    url: (import.meta.env.VITE_WORDPRESS_URL as string | undefined) ?? "",
    enabled: Boolean(import.meta.env.VITE_WORDPRESS_URL),
  },
} as const;

export const socials = [
  { id: "facebook", label: "Facebook", url: null as string | null },
  { id: "instagram", label: "Instagram", url: null as string | null },
  { id: "tiktok", label: "TikTok", url: null as string | null },
  { id: "youtube", label: "YouTube", url: null as string | null },
  { id: "x", label: "X", url: null as string | null },
  { id: "whatsapp", label: "WhatsApp Business", url: null as string | null },
] as const;

export const primaryPhone = company.phones[0];
export const secondaryPhone = company.phones[1];

export const telHref = (dial: string) => `tel:${dial.replace(/[^+\d]/g, "")}`;

export const mailtoHref = (subject: string, body?: string) => {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  return `mailto:${company.email}${query ? `?${query}` : ""}`;
};

/** wa.me needs the number without the plus sign. */
export const whatsappHref = (message: string, dial: string = primaryPhone.dial) =>
  `https://wa.me/${dial.replace("+", "")}?text=${encodeURIComponent(message)}`;

export const fullAddress = `${company.headquarters.address}, ${company.headquarters.city}, ${company.headquarters.province}, ${company.headquarters.country}`;
