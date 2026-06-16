# Diego Codes

Landing page/portfólio desenvolvida para apresentar a Diego Codes como serviço de criação de sites e apps web para negócios locais, com foco em conversão, autoridade visual e contato rápido via WhatsApp.

## Visão geral

Esta aplicação foi construída como uma experiência single-page de alto impacto visual, com navegação fluida entre seções, hero com animações, prova social, vitrine de projetos reais, bloco de processo comercial e CTA final orientado à conversão.

Os projetos em destaque apontam para deploys reais:

- `https://cleytonvieira.vercel.app`
- `https://neurops-tattooo.vercel.app`
- `https://pernambucoemfoco.vercel.app`
- `https://rastromoville.vercel.app`

## Tecnologias utilizadas

### Base da aplicação

- `Next.js 14.2.35`
- `React 18`
- `TypeScript`

### Estilização e design system

- `Tailwind CSS 3`
- `CSS custom properties` para tokens de cor e identidade visual
- `next/font/google` para tipografia otimizada
  - `Bebas Neue`
  - `Space Grotesk`
  - `Inter`

### Animações e interação

- `GSAP` para reveals por scroll
- `Framer Motion` para animações declarativas
- componentes de registry via `shadcn` adaptados ao projeto
  - `animated-gradient-background`

### Utilitários e suporte de UI

- `clsx`
- `tailwind-merge`
- `class-variance-authority`
- `lucide-react`
- `radix-ui`

### SEO, mídia e assets

- `next/image` para imagens otimizadas
- `Metadata API` do App Router
- `opengraph-image.tsx` para social preview dinâmica

## Como a aplicação foi feita

### 1. Estrutura da experiência

A aplicação foi organizada em seções com foco claro de leitura e conversão:

- `Hero`
- `Problem`
- `Projects`
- `SocialProof`
- `WhyChoose`
- `HowItWorks`
- `FAQ`
- `CTAFinal`
- `Footer`

Essa estrutura cria uma narrativa simples:

1. chamar atenção
2. explicar o valor
3. mostrar projetos e nichos atendidos
4. reforçar prova social e diferenciais
5. reduzir fricção com FAQ
6. levar para contato

### 2. Arquitetura

O projeto usa `App Router` com uma página principal em `app/page.tsx`. As seções mais pesadas são carregadas com `next/dynamic`, reduzindo custo inicial e organizando melhor a composição da landing.

Principais pontos:

- `app/layout.tsx`: metadados, fontes e base visual global
- `styles/globals.css`: tokens, utilitários visuais, animações e padrões de interface
- `components/*`: seções de produto
- `components/ui/*`: primitives e utilitários visuais reutilizáveis
- `public/projects/*`: capas dos projetos

### 3. Identidade visual

O visual foi construído em cima de uma paleta escura com acento roxo, usando variáveis como:

- `--bg-primary`
- `--bg-surface`
- `--bg-panel`
- `--accent-primary`
- `--accent-hover`
- `--text-primary`
- `--text-secondary`

Isso permite consistência entre botões, cards, gradientes, overlays, destaques e CTA fixo de WhatsApp.

### 4. Motion e UX

A experiência de movimento foi pensada para parecer premium sem poluir a navegação:

- reveal por scroll com `GSAP`
- gradient background animado no hero
- highlight animado no título principal
- scroll suave com easing customizado entre âncoras
- botão flutuante de WhatsApp em roxo para reforço de conversão

Também foi respeitado `prefers-reduced-motion` para reduzir animações quando necessário.

### 5. Conversão e UX comercial

A landing foi desenhada para reduzir fricção em decisões rápidas:

- CTA principal já no hero
- botão flutuante de WhatsApp
- navegação com scroll suave
- cards de projeto com links reais e indicação de status “Ao vivo”
- seção de prova social com métricas, feedbacks e visual de conversa
- seção de diferenciais com foco em design, SEO local e WhatsApp
- bloco “Como funciona” com processo simples
- fechamento com CTA final, e-mail e Instagram

## Funcionalidades principais

- navegação por âncoras com scroll suave
- hero com fundo animado e destaque visual
- cards de projetos com links reais
- seção de prova social e diferenciais
- seção de processo comercial
- FAQ comercial
- CTA flutuante para WhatsApp
- SEO com Open Graph e Twitter Cards

## Componentes importantes

- `components/Navbar.tsx`: header fixo, navegação desktop/mobile e CTA
- `components/Hero.tsx`: primeira dobra com fundo animado e CTA principal
- `components/Projects.tsx`: vitrine dos projetos reais com links por card
- `components/SocialProof.tsx`: prova social com métricas e feedbacks
- `components/WhyChoose.tsx`: diferenciais de posicionamento, SEO e conversão
- `components/FAQ.tsx`: dúvidas comuns antes do contato
- `components/WhatsAppFloat.tsx`: botão flutuante de conversão
- `components/ui/ScrollLink.tsx`: scroll animado entre âncoras
- `components/ui/Reveal.tsx`: reveal por viewport com GSAP
- `components/ui/animated-gradient-background.tsx`: fundo animado do hero

## Variáveis de ambiente

Crie um arquivo `.env.local` com:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=5581992388506
NEXT_PUBLIC_PORTFOLIO_URL=https://diegocodes.com.br
```

### Uso

- `NEXT_PUBLIC_WHATSAPP_NUMBER`: número usado nos CTAs de contato
- `NEXT_PUBLIC_PORTFOLIO_URL`: base pública usada em metadados/SEO

## Como rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:4000`.

## Scripts disponíveis

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Build de produção

Validação local:

```bash
npm run build
```

## Estrutura resumida

```text
app/
components/
components/ui/
public/projects/
public/testimonials/
styles/
lib/
```

## Objetivo do projeto

Mais do que “um site bonito”, esta aplicação foi construída para funcionar como vitrine comercial:

- reforçar posicionamento
- mostrar capacidade de execução
- transmitir autoridade
- facilitar contato
- converter visitas em conversas no WhatsApp

## Autor

Desenvolvido para `Diego Codes`.
