let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1) Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
for(let i = 0; i < numbers.length; i += 1){
    console.log(numbers[i]);
}


//2) Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;
let soma = 0;
for(let i = 0; i < numbers.length; i += 1) {
    soma = soma + numbers[i];
}
console.log(`A soma foi de ${soma}`);

//3) Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array; A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
let media = soma/numbers.length
console.log(`A media foi de ${media}`);

//4) Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if (media > 20) {
    console.log("Valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}

//5) Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let maior = numbers[0];
for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > maior) {
        maior = numbers[i];
    }
}
console.log(`O maior valor é ${maior}`);

//6) Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let eImpar = 0;
let naoImpar = 0;
for (let i = 0; i < numbers.length; i += 1) {
    if(numbers[i] % 2 != 0) {
        eImpar += 1;
    }
}
if(eImpar == 0) {
    console.log("nenhum valor ímpar encontrado")
} else {
    console.log(`Existem ${eImpar} números ímpares`);
}

//7) Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let menor = numbers[0];
for (let i = 0; i < numbers.length; i += 1) {
    if (menor > numbers[i]) {
        menor = numbers[i];
    }
}
console.log(menor);

//8) Utilizando for, crie uma array que vá de 1 até 25 e imprima o resultado;
let novoArray = [];
for (let elemento = 1; elemento <= 25; elemento += 1) {
    novoArray.push(elemento);
}
console.log(novoArray);

//9) Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
for(let i = 0; i < novoArray.length; i += 1) {
    console.log(novoArray[i]/2);
}