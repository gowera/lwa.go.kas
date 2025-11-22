import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Eye, Award } from "lucide-react";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import hero1 from "@/assets/hero-1.jpg";

const About = () => {
  const values = [
    {
      icon: CheckCircle,
      title: "Qualité",
      description: "Nous garantissons un travail de haute qualité sur chaque projet",
    },
    {
      icon: Target,
      title: "Fiabilité",
      description: "Des techniciens expérimentés et un service sur lequel vous pouvez compter",
    },
    {
      icon: Eye,
      title: "Transparence",
      description: "Des devis clairs et des prix honnêtes sans surprises",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque intervention",
    },
  ];

  const team = [
    {
      name: "Jean-Paul Mukendi",
      role: "Technicien Senior",
      image: team1,
    },
    {
      name: "David Kabongo",
      role: "Spécialiste Installation",
      image: team2,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-primary-light text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">À Propos d'Oredy Technologies</h1>
            <p className="text-xl text-primary-foreground/90">
              Votre partenaire de confiance pour tous vos besoins en plomberie à Goma
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Notre Histoire</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Oredy Technologies est une entreprise de plomberie de premier plan basée à Goma, 
                  dans la province du Nord-Kivu. Depuis notre création, nous nous sommes engagés à 
                  fournir des services de plomberie exceptionnels à nos clients résidentiels et commerciaux.
                </p>
                <p>
                  Notre équipe de techniciens qualifiés possède une vaste expérience dans tous les aspects 
                  de la plomberie, de l'installation de nouveaux systèmes à la réparation et à la maintenance 
                  d'installations existantes.
                </p>
                <p>
                  Nous croyons en l'importance de bâtir des relations durables avec nos clients en offrant 
                  un service de qualité supérieure, des prix compétitifs et une communication transparente 
                  tout au long du processus.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img 
                src={hero1} 
                alt="Notre équipe au travail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Valeurs</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Les principes qui guident notre travail quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-4">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Équipe</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Des professionnels dévoués à votre service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-80">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary-foreground/90">{member.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/90">Projets Réalisés</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-primary-foreground/90">Satisfaction Client</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10+</div>
              <div className="text-primary-foreground/90">Années d'Expérience</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
