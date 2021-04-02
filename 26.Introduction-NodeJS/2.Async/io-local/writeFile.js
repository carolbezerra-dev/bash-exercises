const fs = require('fs');

fs.writeFile('./meu-arquivo.txt', 'Meu textão', (err) => {
  if (err) {
    throw err;
  }
  console.log('Arquivo salvo');
});
// sobrescreve 100% do texto

// mesma coisa mas com async/await
const fs = require('fs');

const text = 'Texto teste 2';

async function writingFiles() {
  await fs.writeFile('./meu-arquivo.txt', text, (err) => {
    if (err) return console.log(err);
    console.log(text);
  })
}

writingFiles();

// o fs tem sua própria promise também
const fs = require('fs').promises;

const text = 'Texto teste 3';

function writingFiles() {
  fs.writeFile('./meu-arquivo.txt', text);
}

writingFiles();
