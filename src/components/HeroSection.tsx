import { TypeAnimation } from "react-type-animation";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
      <div className="relative z-10 container mx-auto text-center px-4">
        <p className="text-muted-foreground text-lg mb-4 animate-fade-in-up">Hello, I'm</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">
          <span className="text-gradient">Nishtha</span>
        </h1>
        <div className="text-2xl md:text-4xl font-semibold text-foreground/80 mb-8 animate-fade-in-up-delay">
          <TypeAnimation
            sequence={["Web Developer", 2000, "UI/UX Enthusiast", 2000, "Problem Solver", 2000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
        <p className="max-w-xl mx-auto text-muted-foreground text-lg mb-10 animate-fade-in-up-delay">
          Passionate about crafting beautiful, performant web experiences.
        </p>
        <button
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
        >
          Explore <ArrowDown size={18} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
