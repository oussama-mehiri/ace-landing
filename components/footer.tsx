import { Separator } from "@/components/ui/separator";
import { Zap } from "lucide-react";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Courses", href: "#courses" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/aceplasma" },
  { label: "Twitter", href: "https://twitter.com/aceplasma" },
  { label: "LinkedIn", href: "https://linkedin.com/company/aceplasma" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <a href="#" className="flex items-center gap-2 text-lg font-bold">
              <Zap className="h-5 w-5 text-primary" />
              <span>
                Ace<span className="text-primary">Plasma</span>
              </span>
            </a>
            <p className="mt-3 text-sm text-muted-foreground">
              Building digital products that scale. Custom development, SaaS, and
              developer education.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Connect</h3>
            <ul className="mt-3 space-y-2">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} AcePlasma Technologies LLC. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
