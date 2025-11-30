import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface QuoteDialogProps {
  children: React.ReactNode;
}

export const QuoteDialog = ({ children }: QuoteDialogProps) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    description: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.service || !formData.description) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Quote request:", formData);
    
    toast({
      title: "Demande envoyée!",
      description: "Nous vous contactons dans les plus brefs délais.",
    });
    
    // Reset form and close dialog
    setFormData({ name: "", phone: "", service: "", description: "" });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Demander un Devis Gratuit</DialogTitle>
          <DialogDescription>
            Remplissez ce formulaire et nous vous contacterons rapidement pour discuter de votre projet.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nom complet *</Label>
            <Input
              id="name"
              placeholder="Votre nom"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Téléphone *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+243 XXX XXX XXX"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="service">Type de service *</Label>
            <Select
              value={formData.service}
              onValueChange={(value) => setFormData({ ...formData, service: value })}
              required
            >
              <SelectTrigger id="service">
                <SelectValue placeholder="Sélectionnez un service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="reparation">Réparation</SelectItem>
                <SelectItem value="installation">Installation</SelectItem>
                <SelectItem value="maintenance">Maintenance</SelectItem>
                <SelectItem value="urgence">Urgence</SelectItem>
                <SelectItem value="autre">Autre</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description du problème *</Label>
            <Textarea
              id="description"
              placeholder="Décrivez votre besoin en détail..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              required
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="flex-1"
            >
              Annuler
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-accent hover:bg-accent/90"
            >
              Envoyer la demande
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};