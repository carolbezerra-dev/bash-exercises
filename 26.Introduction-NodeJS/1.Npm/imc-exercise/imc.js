const readline = require("readline-sync");
// é como fazer import

function resultadoIMC(numeroIMC) {
  let retornoIMC = "";
  if (numeroIMC < 18.5) {
    retornoIMC = "Abaixo do peso (magreza)";
  } else if (numeroIMC === 18.5 || numeroIMC < 24.9) {
    retornoIMC = "Peso normal";
  } else if (numeroIMC === 25.0 || numeroIMC <= 29.9) {
    retornoIMC = "Acima do peso (sobrepeso)";
  } else if (numeroIMC === 30.0 || numeroIMC <= 34.9) {
    retornoIMC = "Obesidade grau I";
  } else if (numeroIMC === 35.0 || numeroIMC <= 39.9) {
    retornoIMC = "Obesidade grau II";
  } else if (numeroIMC >= 40.0) {
    retornoIMC = "Obesidade grau III e IV";
  }

  return `Seu IMC é ${numeroIMC}, isso significa ${retornoIMC}`;
}

function calcularIMC(peso, altura) {
  const calculoIMC = (peso / (altura**2)).toFixed(2);
  
  return resultadoIMC(calculoIMC);
}

function obtendoDadosDoUsuario() {
  const usuarioPeso = readline.questionFloat("Qual seu peso? ");
  const usuarioAltura = readline.questionFloat("Qual sua altura? ");

  return calcularIMC(usuarioPeso, usuarioAltura);
}

console.log(obtendoDadosDoUsuario());
// console necessário porque se está usando terminal
