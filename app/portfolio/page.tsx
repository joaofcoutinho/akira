import type { Metadata } from 'next';
import { FadeIn } from '@/components/animations/FadeIn';
import { SplitText } from '@/components/animations/SplitText';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { WaveTexture } from '@/components/ui/WaveTexture';
import { PortfolioBrowser } from '@/components/sections/PortfolioBrowser';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Portfólio',
  description:
    'Projetos selecionados de branding, identidade visual, naming e rebranding.',
};

export default function PortfolioPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-16 md:pt-52 md:pb-20">
        <WaveTexture intensity="subtle" />

        <div className="relative mx-auto max-w-content px-6 md:px-12 lg:px-20">
          <FadeIn>
            <Eyebrow>Portfólio</Eyebrow>
          </FadeIn>
          <SplitText
            as="h1"
            className="mt-6 max-w-4xl text-5xl font-light tracking-tightest leading-[1] md:text-7xl lg:text-8xl"
            stagger={0.06}
          >
            Trabalhos selecionados.
          </SplitText>
          <FadeIn delay={0.3} className="mt-10 max-w-xl">
            <p className="text-base font-light leading-relaxed text-mist md:text-lg">
              Cada projeto é construído como sistema. Clique em um trabalho para
              ver detalhes.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="relative py-12 md:py-16">
        <div className="mx-auto max-w-content px-6 md:px-12 lg:px-20">
          <PortfolioBrowser />
        </div>
      </section>

      <CTASection />
    </>
  );
}
