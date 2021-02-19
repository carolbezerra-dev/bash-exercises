//1 Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
function verificaPalindrome(nome) {
   let nominal = [];
   for (let key in nome) {
       nominal.push(nome[key]);
   }
    let newName = "";
   for (i = nominal.length; i > 0; i -= 1) {
       newName = nominal[nominal.length-i] + newName; //nessa ordem para ficar invertido
    }
    if (newName === nome) {
        return true;
    } else {
        return false;
    }
}
console.log(verificaPalindrome("desenvolvimento"));

//2 Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
function maiorIndice(vetor) {
    let maior = vetor[0];
    let index = 0;
    for (let chave in vetor) {
        if (vetor[chave] > maior) {
            maior = vetor[chave]; //para saber quem é o maior
            index = chave; //para saber seu index
        }
    }
    return index;
}
let teste = [2, 3, 6, 7, 10, 100];
console.log(maiorIndice(teste));

//3 Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
function menorIndice(vet) {
    let menor = vet[0];
    let indice = 0;
    for (let i in vet) {
        if(menor > vet[i]) {
            menor = vet[i];
            indice = i;
        }
    }
    return indice;
}
let testei = [2, 4, 6, 7, 10, 0, -3];
console.log(menorIndice(testei));

//4 Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
function contaCaract(nomes) {
    let maiorCaract = 0;
    let nomeMaior = 0;
    for (let ind in nomes) {
    if(nomes[ind].length > maiorCaract) {
            maiorCaract = nomes[ind].length; //armazena a quantidade de caracteres para comparação
            nomeMaior = nomes[ind]; //armazena o nome do maior
        }
    }
    return nomeMaior
}

let teste4 = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(contaCaract(teste4));

//5 Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
//não consegui fazer a questão

//6 Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
function somandoTudo(n) {
    let somei = 0;
    for (let ke = 1; ke <= n; ke += 1) {
        somei = somei + ke;
    }
    return somei;
}
let n = 5;
console.log(somandoTudo(n));

//7 Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
function verificaFimPalavra (word, ending){
    let newWord = []; //para transformar em array
    for (let indic in word) {
        newWord.push(word[indic]); //para colocar cada letra como um elemento
    }
    let soFim;
    for (i = newWord.length; i > newWord.length-2; i -= 1) { //não precisa passar por todo o array
        soFim = newWord[newWord.length-2] + newWord[newWord.length-1]; //para acessar só os 2 últimos itens
    }
    if (soFim === ending) { //comparação
        return true;
    } else {
        return false;
    }
}
console.log(verificaFimPalavra("joaofernando", "fernan"));