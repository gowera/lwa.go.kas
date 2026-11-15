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
  withdrawalHours: { days: "weekdays" | "saturday"; open: string; close: string; note?: string }[];
  sites: { name: string; address: string | null; status: Status }[];
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
    withdrawalHours: [
      { days: "weekdays", open: "09:00", close: "15:30" },
      { days: "saturday", open: "09:00", close: "12:00" },
    ],
    sites: [
      { name: "Kalumba", address: "Chez Kalumba, à la pharmacie de Nzevere", status: "actif" },
      { name: "Nziapanda", address: "Dans le parking de bennes", status: "actif" },
      { name: "Centre-ville", address: "Avenue du Centre, 4e parcelle en quittant l’église CBKA du centre vers le bureau de Jenti Kaliki", status: "actif" },
      { name: "Mutiri", address: "Route Kyavuhiri, 4e parcelle en quittant chez Lipumbu, face au lavage, bâtiment Kahangiro", status: "actif" },
      { name: "Vuhira 4 km", address: "Dans le parking de bennes", status: "actif" },
      { name: "Rughenda", address: "Près du marché", status: "actif" },
      { name: "Nduko", address: "Dans la montée allant vers Musimba", status: "actif" },
      { name: "Kyaghala", address: "Dans la montée allant vers le rond-point Kyaghala", status: "actif" },
      { name: "KATARASI", address: "Vutsundo", status: "actif" },
    ],
    services: [],
    mapQuery: "Kalemire, Bulengera, Butembo, Nord-Kivu, RDC",
  },
  {
    slug: "beni",
    city: "Beni",
    province: "Nord-Kivu",
    type: "agence active",
    status: "actif",
    presentation:
      "LWA.GO.KAS dispose de plusieurs sites à Beni, dont le nouveau site de Mangote. Les horaires de retrait sont indiqués ci-dessous.",
    address: null,
    phone: null,
    email: null,
    hours: null,
    withdrawalHours: [
      { days: "weekdays", open: "09:00", close: "15:30" },
      { days: "saturday", open: "10:00", close: "13:00", note: "Suite au salongo de Beni" },
    ],
    sites: [
      { name: "Cité Belge", address: "Route Ndindi, face à l’église Cité de refuge de Jules Mulindwa", status: "actif" },
      { name: "Tamende", address: "Rond-point Germanton", status: "actif" },
      { name: "Campagne", address: "Près du rond-point Katoto", status: "actif" },
      { name: "MANGOTE", address: null, status: "actif" },
    ],
    services: [],
    mapQuery: null,
  },
  {
    slug: "goma",
    city: "Goma",
    province: "Nord-Kivu",
    type: "agence active",
    status: "actif",
    presentation:
      "Le site LWA.GO.KAS de Goma se situe dans la commune de Karisimbi, à Mabanga Nord, Osso 2, N° 153. Il est ouvert tous les jours.",
    address: "Karisimbi, Mabanga Nord, Osso 2, N° 153",
    phone: "+243 978 292 674",
    email: null,
    hours: "08h00–19h00 · 7 jours sur 7",
    withdrawalHours: [],
    sites: [],
    services: [],
    mapQuery: null,
  },
  {
    slug: "lubumbashi",
    city: "Lubumbashi",
    province: "Haut-Katanga",
    type: "représentation",
    status: "en developpement",
    presentation:
      "Le document de l’entreprise situe son siège secondaire à Lubumbashi, dans la commune de Rwashi, au quartier du Congo. Les horaires et les services disponibles restent à confirmer.",
    address: "Commune Rwashi, quartier du Congo",
    phone: null,
    email: null,
    hours: null,
    withdrawalHours: [],
    sites: [],
    services: [],
    mapQuery: null,
  },
];

export const getLocation = (slug?: string) => locations.find((l) => l.slug === slug);
