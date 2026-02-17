import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    name: "ProjectFlow",
    description:
      "An all-in-one project management tool for dev teams. Kanban boards, sprint planning, and time tracking.",
    status: "Live" as const,
    link: "#",
  },
  {
    name: "InvoiceKit",
    description:
      "Automated invoicing and billing for freelancers. Stripe integration, recurring invoices, and expense tracking.",
    status: "Live" as const,
    link: "#",
  },
  {
    name: "DevMetrics",
    description:
      "Engineering analytics dashboard. Track velocity, cycle time, and deployment frequency across your org.",
    status: "Coming Soon" as const,
    link: "#",
  },
];

export default function SaasProducts() {
  return (
    <section id="products" className="border-t border-border/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Products
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            SaaS tools we&apos;ve built to solve real problems.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card
              key={product.name}
              className="border-border/50 bg-card/50 transition-colors hover:border-primary/50"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <Badge
                    variant={
                      product.status === "Live" ? "default" : "secondary"
                    }
                  >
                    {product.status}
                  </Badge>
                </div>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" size="sm" asChild>
                  <a href={product.link}>
                    Learn More
                    <ArrowUpRight className="ml-1 h-4 w-4" />
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
