import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/QuoteDialog";
import { 
  Wrench, 
  Droplets, 
  Settings, 
  Hammer,
  Zap,
  Thermometer,
  Droplet,
  PipetteIcon as Pipe,
  CheckCircle,
  Clock,
  FileText
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
      pricing: "À partir de 5 000 FC",
      details: [
        "Réparation de fuites d'eau",
        "Débouchage de canalisations",
        "Réparation de robinets et vannes",
        "Réparation de WC et chasse d'eau",
      ],
      image: serviceRepair,
      process: [
        "Diagnostic initial gratuit",
        "Devis détaillé et transparent",
        "Intervention rapide sous 24h",
        "Garantie sur les réparations"
      ]
    },
    {
      icon: Droplets,
      title: "Installation Sanitaire",
      description: "Installation complète d'équipements sanitaires neufs ou de remplacement.",
      pricing: "À partir de 50 000 FC",
      details: [
        "Installation de salles de bain",
        "Installation de cuisines",
        "Installation de chauffe-eau",
        "Installation de systèmes d'évacuation",
      ],
      image: serviceInstallation,
      process: [
        "Consultation et planification",
        "Fourniture des matériaux de qualité",
        "Installation professionnelle",
        "Test complet et mise en service"
      ]
    },
    {
      icon: Settings,
      title: "Maintenance Préventive",
      description: "Entretien régulier pour éviter les pannes et prolonger la durée de vie.",
      pricing: "À partir de 15 000 FC/visite",
      details: [
        "Inspection complète des installations",
        "Détartrage de tuyauterie",
        "Nettoyage de fosses septiques",
        "Vérification des systèmes",
      ],
      image: serviceMaintenance,
      process: [
        "Évaluation de vos installations",
        "Plan de maintenance personnalisé",
        "Interventions régulières planifiées",
        "Rapport détaillé après chaque visite"
      ]
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
                  <p className="text-muted-foreground text-lg mb-4">{service.description}</p>
                  
                  <div className="inline-block bg-accent/10 text-accent font-bold px-4 py-2 rounded-lg mb-6">
                    💰 {service.pricing}
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      Services Inclus
                    </h3>
                    <ul className="space-y-3">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="inline-block w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0" />
                          <span className="text-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      Notre Processus
                    </h3>
                    <div className="space-y-2">
                      {service.process.map((step, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                            {idx + 1}
                          </div>
                          <span className="text-foreground">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <QuoteDialog>
                    <Button className="bg-primary hover:bg-primary-light">
                      Demander un Devis Gratuit
                    </Button>
                  </QuoteDialog>
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

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi Choisir Oredy?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Notre engagement envers l'excellence à chaque étape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Intervention Rapide</h3>
                <p className="text-muted-foreground">
                  Service d'urgence 24/7 avec intervention sous 2 heures pour les urgences
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Garantie Qualité</h3>
                <p className="text-muted-foreground">
                  Tous nos travaux sont garantis avec suivi après-vente personnalisé
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Devis Transparent</h3>
                <p className="text-muted-foreground">
                  Tarification claire et détaillée sans frais cachés ni surprises
                </p>
              </CardContent>
            </Card>
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
          <QuoteDialog>
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Demander un Devis Gratuit
            </Button>
          </QuoteDialog>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
