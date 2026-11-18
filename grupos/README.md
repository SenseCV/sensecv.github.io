# Mapeamento de Navegação Assistiva

Site estático (HTML, CSS e JavaScript puro) que reúne grupos de pesquisa, pesquisadores, datasets e trabalhos sobre navegação assistiva para pessoas com deficiência visual, incluindo pesquisas de robótica com técnicas semelhantes.

Seleção inicial e não exaustiva. Dados verificados em 8 de novembro de 2026.

## Estrutura

```
index.html      página e marcação das seções
css/style.css   estilos
js/dados.js     todos os dados (grupos, pesquisadores, trabalhos, datasets, correções, links não verificados)
js/i18n.js      tradução para inglês e espanhol (interface e dados)
js/app.js       filtros, favoritos e janelas de detalhes
img/            imagens dos grupos e datasets (créditos aparecem no site, abaixo de cada imagem)
```

Não há etapa de build nem dependências. Para ver localmente, abra `index.html` no navegador.

## Atualizar os dados

Edite `js/dados.js`. Os indicadores e filtros são calculados a partir desses dados, então não é preciso mexer no HTML.

Os textos em português são o original. Ao adicionar ou mudar um texto, inclua a tradução em inglês e espanhol no dicionário de `js/i18n.js`; sem isso, o texto aparece em português nas outras línguas.

Para trocar a imagem de um grupo ou dataset, coloque o arquivo em `img/` e ajuste o campo `imagem` da entrada (`arquivo`, `fonte`, `url`, `ajuste` = `cover` ou `contain`, `pos`, `alt`).

## Publicação

Esta pasta é publicada junto com o site do SenseCV pelo GitHub Pages, em https://sensecv.github.io/grupos/. A cópia de trabalho original fica no repositório AndreAlbu/Grupos-Navegacao-Assistivas.

## Imagens

As imagens pertencem aos respectivos grupos, autores ou veículos, indicados no crédito de cada uma, e são usadas aqui com finalidade acadêmica. Antes de tornar o site público, confira se o uso está de acordo com a licença de cada fonte.
