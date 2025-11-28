import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ImageComparison } from "@/components/ImageComparison";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import project1Before from "@/assets/project-1-before.jpg";
import project1After from "@/assets/project-1-after.jpg";
import project2Before from "@/assets/project-2-before.jpg";
import project2After from "@/assets/project-2-after.jpg";
import project3Before from "@/assets/project-3-before.jpg";
import project3After from "@/assets/project-3-after.jpg";
import project4Before from "@/assets/project-4-before.jpg";
import project4After from "@/assets/project-4-after.jpg";
import project5Before from "@/assets/project-5-before.jpg";
import project5After from "@/assets/project-5-after.jpg";
import project6Before from "@/assets/project-6-before.jpg";
import project6After from "@/assets/project-6-after.jpg";

type ServiceType = "all" | "réparation" | "installation" | "maintenance";

interface Project {
  id: number;
  title: string;
  description: string;
  category: ServiceType;
  before: string;
  after: string;
}

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState<ServiceType>("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "Rénovation Salle de Bain",
      description: "Remplacement complet de la tuyauterie et des fixtures",
      category: "réparation",
      before: project1Before,
      after: project1After,
    },
    {
      id: 2,
      title: "Installation Cuisine Moderne",
      description: "Modernisation du système de plomberie sous l'évier",
      category: "installation",
      before: project2Before,
      after: project2After,
    },
    {
      id: 3,
      title: "Chauffe-eau Moderne",
      description: "Installation d'un système de chauffage d'eau efficace",
      category: "maintenance",
      before: project3Before,
      after: project3After,
    },
    {
      id: 4,
      title: "Réparation Fuite Urgente",
      description: "Réparation de fuite majeure et dégâts d'eau réparés",
      category: "réparation",
      before: project4Before,
      after: project4After,
    },
    {
      id: 5,
      title: "Installation Commerciale",
      description: "Installation complète de sanitaires pour bureau",
      category: "installation",
      before: project5Before,
      after: project5After,
    },
    {
      id: 6,
      title: "Entretien Système Complet",
      description: "Maintenance préventive et nettoyage de tuyauterie",
      category: "maintenance",
      before: project6Before,
      after: project6After,
    },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filters: { label: string; value: ServiceType }[] = [
    { label: "Tous les Projets", value: "all" },
    { label: "Réparation", value: "réparation" },
    { label: "Installation", value: "installation" },
    { label: "Maintenance", value: "maintenance" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Galerie de Projets
            </h1>
            <p className="text-muted-foreground text-lg">
              Découvrez nos réalisations et la qualité de notre travail à travers nos transformations avant/après
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background sticky top-0 z-10 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <Button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                variant={activeFilter === filter.value ? "default" : "outline"}
                className={`${
                  activeFilter === filter.value
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-secondary"
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
          <div className="text-center mt-4 text-sm text-muted-foreground">
            {filteredProjects.length} projet{filteredProjects.length > 1 ? "s" : ""} trouvé{filteredProjects.length > 1 ? "s" : ""}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card 
                key={project.id} 
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 animate-fade-in"
              >
                <CardContent className="p-0">
                  <ImageComparison
                    beforeImage={project.before}
                    afterImage={project.after}
                    beforeLabel="Avant"
                    afterLabel="Après"
                  />
                  
                  <div className="p-6">
                    <div className="inline-block mb-2">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary capitalize">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
