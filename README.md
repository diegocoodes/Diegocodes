# DiegoCodes

Site institucional, portfólio e currículo digital de Diego Ewerton. O projeto apresenta serviços de desenvolvimento web, estudos de caso, identidades visuais, depoimentos e canais de contato com foco em negócios locais e profissionais de Recife.

Produção: [diegocodes.com.br](https://diegocodes.com.br)

## Visão geral

O site foi construído com Next.js e App Router, possui uma home comercial, uma área completa de projetos e uma página de currículo. A experiência visual combina tipografia editorial, paleta escura com roxo e verde, animações progressivas e uma abertura em cortina.

Principais recursos:

- Home responsiva com apresentação, projetos, serviços, processo, depoimentos, perfil profissional, FAQ e formulário de contato.
- Portfólio com listagem e páginas individuais geradas estaticamente.
- Currículo em `/cv`, com experiências, formação, certificados, stack e contribuições públicas do GitHub.
- Download do currículo em PDF diretamente pela pasta pública do projeto.
- Fundo WebGL interativo no hero, com fallback e respeito a preferências de movimento reduzido.
- Navegação responsiva, rolagem suave e transições entre páginas.
- Integração com WhatsApp e eventos personalizados para Meta Pixel e `dataLayer`.
- SEO local com metadata, Open Graph, JSON-LD, sitemap e robots.

## Tecnologias

| Camada | Tecnologias |
| --- | --- |
| Aplicação | Next.js 14, React 18, TypeScript |
| Estilos | Tailwind CSS 3, CSS Modules, CSS custom properties |
| Movimento | Motion, Framer Motion e animações CSS |
| Visual WebGL | OGL |
| Interface | Lucide React, React Icons e Radix UI |
| Imagens | `next/image` e Sharp |
| Produção | Node.js, Next.js server e PM2 |

## Rotas

| Rota | Finalidade | Indexação |
| --- | --- | --- |
| `/` | Página institucional e comercial | Sim |
| `/projetos` | Portfólio completo | Sim |
| `/projetos/[slug]` | Estudo de caso de cada projeto | Sim |
| `/cv` | Currículo profissional e atividade no GitHub | Não |
| `/robots.txt` | Regras para mecanismos de busca | Sim |
| `/sitemap.xml` | Sitemap gerado pelo App Router | Sim |
| `/opengraph-image` | Imagem social dinâmica | Sim |

A página `/demo` existe para testes internos de componentes visuais e não faz parte da navegação principal.

## Estrutura do projeto

```text
app/
  cv/page.tsx                 Currículo digital
  projetos/page.tsx          Listagem do portfólio
  projetos/[slug]/page.tsx   Estudos de caso
  layout.tsx                 Fontes, metadata e Meta Pixel
  page.tsx                   Composição da home
  opengraph-image.tsx        Preview social dinâmico
  robots.ts                  Regras de indexação
  sitemap.ts                 Sitemap dinâmico

components/
  cv/                        Componentes específicos do currículo
  ui/                        Primitivos de movimento e efeitos visuais
  Hero.tsx                   Abertura principal e fundo WebGL
  Projects.tsx               Projetos selecionados
  InstagramIdentity.tsx      Projetos de identidade visual
  CTAFinal.tsx               Formulário e conversão por WhatsApp
  Navbar.tsx                 Navegação desktop e mobile

lib/
  contact.ts                 Contatos e canais profissionais
  contact-form.ts            Formatação e mensagem do formulário
  cv.ts                      Experiências, certificados e serviços do CV
  home-content.ts            Conteúdo das seções comerciais
  projects.ts                Dados e tipos dos projetos
  site.ts                    URL canônica do site
  whatsapp.ts                Geração centralizada de links do WhatsApp

public/
  curriculo/                 Currículo para download
  perfil/                    Fotografias profissionais
  projects/                  Capas e imagens do portfólio
  testimonials/              Imagens dos depoimentos

styles/
  globals.css                Tokens, layout, animações e estilos de impressão
```

## Desenvolvimento local

### Requisitos

- Node.js 20 ou superior.
- npm 10 ou superior.

### Instalação

```bash
git clone https://github.com/diegocoodes/Diegocodes.git
cd Diegocodes
npm ci
npm run dev
```

O ambiente local usa [http://localhost:3012](http://localhost:3012).

Para usar outra porta:

```bash
npm run dev -- -p 4312
```

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento na porta 3012 |
| `npm run lint` | Executa as regras do ESLint para Next.js |
| `npm run typecheck` | Valida os tipos sem gerar arquivos |
| `npm run build` | Gera o build otimizado de produção |
| `npm run check` | Executa typecheck e build em sequência |
| `npm run start` | Serve o build de produção na porta 3012 |

## Variáveis de ambiente

O projeto funciona com valores padrão, mas aceita as seguintes substituições:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=5581992388506
NEXT_PUBLIC_PORTFOLIO_URL=https://diegocodes.com.br
```

| Variável | Uso |
| --- | --- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número usado pelos CTAs e pelo formulário de contato |
| `NEXT_PUBLIC_PORTFOLIO_URL` | URL base para canonical, sitemap, JSON-LD e compartilhamento social |

Crie `.env.local` apenas no ambiente de desenvolvimento. Arquivos locais de ambiente não devem ser versionados.

## Atualização de conteúdo

- Informações de contato e mensagem padrão do WhatsApp: `lib/contact.ts`.
- Projetos, capas, links e estudos de caso: `lib/projects.ts`.
- Serviços, processo, depoimentos e FAQ: `lib/home-content.ts`.
- Experiência, formação, certificados e links do currículo: `lib/cv.ts`.
- PDF do currículo: `public/curriculo/` e `components/cv/CvPrintButton.tsx`.
- Tecnologias apresentadas no currículo: `components/cv/TechIconGrid.tsx`.
- Textos e estrutura da home: componentes correspondentes em `components/`.
- Paleta, espaçamentos e movimento: `styles/globals.css` e `tailwind.config.ts`.

Ao adicionar um projeto, use um `slug` único e forneça `metaTitle`, `metaDescription`, textos alternativos e imagens otimizadas. As páginas individuais e o sitemap são derivados automaticamente de `portfolioProjects`.

## Acessibilidade e movimento

- Elementos interativos possuem estados de foco e áreas de toque adequadas.
- O menu mobile gerencia foco, tecla Escape e bloqueio de rolagem.
- Imagens relevantes possuem texto alternativo.
- Seções seguem uma hierarquia semântica de títulos.
- Animações e o marquee do currículo são desativados com `prefers-reduced-motion`.
- A abertura do site é ignorada quando o visitante solicita movimento reduzido.

## SEO e analytics

Os metadados globais ficam em `app/layout.tsx`. Projetos geram metadados individuais em `app/projetos/[slug]/page.tsx`. A home também publica dados estruturados de pessoa, serviço profissional e website.

O Meta Pixel é carregado pelo layout. Elementos com `data-track` são capturados por `components/AnalyticsBridge.tsx` e enviados ao Pixel e ao `dataLayer`, quando disponíveis.

O currículo usa `noindex, nofollow` intencionalmente e, por isso, não é incluído no sitemap público.

## Publicação em produção

O domínio `diegocodes.com.br` é servido diretamente pelo processo PM2 `diego-codes`, a partir de `/opt/diegocodes`, na porta 3012. O proxy público e o TLS ficam na infraestrutura existente do servidor.

Fluxo de publicação:

```bash
cd /opt/diegocodes
git pull --ff-only origin master
npm ci
npm run check
pm2 restart diego-codes --update-env
pm2 save
```

Validação após o restart:

```bash
pm2 describe diego-codes
curl -I https://diegocodes.com.br/
curl -I https://diegocodes.com.br/cv
```

Antes de publicar, confirme que a home, o portfólio, `/cv`, o formulário e o download do PDF funcionam em desktop e mobile.

## Convenções do repositório

- Branch de produção remota: `master`.
- Branch local usada no servidor: `main`, rastreando `origin/master`.
- Commits devem descrever o resultado entregue.
- Assets de produção ficam em `public/`; arquivos de editor, builds e dependências permanecem ignorados.
- Alterações de conteúdo devem preservar URLs, textos alternativos e configurações de SEO.

## Licença

Projeto privado de DiegoCodes. O código, o conteúdo, as marcas e os assets não possuem licença de reutilização pública.
