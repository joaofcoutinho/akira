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
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
      <WaveTexture intensity="subtle" className="opacity-70" />

      <div className="relative mx-auto grid max-w-content grid-cols-1 items-end gap-12 px-6 md:grid-cols-12 md:gap-10 md:px-12 lg:px-20">
        <div className="text-center md:col-span-7 md:text-left lg:col-span-7">
          <FadeIn delay={0.1}>
            <Eyebrow>Branding · Identidade Visual</Eyebrow>
          </FadeIn>

          <SplitText
            as="h1"
            className="mt-6 text-4xl font-light tracking-tightest leading-[1] md:text-6xl lg:text-[6rem]"
            stagger={0.07}
          >
            Headline aqui em duas linhas elegantes.
          </SplitText>

          <FadeIn delay={0.5} className="mx-auto mt-8 max-w-lg md:mx-0">
            <p className="text-base font-light leading-relaxed text-mist md:text-lg">
              Subtítulo aqui — descrição curta de posicionamento, foco em
              autoridade e exclusividade. O cliente vai editar este texto.
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

          <FadeIn delay={0.6} className="mt-6 flex flex-col items-center justify-center gap-1 text-xs uppercase tracking-[0.2em] text-mist md:flex-row md:items-center md:justify-between md:gap-0">
            <span>Akira Matsuzaki</span>
            <span>Founder · Designer</span>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
