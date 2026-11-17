export const media = {
  logo: '/embleme.webp',
  accueil: '/groupe-accueil.webp',
  facade: '/facade.webp',
  equipe: '/equipe.webp',
  groupe: '/equipe-groupe.webp',
  vehicules: '/vehicules.webp',
  collaborateurs: '/collaborateurs.webp',
  rencontre: '/collaborateurs-groupe.webp',
  entree: '/entree.webp',
  enseigne: '/enseigne.webp',
  securite: '/securite-gardiennage.webp',
  pharmacieFacade: '/pharmacie-facade.webp',
  pharmacie: '/pharmacie-goma.webp',
  pharmacieRayons: '/pharmacie-rayons.webp',
};
export const sectorMedia = [media.entree, media.securite, media.pharmacieFacade, media.facade];
/** Extra photographs shown on each sector page, by sector order. */
export const sectorGallery: string[][] = [[], [], [media.pharmacie, media.pharmacieRayons, media.vehicules], []];
export const gallery = Object.entries(media).filter(([id]) => id !== 'logo').map(([id, url]) => ({ id, url, alt: `media.${id}` }));
