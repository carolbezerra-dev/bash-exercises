// 1 Crie uma função que gere um número aleatório entre 0 e 100. 

function randomNumber() {
  return Math.round(Math.random() * 100);
}

/* 4 Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. */

function upperString(str) {
  return str.toUpperCase();
}

function justFirst(str) {
  return str.substr(0, 1)
} // sbstr recebe como parâmetro por onde começar e qual o tamanho

function concatenate(strA, strB) {
  return strA + strB;
}

module.exports = {
  randomNumber,
  upperString,
  justFirst,
  concatenate
}
