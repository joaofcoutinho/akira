'use client';

import Image from 'next/image';
import { FadeIn } from '@/components/animations/FadeIn';
import { Eyebrow } from '@/components/ui/Eyebrow';

const CLIENT_LOGOS = [
  '/images/logos-akira/1.png',
  '/images/logos-akira/2.png',
  '/images/logos-akira/3.png',
  '/images/logos-akira/4.png',
  '/images/logos-akira/5.png',
];

/**
 * Infinite logo marquee. We duplicate the list once and translate -50%
 * so the loop is seamless (last element of clone aligns with first of original).
 * `fade-mask-x` (globals.css) creates the lateral fade per client request.
 */
export function ClientsCarousel() {
  const items = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="relative border-y border-line bg-forest-900/40 py-20 md:py-28">
      <div className="mx-auto max-w-content px-6 md:px-12 lg:px-20">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <Eyebrow>Marcas que confiaram</Eyebrow>
          <h2 className="mt-4 text-3xl font-light tracking-tight md:text-5xl">
            Clientes nacionais e internacionais.
          </h2>
        </FadeIn>
      </div>

      <div className="fade-mask-x mt-14 overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-16 px-6 md:gap-24">
          {items.map((src, i) => (
            <Image
              key={`${src}-${i}`}
              src={src}
              alt="Logo cliente"
              width={500}
              height={250}
              className="h-12 w-auto shrink-0 select-none opacity-70 transition-opacity hover:opacity-100 md:h-14"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
