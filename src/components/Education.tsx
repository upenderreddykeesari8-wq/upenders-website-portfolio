import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const education = [
  {
    degree: "Master's in Computer Information Technology",
    school: "Elmhurst University",
    location: "Chicago, Illinois",
    period: "August 2023 – May 2025",
    description: "Focused on software engineering, data structures, algorithms, and advanced testing methodologies.",
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "JNTU University",
    location: "Hyderabad, India",
    period: "June 2015 – May 2019",
    description: "Comprehensive study of computer science fundamentals, programming, and software development.",
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-20 lg:py-32 px-4 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="font-serif text-3xl lg:text-5xl font-bold text-foreground mb-12 slide-up">
          Education
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="hover-lift border-border bg-card slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl font-serif text-foreground flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-accent" />
                  {edu.degree}
                </CardTitle>
                <p className="text-lg font-semibold text-accent mt-2">{edu.school}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {edu.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {edu.period}
                  </div>
                </div>
                <p className="text-foreground/80">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
