import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FadeIn } from '@/components/animations/FadeIn';
import { SplitText } from '@/components/animations/SplitText';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { WaveTexture } from '@/components/ui/WaveTexture';
import { posts, formatDate } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Artigos sobre branding, identidade visual e estratégia de marca premium.',
};

export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-16 md:pt-52 md:pb-20">
        <WaveTexture intensity="subtle" />

        <div className="relative mx-auto max-w-content px-6 md:px-12 lg:px-20">
          <FadeIn>
            <Eyebrow>Blog</Eyebrow>
          </FadeIn>
          <SplitText
            as="h1"
            className="mt-6 max-w-4xl text-5xl font-light tracking-tightest leading-[1] md:text-7xl lg:text-8xl"
            stagger={0.06}
          >
            Notas sobre marca e estratégia.
          </SplitText>
        </div>
      </section>

      <section className="relative py-16 md:py-20">
        <div className="mx-auto max-w-content px-6 md:px-12 lg:px-20">
          <FadeIn
            as="ul"
            stagger={0.08}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {posts.map((post) => (
              <li key={post.slug} data-stagger>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group relative block overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-forest-900/70 via-forest-900/40 to-forest-800/30 backdrop-blur-2xl transition-colors hover:border-white/[0.16]"
                >
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    aria-hidden
                  />
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={post.cover}
                      alt={post.title}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="relative flex flex-col gap-4 p-6 md:p-7">
                    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-mist">
                      <span>{post.category}</span>
                      <span aria-hidden>·</span>
                      <span>{post.readingTime}</span>
                    </div>
                    <h2 className="text-xl font-light leading-snug tracking-tight text-bone md:text-2xl">
                      {post.title}
                    </h2>
                    <p className="text-sm font-light leading-relaxed text-mist line-clamp-3">
                      {post.excerpt}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-mist">
                      {formatDate(post.date)}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </FadeIn>
        </div>
      </section>
    </>
  );
}
