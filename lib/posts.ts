// Mock estático do blog. Quando o cliente quiser plugar MDX,
// substituir esse módulo por leitura de /content/posts/*.mdx via
// fs + gray-matter (ou next-mdx-remote). Manter o shape do `Post`.

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  cover: string;
  content: string;
};

const u = (id: string, w = 1600, h = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const posts: Post[] = [
  {
    slug: 'branding-high-ticket-o-que-muda',
    title: 'Branding high ticket: o que muda em projetos premium',
    excerpt:
      'A diferença entre um projeto de identidade visual comum e um projeto high ticket não está no preço — está no nível de profundidade estratégica.',
    category: 'Estratégia',
    date: '2025-11-12',
    readingTime: '6 min',
    cover: u('photo-1600585154340-be6161a56a0c'),
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. O texto deste post é apenas um placeholder elegante. O conteúdo real será escrito pelo cliente.</p>
      <h2>Profundidade estratégica</h2>
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.</p>
      <p>Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
      <h2>Sistema, não logotipo</h2>
      <p>Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.</p>
    `,
  },
  {
    slug: 'narrativa-de-marca-e-tom-de-voz',
    title: 'Narrativa de marca e tom de voz: o que precede o visual',
    excerpt:
      'Antes do logotipo, da paleta, do sistema visual — uma marca precisa de história, posicionamento e tom. Sem isso, o design vira maquiagem.',
    category: 'Estratégia',
    date: '2025-10-28',
    readingTime: '5 min',
    cover: u('photo-1542353436-312f0e1f67ff'),
    content: `
      <p>Placeholder de conteúdo. Texto real será definido pelo cliente.</p>
      <h2>Antes do logotipo</h2>
      <p>Nulla porttitor accumsan tincidunt. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
      <p>Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh.</p>
    `,
  },
  {
    slug: 'tipografia-em-marcas-premium',
    title: 'Tipografia em marcas premium: a decisão menos óbvia',
    excerpt:
      'Mais do que cor, mais do que símbolo — a tipografia carrega o caráter de uma marca premium. Escolhê-la (ou desenhá-la) é decisão estratégica.',
    category: 'Design',
    date: '2025-10-09',
    readingTime: '7 min',
    cover: u('photo-1611532736597-de2d4265fba3'),
    content: `
      <p>Placeholder de conteúdo do post sobre tipografia.</p>
      <h2>Tipo como voz</h2>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
      <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
    `,
  },
];

export const findPostBySlug = (slug: string) =>
  posts.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
