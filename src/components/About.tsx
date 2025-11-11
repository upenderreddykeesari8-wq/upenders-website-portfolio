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
              Dynamic Software Development Engineer in Test (SDET) and DevOps professional with 5+ years 
              of experience designing, developing, and executing robust automation frameworks across UI, API, 
              and backend testing. Expert in building and maintaining CI/CD pipelines, infrastructure automation, 
              and cloud-native solutions.
            </p>
            
            <p className="text-lg text-foreground/90 leading-relaxed">
              Proven expertise in Playwright, Selenium, Cypress, Jenkins, Docker, and Kubernetes with deep knowledge 
              of Java, Python, and TypeScript. Skilled in building end-to-end automation frameworks from scratch, 
              implementing GitOps workflows, and creating infrastructure as code using Terraform and Ansible.
            </p>

            <p className="text-lg text-foreground/90 leading-relaxed">
              Track record of reducing regression cycles by 60%, achieving 95% automation coverage, and optimizing 
              deployment pipelines for faster releases. Passionate about quality engineering, continuous testing, 
              and building scalable DevOps solutions.
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
