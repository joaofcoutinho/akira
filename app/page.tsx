import { Hero } from '@/components/sections/Hero';
import { PortfolioGrid } from '@/components/sections/PortfolioGrid';
import { ClientsCarousel } from '@/components/sections/ClientsCarousel';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTASection } from '@/components/sections/CTASection';
import { featuredProjects } from '@/lib/projects';

export default function HomePage() {
  return (
    <>
      <Hero />
      <PortfolioGrid projects={featuredProjects} />
      <ClientsCarousel />
      <Testimonials />
      <CTASection />
    </>
  );
}
