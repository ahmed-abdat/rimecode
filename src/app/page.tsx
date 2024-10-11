import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import ContactForm from '@/components/ContactForm';
import { HeroScrollDemo } from '@/components/HeroScrollDemo';

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
