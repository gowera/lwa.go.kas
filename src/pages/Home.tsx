import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ImageComparison } from "@/components/ImageComparison";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Droplets, Settings, CheckCircle, Clock, Shield, Star, Quote } from "lucide-react";
import serviceRepair from "@/assets/service-repair.jpg";
import serviceInstallation from "@/assets/service-installation.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";
import project1Before from "@/assets/project-1-before.jpg";
import project1After from "@/assets/project-1-after.jpg";
import project2Before from "@/assets/project-2-before.jpg";
import project2After from "@/assets/project-2-after.jpg";
import project3Before from "@/assets/project-3-before.jpg";
import project3After from "@/assets/project-3-after.jpg";
const Home = () => {
  const services = [{
    icon: Wrench,
    title: "Réparation",
    description: "Réparation rapide de fuites, robinets et tuyaux avec garantie de qualité.",
    image: serviceRepair
  }, {
    icon: Droplets,
    title: "Installation",
    description: "Installation complète de systèmes sanitaires et équipements modernes.",
    image: serviceInstallation
  }, {
    icon: Settings,
    title: "Maintenance",
    description: "Entretien régulier pour prévenir les problèmes et prolonger la durée de vie.",
    image: serviceMaintenance
  }];
  const features = [{
    icon: CheckCircle,
    title: "Qualité Garantie",
    description: "Travail professionnel avec garantie sur tous nos services"
  }, {
    icon: Clock,
    title: "Service Rapide",
    description: "Intervention rapide et respect des délais"
  }, {
    icon: Shield,
    title: "Équipe Certifiée",
    description: "Techniciens qualifiés et expérimentés"
  }];
  return <div className="min-h-screen">
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
            {services.map((service, index) => <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                    <h3 className="text-2xl font-bold text-primary-foreground">{service.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>)}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-light">
              <Link to="/services">Voir Tous les Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Gallery Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Projets Réalisés</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Découvrez la qualité de notre travail à travers nos transformations avant/après
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Rénovation Salle de Bain",
                before: project1Before,
                after: project1After,
                description: "Remplacement complet de la tuyauterie et des fixtures"
              },
              {
                title: "Installation Cuisine",
                before: project2Before,
                after: project2After,
                description: "Modernisation du système de plomberie sous l'évier"
              },
              {
                title: "Chauffe-eau Moderne",
                before: project3Before,
                after: project3After,
                description: "Installation d'un système de chauffage d'eau efficace"
              }
            ].map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-0">
                  <ImageComparison
                    beforeImage={project.before}
                    afterImage={project.after}
                    beforeLabel="Avant"
                    afterLabel="Après"
                  />
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi Choisir Oredy?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Notre engagement envers l'excellence et la satisfaction client
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-4">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce Que Disent Nos Clients</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              La satisfaction de nos clients est notre plus grande fierté
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
            name: "Jean-Pierre Mukendi",
            role: "Propriétaire",
            comment: "Service exceptionnel! L'équipe d'Oredy a résolu notre problème de fuite en moins d'une heure. Professionnels et efficaces.",
            rating: 5
          }, {
            name: "Marie Kasongo",
            role: "Gérante Restaurant",
            comment: "Installation impeccable de notre système de plomberie. Très satisfaite du travail et du respect des délais.",
            rating: 5
          }, {
            name: "David Ngandu",
            role: "Chef d'Entreprise",
            comment: "Je recommande vivement Oredy Technologies. Équipe qualifiée, prix raisonnables et excellent service après-vente.",
            rating: 5
          }].map((testimonial, index) => <Card key={index} className="relative hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-accent text-accent" />)}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.comment}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100 text-primary-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Besoin d'un Plombier Professionnel?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-secondary-foreground">
            Contactez-nous dès aujourd'hui pour un devis gratuit ou une intervention d'urgence
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link to="/contact">Contactez-Nous</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <a href="tel:+243996886079" className="bg-primary-dark text-primary-foreground">Appeler Maintenant</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Home;