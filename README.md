# DiegoCodes

Site institucional e portfólio da DiegoCodes, marca pessoal de desenvolvimento web em Recife, Pernambuco. A página apresenta a oferta de criação de sites e landing pages para profissionais, prestadores de serviço e negócios locais, com foco em clareza, confiança e contato pelo WhatsApp.

## Tecnologias

- Next.js 14 com App Router
- React 18
- TypeScript
- Tailwind CSS
- `next/image` e Metadata API
- `next/font/google`
- GSAP para reveals por scroll
- Meta Pixel e bridge de eventos por clique
- `lucide-react` para ícones

## Estrutura

```text
app/
  layout.tsx              Metadados globais, fontes e Pixel
  page.tsx                Composição da home
  robots.ts               Robots nativo do Next
  sitemap.ts              Sitemap nativo do Next
  projetos/               Listagem e estudos de caso
components/
  Hero.tsx
  TrustBar.tsx
  AudienceSection.tsx
  Projects.tsx
  Deliverables.tsx
  HowItWorks.tsx
  WhyChoose.tsx
  Testimonials.tsx
  AboutDiego.tsx
  FAQ.tsx
  CTAFinal.tsx
  Footer.tsx
  WhatsAppFloat.tsx
lib/
  contact.ts              Contato, WhatsApp, e-mail e Instagram
  home-content.ts         Conteúdo reutilizável da home
  projects.ts             Dados dos projetos e estudos de caso
  site.ts                 URL pública/canonical
  whatsapp.ts             Gerador central de links do WhatsApp
public/
  projects/               Capas dos projetos
  testimonials/           Imagens associadas a depoimentos/provas
styles/
  globals.css             Tokens visuais, utilitários e animações
```

## Instalação

```bash
npm install
npm run dev
```

O script local usa a porta `3012`:

```text
http://localhost:3012
```

Se a porta estiver ocupada:

```bash
npm run dev -- -p 4312
```

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

Para checagem de tipos:

```bash
npx tsc --noEmit
```

## Variáveis de Ambiente

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=5581992388506
NEXT_PUBLIC_PORTFOLIO_URL=https://diegocodes.com.br
```

- `NEXT_PUBLIC_WHATSAPP_NUMBER`: sobrescreve o número padrão configurado em `lib/contact.ts`.
- `NEXT_PUBLIC_PORTFOLIO_URL`: define a URL base usada em canonical, sitemap e dados estruturados.

## Como Editar Conteúdo

Projetos:
edite `lib/projects.ts`. Cada item controla capa, nicho, problema, solução, entregáveis, link online e metadados do estudo de caso.

Depoimentos e provas:
edite `testimonials` e `proofCards` em `lib/home-content.ts`. Use apenas depoimentos reais e imagens autorizadas.

WhatsApp:
edite `contactConfig` em `lib/contact.ts`. Todos os CTAs usam `createWhatsAppUrl()` de `lib/whatsapp.ts`, com mensagem padrão codificada corretamente.

FAQ, etapas, diferenciais e entregáveis:
edite `lib/home-content.ts`.

SEO:
os metadados globais ficam em `app/layout.tsx`; sitemap e robots ficam em `app/sitemap.ts` e `app/robots.ts`; os estudos de caso geram metadata em `app/projetos/[slug]/page.tsx`.

## Publicação

Gere o build:

```bash
npm run build
```

Depois publique no provedor usado pelo projeto. Para Next.js, Vercel é o caminho mais direto; em servidor próprio, use:

```bash
npm run start
```

## Melhorias Implementadas

- Home reorganizada na ordem: header, hero, confiança, público, projetos, inclusos, processo, diferenciais, depoimentos, sobre, FAQ, CTA e footer.
- Hero com mensagem específica para negócios locais, Recife e atendimento online.
- Header responsivo com âncoras finais, CTA para WhatsApp, estado ativo e fechamento por Escape no mobile.
- Faixa de confiança sem números não comprovados.
- Nova seção de público atendido.
- Cards de projeto com problema, solução, entregáveis, link do projeto e estudo de caso.
- Seção de entregáveis separada dos diferenciais para evitar repetição.
- Processo em cinco etapas com CTA.
- Depoimentos com estrutura preparada para novos feedbacks reais.
- Seção humana sobre Diego Ewerton, Recife e atendimento online.
- FAQ ampliado para 12 perguntas sem promessas irreais.
- CTA final com a mensagem comercial recomendada.
- WhatsApp centralizado em configuração única.
- Eventos de analytics específicos para cliques de WhatsApp.
- SEO local com title, description, canonical, Open Graph, Twitter Card, sitemap, robots e dados estruturados.
- Ajustes de acessibilidade em menu, foco, labels, alt texts e tamanhos de toque.
- Ajustes de responsividade para reduzir risco de rolagem horizontal e cortes de texto.

## Pendências de Conteúdo

- Substituir o bloco visual da seção “Quem está por trás” por uma foto profissional real do Diego Ewerton quando o arquivo for fornecido.
- Adicionar mais depoimentos somente quando houver textos, fotos/logos e autorização de uso.
- Adicionar prévias mobile reais dos projetos quando esses assets estiverem disponíveis.
