import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import profileImage from "@/assets/anuj-profile-new.jpg";

const Hero = () => {
  const skills = [
    "LLMs", "RAG", "Agents", "NLP", "CV", "Optimization", 
    "Azure/AWS", "Docker", "Power BI"
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary opacity-80" />
      
      <div className="section-padding w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="hero-gradient">Anuj Sahani</span>
                <br />
                AI Engineer & Data Scientist.
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                I turn proof-of-concepts into production-grade, high-impact AI solutions.
              </p>
              
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50">
                <p className="text-lg text-foreground font-medium">
                  If you need someone who can understand your data and turn it into actionable strategies that drive measurable results—you've found your guy.
                </p>
              </div>
            </div>

            {/* Skills badges */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="px-3 py-1 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-hero-accent text-accent-foreground font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => scrollToSection('portfolio')}
              >
                View Projects
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-8 py-3 rounded-xl transition-all duration-300"
                onClick={() => scrollToSection('contact')}
              >
                Work With Me
              </Button>
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              <a href="mailto:sahaniiianuj@gmail.com" className="p-3 rounded-xl bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-300 group">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://linkedin.com/in/anuj-sahani-34363725b" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-300 group">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://github.com/anujsahani01" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-300 group">
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://x.com/AnujSah13739811" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-300 group">
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent to-hero-accent rounded-full opacity-75 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
              <img 
                src={profileImage} 
                alt="Anuj Sahani - AI Engineer & Data Scientist"
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-accent/20 shadow-2xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="p-2 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors duration-300"
          >
            <ArrowDown className="w-6 h-6 text-accent" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;