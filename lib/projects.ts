export type ProjectCategory =
  | 'Identidade Visual'
  | 'Branding'
  | 'Naming'
  | 'Rebranding'
  | 'Embalagem';

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  client: string;
  year: string;
  cover: string;
  gallery: string[];
  description: string;
  services: string[];
};

// Mock data. Imagens vão ser substituídas pelo cliente.
// Unsplash usado como placeholder elegante (mockups branding dark).
const u = (id: string, w = 1600, h = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const projects: Project[] = [
  {
    id: 'p01',
    slug: 'projeto-aurum',
    title: 'Aurum',
    category: 'Identidade Visual',
    client: 'Cliente Confidencial',
    year: '2025',
    cover: u('photo-1560472354-b33ff0c44a43'),
    gallery: [
      u('photo-1560472354-b33ff0c44a43'),
      u('photo-1586717791821-3f44a563fa4c'),
      u('photo-1620207418302-439b387441b0'),
    ],
    description:
      'Construção completa de identidade visual para marca de luxo no segmento joalheiro. Sistema flexível e atemporal.',
    services: ['Identidade Visual', 'Direção de Arte', 'Manual de Marca'],
  },
  {
    id: 'p02',
    slug: 'projeto-noir',
    title: 'Noir',
    category: 'Branding',
    client: 'Cliente Confidencial',
    year: '2025',
    cover: u('photo-1542353436-312f0e1f67ff'),
    gallery: [
      u('photo-1542353436-312f0e1f67ff'),
      u('photo-1611532736597-de2d4265fba3'),
      u('photo-1606293459339-aa5d34a7b0e1'),
    ],
    description:
      'Estratégia e identidade para marca de hospitality high-end. Posicionamento, naming refinement e sistema visual.',
    services: ['Estratégia de Marca', 'Identidade Visual', 'Aplicações'],
  },
  {
    id: 'p03',
    slug: 'projeto-velario',
    title: 'Velário',
    category: 'Rebranding',
    client: 'Cliente Confidencial',
    year: '2024',
    cover: u('photo-1558655146-9f40138edfeb'),
    gallery: [
      u('photo-1558655146-9f40138edfeb'),
      u('photo-1560472354-b33ff0c44a43'),
      u('photo-1586717791821-3f44a563fa4c'),
    ],
    description:
      'Rebranding executivo para grupo internacional. Atualização do sistema visual sem perder o legado da marca original.',
    services: ['Rebranding', 'Sistema Visual', 'Guidelines'],
  },
  {
    id: 'p04',
    slug: 'projeto-koban',
    title: 'Koban',
    category: 'Identidade Visual',
    client: 'Cliente Confidencial',
    year: '2024',
    cover: u('photo-1620207418302-439b387441b0'),
    gallery: [
      u('photo-1620207418302-439b387441b0'),
      u('photo-1611532736597-de2d4265fba3'),
      u('photo-1542353436-312f0e1f67ff'),
    ],
    description:
      'Identidade visual para estúdio de arquitetura. Tipografia construída sob medida e sistema modular.',
    services: ['Identidade Visual', 'Tipografia Custom'],
  },
  {
    id: 'p05',
    slug: 'projeto-vinea',
    title: 'Vinea',
    category: 'Embalagem',
    client: 'Cliente Confidencial',
    year: '2024',
    cover: u('photo-1586717791821-3f44a563fa4c'),
    gallery: [
      u('photo-1586717791821-3f44a563fa4c'),
      u('photo-1558655146-9f40138edfeb'),
      u('photo-1620207418302-439b387441b0'),
    ],
    description:
      'Design de embalagem premium para linha de produtos selecionados. Acabamento sofisticado, hierarquia limpa.',
    services: ['Packaging', 'Direção de Arte'],
  },
  {
    id: 'p06',
    slug: 'projeto-mareh',
    title: 'Marêh',
    category: 'Naming',
    client: 'Cliente Confidencial',
    year: '2023',
    cover: u('photo-1611532736597-de2d4265fba3'),
    gallery: [
      u('photo-1611532736597-de2d4265fba3'),
      u('photo-1542353436-312f0e1f67ff'),
      u('photo-1560472354-b33ff0c44a43'),
    ],
    description:
      'Naming e identidade verbal para marca de cosméticos premium. Universo narrativo e tom de voz.',
    services: ['Naming', 'Identidade Verbal'],
  },
  {
    id: 'p07',
    slug: 'projeto-orion',
    title: 'Orion',
    category: 'Branding',
    client: 'Cliente Confidencial',
    year: '2023',
    cover: u('photo-1606293459339-aa5d34a7b0e1'),
    gallery: [
      u('photo-1606293459339-aa5d34a7b0e1'),
      u('photo-1620207418302-439b387441b0'),
      u('photo-1586717791821-3f44a563fa4c'),
    ],
    description:
      'Marca corporativa para grupo do setor financeiro. Construção de autoridade, sobriedade e modernidade.',
    services: ['Branding', 'Identidade Visual', 'Sistema'],
  },
  {
    id: 'p08',
    slug: 'projeto-saude-pura',
    title: 'Saúde Pura',
    category: 'Rebranding',
    client: 'Cliente Confidencial',
    year: '2023',
    cover: u('photo-1560472354-b33ff0c44a43'),
    gallery: [
      u('photo-1560472354-b33ff0c44a43'),
      u('photo-1542353436-312f0e1f67ff'),
      u('photo-1558655146-9f40138edfeb'),
    ],
    description:
      'Rebranding completo para rede de wellness premium. Posicionamento, identidade e aplicações.',
    services: ['Rebranding', 'Estratégia', 'Aplicações'],
  },
  {
    id: 'p09',
    slug: 'projeto-cantera',
    title: 'Cantera',
    category: 'Identidade Visual',
    client: 'Cliente Confidencial',
    year: '2022',
    cover: u('photo-1558655146-9f40138edfeb'),
    gallery: [
      u('photo-1558655146-9f40138edfeb'),
      u('photo-1606293459339-aa5d34a7b0e1'),
      u('photo-1611532736597-de2d4265fba3'),
    ],
    description:
      'Identidade para galeria de arte. Sistema gráfico flexível para curadoria rotativa.',
    services: ['Identidade Visual', 'Editorial'],
  },
];

export const featuredProjects = projects.slice(0, 6);

export const projectCategories: ProjectCategory[] = [
  'Branding',
  'Identidade Visual',
  'Rebranding',
  'Naming',
  'Embalagem',
];

export const findProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
