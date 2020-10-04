// 1 Crie uma função que receba um número e retorne seu fatorial
function factorialNumber(n) {
  let aux = 1;
  for (let i = 1; i < n; i += 1) {
    let factorial = aux * (i + 1);
    aux = factorial;
  }
  if (n === 0) {
    factorial = 1;
  } else {
    factorial = aux;
  }
  return factorial;
}
console.log(fatorialNumber(5));

// 2 Crie uma função que receba uma frase e retorne qual a maior palavra
function longestWord(frase) {
  const arrayFrase = frase.split(' ');
  let bigger = 0;
  let longestOne = '';
  for(let i = 0; i < arrayFrase.length; i += 1) {
    if(bigger < arrayFrase[i].length) {
      bigger = arrayFrase[i].length;
      longestOne = arrayFrase[i];
    }
  }
  return longestOne;
}
console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

/* 3 Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro */
function replaceX(oldString) {
  let newHere = oldString.replace(/x/i, 'Bebeto');
  // quando encontrar a letra x substitua por Bebeto e ignore o resto
  return newHere;
}
console.log(replaceX('Tryber x aqui!'));

let skills = ['html', 'css', 'js', 'frontend', 'study'];
function orderSkills(skills) {
  const start = `My habilities are:`
  let habilities = '';
  for(let i = 0; i < skills.length; i += 1) {
    habilities += `${skills[i]}
    `;
  }
  return `${start} 
  ${habilities} `
}
console.log(orderSkills(skills.sort()));