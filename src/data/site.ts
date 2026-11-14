// Icons are Google Material Symbols ligature names (see `.material-icon` in index.css).

export const navItems = [
  { to: "/", key: "nav.home" },
  { to: "/a-propos", key: "nav.about" },
  { to: "/services", key: "nav.services" },
  { to: "/implantations", key: "nav.locations" },
  { to: "/partenariats", key: "nav.partners" },
  { to: "/carrieres", key: "nav.careers" },
  { to: "/actualites", key: "nav.news" },
];

export const values = [
  { id: "professionnalisme", icon: "workspace_premium" },
  { id: "engagement", icon: "handshake" },
  { id: "transparence", icon: "visibility" },
  { id: "confiance", icon: "verified_user" },
  { id: "respect", icon: "groups" },
  { id: "dignite", icon: "favorite" },
  { id: "responsabilite", icon: "balance" },
  { id: "developpement-durable", icon: "eco" },
] as const;

export const socialIcons: Record<string, string> = {
  facebook: "thumb_up",
  instagram: "photo_camera",
  tiktok: "music_note",
  youtube: "play_circle",
  x: "alternate_email",
  whatsapp: "chat",
};
