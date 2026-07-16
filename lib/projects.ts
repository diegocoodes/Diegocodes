export type ProjectVisual = {
  label: string;
  description: string;
  src: string;
  alt: string;
  format: "desktop" | "section";
  className?: string;
};

export type PortfolioProject = {
  slug: string;
  name: string;
  liveUrl?: string;
  status: string;
  niche: string;
  service: string;
  goal: string;
  year?: string;
  shortDescription: string;
  cardDescription: string;
  resultSummary: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  visuals: ProjectVisual[];
  imageSrc: string;
  imageAlt: string;
  imageClassName?: string;
  metaTitle: string;
  metaDescription: string;
  testimonial?: string;
};

export const portfolioProjects = [
  {
    slug: "matheus-personal",
    name: "Matheus Personal",
    liveUrl: "https://teama.vercel.app",
    status: "Ao vivo",
    niche: "Personal trainer",
    service: "Landing page profissional",
    goal: "Apresentar acompanhamento fitness e gerar contatos pelo WhatsApp",
    shortDescription:
      "Landing page desenvolvida para apresentar o trabalho do personal trainer, organizar planos e facilitar o contato com interessados.",
    cardDescription:
      "Página fitness com visual forte, planos claros e CTA para WhatsApp.",
    resultSummary:
      "O projeto deixou a oferta mais organizada, com uma apresentação profissional e um caminho direto para novos contatos.",
    challenge:
      "O projeto precisava comunicar a proposta do personal trainer com clareza, mostrar autoridade visual e conduzir o visitante para o contato sem deixar a página pesada.",
    solution:
      "Foi criada uma landing page responsiva com apresentação do profissional, destaque para evolução física, seção de planos, chamada direta para WhatsApp e estrutura preparada para divulgação.",
    deliverables: [
      "Design responsivo",
      "Página inicial estratégica",
      "Botões para WhatsApp",
      "Apresentação do profissional",
      "Seção de planos",
      "Prova visual",
      "SEO básico",
      "Publicação do site",
    ],
    visuals: [
      {
        label: "Versão desktop",
        description: "Prévia principal da landing page fitness.",
        src: "/projects/matheus-personal.png",
        alt: "Prévia desktop do projeto Matheus Personal.",
        format: "desktop",
        className: "object-top",
      },
    ],
    imageSrc: "/projects/matheus-personal.png",
    imageAlt:
      "Prévia do projeto Matheus Personal com landing page fitness e destaque azul.",
    imageClassName: "object-top",
    metaTitle: "Landing page para personal trainer | Projeto Matheus Personal",
    metaDescription:
      "Conheça o projeto de landing page profissional desenvolvido para Matheus Personal, com foco em apresentação fitness, planos e contato pelo WhatsApp.",
  },
  {
    slug: "holanda-personal",
    name: "Holanda Personal",
    liveUrl: "https://holandapersonal.vercel.app",
    status: "Ao vivo",
    niche: "Coach fitness",
    service: "Landing page premium",
    goal: "Apresentar consultoria fitness com mais valor percebido",
    shortDescription:
      "Página premium para apresentar consultoria, método de acompanhamento e caminho direto para conversa.",
    cardDescription:
      "Página premium para vender consultoria e acompanhamento.",
    resultSummary:
      "A marca ganhou uma apresentação mais forte, com informações organizadas e foco em contato direto.",
    challenge:
      "O cliente precisava comunicar a consultoria fitness de forma mais profissional, explicando o método e reduzindo dúvidas antes do primeiro contato.",
    solution:
      "Foi desenvolvida uma página responsiva com visual alinhado ao posicionamento do profissional, apresentação da metodologia, seções de convencimento e CTA para WhatsApp.",
    deliverables: [
      "Design responsivo",
      "Página inicial estratégica",
      "Botões para WhatsApp",
      "Seção de método",
      "Seção de benefícios",
      "Prova visual",
      "SEO básico",
      "Publicação do site",
    ],
    visuals: [
      {
        label: "Versão desktop",
        description: "Prévia principal da página premium fitness.",
        src: "/projects/holanda-personal-cover.png",
        alt: "Prévia desktop do projeto Holanda Personal.",
        format: "desktop",
        className: "object-center",
      },
    ],
    imageSrc: "/projects/holanda-personal-cover.png",
    imageAlt:
      "Prévia do projeto Holanda Personal com identidade preta e laranja.",
    imageClassName: "object-center",
    metaTitle: "Landing page para coach fitness | Projeto Holanda Personal",
    metaDescription:
      "Conheça o projeto de landing page premium desenvolvido para Holanda Personal, com foco em consultoria fitness, confiança e contato pelo WhatsApp.",
  },
  {
    slug: "rastromoville",
    name: "RastroMoville",
    liveUrl: "https://rastromoville.vercel.app",
    status: "Ao vivo",
    niche: "Rastreamento veicular",
    service: "Site institucional",
    goal: "Passar mais confiança e gerar contatos",
    year: "2025",
    shortDescription:
      "Site institucional desenvolvido para apresentar serviços, transmitir confiança e facilitar contato pelo WhatsApp.",
    cardDescription:
      "Apresentação digital para tecnologia, rotas e desempenho.",
    resultSummary:
      "Com o novo site, o cliente passou a ter uma página própria para apresentar seus serviços, enviar para interessados e usar como link oficial no Instagram, Google e WhatsApp.",
    challenge:
      "O cliente precisava de uma presença online mais profissional para apresentar seus serviços, organizar as informações da empresa e facilitar o contato de possíveis clientes.",
    solution:
      "Foi desenvolvido um site responsivo com apresentação da empresa, benefícios do serviço, botão direto para WhatsApp, identidade visual alinhada à marca e estrutura preparada para divulgação no Google e Instagram.",
    deliverables: [
      "Design responsivo",
      "Página inicial estratégica",
      "Botões para WhatsApp",
      "Seção de serviços",
      "Seção de benefícios",
      "Galeria de imagens",
      "FAQ",
      "SEO básico",
      "Publicação do site",
    ],
    visuals: [
      {
        label: "Versão desktop",
        description: "Prévia principal do site institucional.",
        src: "/projects/rastromoville-cover.png",
        alt: "Prévia desktop do projeto RastroMoville.",
        format: "desktop",
        className: "object-center",
      },
    ],
    imageSrc: "/projects/rastromoville-cover.png",
    imageAlt:
      "Prévia do projeto RastroMoville com visão aérea de caminhões e contêineres.",
    imageClassName: "object-center",
    metaTitle:
      "Site para empresa de rastreamento veicular | Projeto RastroMoville",
    metaDescription:
      "Conheça o projeto de site profissional desenvolvido para a RastroMoville, com foco em apresentação de serviços, confiança e contato pelo WhatsApp.",
    testimonial:
      "Projeto com percepção profissional, cuidado na entrega e identidade alinhada à marca.",
  },
  {
    slug: "neurops",
    name: "NeuroPS",
    liveUrl: "https://neurops-tattooo.vercel.app",
    status: "Ao vivo",
    niche: "Agenda e portfólio",
    service: "Portfólio com agendamento",
    goal: "Apresentar trabalhos e facilitar pedidos de agenda",
    shortDescription:
      "Portfólio visual criado para organizar trabalhos, fortalecer a percepção profissional e facilitar o agendamento.",
    cardDescription:
      "Portfólio visual com agendamento e contato direto.",
    resultSummary:
      "O trabalho ficou mais fácil de apresentar, com portfólio organizado e caminho claro para agendamento.",
    challenge:
      "O projeto precisava valorizar a parte visual do trabalho e transformar o interesse do visitante em um contato mais simples.",
    solution:
      "Foi criado um portfólio responsivo com destaque para imagens, apresentação objetiva, seções de prova visual e chamadas para contato direto.",
    deliverables: [
      "Design responsivo",
      "Portfólio visual",
      "Botões para WhatsApp",
      "Seção de trabalhos",
      "Seção de benefícios",
      "Galeria de imagens",
      "SEO básico",
      "Publicação do site",
    ],
    visuals: [
      {
        label: "Versão desktop",
        description: "Prévia principal do portfólio visual.",
        src: "/projects/neurops-cover.png",
        alt: "Prévia desktop do projeto NeuroPS.",
        format: "desktop",
        className: "object-center",
      },
    ],
    imageSrc: "/projects/neurops-cover.png",
    imageAlt:
      "Prévia do projeto NeuroPS Tattoo com layout escuro e destaque laranja.",
    imageClassName: "object-center",
    metaTitle: "Portfólio com agendamento | Projeto NeuroPS",
    metaDescription:
      "Conheça o projeto de portfólio visual desenvolvido para NeuroPS, com foco em apresentação profissional, prova visual e contato direto.",
  },
  {
    slug: "pernambuco-em-foco",
    name: "Pernambuco em Foco",
    liveUrl: "https://pernambucoemfoco.vercel.app",
    status: "Ao vivo",
    niche: "Portal de conteúdo",
    service: "Site de conteúdo",
    goal: "Organizar informações locais para busca e leitura rápida",
    shortDescription:
      "Portal de conteúdo local com estrutura para leitura, navegação e divulgação de experiências em Pernambuco.",
    cardDescription:
      "Conteúdo local organizado para busca e leitura rápida.",
    resultSummary:
      "O projeto deixou as experiências locais mais organizadas, com uma página própria para consulta e compartilhamento.",
    challenge:
      "O conteúdo precisava sair de uma apresentação solta e ganhar uma estrutura mais fácil de navegar, ler e compartilhar.",
    solution:
      "Foi desenvolvido um portal responsivo com chamadas visuais, organização por temas, leitura clara e estrutura básica para descoberta por busca.",
    deliverables: [
      "Design responsivo",
      "Página inicial estratégica",
      "Organização de conteúdo",
      "Seções por tema",
      "Cards de experiências",
      "Imagens de apoio",
      "SEO básico",
      "Publicação do site",
    ],
    visuals: [
      {
        label: "Versão desktop",
        description: "Prévia principal do portal de conteúdo.",
        src: "/projects/pernambuco-em-foco-cover.png",
        alt: "Prévia desktop do projeto Pernambuco em Foco.",
        format: "desktop",
        className: "object-center",
      },
    ],
    imageSrc: "/projects/pernambuco-em-foco-cover.png",
    imageAlt:
      "Prévia do projeto Pernambuco em Foco com praia e identidade visual do portal.",
    imageClassName: "object-center",
    metaTitle: "Portal de conteúdo local | Projeto Pernambuco em Foco",
    metaDescription:
      "Conheça o projeto Pernambuco em Foco, um portal de conteúdo local com foco em organização, leitura rápida e presença digital.",
  },
] as const satisfies readonly PortfolioProject[];

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((project) => project.slug === slug);
}

export function getProjectPath(project: Pick<PortfolioProject, "slug">) {
  return `/projetos/${project.slug}`;
}
