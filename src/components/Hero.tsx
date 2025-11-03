import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";
import pathforgeLogo from "@/assets/pathforge-logo.png";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="container relative z-10 text-center px-4">
        <div className="flex justify-center mb-8 animate-fade-in">
          <img 
            src={pathforgeLogo} 
            alt="PathForge Logo" 
            className="h-32 w-auto md:h-40 drop-shadow-[0_0_30px_rgba(201,169,97,0.5)]"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up text-foreground">
          PathForge
        </h1>
        
        <p className="text-xl md:text-3xl mb-4 text-primary font-semibold animate-fade-in-up animation-delay-200">
          Innovate. Automate. Create.
        </p>
        
        <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
          Transforming businesses through cutting-edge software solutions, automation, and custom development.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg px-8 shadow-[0_0_30px_rgba(201,169,97,0.3)] hover:shadow-[0_0_40px_rgba(201,169,97,0.5)] transition-all"
          >
            Get Started
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            className="border-primary/50 text-foreground hover:bg-primary/10 font-semibold text-lg px-8"
          >
            Explore Services
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
