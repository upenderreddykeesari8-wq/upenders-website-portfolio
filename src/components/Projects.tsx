import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Healthcare EHR Test Automation",
    description: "Built comprehensive Selenium framework for Apollo Hospitals EHR system with 60% reduction in manual testing",
    color: "from-blue-900 to-blue-700",
  },
  {
    title: "Banking API Testing Framework",
    description: "Developed REST Assured framework for HDFC Bank microservices with 100% API coverage and data validation",
    color: "from-purple-900 to-purple-700",
  },
  {
    title: "CI/CD Pipeline Automation",
    description: "Architected Jenkins and GitHub Actions pipelines reducing deployment time by 70% at Southwest Airlines",
    color: "from-orange-900 to-orange-700",
  },
  {
    title: "Kubernetes Deployment Framework",
    description: "Created Helm charts and ArgoCD workflows for containerized application deployments with zero downtime",
    color: "from-indigo-900 to-indigo-700",
  },
  {
    title: "Infrastructure as Code Suite",
    description: "Implemented Terraform and Ansible playbooks for AWS infrastructure provisioning and configuration management",
    color: "from-teal-900 to-teal-700",
  },
  {
    title: "Performance Testing Platform",
    description: "Built JMeter-based load testing suite identifying bottlenecks and improving API response times by 30%",
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
