const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const media = {
  logo: publicAsset('embleme.webp'),
  accueil: publicAsset('groupe-accueil.webp'),
  facade: publicAsset('facade.webp'),
  equipe: publicAsset('equipe.webp'),
  groupe: publicAsset('equipe-groupe.webp'),
  vehicules: publicAsset('vehicules.webp'),
  collaborateurs: publicAsset('collaborateurs.webp'),
  rencontre: publicAsset('collaborateurs-groupe.webp'),
  entree: publicAsset('entree.webp'),
  enseigne: publicAsset('enseigne.webp'),
  securite: publicAsset('securite-gardiennage.webp'),
  pharmacieFacade: publicAsset('pharmacie-facade.webp'),
  pharmacie: publicAsset('pharmacie-goma.webp'),
  pharmacieRayons: publicAsset('pharmacie-rayons.webp'),
};
export const sectorMedia = [media.entree, media.securite, media.pharmacieFacade, media.facade];
/** Extra photographs shown on each sector page, by sector order. */
export const sectorGallery: string[][] = [[], [], [media.pharmacie, media.pharmacieRayons, media.vehicules], []];
export const gallery = Object.entries(media).filter(([id]) => id !== 'logo').map(([id, url]) => ({ id, url, alt: `media.${id}` }));
