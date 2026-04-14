import { Code, Palette, Zap } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Full Stack Development",
    desc: "Building scalable web applications using React, Node.js, and modern frameworks.",
  },
  {
    icon: Palette,
    title: "AI & Innovation",
    desc: "Developing intelligent systems using TensorFlow, OpenCV, and AI-driven solutions.",
  },
  {
    icon: Zap,
    title: "Performance & Scalability",
    desc: "Optimizing applications for speed, efficiency, and real-world deployment.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-section-alt">
      <div className="container mx-auto px-4">
        
        {/* Heading */}
        <p className="text-primary font-semibold text-center mb-2">
          Get To Know
        </p>
        <h2 className="text-4xl font-bold text-center mb-12">
          About Me
        </h2>

        {/* Description */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-muted-foreground text-lg leading-relaxed hover:text-foreground transition-colors duration-300">
            I'm a <span className="text-primary font-semibold">Full Stack AI Developer</span> passionate about building 
            scalable web applications and intelligent systems. I enjoy working on real-world problems, 
            especially in <span className="text-primary">AI, e-Governance, and cloud-based solutions</span>, 
            and constantly strive to create impactful digital experiences.
          </p>
        </div>

        {/* Skills Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {skills.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-card rounded-xl p-8 text-center border 
              transition-all duration-300 
              hover:-translate-y-3 hover:shadow-xl hover:border-primary/50 group cursor-pointer"
            >
              
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 
              group-hover:bg-primary/20 transition-colors">
                <Icon className="text-primary group-hover:scale-110 transition-transform" size={26} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                {title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                {desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;