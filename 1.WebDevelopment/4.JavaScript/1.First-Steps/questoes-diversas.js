const valorCusto = 1;
const impostoSobreOCusto = valorCusto * 0.2;
const valorCustoTotal = valorCusto + impostoSobreOCusto;
const valorDeVenda = valorCustoTotal + 2;

if (valorCustoTotal < 0 || valorDeVenda < 0) {
    console.log("ERRO, valores negativos")
} else {
    let lucro = (valorDeVenda - valorCustoTotal) * 1000;
    console.log(lucro);
}

let salarioBruto = 3000;
let inss = 0;
if (salarioBruto <= 1556.94) {
    inss = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
    inss = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
    inss = salarioBruto * 0.11;
} else if (salarioBruto >= 5189.82) {
    inss = salarioBruto - 570.88;
}
console.log(inss)
let baseIR = salarioBruto - inss
let salarioLiquido = 0;
console.log(baseIR)
if(baseIR <= 1903.98) {
    salarioLiquido = baseIR
} else if (baseIR <= 2826.65) {
    salarioLiquido = baseIR - ((baseIR * 0,075) - 142.80);
} else if (baseIR <= 3751.05) {
    salarioLiquido = baseIR - ((baseIR * 0,15) - 354.80);
} else if (baseIR <= 4664.68) {
    salarioLiquido = baseIR - ((baseIR * 0,225) - 636.13);
} else {
    salarioLiquido = baseIR - ((baseIR * 0,275) - 869.36);
}
console.log(salarioLiquido)