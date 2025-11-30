import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/QuoteDialog";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
const slides = [{
  image: hero1,
  title: "Expertise en Plomberie",
  subtitle: "Des techniciens qualifiés pour tous vos besoins"
}, {
  image: hero2,
  title: "Service Rapide et Fiable",
  subtitle: "Intervention d'urgence disponible 24/7"
}, {
  image: hero3,
  title: "Installation Professionnelle",
  subtitle: "Équipement moderne et travail de qualité"
}];
export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };
  return <div className="relative h-[600px] md:h-[700px] overflow-hidden">
      {slides.map((slide, index) => <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}>
          <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${slide.image})`
      }}>
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="relative h-full container mx-auto px-4 flex-row bg-white/0 flex items-center justify-start">
            <div className="max-w-2xl text-white ml-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{textShadow: '2px 4px 8px rgba(0,0,0,0.8)'}}>
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150" style={{textShadow: '2px 4px 6px rgba(0,0,0,0.7)'}}>
                {slide.subtitle}
              </p>
              <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                <QuoteDialog>
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    Demander un Devis
                  </Button>
                </QuoteDialog>
                <Button asChild size="lg" variant="outline" className="border-white text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm">
                  <Link to="/services">Nos Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>)}

      {/* Navigation Arrows */}
      
      

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => <button key={index} onClick={() => goToSlide(index)} className={`h-2 rounded-full transition-all ${index === currentSlide ? "w-8 bg-primary-foreground" : "w-2 bg-primary-foreground/50"}`} aria-label={`Go to slide ${index + 1}`} />)}
      </div>
    </div>;
};