# SBHCJ — Galeria de Estudos de Marca

Galeria objetiva com **26 propostas de identidade visual** para a **Sociedade Brasileira da História da Cultura Jurídica (SBHCJ)**.

Uma única página: grade densa de estudos, filtros por família tipológica na lateral e lightbox com nota de curadoria, navegação por teclado (← → Esc) e contagem de peças.

## Famílias

| Família | Estudos |
| --- | --- |
| Gravura emblemática | 06 |
| Sistema tipográfico | 07 |
| Emblema ilustrado | 04 |
| Selo institucional | 06 |
| Editorial contemporâneo | 03 |

## Stack

- React 19 + TypeScript + Vite
- CSS puro (custom properties, grid)
- Fontes: Inter + IBM Plex Mono (Google Fonts)
- Dados dos estudos em `src/data/logos.ts`
- Imagens otimizadas em `public/media/`

## Rodar localmente

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # build de produção em dist/
npm run preview  # servir o build
```

## Estrutura

```
src/
  App.tsx          — catálogo: topbar, filtros, grade, lightbox
  data/logos.ts    — os 26 estudos (código, título, família, nota, imagem)
  styles.css       — sistema visual (bordas 1px, mono p/ índices)
public/media/      — logo-01.jpg … logo-26.jpg
```
