import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    category: "Automation & Testing",
    skills: ["Playwright", "Selenium", "Cypress", "REST Assured", "Postman", "JMeter"],
  },
  {
    category: "Programming",
    skills: ["Java", "Python", "TypeScript", "JavaScript", "Bash", "PowerShell"],
  },
  {
    category: "CI/CD & DevOps",
    skills: ["Jenkins", "GitHub Actions", "Azure DevOps", "GitLab CI", "CircleCI"],
  },
  {
    category: "Containers & Orchestration",
    skills: ["Docker", "Kubernetes", "Docker Compose", "Helm", "ArgoCD"],
  },
  {
    category: "Infrastructure as Code",
    skills: ["Terraform", "Ansible", "CloudFormation", "Pulumi"],
  },
  {
    category: "Cloud Platforms",
    skills: ["AWS", "Azure", "GCP", "AWS CodeBuild", "Lambda"],
  },
  {
    category: "Databases & Monitoring",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Prometheus", "Grafana", "ELK Stack"],
  },
  {
    category: "Testing Frameworks",
    skills: ["Cucumber", "TestNG", "JUnit", "Pytest", "SpecFlow"],
  },
];

const allSkills = [
  "Playwright", "Selenium", "Cypress", "Jenkins", "Docker", "Kubernetes",
  "Terraform", "Ansible", "AWS", "Azure", "Java", "Python", 
  "TypeScript", "JavaScript", "REST Assured", "GitHub Actions", "GitLab CI",
  "Prometheus", "Grafana", "PostgreSQL", "MongoDB", "Cucumber", "ArgoCD",
  "CI/CD", "BDD", "TDD", "Agile", "Scrum", "JIRA", "Git", "Helm",
  "Postman", "JMeter", "API Testing", "Bash", "CloudFormation", "ELK Stack"
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 lg:py-32 px-4 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="font-serif text-3xl lg:text-5xl font-bold text-foreground mb-12 slide-up">
          Skills
        </h2>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="hover-lift border-border bg-card slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <h3 className="font-serif text-lg font-bold text-accent mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Word Cloud */}
        <Card className="border-border bg-card slide-up">
          <CardContent className="p-8">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
              Technical Expertise Cloud
            </h3>
            <div className="flex flex-wrap justify-center gap-3 items-center">
              {allSkills.map((skill, index) => {
                const sizes = ["text-sm", "text-base", "text-lg", "text-xl", "text-2xl"];
                const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
                const opacity = 0.6 + Math.random() * 0.4;
                
                return (
                  <span
                    key={index}
                    className={`${randomSize} font-medium transition-all hover:scale-110 hover:text-accent cursor-default`}
                    style={{ 
                      opacity,
                      color: `hsl(${20 + Math.random() * 30} ${40 + Math.random() * 20}% ${40 + Math.random() * 30}%)`
                    }}
                  >
                    {skill}
                  </span>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
