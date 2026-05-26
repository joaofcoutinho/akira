import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FadeIn } from '@/components/animations/FadeIn';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { posts, findPostBySlug, formatDate } from '@/lib/posts';

// NOTE: Conteúdo do post está estático (HTML em lib/posts.ts).
// Quando o cliente quiser usar MDX, ler /content/posts/[slug].mdx
// e renderizar com next-mdx-remote (substituir o dangerouslySetInnerHTML).

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = findPostBySlug(slug);
  if (!post) return { title: 'Post não encontrado' };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.cover }],
      type: 'article',
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = findPostBySlug(slug);
  if (!post) notFound();

  return (
    <article>
      <header className="relative overflow-hidden pt-40 pb-16 md:pt-52 md:pb-20">
        <div className="mx-auto max-w-content px-6 md:px-12 lg:px-20">
          <FadeIn>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-mist transition-colors hover:text-bone"
            >
              <span aria-hidden>←</span> Voltar para o blog
            </Link>
          </FadeIn>

          <FadeIn delay={0.1} className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-mist">
            <span>{post.category}</span>
            <span aria-hidden>·</span>
            <span>{formatDate(post.date)}</span>
            <span aria-hidden>·</span>
            <span>{post.readingTime}</span>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="mt-6 max-w-3xl text-4xl font-light leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              {post.title}
            </h1>
          </FadeIn>

          <FadeIn delay={0.3} className="mt-10 overflow-hidden rounded-xl border border-line bg-forest-900">
            <div className="relative aspect-[16/9]">
              <Image
                src={post.cover}
                alt={post.title}
                fill
                sizes="(min-width: 1280px) 1200px, 100vw"
                priority
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </header>

      <section className="relative pb-32">
        <div className="mx-auto max-w-2xl px-6 md:px-0">
          <FadeIn>
            <div
              className="prose-akira space-y-6 text-base font-light leading-[1.8] text-bone md:text-lg"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </FadeIn>
        </div>
      </section>

      <section className="relative border-t border-line py-20">
        <div className="mx-auto max-w-content px-6 md:px-12 lg:px-20">
          <FadeIn className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Continuar lendo</Eyebrow>
              <h2 className="mt-3 text-3xl font-light tracking-tight md:text-4xl">
                Outros artigos
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-xs uppercase tracking-[0.2em] text-mist transition-colors hover:text-bone"
            >
              Ver todos →
            </Link>
          </FadeIn>

          <FadeIn
            as="ul"
            stagger={0.08}
            className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {posts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 3)
              .map((p) => (
                <li key={p.slug} data-stagger>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="group block overflow-hidden rounded-xl border border-line bg-forest-900 transition-colors hover:border-forest-700"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={p.cover}
                        alt={p.title}
                        fill
                        sizes="(min-width: 1024px) 30vw, 45vw"
                        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="flex flex-col gap-3 p-6">
                      <p className="text-xs uppercase tracking-[0.18em] text-mist">
                        {p.category}
                      </p>
                      <h3 className="text-lg font-light leading-snug tracking-tight text-bone md:text-xl">
                        {p.title}
                      </h3>
                    </div>
                  </Link>
                </li>
              ))}
          </FadeIn>
        </div>
      </section>
    </article>
  );
}
