import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Wrench, 
  Droplets, 
  Settings, 
  Hammer,
  Zap,
  Thermometer,
  Droplet,
  PipetteIcon as Pipe
} from "lucide-react";
import serviceRepair from "@/assets/service-repair.jpg";
import serviceInstallation from "@/assets/service-installation.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";

const Services = () => {
  const mainServices = [
    {
      icon: Wrench,
      title: "Réparation de Plomberie",
      description: "Réparation professionnelle de tous types de problèmes de plomberie.",
      details: [
        "Réparation de fuites d'eau",
        "Débouchage de canalisations",
        "Réparation de robinets et vannes",
        "Réparation de WC et chasse d'eau",
      ],
      image: serviceRepair,
    },
    {
      icon: Droplets,
      title: "Installation Sanitaire",
      description: "Installation complète d'équipements sanitaires neufs ou de remplacement.",
      details: [
        "Installation de salles de bain",
        "Installation de cuisines",
        "Installation de chauffe-eau",
        "Installation de systèmes d'évacuation",
      ],
      image: serviceInstallation,
    },
    {
      icon: Settings,
      title: "Maintenance Préventive",
      description: "Entretien régulier pour éviter les pannes et prolonger la durée de vie.",
      details: [
        "Inspection complète des installations",
        "Détartrage de tuyauterie",
        "Nettoyage de fosses septiques",
        "Vérification des systèmes",
      ],
      image: serviceMaintenance,
    },
  ];

  const additionalServices = [
    {
      icon: Thermometer,
      title: "Chauffage",
      description: "Installation et réparation de systèmes de chauffage",
    },
    {
      icon: Droplet,
      title: "Traitement d'Eau",
      description: "Installation de systèmes de filtration et purification",
    },
    {
      icon: Zap,
      title: "Urgences 24/7",
      description: "Service d'urgence disponible jour et nuit",
    },
    {
      icon: Hammer,
      title: "Rénovation",
      description: "Rénovation complète de salles de bain et cuisines",
    },
    {
      icon: Pipe,
      title: "Tuyauterie",
      description: "Installation et remplacement de tuyauterie",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-primary-light text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Services de Plomberie</h1>
            <p className="text-xl text-primary-foreground/90">
              Une gamme complète de services pour répondre à tous vos besoins en plomberie
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold">{service.title}</h2>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0" />
                        <span className="text-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-primary hover:bg-primary-light">
                    Demander un Devis
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Autres Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Découvrez notre gamme étendue de services spécialisés
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-primary/10 w-fit mb-2">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à Commencer Votre Projet?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins et obtenir un devis gratuit
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            Contactez-Nous Maintenant
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
