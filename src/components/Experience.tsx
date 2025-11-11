import { Briefcase, MapPin, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "SDET",
    company: "Southwest Airlines",
    location: "Dallas, TX",
    period: "Jan 2024 – Present",
    description: [
      "Designed and implemented scalable Playwright and Selenium automation frameworks for booking, flight search, and payment modules, improving regression speed by 70%",
      "Automated end-to-end UI and API test suites achieving 95% automation coverage across customer-facing systems",
      "Developed BDD test framework with Cucumber integrated into Jenkins pipelines, reducing production defects by 40%",
      "Validated REST and SOAP microservices ensuring 100% data integrity across systems",
    ],
    skills: ["Playwright", "Selenium", "Cucumber", "Jenkins", "REST Assured", "JMeter"],
  },
  {
    title: "QA Automation Engineer",
    company: "HDFC Bank",
    location: "Hyderabad, India",
    period: "Jul 2021 – Jul 2023",
    description: [
      "Built Selenium and Playwright automation frameworks for retail and corporate banking workflows, improving regression coverage by 80%",
      "Automated 400+ UI and API test cases reducing manual testing by 65%",
      "Developed BDD test suites using Cucumber and TestNG aligned with user stories",
      "Integrated automated suites with Jenkins CI/CD pipelines improving build validation efficiency by 45%",
    ],
    skills: ["Selenium", "Playwright", "Cucumber", "Jenkins", "REST Assured", "SQL"],
  },
  {
    title: "Quality Assurance Engineer",
    company: "Apollo Hospitals",
    location: "Hyderabad, India",
    period: "Jan 2019 – Jun 2021",
    description: [
      "Led functional, integration, and backend testing for electronic health record (EHR) and patient management systems",
      "Built and maintained Selenium and TestNG frameworks cutting manual testing by 60%",
      "Performed API and backend validation for patient admission, billing, and clinical data integration",
      "Created reusable regression test suites reducing release validation time from 3 days to 1 day",
    ],
    skills: ["Selenium", "TestNG", "SQL", "API Testing", "JIRA"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 lg:py-32 px-4 lg:px-8">
      <div className="container mx-auto">
        <h2 className="font-serif text-3xl lg:text-5xl font-bold text-foreground mb-12 slide-up">
          Work Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="hover-lift border-border bg-card slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl font-serif text-foreground flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-accent" />
                      {exp.title}
                    </CardTitle>
                    <p className="text-lg font-semibold text-accent mt-1">{exp.company}</p>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3 text-foreground/80">
                      <span className="text-accent mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="bg-secondary text-secondary-foreground">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
