export type ProjectVisual = {
  label: string;
  description: string;
  src: string;
  alt: string;
  format: "desktop" | "section";
  className?: string;
};

export type PortfolioProject = {
  featuredOnHome?: boolean;
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
  cardProblem: string;
  cardSolution: string;
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
    slug: "retem-peliculas",
    name: "Retém Películas",
    liveUrl: "https://retempeliculas.com.br/",
    status: "Ao vivo",
    niche: "Películas e estética premium",
    service: "Portal institucional",
    goal: "Apresentar as duas frentes da marca e direcionar cada visitante para o atendimento certo",
    shortDescription:
      "Portal da Retém que apresenta a estética premium e a loja distribuidora, com caminhos próprios para cada público.",
    cardDescription:
      "Uma entrada para duas experiências: estética premium e distribuição de películas.",
    cardProblem:
      "Diferenciar o atendimento ao consumidor e a distribuição para profissionais em uma mesma marca.",
    cardSolution:
      "Portal de entrada com duas opções claras, apresentação visual de cada frente e navegação direta.",
    resultSummary:
      "O visitante encontra os dois caminhos da Retém e escolhe entre os serviços de estética premium e a loja distribuidora.",
    challenge:
      "Organizar a apresentação de uma marca que atende tanto quem procura proteção e estética quanto os profissionais que aplicam películas.",
    solution:
      "Uma página de entrada que separa as duas experiências, explica a proposta de cada uma e direciona o visitante para o site da Retém ou para a loja.",
    deliverables: [
      "Design responsivo",
      "Portal de entrada",
      "Apresentação das duas frentes",
      "Identidade visual aplicada",
      "Navegação por público",
    ],
    visuals: [
      {
        label: "Versão desktop",
        description: "Captura da página de entrada da Retém Películas.",
        src: "/projects/retem-peliculas-hero.webp",
        alt: "Portal da Retém com opções para estética premium e loja distribuidora.",
        format: "desktop",
        className: "object-top",
      },
    ],
    imageSrc: "/projects/retem-peliculas-hero.webp",
    imageAlt:
      "Página de entrada da Retém Películas com duas experiências para consumidores e profissionais.",
    imageClassName: "object-top",
    metaTitle: "Portal para películas e estética premium | Projeto Retém",
    metaDescription:
      "Conheça o portal Retém Películas, com apresentação da estética premium e da loja distribuidora e navegação para cada público.",
  },
  {
    slug: "universo-mkt",
    name: "Universo Marketing",
    liveUrl: "https://universomkt.com.br/",
    status: "Ao vivo",
    niche: "Marketing digital",
    service: "Site institucional",
    goal: "Apresentar as soluções da agência e facilitar novas conversas comerciais",
    shortDescription:
      "Site de agência com apresentação de estratégia, mídia, conteúdo e tecnologia, além de caminhos para contato e reunião.",
    cardDescription:
      "Estratégia, mídia e tecnologia em um site com identidade própria e caminhos claros para contato.",
    cardProblem:
      "Apresentar diferentes serviços de marketing em uma experiência fácil de entender.",
    cardSolution:
      "Site organizado por soluções, com navegação direta e chamadas para iniciar uma conversa.",
    resultSummary:
      "As frentes de atuação da agência ficam reunidas em um endereço, com apresentação dos serviços e opções de contato.",
    challenge:
      "Comunicar a atuação da agência em marketing e tecnologia, organizando as soluções e os caminhos para quem chega ao site.",
    solution:
      "Uma apresentação com identidade escura e amarela, seções para as soluções de marketing e tecnologia e chamadas para formulário, reunião e conversa.",
    deliverables: [
      "Design responsivo",
      "Apresentação de serviços",
      "Identidade visual aplicada",
      "Navegação por seções",
      "Chamadas para contato",
    ],
    visuals: [
      {
        label: "Versão desktop",
        description: "Captura da seção inicial do site Universo Marketing.",
        src: "/projects/universo-mkt-hero.webp",
        alt: "Seção inicial do site Universo Marketing com identidade preta e amarela.",
        format: "desktop",
        className: "object-top",
      },
    ],
    imageSrc: "/projects/universo-mkt-hero.webp",
    imageAlt:
      "Hero do site Universo Marketing com apresentação da agência em preto e amarelo.",
    imageClassName: "object-top",
    metaTitle: "Site para agência de marketing | Projeto Universo Marketing",
    metaDescription:
      "Conheça o site Universo Marketing, com apresentação de serviços de estratégia, mídia, conteúdo e tecnologia e caminhos para contato.",
  },
  {
    slug: "fcar-garage",
    name: "Fcar Garage",
    liveUrl: "https://fcargarage.com.br/",
    status: "Ao vivo",
    niche: "Estética automotiva",
    service: "Site institucional",
    goal: "Apresentar os cuidados automotivos e facilitar pedidos de orçamento",
    shortDescription:
      "Site de estética automotiva com destaque para o veículo, apresentação dos serviços, avaliações e solicitação de orçamento.",
    cardDescription:
      "Visual preto e vermelho para apresentar cuidados automotivos e facilitar pedidos de orçamento.",
    cardProblem:
      "Explicar os serviços de estética automotiva e orientar o visitante até o orçamento.",
    cardSolution:
      "Apresentação visual do negócio, serviços organizados e formulário com continuidade pelo WhatsApp.",
    resultSummary:
      "Os serviços, as avaliações e o contato ficam reunidos em uma página dedicada à Fcar Garage.",
    challenge:
      "Valorizar a identidade da empresa e explicar as opções de proteção, acabamento e cuidado com o veículo de forma acessível.",
    solution:
      "Um site com carro em destaque na abertura, informações sobre cada serviço, avaliações e formulário para iniciar um atendimento pelo WhatsApp.",
    deliverables: [
      "Design responsivo",
      "Seção de serviços",
      "Avaliações de clientes",
      "Formulário de orçamento",
      "Contato pelo WhatsApp",
    ],
    visuals: [
      {
        label: "Versão desktop",
        description: "Captura da seção inicial do site Fcar Garage.",
        src: "/projects/fcar-garage-hero.webp",
        alt: "Seção inicial da Fcar Garage com carro esportivo vermelho sobre fundo escuro.",
        format: "desktop",
        className: "object-top",
      },
    ],
    imageSrc: "/projects/fcar-garage-hero.webp",
    imageAlt:
      "Hero da Fcar Garage com carro vermelho, serviços automotivos e botão de orçamento.",
    imageClassName: "object-top",
    metaTitle: "Site para estética automotiva | Projeto Fcar Garage",
    metaDescription:
      "Conheça o site Fcar Garage, com serviços de estética automotiva, avaliações e formulário para solicitação de orçamento pelo WhatsApp.",
  },
  {
    slug: "omj",
    name: "OMJ Estética Automotiva",
    liveUrl: "https://omj-esteticaautomotiva.com.br/",
    status: "Ao vivo",
    niche: "Estética automotiva",
    service: "Site institucional",
    goal: "Apresentar serviços, mostrar trabalhos e receber pedidos de orçamento",
    shortDescription:
      "Site automotivo com identidade preta e verde, apresentação dos tratamentos, trabalhos selecionados e contato direto.",
    cardDescription:
      "Serviços e trabalhos automotivos em uma experiência visual com preto, verde e foco no acabamento.",
    cardProblem:
      "Apresentar tratamentos de proteção e estética e valorizar visualmente os trabalhos da empresa.",
    cardSolution:
      "Serviços organizados, galeria de projetos e chamadas para orçamento pelo WhatsApp.",
    resultSummary:
      "A OMJ conta com uma apresentação dos serviços e dos veículos atendidos, conectada ao canal de orçamento.",
    challenge:
      "Traduzir o cuidado com o acabamento dos veículos em uma presença digital que também explique os tratamentos disponíveis.",
    solution:
      "Um site com abertura de impacto, identidade preta e verde, seções para vitrificação, PPF, películas e detalhamento, além de trabalhos selecionados.",
    deliverables: [
      "Design responsivo",
      "Apresentação de serviços",
      "Galeria de projetos",
      "Identidade visual aplicada",
      "Contato pelo WhatsApp",
    ],
    visuals: [
      {
        label: "Versão desktop",
        description:
          "Captura da seção inicial do site OMJ Estética Automotiva.",
        src: "/projects/omj-hero.webp",
        alt: "Seção inicial da OMJ com carro verde e chamada para estética automotiva.",
        format: "desktop",
        className: "object-top",
      },
    ],
    imageSrc: "/projects/omj-hero.webp",
    imageAlt:
      "Hero da OMJ Estética Automotiva com carro verde e chamada para orçamento.",
    imageClassName: "object-top",
    metaTitle: "Site para estética automotiva | Projeto OMJ",
    metaDescription:
      "Conheça o site OMJ Estética Automotiva, com serviços de detailing, PPF, vitrificação, trabalhos selecionados e contato pelo WhatsApp.",
  },
  {
    slug: "astux-shops",
    name: "ASTUX Estética Automotiva",
    liveUrl: "https://astuxshops.vercel.app/",
    status: "Ao vivo",
    niche: "Estética automotiva",
    service: "Site institucional",
    goal: "Apresentar serviços de proteção automotiva e facilitar o contato para orçamento",
    shortDescription:
      "Site de estética e proteção automotiva com apresentação dos serviços, resultados e localização em Boa Viagem, Recife.",
    cardDescription:
      "Proteção e estética automotiva em um site com serviços, resultados e identidade visual marcante.",
    cardProblem:
      "Organizar os serviços e mostrar o cuidado da empresa com a proteção e o acabamento dos veículos.",
    cardSolution:
      "Página com serviços detalhados, apresentação da empresa, resultados e contato para orçamento.",
    resultSummary:
      "A apresentação digital reúne os serviços, as informações da empresa e a localização em uma navegação por seções.",
    challenge:
      "Comunicar a especialização em proteção automotiva e ajudar o visitante a encontrar os serviços e os canais de atendimento.",
    solution:
      "Um site com abertura visual, seções para PPF, vitrificação, películas e detalhamento, informações sobre a empresa e caminhos para orçamento.",
    deliverables: [
      "Design responsivo",
      "Apresentação de serviços",
      "Seção de resultados",
      "Informações de localização",
      "Chamadas para orçamento",
    ],
    visuals: [
      {
        label: "Versão desktop",
        description:
          "Captura da seção inicial do site ASTUX Estética Automotiva.",
        src: "/projects/astux-shops-hero.webp",
        alt: "Seção inicial do site ASTUX com apresentação de proteção e estética automotiva.",
        format: "desktop",
        className: "object-top",
      },
    ],
    imageSrc: "/projects/astux-shops-hero.webp",
    imageAlt:
      "Hero da ASTUX Estética Automotiva com serviços de proteção e chamada para orçamento.",
    imageClassName: "object-top",
    metaTitle: "Site para estética automotiva | Projeto ASTUX",
    metaDescription:
      "Conheça o site ASTUX Estética Automotiva, com apresentação de PPF, vitrificação, detailing, resultados e localização em Recife.",
  },
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
    cardProblem:
      "Apresentar o acompanhamento fitness e organizar os planos em uma página profissional.",
    cardSolution:
      "Landing page com oferta clara, prova visual e caminho direto para contato.",
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
    featuredOnHome: false,
    name: "Holanda Personal",
    liveUrl: "https://holandapersonal.vercel.app",
    status: "Ao vivo",
    niche: "Coach fitness",
    service: "Landing page premium",
    goal: "Apresentar consultoria fitness com mais valor percebido",
    shortDescription:
      "Página premium para apresentar consultoria, método de acompanhamento e caminho direto para conversa.",
    cardDescription: "Página premium para vender consultoria e acompanhamento.",
    cardProblem:
      "Explicar a consultoria, o método e os benefícios antes do primeiro contato.",
    cardSolution:
      "Página responsiva com posicionamento premium e jornada objetiva de conversão.",
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
    imageClassName: "object-contain bg-[#bdbdbd]",
    metaTitle: "Landing page para coach fitness | Projeto Holanda Personal",
    metaDescription:
      "Conheça o projeto de landing page premium desenvolvido para Holanda Personal, com foco em consultoria fitness, confiança e contato pelo WhatsApp.",
  },
  {
    slug: "rastromoville",
    featuredOnHome: false,
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
    cardProblem:
      "Organizar os serviços da empresa e transmitir mais confiança aos interessados.",
    cardSolution:
      "Site institucional com benefícios claros, identidade da marca e contato facilitado.",
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
    cardDescription: "Portfólio visual com agendamento e contato direto.",
    cardProblem:
      "Valorizar os trabalhos e transformar interesse em pedidos de agendamento.",
    cardSolution:
      "Portfólio responsivo com destaque visual, informações objetivas e chamada para contato.",
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
    cardDescription: "Conteúdo local organizado para busca e leitura rápida.",
    cardProblem:
      "Transformar conteúdos locais dispersos em uma experiência simples de consultar.",
    cardSolution:
      "Portal responsivo organizado por temas, com leitura clara e navegação direta.",
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
