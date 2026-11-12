import type { Status } from "./sectors";

/**
 * Presence zones. The brief is explicit: not every city is an operating agency.
 * `type` distinguishes the headquarters, active agencies, representations and
 * development zones. Unconfirmed details stay null and render as pending.
 */

export type PresenceType = "siège" | "agence active" | "représentation" | "zone de développement";

export type Location = {
  slug: string;
  city: string;
  province: string;
  type: PresenceType;
  status: Status;
  presentation: string;
  address: string | null;
  phone: string | null;
  email: string | null;
  hours: string | null;
  services: string[];
  mapQuery: string | null;
};

export const locations: Location[] = [
  {
    slug: "butembo",
    city: "Butembo",
    province: "Nord-Kivu",
    type: "siège",
    status: "actif",
    presentation:
      "Butembo abrite le siège social de LWA.GO.KAS. C'est le point de contact central de l'entreprise pour les demandes de renseignements, les partenariats et les candidatures.",
    address: "N° 59, cellule Muhayirwa, quartier Kalemire, commune Bulengera",
    phone: "+243 991 426 986",
    email: "Lwagokas6@gmail.com",
    hours: null,
    services: [],
    mapQuery: "Kalemire, Bulengera, Butembo, Nord-Kivu, RDC",
  },
  {
    slug: "beni",
    city: "Beni",
    province: "Nord-Kivu",
    type: "zone de développement",
    status: "en developpement",
    presentation:
      "Beni est une zone de développement pour LWA.GO.KAS. Les activités qui y seront proposées et les modalités de présence y sont en cours de préparation.",
    address: null,
    phone: null,
    email: null,
    hours: null,
    services: [],
    mapQuery: null,
  },
  {
    slug: "goma",
    city: "Goma",
    province: "Nord-Kivu",
    type: "zone de développement",
    status: "en developpement",
    presentation:
      "Goma est une zone de développement pour LWA.GO.KAS. Aucune agence n'y est présentée comme ouverte tant que les conditions d'exploitation ne sont pas confirmées.",
    address: null,
    phone: null,
    email: null,
    hours: null,
    services: [],
    mapQuery: null,
  },
  {
    slug: "lubumbashi",
    city: "Lubumbashi",
    province: "Haut-Katanga",
    type: "zone de développement",
    status: "en developpement",
    presentation:
      "Lubumbashi est une zone de développement pour LWA.GO.KAS, tournée vers les activités économiques et les partenariats du sud du pays.",
    address: null,
    phone: null,
    email: null,
    hours: null,
    services: [],
    mapQuery: null,
  },
];

export const getLocation = (slug?: string) => locations.find((l) => l.slug === slug);
