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
      <p>Existe uma diferença concreta entre um projeto de identidade visual comum e um projeto high ticket — e ela quase nunca está no preço cobrado. Está no nível de profundidade estratégica, no rigor do processo e no que a marca entrega depois de pronta.</p>
      <h2>Profundidade estratégica</h2>
      <p>Projetos premium começam antes do design. Antes de discutir cor, tipo ou símbolo, é preciso entender o negócio, o mercado, a concorrência, o ticket médio e o tipo de cliente que a marca quer atrair. Sem isso, qualquer escolha visual é palpite — e palpites caros raramente sustentam posicionamento.</p>
      <p>O que muda em um projeto high ticket é o tempo dedicado a essa fase. Imersão, entrevistas com stakeholders, mapeamento de referências internacionais, leitura de tendências do segmento. É trabalho invisível para o cliente final, mas é o que separa uma marca que dura uma temporada de uma que pavimenta a próxima década.</p>
      <h2>Sistema, não logotipo</h2>
      <p>Marcas premium não entregam logo — entregam sistema. Tipografia, paleta, grid, princípios de composição, regras de aplicação, voz e tom. Um sistema bem construído permite que a marca se adapte a novos pontos de contato sem perder coerência, e dá ao time interno autonomia para crescer sem depender do estúdio a cada decisão.</p>
      <p>É por isso que esses projetos custam o que custam: não se está pagando por uma assinatura visual, mas por uma infraestrutura de marca que sustenta posicionamento, pricing e percepção de valor ao longo dos anos.</p>
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
      <p>Toda marca premium é, antes de qualquer coisa, uma história bem contada. Antes do logotipo, da paleta, do sistema visual, existe um trabalho silencioso de narrativa, posicionamento e tom de voz. Sem essa base, o design acaba virando maquiagem — bonita por fora, vazia por dentro.</p>
      <h2>Antes do logotipo</h2>
      <p>Quando começamos um projeto, a primeira pergunta nunca é "que cor a marca deve ter". É "o que essa marca acredita, para quem ela fala e por que alguém deveria escolhê-la em vez do concorrente". A resposta a essas perguntas é o que define cada decisão visual depois — não o contrário.</p>
      <p>Posicionamento define onde a marca joga. Narrativa define como ela conta sua história. Tom de voz define como ela soa em cada ponto de contato — do site ao e-mail de boas-vindas, do anúncio à embalagem. Os três precisam estar alinhados antes do primeiro esboço.</p>
      <h2>Voz como ativo</h2>
      <p>Marcas que constroem uma voz consistente economizam orçamento de mídia ao longo do tempo. Cada peça publicada reforça as anteriores, em vez de competir com elas. O reconhecimento deixa de depender apenas do logotipo e passa a viver também no jeito de escrever, no ritmo das frases, nas palavras que a marca escolhe — e nas que ela se recusa a usar.</p>
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
      <p>Cor chama atenção. Símbolo é lembrado. Mas é a tipografia que carrega o caráter de uma marca premium — e, justamente por ser menos óbvia, é a decisão que mais separa um projeto de identidade comum de um projeto verdadeiramente refinado.</p>
      <h2>Tipo como voz</h2>
      <p>A tipografia é a presença mais constante de uma marca. Está em cada parágrafo do site, em cada e-mail, em cada legenda, em cada documento interno. Antes do logotipo aparecer, é a fonte que comunica formalidade, calor, contemporaneidade ou tradição. Escolher mal um tipo é condenar a marca a soar diferente do que ela quer ser, milhares de vezes por dia.</p>
      <h2>Escolher ou desenhar</h2>
      <p>Para a maioria dos projetos, escolher tipografias certas — uma serifa com personalidade para títulos, uma sem-serifa precisa para texto corrido — resolve com elegância. Mas para marcas que querem ocupar um território único, desenhar uma tipografia exclusiva passa a ser investimento estratégico: cria diferenciação real, protege a marca de comparações diretas e gera um ativo que pertence só a ela.</p>
      <p>Em qualquer um dos caminhos, a regra é a mesma: tipografia em projetos premium não é uma escolha estética isolada. É uma decisão de posicionamento que conversa com cada outra peça do sistema de marca.</p>
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
