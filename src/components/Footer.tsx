import { Link } from "react-router-dom";
import { Phone, MapPin, Mail } from "lucide-react";
import logo from "@/assets/logo.png";
export const Footer = () => {
  return <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <img src={logo} alt="Oredy Technologies" className="h-16 w-auto mb-4 brightness-0 invert rounded-md shadow-md object-contain opacity-100" />
            <p className="text-primary-foreground/80 text-sm">
              Votre partenaire fiable en plomberie à Goma. Services professionnels et équipe qualifiée à votre service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <a href="tel:+243996886079" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                  +243 996 886 079
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  RDC, Nord-Kivu, Goma
                </span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <a href="mailto:contact@oredy.com" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                  contact@oredy.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            &copy; {new Date().getFullYear()} Oredy Technologies. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>;
};