import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about-image.jpg";

export const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 px-4 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="font-serif text-3xl lg:text-5xl font-bold text-foreground mb-12 slide-up">
          About Me
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-2xl transform -rotate-3"></div>
              <img
                src={aboutImage}
                alt="Upender Reddy working on automation frameworks"
                className="relative rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="slide-up space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              Dynamic Software Development Engineer in Test (SDET) and QA Automation Engineer with 5+ years 
              of experience designing, developing, and executing robust automation frameworks across UI, API, 
              and backend testing.
            </p>
            
            <p className="text-lg text-foreground/90 leading-relaxed">
              Proven expertise in Playwright, Selenium, Cypress, and REST Assured, with deep knowledge of Java, 
              Python, and TypeScript for building scalable, reusable automation suites. I am skilled in building 
              end-to-end automation frameworks from scratch using best practices in OOP, data structures, and 
              algorithms for efficient and maintainable test code.
            </p>

            <p className="text-lg text-foreground/90 leading-relaxed">
              Experienced in SQL-based data validation, backend verification, and testing complex data workflows 
              to ensure data integrity and system reliability. Proven track record of reducing regression cycles 
              by over 60%, increasing automation coverage up to 95%, and improving defect detection rates by 40%.
            </p>

            <div className="pt-4">
              <Button 
                size="lg"
                onClick={() => window.open("mailto:upenderreddykeesari8@gmail.com")}
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
