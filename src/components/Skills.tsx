import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    category: "Automation Tools",
    skills: ["Playwright", "Selenium WebDriver", "Cypress", "REST Assured", "Postman"],
  },
  {
    category: "Programming",
    skills: ["Java", "Python", "TypeScript", "JavaScript"],
  },
  {
    category: "Frameworks",
    skills: ["Cucumber", "TestNG", "JUnit", "SpecFlow", "Pytest"],
  },
  {
    category: "CI/CD & DevOps",
    skills: ["Jenkins", "GitHub Actions", "Azure DevOps", "Docker", "Maven"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "Oracle", "MongoDB"],
  },
  {
    category: "Testing Types",
    skills: ["Functional", "API Testing", "Performance", "Regression", "E2E Testing"],
  },
];

const allSkills = [
  "Playwright", "Selenium", "Cypress", "REST Assured", "Java", "Python", 
  "TypeScript", "JavaScript", "Cucumber", "TestNG", "Jenkins", "GitHub Actions",
  "Docker", "PostgreSQL", "MySQL", "API Testing", "Performance Testing",
  "CI/CD", "BDD", "TDD", "Agile", "Scrum", "JIRA", "Git", "Maven",
  "Postman", "JMeter", "SQL", "MongoDB", "Azure DevOps", "LoadRunner"
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
