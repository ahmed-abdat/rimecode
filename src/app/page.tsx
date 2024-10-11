import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import ContactForm from "@/components/form/ContactForm";
import { HeroScrollDemo } from "@/components/sections/HeroScrollDemo";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <HeroScrollDemo />
      <Features />
      <Pricing />
      <Testimonials />
      <CTA />
      <ContactForm />
    </main>
  );
}
