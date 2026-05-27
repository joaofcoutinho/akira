'use client';

import Image from 'next/image';
import { FadeIn } from '@/components/animations/FadeIn';
import { Eyebrow } from '@/components/ui/Eyebrow';

const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=400&h=400&q=80`;

const testimonials = [
  {
    quote:
      'Contratar a Akira mudou a percepção da nossa marca no mercado. Estratégia, identidade e execução em outro patamar — saímos do projeto com clareza absoluta de quem somos e para quem falamos.',
    name: 'Camila Ferreira',
    role: 'CEO · Nordlys Co.',
    avatar: u('photo-1573496359142-b8d87734a5a2'),
  },
  {
    quote:
      'O processo foi rigoroso desde o primeiro dia. Recebemos uma marca que não envelhece e que passou a abrir portas que antes simplesmente não abriam.',
    name: 'Rafael Andrade',
    role: 'Founder · Estúdio Aurum',
    avatar: u('photo-1500648767791-00dcc994a43e'),
  },
  {
    quote:
      'Mais do que um logotipo, recebemos um sistema completo — posicionamento, voz e visual alinhados. Refletiu direto em pricing, vendas e no perfil de cliente que atraímos.',
    name: 'Marina Lopes',
    role: 'Diretora · Casa Vinea',
    avatar: u('photo-1544005313-94ddf0286df2'),
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-content px-6 md:px-12 lg:px-20">
        <FadeIn className="max-w-2xl">
          <Eyebrow>Depoimentos</Eyebrow>
          <h2 className="mt-4 text-4xl font-light tracking-tight md:text-6xl">
            O que dizem os clientes.
          </h2>
        </FadeIn>

        <FadeIn
          as="ul"
          stagger={0.1}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8"
        >
          {testimonials.map((t, i) => (
            <li
              key={i}
              data-stagger
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-forest-900/70 via-forest-900/40 to-forest-800/30 p-8 backdrop-blur-2xl transition-colors hover:border-white/[0.14] md:p-10"
            >
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                aria-hidden
              />
              <p className="relative text-base font-light leading-relaxed text-bone md:text-lg">
                <span className="text-mist">“</span>
                {t.quote}
                <span className="text-mist">”</span>
              </p>
              <div className="relative mt-10 flex items-center gap-4 border-t border-white/[0.06] pt-6">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-line">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-light text-bone">{t.name}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-mist">
                    {t.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
