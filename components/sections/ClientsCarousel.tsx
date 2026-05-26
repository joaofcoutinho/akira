'use client';

import { FadeIn } from '@/components/animations/FadeIn';
import { Eyebrow } from '@/components/ui/Eyebrow';

// Client names — substituir por SVGs de logos quando vier do cliente.
const CLIENTS = [
  'QUARTZOMASSA',
  'MAHAI',
  'KAJORY',
  'FRIFORT',
  'STUDIO FP',
  'CASA VILANI',
];

/**
 * Infinite logo marquee. We duplicate the list once and translate -50%
 * so the loop is seamless (last element of clone aligns with first of original).
 * `fade-mask-x` (globals.css) creates the lateral fade per client request.
 */
export function ClientsCarousel() {
  const items = [...CLIENTS, ...CLIENTS];

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
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="select-none whitespace-nowrap text-xl font-light tracking-[0.25em] text-mist md:text-2xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
