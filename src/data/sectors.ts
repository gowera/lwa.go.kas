/**
 * Company data. Statuses are conservative on purpose: nothing is published as
 * `actif` unless the company confirms it is genuinely available and authorized.
 * Flip `status` to "actif" once an authorization or an opening is confirmed.
 */

export type Status = "actif" | "en developpement" | "non disponible";

export type Service = {
  name: string;
  status: Status;
  description: string;
  /** Cities where the company confirmed the service is available. */
  cities?: string[];
};

export type Sector = {
  slug: string;
  order: number;
  name: string;
  tagline: string;
  summary: string;
  presentation: string;
  icon: string;
  image: string;
  benefits: string[];
  access: string;
  services: Service[];
  /** Legal caution shown on the sector page. */
  notice?: string;
};

export const sectors: Sector[] = [
  {
    slug: "microfinance-services-financiers",
    order: 1,
    name: "Microfinance et services financiers",
    tagline: "Des solutions financières de proximité",
    summary:
      "Épargne, crédit de proximité et accompagnement des petites activités, pensés pour les ménages et les entrepreneurs locaux.",
    presentation:
      "LWA.GO.KAS conçoit des solutions financières de proximité destinées aux ménages, aux commerçants et aux petites entreprises. L'ambition est de rendre l'accès aux services financiers plus simple, plus proche et plus transparent, en s'appuyant sur une connaissance directe des territoires où l'entreprise intervient.",
    icon: "Landmark",
    image: "sector-finance",
    benefits: [
      "Une relation de proximité avec les populations et les petites activités",
      "Des procédures simples et expliquées avant tout engagement",
      "Un accompagnement adapté aux réalités économiques locales",
    ],
    access:
      "Les conditions, les frais et les limites éventuelles sont définis et publiés pour chaque produit avant son ouverture au public.",
    notice:
      "LWA.GO.KAS n'est pas présentée comme une institution financière agréée tant que les autorisations nécessaires ne sont pas confirmées. Aucun rendement et aucune garantie financière ne sont promis.",
    services: [
      {
        name: "Épargne de proximité",
        status: "en developpement",
        description: "Collecte et gestion de l'épargne auprès des ménages et des groupes de proximité.",
      },
      {
        name: "Crédit aux petites activités",
        status: "en developpement",
        description: "Financement des commerces, des ateliers et des activités génératrices de revenus.",
      },
      {
        name: "Services financiers numériques",
        status: "en developpement",
        description: "Opérations et transferts simples accessibles par les outils numériques.",
      },
      {
        name: "Éducation et conseil financier",
        status: "en developpement",
        description: "Sensibilisation, formation et accompagnement des porteurs de projets.",
      },
    ],
  },
  {
    slug: "gardiennage-securite",
    order: 2,
    name: "Gardiennage et sécurité",
    tagline: "Protéger les personnes, les biens et les installations",
    summary:
      "Gardiennage, contrôle d'accès, surveillance et évaluation des risques pour les entreprises, les institutions et les résidences.",
    presentation:
      "Le secteur sécurité de LWA.GO.KAS couvre la protection des personnes, des biens et des installations. L'entreprise prévoit des prestations de gardiennage, de contrôle d'accès et de surveillance, complétées par une évaluation des risques et un suivi documentaire des incidents, afin d'offrir aux clients une vision claire et régulière de leur sécurité.",
    icon: "ShieldCheck",
    image: "sector-securite",
    benefits: [
      "Une présence humaine dissuasive et professionnelle",
      "Un contrôle des entrées et des sorties structuré",
      "Des comptes rendus d'incidents réguliers et documentés",
    ],
    access:
      "Chaque prestation fait l'objet d'une évaluation préalable du site et d'une proposition définissant le dispositif, les horaires et les responsabilités de chaque partie.",
    services: [
      {
        name: "Gardiennage — LWA.GO.KAS SECURITY",
        status: "actif",
        cities: ["Butembo"],
        description: "Postes de garde fixes et mobiles pour les sites, les entreprises et les résidences.",
      },
      {
        name: "Protection des biens",
        status: "en developpement",
        description: "Sécurisation des locaux, des matériels et des stocks.",
      },
      {
        name: "Contrôle d'accès",
        status: "en developpement",
        description: "Filtrage des personnes et des véhicules aux points d'entrée.",
      },
      {
        name: "Surveillance",
        status: "en developpement",
        description: "Rondes, veille et supervision des zones sensibles.",
      },
      {
        name: "Évaluation des risques",
        status: "en developpement",
        description: "Analyse des vulnérabilités d'un site et recommandations.",
      },
      {
        name: "Rapports d'incidents",
        status: "en developpement",
        description: "Comptes rendus écrits et traçabilité des événements.",
      },
    ],
  },
  {
    slug: "sante-services-medicaux",
    order: 3,
    name: "Santé et services médicaux",
    tagline: "Des structures de santé accessibles et dignes",
    summary:
      "Hôpital, pharmacie, laboratoire, ambulance et transport funéraire : un ensemble de structures prévues pour rapprocher les soins des populations.",
    presentation:
      "Le secteur santé de LWA.GO.KAS vise à rapprocher les soins des populations à travers un ensemble de structures : un hôpital, une pharmacie, un laboratoire, un service d'ambulance et un service de transport funéraire. L'objectif est de proposer une réponse sanitaire complète, digne et accessible, dans le respect des réglementations en vigueur.",
    icon: "HeartPulse",
    image: "sector-sante",
    benefits: [
      "Un parcours de soin regroupé en un même point de contact",
      "Une attention portée à la dignité des patients et des familles",
      "Des structures pensées pour les réalités locales",
    ],
    access:
      "Chaque structure n'est ouverte au public qu'une fois ses autorisations obtenues et ses équipes constituées.",
    notice:
      "Aucun établissement de santé, aucun praticien, aucun tarif et aucun horaire n'est publié avant confirmation officielle des autorisations et des qualifications.",
    services: [
      {
        name: "Hôpital LWA.GO.KAS",
        status: "en developpement",
        description: "Structure d'accueil, de consultation et d'hospitalisation.",
      },
      {
        name: "Pharmacie New Hope in Life",
        status: "actif",
        cities: ["Goma"],
        description: "Officine pharmaceutique de proximité.",
      },
      {
        name: "Laboratoire d'analyses biomédicales",
        status: "actif",
        cities: ["Goma"],
        description: "Analyses biomédicales et examens de diagnostic.",
      },
      {
        name: "Service d'ambulance",
        status: "actif",
        cities: ["Butembo"],
        description: "Évacuation sanitaire des patients.",
      },
      {
        name: "Transport médical",
        status: "actif",
        cities: ["Butembo"],
        description: "Transport des patients vers les structures de soins.",
      },
      {
        name: "Transport funéraire",
        status: "en developpement",
        description: "Accompagnement logistique et funéraire des familles.",
      },
      {
        name: "Bons de soins",
        status: "en developpement",
        description: "Bons permettant de prendre en charge des soins auprès des structures LWA.GO.KAS.",
      },
    ],
  },
  {
    slug: "developpement-economique-investissements",
    order: 4,
    name: "Développement économique et investissements",
    tagline: "Produire, transformer et former localement",
    summary:
      "Agriculture, élevage, industrie et transformation, formation professionnelle et projets d'investissement au service des territoires.",
    presentation:
      "Le secteur développement économique regroupe les activités productives de LWA.GO.KAS : agriculture, élevage, industrie et transformation, formation professionnelle et projets d'investissement. La logique est de créer de la valeur et des emplois sur place, en transformant localement les matières premières et en formant les jeunes et les acteurs économiques aux métiers dont les territoires ont besoin.",
    icon: "Sprout",
    image: "sector-economie",
    benefits: [
      "Des activités qui transforment la matière première sur place",
      "Des emplois et des compétences créés dans les territoires",
      "Des projets ouverts aux partenaires et aux investisseurs",
    ],
    access:
      "Les projets sont présentés avec leurs objectifs, leur stade d'avancement et les formes de collaboration recherchées.",
    services: [
      {
        name: "Agriculture",
        status: "en developpement",
        description: "Production végétale et structuration des filières locales.",
      },
      {
        name: "Élevage",
        status: "en developpement",
        description: "Élevage et filières animales.",
      },
      {
        name: "Industrie et transformation",
        status: "en developpement",
        description: "Transformation des produits agricoles et locaux.",
      },
      {
        name: "Formation professionnelle et emploi",
        status: "actif",
        description: "Formation aux métiers porteurs et accompagnement vers l'emploi.",
      },
      {
        name: "Salon de coiffure",
        status: "actif",
        description: "Services de coiffure.",
      },
      {
        name: "Secrétariat public",
        status: "actif",
        description: "Saisie, impression et travaux de secrétariat pour le public.",
      },
      {
        name: "Investissements et projets",
        status: "en developpement",
        description: "Portefeuille de projets ouverts aux partenaires.",
      },
    ],
  },
];

export const getSector = (slug?: string) => sectors.find((s) => s.slug === slug);
