const variaveis = {}
const numeroDeLivros = 7;

function gerarVariaveis(nome, tag, tipo, identificador, posicao) {
    variaveis[nome] = document.querySelectorAll(`${tag}${tipo}${identificador}`)[posicao] //querySelectorAll retorna toda a fica de elementos
    //querySelector retorna o primeiro elemento
    //posicao está fora do ${} porque fora do querySelector é uma escrita JS
}

gerarVariaveis('pesquisar', 'input', '.', 'search-input', '0')

gerarVariaveis('ordenar', 'select', '.', 'sort-select', '0') //precisamos "pegar" todo o select para poder adicionar o evento que faz a checagem de mudanças

function menorPreco() {
    // 1. Pegue todos os cards da página
    const container = document.querySelector('.book-grid');
    // 1.1 Transforma os objetos "cards" em partes do Array que antes era uma NodeList onde não é possível utilizar JS
    const cards = Array.from(document.querySelectorAll('.book-card'));

    // 2. Ordene a lista de elementos (cards) baseada no preço
    cards.sort((a, b) => { //Arrow function é a forma mais curta e elegante de escrever a palavra function com a e b como parâmetros da nossa função. sort vai receber essa função como parâmetro.
        //a função sort lê o sinal de negativo, positivo e zero (0)
        //se precoB - precoA for negativo então precoA é maior, se for positivo então precoB é maior e se for 0 então os dois preços são iguais
        const precoA = parseFloat(a.querySelector('.book-price').textContent.replace("R$", "").replace(",", "."));
        const precoB = parseFloat(b.querySelector('.book-price').textContent.replace("R$", "").replace(",", "."));
        return precoA - precoB; // Do menor para o maior
    });

    // 3. Coloque-os de volta no container na nova ordem
    // O appendChild move o elemento da posição antiga para a nova
    cards.forEach(card => container.appendChild(card));
    //forEach : para cada elemento dentro do array cards faça o seguinte...
    //appendChild joga o elemento para a última parte do container

    /*
    Abaixo a forma antiga sem forEach
    
    for (let i = 0; i < cards.length; i++) {
    let card = cards[i]; // Pegamos o elemento do array
    container.appendChild(card); // Colocamos no contêiner
    }
    */
}
function maiorPreco() {
    const container = document.querySelector('.book-grid');
    const cards = Array.from(document.querySelectorAll('.book-card'));
    //Organiza o array por uma série de trocas chamadas Swaps
    cards.sort((a, b) => { 
        const precoA = parseFloat(a.querySelector('.book-price').textContent.replace("R$", "").replace(",", "."));
        const precoB = parseFloat(b.querySelector('.book-price').textContent.replace("R$", "").replace(",", "."));
        return precoB - precoA; // Do maior para o menor. 
    });
    cards.forEach(card => container.appendChild(card));
}
function ordemAlfabetica() {
    const container = document.querySelector('.book-grid')
    const cards = Array.from(document.querySelectorAll('.book-card'))

    cards.sort((a,b) => {
        const tituloA = a.querySelector('.book-title').textContent
        const tituloB = b.querySelector('.book-title').textContent
        return tituloA.localeCompare(tituloB) //Compara o titulo A com titulo B no idioma local
        //retorna -1 se A vem antes de B no dicionário
        //retorna 1 se A vem depois de B no dicionário
        //retorna 0 se A e B são a mesma palavra
        //para comparar de Z a A utilizamos tituloB.localeCompare(tituloA)
    });
    cards.forEach(card => container.appendChild(card)); //Para cada elemento do array cards adicione no fim do container como elemento filho
}
function refazer() {
    location.reload() //recarregar a página
}

variaveis.ordenar.addEventListener('change', function ordenacao() {
    if (variaveis.ordenar.value == 'menor-preco') {
        menorPreco()
    } else if (variaveis.ordenar.value == 'maior-preco') {
        maiorPreco()
    } else if (variaveis.ordenar.value == 'alfabetica') {
        ordemAlfabetica()
    } else {
        refazer()
    }

})
