import {
  Award,
  Eye,
  Facebook,
  HandHeart,
  Heart,
  Instagram,
  Music2,
  Scale,
  Leaf,
  ShieldCheck,
  Twitter,
  Users,
  Youtube,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";

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
  { id: "professionnalisme", icon: Award },
  { id: "engagement", icon: HandHeart },
  { id: "transparence", icon: Eye },
  { id: "confiance", icon: ShieldCheck },
  { id: "respect", icon: Users },
  { id: "dignite", icon: Heart },
  { id: "responsabilite", icon: Scale },
  { id: "developpement-durable", icon: Leaf },
] as const;

export const socialIcons: Record<string, LucideIcon> = {
  facebook: Facebook,
  instagram: Instagram,
  tiktok: Music2,
  youtube: Youtube,
  x: Twitter,
  whatsapp: MessageCircle,
};
