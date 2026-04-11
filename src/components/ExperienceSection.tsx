import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Tech Corp",
    period: "2023 – Present",
    desc: "Building responsive UIs and collaborating on design systems.",
  },
  {
    role: "Web Development Intern",
    company: "StartUp Inc.",
    period: "2022 – 2023",
    desc: "Developed features, fixed bugs, and improved site performance.",
  },
  {
    role: "Freelance Developer",
    company: "Self-Employed",
    period: "2021 – 2022",
    desc: "Designed and built websites for small businesses and creatives.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-section-alt">
      <div className="container mx-auto px-4">
        <p className="text-primary font-semibold text-center mb-2">What I Have Done So Far</p>
        <h2 className="text-4xl font-bold text-center mb-12">Work Experience</h2>
        <div className="max-w-2xl mx-auto space-y-8">
          {experiences.map((exp, i) => (
            <div key={i} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Briefcase className="text-primary-foreground" size={18} />
                </div>
                {i < experiences.length - 1 && <div className="w-0.5 flex-1 bg-border mt-2" />}
              </div>
              <div className="pb-8">
                <h3 className="font-bold text-lg">{exp.role}</h3>
                <p className="text-primary font-medium text-sm">{exp.company}</p>
                <p className="text-muted-foreground text-xs mb-2">{exp.period}</p>
                <p className="text-muted-foreground text-sm">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
