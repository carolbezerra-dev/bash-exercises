const assert = require('assert');

/* 1 Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes. */
const greetPeople = (people) => {
  let greeting = 'Hello ';
  let phrase = [];

  for (const person in people) {
    phrase.push(`${greeting}${people[person]}`);
  }
  return phrase;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepEqual(greetPeople(parameter), result);
/* 2 Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.*/
const removeVowels = (word) => {
  const characters = word.split('');
  let results = '';
  let count = 0;
  for (let i = 0; i < characters.length; i += 1) {
    if (
      characters[i] === 'a' ||
      characters[i] === 'o' ||
      characters[i] === 'i' ||
      characters[i] === 'e' ||
      characters[i] === 'u'
    ) {
      count += 1;
      results += (count);
    } else {
      results += characters[i];
    }
  }
  return results;
};

const parameter = 'Dayane';
const result = 'D1y2n3';

assert.deepEqual(removeVowels(parameter), result);
/* 3 Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.*/
const greaterThanTen = (array) => {
  let results = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > 10) {
      results.push(array[i]);
    }
  }
  return results;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];
assert.deepStrictEqual(greaterThanTen(parameter), result);
/* 4 Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.*/
function secondThirdSmallest(array) {
  array.sort()
  let results = [];
  let smallest = array[0];
  let smallestIndex = 0;
  let secondSmallest = 0;
  let thirdSmallest = 0;
  let secondSmallestIndex = 0;
  for(let i = 0; i < array.length; i += 1) {
    if (array[i] < smallest) {
      smallest = array[i];
      smallestIndex = i;

    }
  }
  for(let i = smallestIndex; i < array.length; i += 1) {
    if(smallest < array[i]) {
      secondSmallest = array[i];
      secondSmallestIndex = i;
      break;
    }
  }
  for(let i = secondSmallestIndex; i < array.length; i += 1) {
    if(secondSmallest < array[i]) {
      thirdSmallest = array[i];
      break;
    };
  }
  results.push(secondSmallest, thirdSmallest);
  return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6]
assert.deepStrictEqual(secondThirdSmallest(parameter), result);
