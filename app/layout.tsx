import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AcePlasma Technologies LLC | Custom Development, SaaS & Courses",
  description:
    "AcePlasma Technologies LLC is a freelance dev agency offering custom web & mobile development, SaaS products, and developer courses. Let's build something great together.",
  keywords: [
    "custom development",
    "SaaS",
    "web development",
    "mobile apps",
    "developer courses",
    "freelance dev agency",
    "AcePlasma",
  ],
  authors: [{ name: "AcePlasma Technologies LLC" }],
  openGraph: {
    title: "AcePlasma Technologies LLC | Custom Development, SaaS & Courses",
    description:
      "Freelance dev agency offering custom web & mobile development, SaaS products, and developer courses.",
    url: "https://aceplasma.com",
    siteName: "AcePlasma Technologies LLC",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://aceplasma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "AcePlasma Technologies LLC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AcePlasma Technologies LLC | Custom Development, SaaS & Courses",
    description:
      "Freelance dev agency offering custom web & mobile development, SaaS products, and developer courses.",
    images: ["https://aceplasma.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AcePlasma Technologies LLC",
  url: "https://aceplasma.com",
  logo: "https://aceplasma.com/logo.png",
  description:
    "Freelance dev agency offering custom web & mobile development, SaaS products, and developer courses.",
  sameAs: [
    "https://twitter.com/aceplasma",
    "https://github.com/aceplasma",
    "https://linkedin.com/company/aceplasma",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "hello@aceplasma.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
