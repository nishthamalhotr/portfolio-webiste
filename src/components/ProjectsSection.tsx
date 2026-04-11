import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "A full-stack shopping experience with cart, authentication, and payments.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Manager",
    desc: "A productivity app with drag-and-drop boards and real-time collaboration.",
    tags: ["TypeScript", "Next.js", "Prisma"],
  },
  {
    title: "Weather Dashboard",
    desc: "Live weather data visualization with location-based forecasts.",
    tags: ["React", "API", "Chart.js"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <p className="text-primary font-semibold text-center mb-2">My Recent Work</p>
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-card rounded-xl border overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="h-44 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary/30 group-hover:text-primary/50 transition-colors">
                  {p.title.charAt(0)}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button className="text-muted-foreground hover:text-primary transition-colors">
                    <Github size={18} />
                  </button>
                  <button className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
