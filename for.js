/*Nesta documentação de JavaScript veremos como o método forEach() permite executar uma função para cada item de um array.

Apresentaremos aqui como utilizar o método forEach().
*/
//Valor retornado: Verde Amarelo Azul Branco
cores = ["Verde", "Amarelo", "Azul", "Branco"];
function imprimir(item) {
    console.log(item);
}
cores.forEach(imprimir);

//Valor retornado: 0 2 4 6 8 10 12 14 16 18 20
numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function tabuadaDe2(item) {
    console.log(item*2);
}
numeros.forEach(tabuadaDe2);

//Valor retornado: 55
numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
total = 0;

function somar(item) {
    total += item;
}

numeros.forEach(somar);
console.log(total);

//Array retornado: ["Fiat", "Ford"]
marcas = ["Fiat", "Chevrolet", "Ford", "Volkswagen"]
marcasIniciadasComF = [];
novoIndice = 0;

function selecionarMarcas(item, indice) {
    if (marcas[indice].indexOf("F") == 0) {
        marcasIniciadasComF[novoIndice] = marcas[indice];
        novoIndice++;
    }
}

marcas.forEach(selecionarMarcas);
console.log(marcasIniciadasComF);

//Array retornado: ["ALBERTO", "ALEX", "SANDRO", "ROBERTA"]
nomes = ["Alberto", "Alex", "Sandro", "Roberta"];

function converterParaMaisculo(item, indice) {
    nomes[indice] = nomes[indice].toUpperCase();
}

nomes.forEach(converterParaMaisculo);
console.log(nomes);

//Valor retornado: Ana Roberta
nomes = ["Alberto", "Alex", "Sandro", "Ana Roberta"];
tamanhoNome = 0;
nome = "";

function maiorNome(item, indice) {
    if (nomes[indice].length > tamanhoNome) {
        nome = nomes[indice];
        tamanhoNome = nomes[indice].length;
    }
}

nomes.forEach(maiorNome);
console.log(nome);

// soma todos valores da Array
var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var total = 0;
function somar(item) {
    total += item;
}
numeros.forEach(somar);
console.log(total);
/*
No exemplo a seguir demonstramos como executar uma função para atualizar os valores declarados no array com os valores obtidos com a somatória de cada posição e em seguida imprimimos os itens desse array:
*/
var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var total = 0;
function somar(item, indice) {
    total += item;
    numeros[indice] = total;
}
numeros.forEach(somar);
console.log(numeros);

//No exemplo a seguir demonstramos como obter um novo array contendo apenas as marcas iniciadas com a letra “F”:
var marcas = ["Fiat", "Chevrolet", "Ford", "Volkswagen"]
var marcasIniciadasComF = [];
var novoIndice = 0;
function selecionarMarcas(item, indice) {
    if (marcas[indice].indexOf("F") == 0) {
        marcasIniciadasComF[novoIndice] = marcas[indice];
        novoIndice++;
    }
}
marcas.forEach(selecionarMarcas);
console.log(marcasIniciadasComF);

//No exemplo a seguir demonstramos como atualizar todas as strings de um array para que fiquem escritas em maiúsculo:
var nomes = ["Alberto", "Alex", "Sandro", "Roberta"];
function converterParaMaisculo(item, indice) {
    nomes[indice] = nomes[indice].toUpperCase();
}
nomes.forEach(converterParaMaisculo);
console.log(nomes);

// No exemplo a seguir demonstramos como obter o maior nome a partir de array de nomes:
var nomes = ["Alberto", "Alex", "Sandro", "Ana Roberta"];
var tamanhoNome = 0;
var nome = "";

function maiorNome(item, indice) {
    if (nomes[indice].length > tamanhoNome) {
        nome = nomes[indice];
        tamanhoNome = nomes[indice].length;
    }
}
nomes.forEach(maiorNome);
console.log(nome); //Ana Roberta

// No exemplo a seguir demonstramos a mesma soma, mas exibindo o valor da somatória a cada posição do array e também o índice sendo percorrido:
var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var total = 0;

function somar(item, indice) {
    total += item;
    console.log("[índice " + indice + "]= " + total + " -> ");
}

numeros.forEach(somar);