// resposta do gabarito para visualização no terminal
// tudo assíncrono
const fs = require('fs');

const startScript = Date.now();
let timeFile1;
let timeFile2;
let timeScript;

function printScriptEnd () {
  if (timeFile1 && timeFile2) {
    timeScript = Date.now() - startScript;
    console.log(`script concluído em ${timeScript} milissegundos`);
  }
}

const startFile1 = Date.now();

fs.readFile('./file1.txt', (err, file1) => {
  timeFile1 = Date.now() - startFile1;
  console.log(`file1.txt: lidos ${file1.byteLength} bytes em ${timeFile1} milissegundos`);
  printScriptEnd();
});

const startFile2 = Date.now();

fs.readFile('./file2.txt', (err, file2) => {
  timeFile2 = Date.now() - startFile2;
  console.log(`file2.txt: lidos ${file2.byteLength} bytes em ${timeFile2} milissegundos`);
  printScriptEnd();
});

// diferença desse para o 1º exercício:
// esse traz o tempo em milissegundos diferente para cada situação
// apesar de printScriptEnd() ser chamada 2x, ela só é executada 1x, por conta do if
