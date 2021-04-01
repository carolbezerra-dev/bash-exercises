const redline = require("readline-sync");
// é como fazer import

function calcularVelocidadeMedia(distancia, tempo) {
  return `Sua velocidade média é de ${(distancia / tempo).toFixed(2)}m/s`;
}

function obtendoDadosDoUsuario() {
  const distancia = redline.questionInt("Qual sua distância em metros? ");
  const tempo = redline.questionInt("Qual seu tempo em segundos? ");

  return calcularVelocidadeMedia(distancia, tempo);
}

console.log(obtendoDadosDoUsuario());
// console necessário porque se está usando terminal
