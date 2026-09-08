# Atualização visual da home — 08/09/2026

## Objetivo

Melhorar a hierarquia visual da página principal, reduzir excesso de conteúdo introdutório e dar mais destaque aos projetos, identidades para Instagram e provas sociais. A revisão também corrige proporções e legibilidade em telas mobile.

## Alterações principais

### Projetos selecionados

- Título condensado em uma única linha, sem quebra editorial forçada.
- Remoção de textos auxiliares, indicadores e numeração decorativa.
- Imagens apresentadas em molduras inspiradas em navegador, com acesso direto ao estudo de caso.
- Inclusão de objetivo, entregas principais, status e ações de cada projeto.
- No mobile, tipografia, sobreposições, espaçamentos e quantidade de etiquetas foram reduzidos.

### Identidade visual para Instagram

- Título simplificado em uma linha.
- Remoção dos indicadores numéricos e do bloco explicativo de etapas.
- Galeria com três colunas no desktop e imagens quadradas, aproximando a apresentação do formato visual do Instagram.
- Cards empilhados no mobile, com conteúdo interno e CTA mais compactos.

### Feedbacks e resultados

- Substituição da composição estática por um carrossel de uma linha.
- Rotação automática a cada 6,5 segundos, com setas e indicadores para controle manual.
- O depoimento textual existente permanece identificado como fala de cliente.
- NeuroPS e Holanda Personal aparecem como resultados de projetos, sem atribuição de falas não fornecidas pelos clientes.

### Hierarquia mobile

- Espaçamento vertical padrão das seções reduzido para 64 px abaixo de 640 px e mantido em 56 px até 380 px.
- Escalas específicas para títulos longos, evitando cortes horizontais.
- Hero, serviços, processo, sobre e FAQ receberam ajustes de tipografia, altura, preenchimento e espaçamento.
- Botões principais ocupam a largura disponível quando isso melhora a área de toque.
- Cards mantêm textos entre 15 e 16 px, com entrelinha adequada para leitura em telas pequenas.

## Arquivos envolvidos

- `components/Hero.tsx`
- `components/Projects.tsx`
- `components/InstagramIdentity.tsx`
- `components/Deliverables.tsx`
- `components/HowItWorks.tsx`
- `components/Testimonials.tsx`
- `components/AboutDiego.tsx`
- `components/FAQ.tsx`
- `styles/globals.css`

## Validação

- Revisão visual da home em viewport de 390 × 844 px.
- Títulos de uma linha verificados sem estouro horizontal.
- `npm run typecheck`
- `npm run lint`
- `npm run build`

O comportamento desktop foi preservado por meio de breakpoints `sm`, `md` e `lg`; os ajustes mais compactos são aplicados prioritariamente abaixo de 640 px.
