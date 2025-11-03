import { Globe, Zap, Smartphone, Code } from "lucide-react";
import servicesBackground from "@/assets/services-bg.jpg";

const services = [
  {
    icon: Globe,
    title: "Personal Portfolios & Websites",
    description: "Custom-designed, responsive websites that showcase your brand and convert visitors into customers.",
  },
  {
    icon: Zap,
    title: "Automation Projects",
    description: "Streamline your workflows and boost productivity with intelligent automation solutions tailored to your business.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native Android and iOS applications built with modern frameworks for seamless user experiences.",
  },
  {
    icon: Code,
    title: "IT Project Services",
    description: "End-to-end support for any IT project - from conception to deployment and beyond.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${servicesBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/98 to-background" />
      
      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Our Core Services
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,169,97,0.2)]"
            >
              <div className="mb-6 inline-block p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-foreground">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
