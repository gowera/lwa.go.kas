import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Droplets, Settings, CheckCircle, Clock, Shield } from "lucide-react";
import serviceRepair from "@/assets/service-repair.jpg";
import serviceInstallation from "@/assets/service-installation.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";

const Home = () => {
  const services = [
    {
      icon: Wrench,
      title: "Réparation",
      description: "Réparation rapide de fuites, robinets et tuyaux avec garantie de qualité.",
      image: serviceRepair,
    },
    {
      icon: Droplets,
      title: "Installation",
      description: "Installation complète de systèmes sanitaires et équipements modernes.",
      image: serviceInstallation,
    },
    {
      icon: Settings,
      title: "Maintenance",
      description: "Entretien régulier pour prévenir les problèmes et prolonger la durée de vie.",
      image: serviceMaintenance,
    },
  ];

  const features = [
    {
      icon: CheckCircle,
      title: "Qualité Garantie",
      description: "Travail professionnel avec garantie sur tous nos services",
    },
    {
      icon: Clock,
      title: "Service Rapide",
      description: "Intervention rapide et respect des délais",
    },
    {
      icon: Shield,
      title: "Équipe Certifiée",
      description: "Techniciens qualifiés et expérimentés",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Carousel */}
      <HeroCarousel />

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Des solutions complètes de plomberie pour tous vos besoins résidentiels et commerciaux
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                    <h3 className="text-2xl font-bold text-primary-foreground">{service.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-light">
              <Link to="/services">Voir Tous les Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi Choisir Oredy?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Notre engagement envers l'excellence et la satisfaction client
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-4">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Besoin d'un Plombier Professionnel?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour un devis gratuit ou une intervention d'urgence
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link to="/contact">Contactez-Nous</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <a href="tel:+243996886079">Appeler Maintenant</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
