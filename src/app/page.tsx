import dynamic from "next/dynamic";
import { Suspense } from 'react';
import Loading from './loading';

const Hero = dynamic(() => import('@/components/sections/Hero'), {
  loading: () => <Loading />
});
const HeroScrollDemo = dynamic(() => import('@/components/sections/HeroScrollDemo'), {
  loading: () => <Loading />
});
const Features = dynamic(() => import('@/components/sections/Features'), {
  loading: () => <Loading />
});
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'), {
  loading: () => <Loading />
});
const Pricing = dynamic(() => import('@/components/sections/Pricing'), {
  loading: () => <Loading />
});
const CTA = dynamic(() => import('@/components/sections/CTA'), {
  loading: () => <Loading />
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between max-w-full overflow-x-hidden">
      <Suspense fallback={<Loading />}>
        <Hero />
        <HeroScrollDemo />
        <Features />
        <Testimonials />
        <Pricing />
        <CTA />
      </Suspense>
    </main>
  );
}
