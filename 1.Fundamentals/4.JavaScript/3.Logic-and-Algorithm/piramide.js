//1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n
let n = 5;
let linha = " ";

for (let i = 0; i < n; i += 1) { //esse só para ir concatenando e formando a linha
    linha = linha + "*";
}
for (let i = 0; i < n; i += 1) {
    console.log(linha); //esse para formar a coluna
}

//2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
let asteriscos = "*"
for (let z = 0; z < n; z += 1) {
    console.log(asteriscos)
    asteriscos = asteriscos + "*" //ir fomando a pirâmide aos poucos
}

//3- Agora inverta o lado do triângulo
let lineIndex;
let columnIndex;
let symbol = '*';
let inputLine = '';
let inputPosition = n;

for (lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
}; //resposta do gabarito

//4- Depois, faça uma pirâmide com n asteriscos de base
let linha4 = "";
let testen = n;
let simbolo = "*";
let espaço = ""
for (let k = 0; k < testen; k += 1) {
    for (let l = 1; l < n; l += 1) {
        if (l < testen-1) {
            espaço = espaço + " "
        } else {
            linha4 = espaço + simbolo
            simbolo += "*"
        }
    }
    console.log(linha4);
    espaço = "";
    testen -= 1;
    linha4 = "";
} //cheguei perto, mas não quis colocar o resultado do gabarito
