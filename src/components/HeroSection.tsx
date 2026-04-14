import { TypeAnimation } from "react-type-animation";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={heroBg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover opacity-30 scale-105 animate-[slowZoom_20s_linear_infinite]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center px-4">
        
        {/* Greeting */}
        <p className="text-muted-foreground text-lg mb-4 opacity-0 animate-fade-in-up">
          Hello, I'm
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 opacity-0 animate-fade-in-up delay-200">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Nishtha Malhotra
          </span>
        </h1>

        {/* Typing Animation */}
        <div className="text-2xl md:text-4xl font-semibold text-foreground/80 mb-8 opacity-0 animate-fade-in-up delay-300">
          <TypeAnimation
            sequence={[
              "Full Stack AI Developer 🚀",
              2000,
              "Building Scalable Web Apps 💻",
              2000,
              "AI & Automation Enthusiast 🤖",
              2000,
              "Problem Solver & Innovator ⚡",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        {/* Description */}
        <p className="max-w-xl mx-auto text-muted-foreground text-lg mb-10 opacity-0 animate-fade-in-up delay-500">
          I design and develop intelligent, scalable systems combining 
          <span className="text-primary font-medium"> AI, cloud, and full-stack technologies</span> 
          to solve real-world problems.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-up delay-700">
          
          {/* Explore Button */}
          <button
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold 
            hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            Explore <ArrowDown size={18} />
          </button>

          {/* Secondary Button */}
          <a
            href="https://github.com/nishthamalhotr"
            target="_blank"
            className="px-8 py-3 rounded-full border border-primary text-primary font-semibold 
            hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;