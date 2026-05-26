'use client';

import { FadeIn } from '@/components/animations/FadeIn';
import { ParallaxImage } from '@/components/animations/ParallaxImage';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { ArrowUpRight } from '@/components/ui/Icons';

const ABOUT_IMAGE = '/images/akira.png';

export function AboutPreview() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 px-6 md:grid-cols-12 md:gap-16 md:px-12 lg:px-20">
        <FadeIn className="md:col-span-5">
          <ParallaxImage
            src={ABOUT_IMAGE}
            alt="Akira Matsuzaki em estúdio"
            className="aspect-[4/5] w-full"
            sizes="(min-width: 768px) 40vw, 100vw"
          />
        </FadeIn>

        <div className="md:col-span-7">
          <FadeIn>
            <Eyebrow>Sobre o estúdio</Eyebrow>
            <h2 className="mt-4 text-4xl font-light tracking-tight md:text-6xl">
              Branding com profundidade estratégica.
            </h2>
          </FadeIn>

          <FadeIn delay={0.2} className="mt-8 space-y-6 text-base font-light leading-relaxed text-mist md:text-lg">
            <p>
              Texto sobre o estúdio — autoridade, alcance internacional e
              processo. Será reescrito pelo cliente.
            </p>
            <p>
              Cada projeto é tratado como construção de longo prazo, com
              imersão, estratégia, sistema e cuidado obsessivo com detalhe.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} className="mt-10">
            <Button
              href="/quem-somos"
              variant="outline"
              size="md"
              icon={<ArrowUpRight />}
            >
              Conheça o estúdio
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
