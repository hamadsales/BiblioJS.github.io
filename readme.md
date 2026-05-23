# 📚 BiblioJS - Vitrine de Livros Dinâmica

Este projeto é uma vitrine virtual de livros desenvolvida para aplicar conceitos avançados de lógica de programação, manipulação profunda de elementos HTML (DOM) e ordenação de dados estruturados utilizando JavaScript.

## 🚀 Funcionalidades

- **Vitrine Interativa:** Exibição em formato de grid de diversos cards de livros contendo título, autor, capa e preço.
- **Ordenação Inteligente:** Capacidade de reorganizar a vitrine instantaneamente (Menor Preço, Maior Preço e Ordem Alfabética) sem recarregar a página.
- **Barra de Pesquisa:** Layout preparado para filtragem e busca de títulos específicos.
- **Atualização Fluida:** Reorganização visual dos elementos HTML sem duplicação de dados na tela.

## 🧠 Como o Código Funciona (Lógica de Programação)

O coração deste projeto está na manipulação e ordenação de elementos dinâmicos do DOM. O fluxo funciona da seguinte forma:

1. **Captura e Transformação:** O JavaScript captura todos os cards de livros na tela (`querySelectorAll`) e transforma a `NodeList` estática em um Array real utilizando o método `Array.from()`, habilitando o uso de métodos avançados de manipulação.
2. **Processamento e Tratamento de Dados:** Ao solicitar uma ordenação por preço, o algoritmo de ordenação (`sort`) acessa o conteúdo de texto de cada card, utiliza métodos de string (`replace`) para limpar caracteres como "R$" e espaços, e os converte para números (`Number()`) para realizar cálculos matemáticos precisos de comparação.
3. **Algoritmo de Ordenação:** O sistema utiliza o motor de comparação do JavaScript avaliando pares de elementos (`a` e `b`) para reorganizar os dados na memória (crescente ou decrescente).
4. **Mutação do DOM (A Mágica):** Com o array ordenado em memória, um laço de repetição (`forEach`) percorre a lista e utiliza o método `appendChild`. Aproveitando a regra nativa do navegador, os cards já existentes são "movidos" fisicamente para suas novas posições na tela, criando uma reordenação perfeita sem recriar ou clonar elementos HTML.

## 🎨 Design e Layout

Para a parte visual, a estrutura foi desenhada utilizando **CSS Grid** e **Flexbox**, garantindo que o catálogo de livros se adapte de forma responsiva. Detalhes como botões de compra interativos e um cabeçalho (header) com área de busca e filtros integrados proporcionam uma experiência de usuário (UX) limpa e moderna.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica em grids e cards (`<article>`).
* **CSS3:** Estilização responsiva, layout flexível e design de interface.
* **JavaScript (ES6):** Arrow functions, manipulação de Arrays, métodos de String e controle do Document Object Model (DOM).

---

### 💻 Como Executar o Projeto

1. Faça o download ou clone este repositório.
2. Certifique-se de que os arquivos `index.html`, `style.css` e `script.js` estejam na mesma pasta.
3. Abra o arquivo `index.html` em qualquer navegador moderno.

---
Desenvolvido por **Hamad Sales** como parte dos meus estudos e aprimoramento em Desenvolvimento Web Front-End.