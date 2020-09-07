// //5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
let n = 7;
let lineInput = [];
let baseMatrix = [];
let symbol = '*';
let matrix = [];
let midOfMatrix = (n + 1) / 2;
let controlLeft = 1;
let controlRight = n - 2;

for (let lineColumn = 0; lineColumn < n; lineColumn += 1) {
  baseMatrix[lineColumn] = symbol;
}
matrix[0] = baseMatrix;
for (let lineIndex = 1; lineIndex < n; lineIndex += 1) {
  for (let lineColumn = 0; lineColumn < n; lineColumn += 1) {
    if (lineColumn === controlLeft || lineColumn === controlRight) {
      lineInput[lineColumn] = symbol;
    } else {
      lineInput[lineColumn] = ' ';
    }
  }
  matrix[lineIndex] = lineInput;
  controlLeft += 1;
  controlRight -= 1;
  lineInput = [];
  if (controlLeft > controlRight) break;
}
let result = '';
for (let lineIndex = matrix.length - 1; lineIndex >= 0; lineIndex -= 1) {
  for (let lineColumn = 0; lineColumn < n; lineColumn += 1) {
    result = result + matrix[lineIndex][lineColumn];
  }
  console.log(result);
  result = '';
} //resposta do gabarito

//6- Faça um programa que diz se um número definido numa variável é primo ou não.
let divisors = 0;
let n = 4;

for (let i = 2; i < n && divisors !== 1; i += 1) {
    if (n % i == 0) {
        divisors += 1;
    }
}

if (divisors === 0) {
    console.log(n + ' é primo');
} else {
    console.log(n + ' não é primo');
} //resposta do gabarito