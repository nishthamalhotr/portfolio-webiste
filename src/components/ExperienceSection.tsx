import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "RITES Ltd., India",
    period: "Jul 2024 – Aug 2024",
    desc: "Developed and integrated software modules for automation workflows, improving system efficiency. Collaborated with cross-functional teams to design optimized solutions for infrastructure use cases.",
  },
  {
    role: "AI Intern",
    company: "NBCC (India) Ltd. (Government PSU)",
    period: "Jul 2025 – Aug 2025",
    desc: "Worked on AI-based automation systems for infrastructure monitoring and process optimization. Assisted in building intelligent workflows ensuring reliable and scalable system performance.",
  },
  {
    role: "Full Stack AI Developer (Projects)",
    company: "Self Projects",
    period: "2024 – Present",
    desc: "Built scalable web applications and AI systems including defect detection using TensorFlow & OpenCV, and a multi-user service platform using React, Node.js, and PostgreSQL.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-section-alt">
      <div className="container mx-auto px-4">
        <p className="text-primary font-semibold text-center mb-2">
          What I Have Done So Far
        </p>
        <h2 className="text-4xl font-bold text-center mb-12">
          Work Experience
        </h2>

        <div className="max-w-2xl mx-auto space-y-8">
          {experiences.map((exp, i) => (
            <div key={i} className="flex gap-5">
              
              {/* Timeline Icon */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Briefcase className="text-primary-foreground" size={18} />
                </div>
                {i < experiences.length - 1 && (
                  <div className="w-0.5 flex-1 bg-border mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="pb-8">
                <h3 className="font-bold text-lg">{exp.role}</h3>
                <p className="text-primary font-medium text-sm">
                  {exp.company}
                </p>
                <p className="text-muted-foreground text-xs mb-2">
                  {exp.period}
                </p>
                <p className="text-muted-foreground text-sm">
                  {exp.desc}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;