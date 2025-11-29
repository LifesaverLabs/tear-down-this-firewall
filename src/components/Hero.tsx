import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const scrollToStories = () => {
    document.getElementById('stories')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-gradient-breakthrough opacity-50" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="bg-gradient-fire bg-clip-text text-transparent">
              Tear Down
            </span>
            <br />
            <span className="text-foreground">This Firewall</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            When ideas cannot flow freely, humanity suffers. Every wall of censorship blocks the exchange of lifesaving knowledge between 8+ billion souls.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-gradient-fire hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
              onClick={scrollToStories}
            >
              Read Stories
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6"
              onClick={() => document.getElementById('submit')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Share Your Story
            </Button>
          </div>
          
          <button 
            onClick={scrollToStories}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-primary hover:text-secondary transition-colors animate-bounce cursor-pointer"
            aria-label="Scroll down"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};
