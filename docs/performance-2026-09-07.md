# Otimização de carregamento — 7 de setembro de 2026

Comparação da home em builds de produção locais, servidos por `next start` em `http://localhost:3013/`. Lighthouse 13.4.1, Chrome headless, perfis padrão de celular (rede simulada e CPU 4× mais lenta) e desktop. As execuções foram sequenciais, sem rodar os dois navegadores ao mesmo tempo.

| Métrica | Celular antes | Celular depois | Desktop antes | Desktop depois |
| --- | --- | --- | --- | --- |
| Desempenho | 54 | 85 | 91 | 100 |
| LCP | 6,5 s | 3,3 s | 0,8 s | 0,7 s |
| TBT | 740 ms | 280 ms | 220 ms | 0 ms |
| CLS | 0,015 | 0,032 | 0,006 | 0,014 |

Uma execução por perfil e versão; os valores são medições de laboratório, não garantias de nota na Hostinger nem dados de usuários reais. O aumento pequeno de CLS ainda fica abaixo de 0,1. O relatório atribui o deslocamento ao bloco de conteúdo do hero; a troca de fontes continua sendo um ponto a investigar. LCP abaixo de 2,5 s e TBT abaixo de 200 ms permanecem como alvos para o mobile. INP não foi medido por este teste de carregamento.

## Alterações

- Removida a abertura que cobria o conteúdo por aproximadamente dois segundos e os efeitos de revelação do título, texto e CTAs do hero. O conteúdo inicial aparece sem depender de hidratação.
- WebGL separado em um import dinâmico, iniciado após `load` em um momento ocioso, somente em telas a partir de 768 px com ponteiro preciso e hover. Celulares, preferência por movimento reduzido e economia de dados usam o fundo em CSS. Mudanças de viewport e preferência cancelam o carregamento pendente e desmontam a cena quando necessário.
- Fila do Meta Pixel inicializada antes da hidratação; SDK adiado com `lazyOnload`. PageView e eventos de clique permanecem enfileirados até o carregamento. Uma visita encerrada antes do SDK carregar pode não ser registrada.
- Capas dos projetos com qualidade 75, `sizes` correspondente ao grid e carregamento lazy, incluindo a primeira capa abaixo da dobra.
- Mantida a proteção contra HTML antigo no cache da CDN.

## Validação

`npm run check` passou: TypeScript, ESLint e build de produção. Verificação automatizada com Chrome confirmou conteúdo inicial visível com JavaScript desativado, ausência de overflow horizontal a 390 px, menu mobile com Escape e retorno de foco, uma inicialização e um PageView na fila do Pixel e preservação do evento de clique antes do SDK. O SDK foi interceptado nesse teste para não enviar eventos artificiais.

Também foram confirmados ausência de canvas no mobile, criação da cena no desktop, desmontagem ao ativar movimento reduzido e ausência de erros de hidratação ou execução. Capturas em 390×844 e 1440×900 foram inspecionadas. Isso não substitui uma auditoria completa de acessibilidade ou uma medição de INP com usuários reais.
