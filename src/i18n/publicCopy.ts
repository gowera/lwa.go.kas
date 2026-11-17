import { sectors } from '@/data/sectors';
import { locations } from '@/data/locations';
export const publicCopy: Record<string,string> = {
 'media.accueil':'Photo de groupe devant l’enseigne LWANZO GODSE KASEREKA',
 'common.skipContent':'Aller au contenu', 'common.breadcrumb':"Fil d’Ariane", 'brand.shortSlogan':'Professionnalisme, engagement',
 'media.logo':'Emblème LWA.GO.KAS', 'media.facade':'Façade portant l’enseigne LWA.GO.KAS', 'media.equipe':'LWA.GO.KAS, une équipe de proximité', 'media.groupe':'Photo de groupe devant les locaux LWA.GO.KAS', 'media.vehicules':'Véhicules portant les marques LWA.GO.KAS', 'media.collaborateurs':'Collaborateurs aux couleurs de LWA.GO.KAS', 'media.rencontre':'Photo de groupe des collaborateurs', 'media.entree':'Entrée de locaux portant la marque LWA.GO.KAS', 'media.enseigne':'Enseigne et entrée LWA.GO.KAS',
 'media.securite':'Agents de LWA.GO.KAS SECURITY au garde-à-vous', 'media.pharmacieFacade':'Officine pharmaceutique et laboratoire New Hope in Life à Goma', 'media.pharmacie':'Entrée de la pharmacie New Hope in Life', 'media.pharmacieRayons':'Rayons de médicaments de la pharmacie', 'sector.availableIn':'Disponible à',
 'media.sector.0':'Locaux portant l’enseigne LWA.GO.KAS', 'media.sector.1':'Agents de gardiennage LWA.GO.KAS SECURITY', 'media.sector.2':'Officine pharmaceutique et laboratoire à Goma', 'media.sector.3':'Façade LWA.GO.KAS',
 'gallery.title':'LWA.GO.KAS en images', 'gallery.lead':'Les photographies partagées par l’entreprise : collaborateurs, locaux et véhicules.',
 'locations.sitesTitle':'Sites et guichets', 'locations.withdrawalHours':'Horaires de retrait', 'locations.days.weekdays':'Du lundi au vendredi', 'locations.days.saturday':'Samedi', 'media.butembo':'Siège LWA.GO.KAS à Butembo',
 'contact.directNote':'Aucune demande n’est enregistrée sur ce site. Choisissez l’e-mail ou WhatsApp pour transmettre votre message.',
 'privacy.directText':'Les formulaires préparent un message dans votre navigateur. Aucune demande ni pièce jointe n’est stockée sur ce site. Vous choisissez de transmettre les informations par e-mail ou WhatsApp ; les règles du service choisi s’appliquent.',
 'privacy.securityCurrent':'Aucun espace privé ni service de dépôt de fichiers n’est activé dans cette version. Ne transmettez pas de données médicales, financières ou sensibles par les formulaires.',
 ...Object.fromEntries(sectors.flatMap(s => [ ['name',s.name],['summary',s.summary],['tagline',s.tagline],['presentation',s.presentation],['access',s.access],['notice',s.notice ?? ''], ...s.benefits.map((b,i)=>[`benefit.${i}`,b]), ...s.services.flatMap((v,i)=>[[`service.${i}.cities`,(v.cities??[]).join(', ')],[`service.${i}.name`,v.name],[`service.${i}.description`,v.description]]) ].map(([k,v])=>[`sector.${s.slug}.${k}`,v]))),
 ...Object.fromEntries(locations.flatMap(l => [
  [`location.${l.slug}.presentation`, l.presentation],
  [`location.${l.slug}.hours`, l.hours ?? ''],
  ...l.sites.flatMap((site, i) => [[`location.${l.slug}.site.${i}.name`, site.name], [`location.${l.slug}.site.${i}.address`, site.address ?? '']]),
  ...l.withdrawalHours.map((h, i) => [`location.${l.slug}.withdrawal.${i}.note`, h.note ?? '']),
 ])),
};
