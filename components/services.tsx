import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Cloud, Smartphone, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Web Development",
    description:
      "Full-stack web applications built with modern frameworks. From landing pages to complex platforms — tailored to your needs.",
  },
  {
    icon: Cloud,
    title: "SaaS Development",
    description:
      "End-to-end SaaS product development including architecture, billing, auth, and deployment. Launch faster with battle-tested patterns.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Cross-platform mobile applications with React Native. Native performance with a single codebase for iOS and Android.",
  },
  {
    icon: GraduationCap,
    title: "Consulting & Courses",
    description:
      "Level up your team with hands-on courses and consulting. We teach modern development practices and architecture patterns.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What We Do
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Full-cycle development services to bring your ideas to life.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card
              key={service.title}
              className="border-border/50 bg-card/50 transition-colors hover:border-primary/50"
            >
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
