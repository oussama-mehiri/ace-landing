import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(124,58,237,0.3),transparent)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center sm:py-32 lg:py-40">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
          <Zap className="h-3.5 w-3.5 text-primary" />
          Freelance Dev Agency &bull; SaaS &bull; Courses
        </div>

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          We Build Digital Products{" "}
          <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            That Scale
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          From custom web and mobile apps to SaaS products and developer courses
          — we help startups and businesses ship faster with clean, scalable
          code.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <a href="#products">
              View Our Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">
              <Calendar className="mr-2 h-4 w-4" />
              Book a Call
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
