import { Rocket, DollarSign, Palette, Headphones } from "lucide-react";

const benefits = [
  {
    icon: Rocket,
    title: "Rapid Deployment",
    description: "We deliver projects quickly without compromising quality, getting your solution to market faster.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden costs. Clear, upfront pricing that fits your budget and delivers exceptional value.",
  },
  {
    icon: Palette,
    title: "Focus on UX/UI",
    description: "Beautiful, intuitive interfaces that users love and that drive engagement and conversions.",
  },
  {
    icon: Headphones,
    title: "Post-Launch Support",
    description: "We don't disappear after launch. Ongoing support and maintenance to ensure your success.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Why Choose PathForge
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 group"
            >
              <div className="mb-6 inline-block p-5 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                <benefit.icon className="w-10 h-10 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
