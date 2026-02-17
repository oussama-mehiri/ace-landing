import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import SaasProducts from "@/components/saas-products";
import Courses from "@/components/courses";
import About from "@/components/about";
import Testimonials from "@/components/testimonials";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <SaasProducts />
        <Courses />
        <About />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
