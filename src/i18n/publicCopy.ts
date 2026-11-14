import { sectors } from '@/data/sectors';
import { locations } from '@/data/locations';
export const publicCopy: Record<string,string> = {
 'media.accueil':'Photo de groupe devant l’enseigne LWANZO GODSE KASEREKA',
 'common.skipContent':'Aller au contenu', 'common.breadcrumb':"Fil d’Ariane", 'brand.shortSlogan':'Professionnalisme, engagement',
 'media.logo':'Emblème LWA.GO.KAS', 'media.facade':'Façade portant l’enseigne LWA.GO.KAS', 'media.equipe':'LWA.GO.KAS, une équipe de proximité', 'media.groupe':'Photo de groupe devant les locaux LWA.GO.KAS', 'media.vehicules':'Véhicules portant les marques LWA.GO.KAS', 'media.collaborateurs':'Collaborateurs aux couleurs de LWA.GO.KAS', 'media.rencontre':'Photo de groupe des collaborateurs', 'media.entree':'Entrée de locaux portant la marque LWA.GO.KAS', 'media.enseigne':'Enseigne et entrée LWA.GO.KAS',
 'media.sector.0':'Locaux portant l’enseigne LWA.GO.KAS', 'media.sector.1':'Collaborateurs LWA.GO.KAS', 'media.sector.2':'Véhicules de transport LWA.GO.KAS', 'media.sector.3':'Façade LWA.GO.KAS',
 'gallery.title':'LWA.GO.KAS en images', 'gallery.lead':'Les photographies partagées par l’entreprise : collaborateurs, locaux et véhicules.',
 'contact.directNote':'Aucune demande n’est enregistrée sur ce site. Choisissez l’e-mail ou WhatsApp pour transmettre votre message.',
 'privacy.directText':'Les formulaires préparent un message dans votre navigateur. Aucune demande ni pièce jointe n’est stockée sur ce site. Vous choisissez de transmettre les informations par e-mail ou WhatsApp ; les règles du service choisi s’appliquent.',
 'privacy.securityCurrent':'Aucun espace privé ni service de dépôt de fichiers n’est activé dans cette version. Ne transmettez pas de données médicales, financières ou sensibles par les formulaires.',
 ...Object.fromEntries(sectors.flatMap(s => [ ['name',s.name],['summary',s.summary],['tagline',s.tagline],['presentation',s.presentation],['access',s.access],['notice',s.notice ?? ''], ...s.benefits.map((b,i)=>[`benefit.${i}`,b]), ...s.services.flatMap((v,i)=>[[`service.${i}.name`,v.name],[`service.${i}.description`,v.description]]) ].map(([k,v])=>[`sector.${s.slug}.${k}`,v]))),
 ...Object.fromEntries(locations.map(l=>[`location.${l.slug}.presentation`,l.presentation])),
};
