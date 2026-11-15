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
};
export const sectorMedia = [media.entree, media.collaborateurs, media.vehicules, media.facade];
export const gallery = Object.entries(media).filter(([id]) => id !== 'logo').map(([id, url]) => ({ id, url, alt: `media.${id}` }));
