const redline = require("readline-sync");

function aposta(numero) {
  const usuarioAposta = redline.questionInt("Qual sua aposta? De 0 a 10: ");
  let retornoUsuario = "";

  if (usuarioAposta === numero) {
    retornoUsuario = "Parabéns, número correto!";
  } else {
    retornoUsuario = `Opa, não foi dessa vez. O número era ${numero}`;
  }

  return retornoUsuario;
}

while (true) {
  console.log(gerarNumeroRandom());
  console.log("Deseja jogar novamente? [y/n] ")
  if (redline.prompt() === "n") {
    break;
  }
}
// para repetir todo o script se for o desejo do usuário

function gerarNumeroRandom() {
  const numeroRandom =  Math.round(Math.random() * 9);

  return aposta(numeroRandom);
}
