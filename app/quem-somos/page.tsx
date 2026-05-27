import type { Metadata } from 'next';
import { AboutPreview } from '@/components/sections/AboutPreview';
import { CTASection } from '@/components/sections/CTASection';
import { FadeIn } from '@/components/animations/FadeIn';
import { SplitText } from '@/components/animations/SplitText';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { WaveTexture } from '@/components/ui/WaveTexture';

export const metadata: Metadata = {
  title: 'Quem somos',
  description:
    'Estúdio especializado em branding premium, com atuação internacional e processo orientado à autoridade da marca.',
};

const stats = [
  { value: '+12', label: 'Anos de mercado' },
  { value: '+80', label: 'Marcas atendidas' },
  { value: '+10', label: 'Países' },
];

export default function QuemSomosPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-16 md:pt-52 md:pb-20">
        <WaveTexture intensity="subtle" />

        <div className="relative mx-auto max-w-content px-6 md:px-12 lg:px-20">
          <FadeIn>
            <Eyebrow>Quem somos</Eyebrow>
          </FadeIn>
          <SplitText
            as="h1"
            className="mt-6 max-w-4xl text-5xl font-light tracking-tightest leading-[1] md:text-7xl lg:text-8xl"
            stagger={0.06}
          >
            Branding com profundidade estratégica.
          </SplitText>
          <FadeIn delay={0.3} className="mt-10 max-w-2xl">
            <p className="text-lg font-light leading-relaxed text-mist md:text-xl">
              Akira é um estúdio independente de branding com sede em São Paulo
              e atuação internacional. Trabalhamos com fundadores e times de
              marketing que tratam marca como ativo estratégico — projetando
              identidades que comunicam autoridade, sustentam crescimento e
              atravessam ciclos.
            </p>
          </FadeIn>
        </div>
      </section>

      <AboutPreview />

      <section className="relative border-y border-line bg-forest-900/40 py-24 md:py-32">
        <div className="mx-auto max-w-content px-6 md:px-12 lg:px-20">
          <FadeIn
            as="ul"
            stagger={0.12}
            className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-10"
          >
            {stats.map((s) => (
              <li
                key={s.label}
                data-stagger
                className="flex flex-col gap-2 text-center md:gap-3 md:border-l md:border-line md:pl-8 md:text-left"
              >
                <span className="text-4xl font-light tracking-tightest text-bone sm:text-5xl md:text-7xl">
                  {s.value}
                </span>
                <span className="text-[0.625rem] uppercase tracking-[0.18em] text-mist sm:text-xs sm:tracking-[0.2em]">
                  {s.label}
                </span>
              </li>
            ))}
          </FadeIn>
        </div>
      </section>

      <section className="relative py-24 md:py-32 lg:py-40">
        <div className="mx-auto grid max-w-content grid-cols-1 gap-12 px-6 md:grid-cols-12 md:gap-16 md:px-12 lg:px-20">
          <FadeIn className="md:col-span-4">
            <Eyebrow>Processo</Eyebrow>
            <h2 className="mt-4 text-3xl font-light tracking-tight md:text-5xl">
              Como conduzimos um projeto.
            </h2>
          </FadeIn>
          <FadeIn
            as="ul"
            stagger={0.1}
            className="md:col-span-8 grid grid-cols-1 gap-8 md:grid-cols-2"
          >
            {[
              {
                step: '01',
                title: 'Imersão',
                desc: 'Mergulho no negócio, mercado, concorrência e cultura. Sem isto, design vira opinião.',
              },
              {
                step: '02',
                title: 'Estratégia',
                desc: 'Posicionamento, narrativa, tom de voz, arquitetura de marca. Fundação antes do visual.',
              },
              {
                step: '03',
                title: 'Sistema',
                desc: 'Identidade visual construída como sistema — flexível, escalável, atemporal.',
              },
              {
                step: '04',
                title: 'Aplicação',
                desc: 'Implementação cuidadosa em todos os pontos de contato, do digital ao impresso.',
              },
            ].map((p) => (
              <li
                key={p.step}
                data-stagger
                className="flex flex-col gap-3 border-t border-line pt-6"
              >
                <span className="text-xs uppercase tracking-[0.2em] text-mist">
                  {p.step}
                </span>
                <h3 className="text-2xl font-light text-bone">{p.title}</h3>
                <p className="text-base font-light leading-relaxed text-mist">
                  {p.desc}
                </p>
              </li>
            ))}
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
