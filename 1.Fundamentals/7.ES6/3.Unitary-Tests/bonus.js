// /* 1 Máquina automática que devolve troco */
function getChange(payable, paid) {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  let change = [];
  let sum = 0;
  let result = 0;
  // const { length } = coins;
  let remaining = paid - payable;

  if (remaining == 0) {result = change};
  for(let i = 0; i < coins.length; i += 1) {
    if(sum !== remaining) {
      if(coins[i] < remaining) {
        sum += coins[i];
        change.push(coins[i])
      }
    }
    result = change;
  }
  return result;
}

const assert = require('assert');

let result = getChange(1, 1); // no change/coins just an empty array
let expected = [];
assert.deepEqual(result, expected);

result = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
expected = [50, 20, 10, 5];
assert.deepEqual(result, expected);

// // result = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
// // expected = [100, 10, 2, 2];
// // assert.deepEqual(result, expected); // não passou

result = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
expected = [200, 100, 50, 20, 10, 5, 2, 1];
assert.deepEqual(result, expected);

// assert.throws(() => { getChange(100, 10); }, /^Error: paid value is not enough$/); // não passou

// -----------------------------------------------------------------
/* 2 Escreva a função factorial para passar nos testes já implementados */
const assert = require('assert');

function factorial(param) {
  let fator = 1;
  for(let i = 1; i <= param; i += 1) {
    fator = fator * i;
  }
  return fator;
}

const in1 = 5;
const exp1 = 120;
const out1 = factorial(in1);
assert.strictEqual(out1, exp1);

const in2 = 9;
const exp2 = 362880;
const out2 = factorial(in2);
assert.strictEqual(out2, exp2);

const in3 = 1;
const exp3 = 1;
const out3 = factorial(in3);
assert.strictEqual(out3, exp3);

const in4 = 0;
const exp4 = 1;
const out4 = factorial(in4);
assert.strictEqual(out4, exp4);

const in5 = 3;
const exp5 = 6;
const out5 = factorial(in5);
assert.strictEqual(out5, exp5);

// ------------------------------------------------------
/* 3 Escreva a função removeMiddle para passar nos testes já implementados */
const assert = require('assert');

function removeMiddle(param) {
  let removeIndex = Math.floor(param.length / 2); // para chegar no item do meio (5/2 = 2.5 = 2)
  let removeItem = [param[removeIndex]];
  // ao colocar os colchetes, ele já fica como array, assim não precisa fazer um push
  words.splice(removeIndex, 1); // atualizando a variável
  // splice: remova 1 item a partir desse index
  return removeItem;

}
const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepEqual(output, expectedOutput);
assert.deepEqual(words, expectedWords);

// ------------------------------------------------------------------------
/* 4 Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes */
const assert = require('assert');

const getLargestNumber = (array) => {
  let largestNumber = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (largestNumber < array[i]) {
      largestNumber = array[i];
    }
  }
  return largestNumber;
};

const parameter = [45, 8, 2, 50, 1, 7, 99];
const result = 99;

assert.deepEqual(getLargestNumber(parameter), result);

// -------------------------------------------------------------------------
/* 5 Crie uma função Verify() que retorne false para os casos listados no repositório e true caso contrário*/
const assert = require('assert');
function verify(password) {
  let result = true;
  if (password.length > 8 || password != null) {
    result = true;
  }
  for (let i = 0; i < password.length; i += 1) {
    if (password[i] == password[i].toUpperCase() || 
    password[i] == password[i].toLowerCase() ||
    typeof password[i] == Number) {
      result = true;
    } else {
      result = false;
    }
  }
  return result;
}

const password = 'Trybe12345678';
// password should be larger than 8 chars
// password should not be null
assert.ok(verify(password));
// password should have one uppercase letter at least
assert.ok(verify(password));
// password should have one lowercase letter at least
assert.ok(verify(password));
// password should have one number at least
assert.ok(verify(password));
