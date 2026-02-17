import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Clients Served" },
];

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "AWS",
  "Docker",
  "React Native",
  "Tailwind CSS",
  "Prisma",
  "Stripe",
];

export default function About() {
  return (
    <section id="about" className="border-t border-border/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              About AcePlasma
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              AcePlasma Technologies LLC is a freelance development agency built
              by engineers who love shipping great software. We partner with
              startups, small businesses, and enterprises to build custom digital
              products — from MVPs to production-scale platforms.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Beyond client work, we build our own SaaS products and create
              courses to help developers level up. We believe in clean code,
              modern tooling, and getting things done.
            </p>

            <Separator className="my-8" />

            <div className="flex gap-12">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Our Tech Stack</h3>
            <p className="mt-2 text-muted-foreground">
              Technologies we use daily to build reliable, scalable products.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="px-3 py-1.5 text-sm"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
