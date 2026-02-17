import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border/50 py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_120%,rgba(124,58,237,0.2),transparent)]" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to Build Something{" "}
          <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Great?
          </span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Drop us your email and we&apos;ll get back to you within 24 hours. Or
          book a call directly.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Input
            type="email"
            placeholder="your@email.com"
            className="h-12 w-full bg-card/50 sm:max-w-sm"
          />
          <Button size="lg" className="w-full sm:w-auto">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <p className="mt-4 text-sm text-muted-foreground">
          No spam. We&apos;ll reach out to discuss your project.
        </p>
      </div>
    </section>
  );
}
