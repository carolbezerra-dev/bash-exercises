    
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

// 1 Dada uma matriz de matrizes, transforme em uma única matriz

function flatten() {
  return arrays.reduce((acc, currentValue) => {
    currentValue.map((element) => {
      acc.push(element);
    });
    return acc;
  }, []); // inicializando acc como array vazio
}
// código feito com a orientação de Murilo Wolf
assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);
