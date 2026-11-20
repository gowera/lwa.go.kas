import { publicCopy } from "./publicCopy";
import type { Dict } from "./types";

/**
 * French is the reference dictionary: every key must exist here.
 * Other locales fall back to these values until they are reviewed.
 */
export const fr: Dict = {
  ...publicCopy,
  // Navigation
  "nav.home": "Accueil",
  "nav.about": "À propos",
  "nav.services": "Nos services",
  "nav.locations": "Nos implantations",
  "nav.partners": "Partenariats",
  "nav.careers": "Carrières et formations",
  "nav.news": "Actualités",
  "nav.contact": "Contact",
  "nav.more": "Plus",
  "nav.menu": "Ouvrir le menu",
  "nav.close": "Fermer le menu",
  "nav.language": "Choisir la langue",
  "nav.contactCta": "Nous contacter",

  // Common
  "common.discover": "Découvrir",
  "common.learnMore": "En savoir plus",
  "common.readArticle": "Lire l'article",
  "common.contactUs": "Nous contacter",
  "common.callUs": "Appeler",
  "common.whatsapp": "WhatsApp",
  "common.sendEmail": "Envoyer un e-mail",
  "common.backHome": "Retour à l'accueil",
  "common.viewAll": "Voir tout",
  "common.status": "Statut",
  "common.pending": "Information à compléter",
  "common.pendingShort": "À compléter",
  "common.notPublished": "Cette information n'est pas encore publiée.",
  "common.status.actif": "Actif",
  "common.status.developpement": "En développement",
  "common.status.indisponible": "Non disponible",
  "common.address": "Adresse",
  "common.phone": "Téléphone",
  "common.email": "E-mail",
  "common.hours": "Horaires",
  "common.servicesAvailable": "Services disponibles",
  "common.city": "Ville",
  "common.province": "Province",
  "common.required": "Champ obligatoire",
  "common.consent": "J'autorise LWA.GO.KAS à conserver ces informations pour traiter ma demande.",
  "common.legalNotice": "Les données transmises servent uniquement à répondre à votre demande.",
  "common.translationNotice": "Certains contenus ne sont pas encore traduits : les passages concernés s'affichent en français.",

  // Hero
  "hero.title": "Construisons ensemble un avenir durable.",
  "hero.subtitle":
    "LWA.GO.KAS / SAU développe des solutions de proximité dans les services financiers, la sécurité, la santé et les secteurs productifs, avec une ambition fondée sur le professionnalisme, l'engagement et le développement durable.",
  "hero.ctaServices": "Découvrir nos services",
  "hero.ctaContact": "Nous contacter",
  "hero.scroll": "Découvrir l'entreprise",

  // Home — presentation
  "home.aboutEyebrow": "Qui sommes-nous ?",
  "home.aboutTitle": "Une entreprise multisectorielle au service du développement",
  "home.aboutText":
    "LWA.GO.KAS / SAU est une entreprise multisectorielle qui ambitionne de contribuer au développement économique et social à travers quatre domaines d'intervention : les services financiers de proximité, la sécurité, la santé et le développement économique. Son action s'appuie sur une connaissance directe des territoires et sur une exigence constante de professionnalisme.",
  "home.aboutValues": "Nos valeurs",

  // Home — sectors
  "home.sectorsEyebrow": "Nos domaines d'intervention",
  "home.sectorsTitle": "Quatre secteurs, une même exigence",
  "home.sectorsLead":
    "Chaque secteur dispose de sa propre page détaillée, avec les prestations prévues, leur statut et les modalités de contact.",
  "home.sectorsNote":
    "Les prestations affichées « En développement » ne sont pas encore ouvertes au public : elles sont en cours de préparation ou d'autorisation.",

  // Home — vision and values
  "home.valuesEyebrow": "Notre vision et nos valeurs",
  "home.valuesTitle": "Ce qui guide chacune de nos décisions",
  "home.valuesLead":
    "Huit valeurs structurent la manière dont LWA.GO.KAS conçoit ses activités et entretient ses relations avec ses clients, ses partenaires et ses collaborateurs.",

  "values.professionnalisme.title": "Professionnalisme",
  "values.professionnalisme.text": "Des méthodes claires, des équipes formées et un travail bien fait.",
  "values.engagement.title": "Engagement",
  "values.engagement.text": "Tenir nos promesses et assumer nos responsabilités dans la durée.",
  "values.transparence.title": "Transparence",
  "values.transparence.text": "Des informations claires sur les prestations, les conditions et les limites.",
  "values.confiance.title": "Confiance",
  "values.confiance.text": "La confiance se construit par la régularité et la fiabilité des actes.",
  "values.respect.title": "Respect",
  "values.respect.text": "Écoute, courtoisie et équité envers chaque personne accompagnée.",
  "values.dignite.title": "Dignité",
  "values.dignite.text": "Chaque client, chaque patient et chaque partenaire est traité avec dignité.",
  "values.responsabilite.title": "Responsabilité",
  "values.responsabilite.text": "Des décisions mesurées, dont les effets sont assumés.",
  "values.developpement-durable.title": "Développement durable",
  "values.developpement-durable.text": "Des activités utiles aujourd'hui, sans compromettre demain.",

  // Home — locations
  "home.locationsEyebrow": "Nos implantations",
  "home.locationsTitle": "Nos sites à Butembo, Beni, Goma et Lubumbashi",
  "home.locationsLead":
    "Retrouvez les coordonnées et horaires confirmés de nos implantations. Les services disponibles sont précisés séparément.",

  // Home — partnerships
  "home.partnersTitle": "Construisons ensemble des partenariats durables.",
  "home.partnersLead":
    "Nous étudions les collaborations avec les entreprises, les institutions, les organisations, les associations, les fournisseurs et les investisseurs.",
  "home.partnersCta": "Devenir partenaire",

  // Home — news
  "home.newsEyebrow": "Actualités",
  "home.newsTitle": "Les dernières nouvelles de l'entreprise",
  "home.newsLead": "Annonces, ouvertures de services et temps forts de LWA.GO.KAS.",
  "home.newsEmpty": "Aucune actualité publiée pour le moment.",
  "home.newsEmptyNote":
    "Les actualités sont récupérées depuis l'API REST de lwagokas.com. Aucun contenu n'est inventé.",

  // Home — final CTA
  "home.ctaTitle": "Vous avez un projet ou souhaitez collaborer avec nous ?",
  "home.ctaText":
    "Notre équipe est disponible pour étudier vos besoins et explorer les possibilités de collaboration.",

  // About
  "about.title": "À propos de LWA.GO.KAS",
  "about.lead":
    "Présentation générale, historique, vision, mission, valeurs, objectifs stratégiques, domaines d'intervention et organisation.",
  "about.presentationTitle": "Présentation générale",
  "about.historyTitle": "Historique",
  "about.historyText":
    "L'historique détaillé de l'entreprise n'est pas encore publié. Cette rubrique sera complétée par la direction.",
  "about.visionTitle": "Vision",
  "about.visionText":
    "Devenir un acteur économique et social de référence dans l'est et le sud de la République démocratique du Congo, en apportant des services utiles, accessibles et durables aux populations et aux acteurs locaux.",
  "about.missionTitle": "Mission",
  "about.missionText":
    "Développer des solutions de proximité dans les services financiers, la sécurité, la santé et les secteurs productifs, avec une ambition fondée sur le professionnalisme, l'engagement et le développement durable.",
  "about.objectivesTitle": "Objectifs stratégiques",
  "about.objectivesLead": "Les objectifs stratégiques de l'entreprise sont en cours de formalisation.",
  "about.domainsTitle": "Domaines d'intervention",
  "about.governanceTitle": "Organisation et gouvernance",
  "about.governanceText":
    "Les noms, fonctions et photographies des dirigeants ne sont pas encore publiés. Cette rubrique est prévue pour les accueillir.",
  "about.governanceNote":
    "Aucun dirigeant n'est présenté avant sa confirmation officielle par l'entreprise.",

  // Services
  "services.title": "Nos services",
  "services.lead":
    "Quatre secteurs d'activité, chacun détaillé sur sa propre page : prestations prévues, avantages, conditions d'accès et coordonnées.",
  "services.statusNote":
    "Le statut indiqué pour chaque prestation est administrable : actif, en développement ou non disponible.",
  "services.contactTitle": "Parler à un responsable de secteur",
  "services.contactText": "Écrivez-nous ou appelez-nous pour connaître les prestations réellement disponibles.",

  // Sector detail page
  "sector.presentationTitle": "Présentation du secteur",
  "sector.servicesTitle": "Prestations",
  "sector.benefitsTitle": "Avantages pour les clients",
  "sector.accessTitle": "Conditions d'accès",
  "sector.noticeTitle": "Information importante",
  "sector.contactTitle": "Contacter ce secteur",
  "sector.availableWhere": "Où ce service est-il disponible ?",
  "sector.availableWhereText":
    "La ville où chaque prestation est effectivement disponible est précisée au moment de son ouverture.",

  // Locations page
  "locations.title": "Nos implantations",
  "locations.lead":
    "Les zones d'intervention de LWA.GO.KAS, avec leur statut réel : siège, agence active, représentation ou zone de développement.",
  "locations.note":
    "Aucune adresse, aucun téléphone, aucun horaire et aucun service n'est publié pour une ville avant sa confirmation officielle.",
  "locations.legend": "Légende des statuts",
  "locations.mapTitle": "Carte",
  "locations.mapText": "La carte s'affiche dès que l'adresse du site est confirmée.",
  "locations.type.siège": "Siège social",
  "locations.type.agence active": "Agence active",
  "locations.type.représentation": "Représentation",
  "locations.type.zone de développement": "Zone de développement",

  // Partnerships page
  "partners.title": "Partenariats",
  "partners.lead":
    "Entreprises, institutions, organisations, associations, fournisseurs et investisseurs : découvrez comment collaborer avec LWA.GO.KAS.",
  "partners.whyTitle": "Pourquoi collaborer avec LWA.GO.KAS ?",
  "partners.why.1.title": "Une présence de proximité",
  "partners.why.1.text": "Une connaissance directe des territoires et des acteurs locaux.",
  "partners.why.2.title": "Une logique multisectorielle",
  "partners.why.2.text": "Finance, sécurité, santé et production peuvent être combinées dans un même projet.",
  "partners.why.3.title": "Une approche responsable",
  "partners.why.3.text": "Des engagements clairs, durables et respectueux des réglementations.",
  "partners.domainsTitle": "Domaines de partenariat",
  "partners.domains.1": "Services financiers de proximité",
  "partners.domains.2": "Sécurité et gardiennage",
  "partners.domains.3": "Santé et services médicaux",
  "partners.domains.4": "Agriculture, élevage et transformation",
  "partners.domains.5": "Formation professionnelle",
  "partners.domains.6": "Investissements et projets économiques",
  "partners.stepsTitle": "La démarche de partenariat",
  "partners.steps.1.title": "Premier contact",
  "partners.steps.1.text": "Vous présentez votre organisation et l'objet de la collaboration envisagée.",
  "partners.steps.2.title": "Étude de faisabilité",
  "partners.steps.2.text": "Nous examinons les besoins, les moyens et le cadre réglementaire applicable.",
  "partners.steps.3.title": "Proposition",
  "partners.steps.3.text": "Une proposition de collaboration est rédigée et discutée ensemble.",
  "partners.steps.4.title": "Mise en œuvre",
  "partners.steps.4.text": "Les responsabilités, les échéances et les indicateurs sont fixés et suivis.",
  "partners.formTitle": "Envoyer une demande de partenariat",
  "partners.form.org": "Nom de l'organisation",
  "partners.form.contact": "Nom du responsable",
  "partners.form.email": "Adresse e-mail",
  "partners.form.phone": "Téléphone",
  "partners.form.country": "Pays et ville",
  "partners.form.type": "Type de partenariat souhaité",
  "partners.form.sector": "Secteur concerné",
  "partners.form.project": "Description du projet",
  "partners.form.attachment": "Pièce jointe facultative",
  "partners.form.attachmentText":
    "Les pièces jointes ne peuvent pas être envoyées par ce canal : joignez-les à votre e-mail ou à votre message WhatsApp.",
  "partners.submit": "Envoyer la demande",
  "partners.submitText":
    "Votre demande est préparée puis transmise par e-mail ou par WhatsApp. Elle sera enregistrée dans l'administration du site lwagokas.com dès que celui-ci sera disponible.",
  "partners.submitTitle": "Votre demande est prête à être envoyée",
  "partners.submitText2": "Choisissez le canal qui vous convient : les informations sont déjà saisies.",

  // Careers and trainings
  "careers.title": "Carrières et formations",
  "careers.lead":
    "Offres d'emploi réellement disponibles et formations effectivement organisées par LWA.GO.KAS.",
  "careers.jobsTitle": "Offres d'emploi",
  "careers.jobsEmpty": "Aucune offre d'emploi n'est publiée pour le moment.",
  "careers.jobsEmptyNote":
    "Aucune offre fictive n'est affichée. Les postes ouverts seront publiés ici dès leur validation par l'entreprise.",
  "careers.jobFields": "Chaque offre publiera : intitulé, département, lieu, description, qualifications, expérience, conditions et date limite.",
  "careers.applyTitle": "Candidature spontanée",
  "careers.applyText":
    "Vous pouvez nous adresser une candidature spontanée avec votre lettre de motivation. Le CV en PDF est à joindre à l'e-mail ou au message envoyé.",
  "careers.form.name": "Nom complet",
  "careers.form.phone": "Téléphone",
  "careers.form.email": "E-mail",
  "careers.form.position": "Poste concerné",
  "careers.form.letter": "Lettre de motivation",
  "careers.form.cv": "CV en PDF",
  "careers.submit": "Envoyer la candidature",
  "careers.trainingsTitle": "Formations",
  "careers.trainingsEmpty": "Aucune formation n'est programmée pour le moment.",
  "careers.trainingsEmptyNote":
    "Les formations effectivement organisées seront publiées avec leurs objectifs, leur public cible, leur durée, leur lieu, leurs dates, leurs conditions et leurs frais éventuels.",
  "careers.trainingFields": "Chaque formation publiera : titre, description, objectifs, public cible, durée, lieu, dates, conditions et frais.",

  // News
  "news.title": "Actualités",
  "news.lead": "Annonces, ouvertures de services et temps forts de LWA.GO.KAS.",
  "news.empty": "Aucune actualité n'est publiée pour le moment.",
  "news.emptyNote":
    "Les articles affichés proviennent de l'API REST de lwagokas.com.",
  "news.category": "Catégorie",
  "news.author": "Auteur",
  "news.publishedOn": "Publié le",
  "news.share": "Partager",
  "news.related": "Articles similaires",
  "news.readAlso": "À lire également",
  "news.articleMissing": "Cet article n'est pas encore disponible.",

  // Contact
  "contact.title": "Contact",
  "contact.lead": "Une question, une demande de renseignements ou un projet de collaboration ? Contactez-nous.",
  "contact.infoTitle": "Coordonnées",
  "contact.formTitle": "Formulaire de contact",
  "contact.form.name": "Nom complet",
  "contact.form.email": "Adresse e-mail",
  "contact.form.phone": "Téléphone",
  "contact.form.city": "Ville",
  "contact.form.sector": "Secteur concerné",
  "contact.form.subject": "Objet du message",
  "contact.form.message": "Message",
  "contact.submit": "Envoyer le message",
  "contact.submitText":
    "Votre message est préparé avec les informations saisies, puis transmis par e-mail ou par WhatsApp. Il sera enregistré dans l'administration du site lwagokas.com dès que celui-ci sera disponible.",
  "contact.channelsTitle": "Nous joindre directement",
  "contact.channelsText": "Appelez-nous, écrivez-nous sur WhatsApp ou envoyez-nous un e-mail.",
  "contact.sentTitle": "Votre message est prêt à être envoyé",
  "contact.sentText": "Choisissez le canal qui vous convient : les informations sont déjà saisies.",

  // Legal
  "legal.title": "Mentions légales",
  "legal.updated": "Dernière mise à jour",
  "legal.editorTitle": "Éditeur du site",
  "legal.editorText":
    "Le site est édité par LWA.GO.KAS / SAU. Les informations légales complémentaires (forme juridique exacte, numéro d'enregistrement, responsable de publication) seront publiées dès leur confirmation.",
  "legal.hostingTitle": "Hébergement",
  "legal.hostingText":
    "Le nom de l'hébergeur et ses coordonnées seront publiés dès la mise en production du site.",
  "legal.propertiesTitle": "Propriété intellectuelle",
  "legal.propertiesText":
    "Les marques, logos, textes et photographies présents sur ce site sont la propriété de LWA.GO.KAS ou utilisés avec autorisation. Toute reproduction non autorisée est interdite.",
  "legal.dataTitle": "Données personnelles",
  "legal.dataText":
    "Les informations transmises via les formulaires servent uniquement à traiter la demande correspondante. Aucune donnée personnelle de client n'est affichée sur les pages publiques.",
  "legal.liabilityTitle": "Responsabilité",
  "legal.liabilityText":
    "Les informations publiées sont fournies telles quelles. Les statuts des services et des implantations peuvent évoluer.",
  "legal.contactTitle": "Contact",
  "legal.contactText": "Pour toute question relative à ce site, contactez-nous par e-mail ou par téléphone.",

  "privacy.title": "Politique de confidentialité",
  "privacy.intro":
    "Cette politique explique quelles informations sont collectées, comment elles sont utilisées et quels sont vos droits.",
  "privacy.collectedTitle": "Informations collectées",
  "privacy.collectedText":
    "Les informations que vous nous transmettez volontairement : nom, coordonnées, ville, secteur concerné, objet et contenu de votre message, ainsi que les documents que vous décidez de joindre.",
  "privacy.purposeTitle": "Finalités du traitement",
  "privacy.purposeText":
    "Traiter votre demande, vous répondre, étudier une collaboration ou une candidature, et améliorer nos services.",
  "privacy.durationTitle": "Durée de conservation",
  "privacy.durationText":
    "Les demandes sont conservées le temps nécessaire à leur traitement, puis archivées ou supprimées.",
  "privacy.securityTitle": "Sécurité",
  "privacy.securityText":
    "Le site est servi en HTTPS en production, les formulaires sont protégés contre le spam, les espaces privés sont soumis à des permissions et les fichiers sont gérés de manière sécurisée.",
  "privacy.rightsTitle": "Vos droits",
  "privacy.rightsText":
    "Vous pouvez demander l'accès, la rectification ou la suppression des informations vous concernant en nous contactant par e-mail ou par téléphone.",
  "privacy.sharingTitle": "Partage des informations",
  "privacy.sharingText":
    "Vos informations ne sont pas vendues. Elles ne sont partagées qu'avec les prestataires nécessaires au fonctionnement du site.",
  "privacy.cookiesTitle": "Cookies",
  "privacy.cookiesText":
    "Le site peut utiliser des cookies strictement nécessaires à son fonctionnement. Aucun cookie publicitaire n'est activé sans votre accord.",
  "privacy.updatesTitle": "Évolutions de cette politique",
  "privacy.updatesText":
    "Cette politique peut être mise à jour. Sa date de dernière modification figure en haut de la page.",

  // Documents et téléchargements
  "nav.documents": "Documents",
  "documents.title": "Documents et téléchargements",
  "documents.lead":
    "Les documents publiés par LWA.GO.KAS : présentation de l'entreprise, brochures et supports officiels.",
  "documents.download": "Télécharger",
  "documents.loading": "Chargement des documents…",
  "documents.emptyTitle": "Aucun document publié pour le moment",
  "documents.emptyText":
    "Les articles de la catégorie « Documents, rapports » apparaîtront ici dès leur publication.",
  "documents.note": "Cette page affiche uniquement les articles de la catégorie « Documents, rapports » de lwagokas.com.",
  "documents.cta": "Voir tous les documents",
  "home.documentsEyebrow": "Publications",
  "home.documentsTitle": "Documents et téléchargements",
  "home.documentsLead":
    "La présentation de l'entreprise et les supports officiels seront publiés ici dès leur mise en ligne.",

  // Footer
  "footer.about": "Entreprise multisectorielle basée à Butembo, au service du développement économique et social.",
  "footer.quickLinks": "Liens rapides",
  "footer.sectors": "Nos secteurs",
  "footer.contact": "Coordonnées",
  "footer.follow": "Nous suivre",
  "footer.followNote": "Adresses des réseaux sociaux à compléter.",
  "footer.legal": "Informations légales",
  "footer.mentions": "Mentions légales",
  "footer.privacy": "Politique de confidentialité",
  "footer.rights": "Tous droits réservés.",
  "footer.credit": "Fièrement conçu par Oredy TECHNOLOGIES",

  // 404
  "notfound.title": "Page introuvable",
  "notfound.text": "La page que vous cherchez n'existe pas ou a été déplacée.",
  "notfound.cta": "Retour à l'accueil",

  // WhatsApp floating button
  "float.whatsapp": "Discuter sur WhatsApp",
};

export default fr;
