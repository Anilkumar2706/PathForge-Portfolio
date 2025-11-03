const About = () => {
  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Who We Are
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-12" />
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            PathForge is a forward-thinking software company dedicated to delivering 
            <span className="text-primary font-semibold"> affordable, client-focused solutions</span> that 
            drive digital transformation. We specialize in automation, custom web development, and mobile 
            applications that empower businesses to innovate and scale.
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Our mission is simple: to forge new paths for our clients through cutting-edge technology, 
            exceptional user experience, and unwavering commitment to their success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
