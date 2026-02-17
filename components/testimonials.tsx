import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "AcePlasma delivered our MVP in record time. The code quality was exceptional and the team was a pleasure to work with.",
    name: "Sarah Chen",
    role: "CEO, Launchpad Inc.",
    avatar: "SC",
  },
  {
    quote:
      "Their SaaS architecture course transformed how our team builds products. Highly recommend for any engineering team.",
    name: "Marcus Williams",
    role: "CTO, DataStream",
    avatar: "MW",
  },
  {
    quote:
      "We've worked with many agencies, but AcePlasma stands out for their technical expertise and clear communication.",
    name: "Emily Rodriguez",
    role: "Product Lead, Nexus Co.",
    avatar: "ER",
  },
];

export default function Testimonials() {
  return (
    <section className="border-t border-border/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What Clients Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Don&apos;t take our word for it — hear from our clients.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className="border-border/50 bg-card/50"
            >
              <CardContent className="pt-6">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <blockquote className="text-muted-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
