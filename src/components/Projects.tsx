import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "E-Commerce Test Automation Framework",
    description: "Built comprehensive Playwright automation suite for e-commerce platform testing booking, cart, and payment flows",
    color: "from-blue-900 to-blue-700",
  },
  {
    title: "API Testing Framework",
    description: "Developed REST Assured framework for microservices validation with 100% coverage",
    color: "from-purple-900 to-purple-700",
  },
  {
    title: "CI/CD Pipeline Integration",
    description: "Integrated automation frameworks with Jenkins and GitHub Actions for continuous testing",
    color: "from-orange-900 to-orange-700",
  },
  {
    title: "Performance Testing Suite",
    description: "Created JMeter scripts for load testing and performance validation of critical APIs",
    color: "from-indigo-900 to-indigo-700",
  },
  {
    title: "BDD Framework with Cucumber",
    description: "Implemented BDD framework with Cucumber for behavior-driven testing and collaboration",
    color: "from-teal-900 to-teal-700",
  },
  {
    title: "Database Testing Framework",
    description: "Built SQL-based validation framework for data integrity testing across PostgreSQL and Oracle",
    color: "from-red-900 to-red-700",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 lg:py-32 px-4 lg:px-8">
      <div className="container mx-auto">
        <h2 className="font-serif text-3xl lg:text-5xl font-bold text-foreground mb-12 slide-up">
          What I've Built
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`hover-lift border-0 bg-gradient-to-br ${project.color} text-white slide-up cursor-pointer group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 h-full flex flex-col justify-between min-h-[200px]">
                <div>
                  <h3 className="font-serif text-xl font-bold mb-3 group-hover:text-accent-foreground transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex justify-end mt-4">
                  <ExternalLink className="h-5 w-5 text-white/70 group-hover:text-white transition-colors" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
