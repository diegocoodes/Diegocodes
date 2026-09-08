# Fontes visuais do CV

Os GIFs ficam em `public/cv`, acompanhados de uma imagem WebP estática usada para pausa e movimento reduzido. As versões locais foram redimensionadas para 280 px, preservando a animação. Cada recorte na página contém um link para a fonte.

| Arquivo      | Personagem           | Fonte                                                                                                                            |
| ------------ | -------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `gengar.gif` | Gengar, Pokémon      | [Tenor · Glupa](https://tenor.com/view/gengar-dance-gengar-dance-pokemon-gif-12962119049989114711)                               |
| `gojo.gif`   | Gojo, Jujutsu Kaisen | [Tenor · TTheSixthHokage](https://tenor.com/view/gojo-satoru-proud-smile-gif-25209796)                                           |
| `raven.gif`  | Ravena, Teen Titans  | [Tenor · Cartoon Network](https://tenor.com/view/peeking-raven-teen-titans-og-glancing-sneaking-a-look-gif-13012038005072229252) |

## Componentes

`components/ui/tabs.tsx` e `components/ui/accordion.tsx` usam o código do registro oficial [shadcn/ui New York](https://github.com/shadcn-ui/ui), compatível com Tailwind 3. Os imports dos primitives foram adaptados para `radix-ui`, já instalado no projeto. Os estilos do CV ficam em `app/cv/cv.css`.

- [Tabs](https://ui.shadcn.com/docs/components/radix/tabs)
- [Accordion](https://ui.shadcn.com/docs/components/radix/accordion)

Os GIFs tocam por até 4,8 segundos quando entram na tela e podem ser pausados ou reiniciados pelo botão. Com movimento reduzido, começam estáticos. As abas aceitam navegação por teclado; na impressão, todas as categorias são exibidas.
