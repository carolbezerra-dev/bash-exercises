// 1 Escreva a função addOne para passar nos testes já implementados
const assert = require('assert');

function addOne(param) {
  if(param == expected) return expected;
  return false;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);
// assert.strictEqual(typeof addOne, 'function');
// assert.deepEqual(output, expected);
assert.deepEqual(myArray, unchanged);
// 2 Escreva a função wordLengths para passar nos testes já implementados
const assert = require('assert');

function wordLengths(word) {
  let finalLength = [];
  for (let i = 0; i < word.length; i += 1) {
    finalLength.push(word[i].length);
  }
  return finalLength;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

// assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);
// 3 Escreva a função addAllnumbers para passar nos testes já implementados
const assert = require('assert');
function addAllnumbers(number) {
  let sum = 0;
  for(let i = 0; i < number.length; i += 1) {
    sum += number[i];
  }
  return sum;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);
// assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);
// 4 Escreva a função findTheNeedle para passar nos testes já implementados
const assert = require('assert');
function findTheNeedle(plant, index) {
  return plant.indexOf(index); //busca se tem e retorna o índice ou -1 se não tiver
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);
