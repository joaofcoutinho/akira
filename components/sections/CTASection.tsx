'use client';

import { FadeIn } from '@/components/animations/FadeIn';
import { SplitText } from '@/components/animations/SplitText';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { WaveTexture } from '@/components/ui/WaveTexture';
import { whatsappLink } from '@/lib/whatsapp';

export function CTASection() {
  return (
    <section className="relative overflow-hidden border-t border-line bg-forest-900/30 py-32 md:py-44 lg:py-52">
      <WaveTexture intensity="medium" />

      <div className="relative mx-auto max-w-content px-6 text-center md:px-12 lg:px-20">
        <FadeIn>
          <Eyebrow>Vamos conversar</Eyebrow>
        </FadeIn>

        <SplitText
          as="h2"
          className="mx-auto mt-8 max-w-4xl text-5xl font-light tracking-tightest leading-[1] md:text-7xl lg:text-8xl"
          stagger={0.07}
        >
          Vamos construir uma marca que vende?
        </SplitText>

        <FadeIn delay={0.3} className="mx-auto mt-8 max-w-xl">
          <p className="text-base font-light leading-relaxed text-mist md:text-lg">
            Projetos de branding com atendimento direto. Conte sobre
            o seu negócio — respondemos rápido.
          </p>
        </FadeIn>

        <FadeIn delay={0.5} className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            href={whatsappLink('Olá Akira, vi o site e quero conversar sobre um projeto.')}
            external
            variant="primary"
            size="lg"
          >
            Iniciar pelo WhatsApp
          </Button>
          <Button href="/contato" variant="outline" size="lg">
            Preencher formulário
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
