import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const courses = [
  {
    title: "Full-Stack Next.js",
    description:
      "Build production-ready apps with Next.js, TypeScript, Prisma, and Tailwind. From zero to deployment.",
    level: "Intermediate",
    cta: "Enroll Now",
    link: "#",
  },
  {
    title: "SaaS Architecture",
    description:
      "Learn how to architect multi-tenant SaaS apps. Auth, billing, databases, and scaling strategies.",
    level: "Advanced",
    cta: "Enroll Now",
    link: "#",
  },
  {
    title: "React Native Essentials",
    description:
      "Ship cross-platform mobile apps with React Native and Expo. Covers navigation, state, and native APIs.",
    level: "Beginner",
    cta: "Coming Soon",
    link: "#",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="border-t border-border/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Learn With Us
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hands-on courses to level up your development skills.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card
              key={course.title}
              className="border-border/50 bg-card/50 transition-colors hover:border-primary/50"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <Badge variant="outline">{course.level}</Badge>
                </div>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="sm" asChild>
                  <a href={course.link}>
                    {course.cta}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
