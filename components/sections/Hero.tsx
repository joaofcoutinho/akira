'use client';

import Image from 'next/image';
import { SplitText } from '@/components/animations/SplitText';
import { FadeIn } from '@/components/animations/FadeIn';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { WaveTexture } from '@/components/ui/WaveTexture';
import { ArrowRight, Send } from '@/components/ui/Icons';
import { whatsappLink } from '@/lib/whatsapp';

const HERO_IMAGE = '/images/akira-limpo.png';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-12 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20">
      <WaveTexture intensity="subtle" className="opacity-70" />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-96 z-10"
        style={{
          background:
            'linear-gradient(to top, #0a0f0d 0%, #0a0f0d 30%, rgba(10,15,13,0) 100%)',
        }}
      />

      <div className="relative z-20 mx-auto grid max-w-content grid-cols-1 items-end gap-12 px-6 md:grid-cols-12 md:gap-10 md:px-12 lg:px-20">
        <div className="text-center md:col-span-7 md:text-left lg:col-span-7">
          <FadeIn delay={0.1}>
            <Eyebrow>Branding · Identidade Visual</Eyebrow>
          </FadeIn>

          <SplitText
            as="h1"
            className="mt-6 text-4xl font-light tracking-tightest leading-[1] md:text-6xl lg:text-[6rem]"
            stagger={0.07}
          >
            Marcas que comunicam autoridade desde o primeiro olhar.
          </SplitText>

          <FadeIn delay={0.5} className="mx-auto mt-8 max-w-lg md:mx-0">
            <p className="text-base font-light leading-relaxed text-mist md:text-lg">
              Akira é um estúdio de branding dedicado a projetos high ticket —
              estratégia, identidade visual e sistemas de marca para empresas
              que tratam design como ativo de longo prazo.
            </p>
          </FadeIn>

          <FadeIn delay={0.7} className="mt-10 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <Button
              href={whatsappLink('Olá Akira, quero conversar sobre um projeto.')}
              external
              variant="primary"
              size="lg"
              icon={<Send />}
            >
              Iniciar projeto
            </Button>
            <Button
              href="/portfolio"
              variant="ghost"
              size="lg"
              icon={<ArrowRight />}
            >
              Ver portfólio
            </Button>
          </FadeIn>
        </div>

        <div className="md:col-span-5 lg:col-span-5">
          <FadeIn delay={0.3} className="relative">
            <Image
              src={HERO_IMAGE}
              alt="Akira Matsuzaki"
              width={2000}
              height={2500}
              sizes="(min-width: 768px) 40vw, 100vw"
              priority
              className="h-auto w-full"
              style={{
                WebkitMaskImage:
                  'linear-gradient(to top, transparent 0%, black 25%)',
                maskImage:
                  'linear-gradient(to top, transparent 0%, black 25%)',
              }}
            />
          </FadeIn>

          <FadeIn delay={0.6} className="relative z-20 mt-6 flex flex-col items-center justify-center gap-1 text-xs uppercase tracking-[0.2em] text-bone md:flex-row md:items-center md:justify-between md:gap-0">
            <span>Akira Matsuzaki</span>
            <span>Founder · Designer</span>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
