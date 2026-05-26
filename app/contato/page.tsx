import type { Metadata } from 'next';
import { FadeIn } from '@/components/animations/FadeIn';
import { SplitText } from '@/components/animations/SplitText';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { WaveTexture } from '@/components/ui/WaveTexture';
import { ContactForm } from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Conte sobre o seu projeto. Atendimento direto com o Akira via WhatsApp.',
};

export default function ContatoPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-12 md:pt-52 md:pb-16">
        <WaveTexture intensity="subtle" />

        <div className="relative mx-auto max-w-content px-6 md:px-12 lg:px-20">
          <FadeIn>
            <Eyebrow>Contato</Eyebrow>
          </FadeIn>
          <SplitText
            as="h1"
            className="mt-6 max-w-4xl text-5xl font-light tracking-tightest leading-[1] md:text-7xl lg:text-8xl"
            stagger={0.06}
          >
            Conte sobre o projeto.
          </SplitText>
          <FadeIn delay={0.3} className="mt-10 max-w-xl">
            <p className="text-base font-light leading-relaxed text-mist md:text-lg">
              Preencha o formulário ao lado e o envio abre o WhatsApp com a
              mensagem pronta. Resposta em até 24h.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="mx-auto grid max-w-content grid-cols-1 gap-16 px-6 md:grid-cols-12 md:gap-12 md:px-12 lg:px-20">
          <FadeIn className="md:col-span-7">
            <ContactForm />
          </FadeIn>

          <FadeIn className="md:col-span-5 md:border-l md:border-line md:pl-12">
            <div className="flex flex-col gap-10">
              <div>
                <Eyebrow>Email</Eyebrow>
                <a
                  href="mailto:contato@akirabrandstudio.com"
                  className="mt-3 block text-lg font-light text-bone transition-colors hover:text-mist"
                >
                  contato@akirabrandstudio.com
                </a>
              </div>

              <div>
                <Eyebrow>Instagram</Eyebrow>
                <a
                  href="https://www.instagram.com/akira.brands/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block text-lg font-light text-bone transition-colors hover:text-mist"
                >
                  @akira.brands
                </a>
              </div>

              <div>
                <Eyebrow>Cidade</Eyebrow>
                <p className="mt-3 text-lg font-light text-bone">
                  Espírito Santo · Brasil
                </p>
                <p className="mt-1 text-sm font-light text-mist">
                  Atendimento internacional
                </p>
              </div>

              <div>
                <Eyebrow>Investimento</Eyebrow>
                <p className="mt-3 text-base font-light leading-relaxed text-mist">
                  Projetos a partir de R$ 10.000. Cada escopo é construído sob
                  medida, dependendo do nível de profundidade estratégica.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
