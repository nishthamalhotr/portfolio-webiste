import { Code, Palette, Zap } from "lucide-react";

const skills = [
  { icon: Code, title: "Development", desc: "Building responsive, accessible web apps with modern frameworks." },
  { icon: Palette, title: "Design", desc: "Creating intuitive interfaces with attention to detail." },
  { icon: Zap, title: "Performance", desc: "Optimizing for speed and smooth user experiences." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-section-alt">
      <div className="container mx-auto px-4">
        <p className="text-primary font-semibold text-center mb-2">Get To Know</p>
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-muted-foreground text-lg leading-relaxed">
            I'm a passionate web developer who loves turning ideas into reality through clean code
            and thoughtful design. I enjoy exploring new technologies and continuously improving my craft.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {skills.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-card rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow border"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <Icon className="text-primary" size={26} />
              </div>
              <h3 className="text-lg font-bold mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
