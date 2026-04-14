import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Bharat Edge AI",
    subtitle: "AI-Based Defect Detection System",
    desc: "Engineered an AI-powered defect detection system leveraging TensorFlow and OpenCV for infrastructure monitoring. Designed scalable Flask APIs and deployed on Azure for real-time analytics.",
    tags: ["Next.js", "MongoDB", "Azure", "TensorFlow", "OpenCV", "Flask"],
    github: "https://github.com/nishthamalhotr/Bharat-AI-Edge",
    live: "#",
  },
  {
    title: "RO Service Platform",
    subtitle: "Full Stack Service Management System",
    desc: "Built a scalable multi-user platform for real-time service booking and operations. Implemented REST APIs for order tracking and multi-city workflows using PostgreSQL.",
    tags: ["React", "Node.js", "PostgreSQL", "Vite"],
    github: "https://github.com/nishthamalhotr/ro",
    live: "https://ro-one-rust.vercel.app/",
  },
  {
    title: "VidyantaAI",
    subtitle: "AI Documentation Assistant",
    desc: "Developed an AI-driven internal documentation Q&A system using Google Gemini API, enabling efficient knowledge retrieval and intelligent query handling.",
    tags: ["JavaScript", "HTML", "CSS", "Gemini API"],
    github: "https://github.com/nishthamalhotr/VidyantaAI",
    live: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-section-alt">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-primary font-semibold mb-2">Portfolio</p>
          <h2 className="text-4xl font-bold">Selected Projects</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of my work focused on building scalable systems, AI-driven solutions,
            and real-world applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative bg-card border rounded-2xl overflow-hidden 
              transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* Top Banner */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
                  
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 backdrop-blur-md p-3 rounded-full hover:scale-110 transition"
                  >
                    <Github className="text-white" size={20} />
                  </a>

                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 backdrop-blur-md p-3 rounded-full hover:scale-110 transition"
                  >
                    <ExternalLink className="text-white" size={20} />
                  </a>
                </div>

                {/* Initial Letter */}
                <span className="text-5xl font-bold text-primary/30 group-hover:scale-110 transition-transform">
                  {p.title.charAt(0)}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-sm text-primary mb-2">{p.subtitle}</p>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {p.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium"
                    >
                      {t}
                    </span>
                  ))}
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