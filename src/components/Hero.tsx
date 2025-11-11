import { ArrowDown, Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-hero.jpg";

export const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="slide-up space-y-6">
            <div className="space-y-4">
              <h1 className="font-serif text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Understanding the code through patterns
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-xl">
                Dynamic SDET and QA Automation Engineer specializing in building robust automation frameworks 
                with Playwright, Selenium, and Cypress. Passionate about quality engineering and continuous testing.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                onClick={() => window.open("mailto:upenderreddykeesari8@gmail.com")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Get in Touch
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={scrollToAbout}
                className="border-primary text-primary hover:bg-primary/10"
              >
                View Work
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="mailto:upenderreddykeesari8@gmail.com"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Email Contact"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Profile Image Card */}
          <div className="fade-in flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-card rounded-2xl p-6 shadow-xl">
                <img
                  src={profileImage}
                  alt="Upender Reddy Keesari - SDET Engineer"
                  className="w-full max-w-sm rounded-lg"
                />
                <div className="mt-6 text-center">
                  <h3 className="font-serif text-2xl font-bold text-foreground">DATA ANALYST</h3>
                  <div className="flex justify-center gap-4 mt-4">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href="mailto:upenderreddykeesari8@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16 lg:mt-24">
          <button
            onClick={scrollToAbout}
            className="text-muted-foreground hover:text-accent transition-colors animate-float"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};
