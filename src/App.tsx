import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import { About, Contact, Gallery, NotFound, SectorDetail, Locations, Partners, Careers, News, Legal, Documents } from "./pages/PortalPages";
import { Layout } from "./components/Layout";
import { LanguageProvider } from "./i18n/LanguageProvider";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LanguageProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/apropos" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/:slug" element={<SectorDetail />} />
          <Route path="/implantations" element={<Locations />} />
          <Route path="/partenariats" element={<Partners />} />
          <Route path="/carrieres" element={<Careers />} />
          <Route path="/actualites" element={<News />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/mentions-legales" element={<Legal />} />
          <Route path="/confidentialite" element={<Legal privacy />} />
          <Route path="/politique-de-confidentialite" element={<Legal privacy />} />
          <Route path="/galerie" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
