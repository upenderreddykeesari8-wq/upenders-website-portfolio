import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "upenderreddykeesari8@gmail.com",
    link: "mailto:upenderreddykeesari8@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (815) 530-3488",
    link: "tel:+18155303488",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chicago, Illinois",
    link: null,
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    link: "https://linkedin.com",
  },
  {
    icon: Github,
    label: "GitHub",
    link: "https://github.com",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 px-4 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-serif text-3xl lg:text-5xl font-bold text-foreground mb-12 text-center slide-up">
          Let's Collaborate
        </h2>

        <Card className="border-border bg-card slide-up">
          <CardContent className="p-8 lg:p-12">
            <p className="text-center text-lg text-foreground/80 mb-8">
              I'm always interested in hearing about new opportunities and projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <div className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-muted/50 transition-colors">
                    <Icon className="h-6 w-6 text-accent mb-3" />
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      {info.label}
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      {info.value}
                    </p>
                  </div>
                );

                return info.link ? (
                  <a key={index} href={info.link} className="hover-lift">
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>

            <div className="flex justify-center gap-4 mb-8">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all hover-lift"
                    aria-label={social.label}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>

            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={() => window.open("mailto:upenderreddykeesari8@gmail.com")}
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Send Me an Email
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>© 2025 Upender Reddy Keesari. All rights reserved.</p>
          <p className="mt-2">Built with React, TypeScript, and Tailwind CSS</p>
        </div>
      </div>
    </section>
  );
};
