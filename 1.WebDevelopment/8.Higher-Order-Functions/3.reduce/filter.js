const assert = require('assert');

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

// 5 Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula
function containsA() {
  const counting = names.reduce((acc, current) => {
    const stringHere = current.split('');
    const countString = stringHere.reduce((sum, item) => {
      if (item === 'A' || item === 'a') sum += 1;
      return sum;
    }, 0) // ta dizendo que sum inicia com 0
    return acc += countString;
  }, 0); // ta dizendo que acc inicia com 0
  return counting;
}
// feito com ajuda do plantão do Murilo Wolf
assert.deepEqual(containsA(), 20);
