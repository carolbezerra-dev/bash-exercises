const a = 2, b = 1, c = 10;
if (a > b && a > c) {
    console.log (`${a} é maior`);
} if (b > c && b > a) { //não tem o else para ele possa rodar toda a estrutura
    console.log (`${b} é maior`);
} if (c > a && c > b) {
    console.log(`${c} é maior`);
}


let d = 1;
if (d > 0) {
    console.log("positivo");
} else if (d < 0) {
    console.log("negativo");
} else {
    console.log(0);
}

let e = 60, f = 60, g = 60;
let soma = e + f + g;
if (soma == 180) {
    console.log(true);
} else {
    console.log(false);
}

let porcentagem = 101;
if (porcentagem < 0 || porcentagem > 100) {
    console.log("ERRO!")
} else if (porcentagem >= 90) {
    console.log("A");
} else if (porcentagem >= 80) {
    console.log("B");
} else if (porcentagem >= 70) {
    console.log("C");
} else if (porcentagem >= 60) {
    console.log ("D");
} else if (porcentagem >= 50) {
    console.log("E");
} else if (porcentagem < 50) {
    console.log("F");
}

let h = 3, j = 30, k = 97;
if ((h % 2 == 0) || (j % 2 == 0) || (k % 2 == 0)) {
    console.log(true);
} else {
    console.log(false);
}

let l = 4, m = 30, n = 98;
if ((l % 2 != 0) || (m % 2 != 0) || (n % 2 != 0)) {
    console.log(true);
} else {
    console.log(false);
}

const xadrez = "ToRrE";
let ajuste = xadrez.toLowerCase() //desafio para colocar todas as letras em minúsculo
switch(ajuste) {
    case "rei":
        console.log("todas as casas, 1 por vez");
    break;
    case "rainha":
        console.log("horizontal, vertical e diagonal");
    break;
    case "bispo":
        console.log("diagonal");
    break;
    case "cavalo":
        console.log("movimento em L");
    break;
    case "torre":
        console.log("vertical e horizontal");
    break;
    case "peão":
        console.log("1 casa à frente");
    break;
    default:
        console.log("movimento desconhecido");
}