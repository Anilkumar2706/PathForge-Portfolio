import { GraduationCap, Briefcase } from "lucide-react";

const projects = [
  {
    icon: GraduationCap,
    title: "School Management Portal",
    challenge: "A local educational institution needed an integrated system to manage student records, attendance, grades, and parent communication.",
    solution: "We developed a comprehensive web portal with role-based access, real-time updates, automated reporting, and a mobile-friendly interface. The system reduced administrative workload by 60% and improved parent engagement significantly.",
  },
  {
    icon: Briefcase,
    title: "Auto Job Apply Pro",
    challenge: "Job seekers were spending hours manually applying to multiple positions across different platforms with repetitive form filling.",
    solution: "We created an intelligent automation tool that scans job boards, matches qualifications, and automatically submits applications with customized cover letters. Users reported 5x increase in application volume with minimal manual effort.",
  },
];

const CaseStudies = () => {
  return (
    <section id="projects" className="py-24 bg-card/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Case Studies: Our Projects
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,169,97,0.2)]"
            >
              <div className="mb-6 inline-block p-4 bg-primary/10 rounded-lg">
                <project.icon className="w-10 h-10 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                {project.title}
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-secondary uppercase mb-2">
                    Challenge
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-primary uppercase mb-2">
                    Solution
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
