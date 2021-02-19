const assert = require('assert')

function sum (...sum) {
  let justSum = 0;
  justSum = justSum + sum;
  return justSum;
}
console.log(sum(1, 2));
// assert.equal(sum(), 0)
// assert.equal(sum(1), 1)
// assert.equal(sum(1, 2), 3)
// assert.equal(sum(1, 2, 3), 6)
// assert.equal(sum(1, 2, 3, 4), 10)

// 2 Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos
// não consegui fazer
