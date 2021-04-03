// resposta do gabarito para visualização no terminal
// tudo assíncrono, usando módulo inédito readdir (ler diretório)
const fs = require('fs');

const scriptStart = Date.now();

fs.readdir('../3.Architecture', (err, fileNames) => {
  console.log(`encontrados ${fileNames.length} arquivos`);
  const fileSizes = [];

  function logEnd() {
    if (fileSizes.length === fileNames.length) {
      const fileLengthSum = fileSizes.reduce((total, size) => total + size);
      const scriptTime = Date.now() - scriptStart;

      console.log(`lidos ${fileLengthSum} bytes em ${scriptTime} milissegundos`)
    }
  }

  fileNames.forEach((fileName) => {
    fs.readFile(`../3.Architecture/${fileName}`, (err, file) => {
      fileSizes.push(file.byteLength);
      logEnd();
    });
  });
});

/* a diferença desse é que, mesmo com 1 arquivo a mais somando nos bytes, ele executou 2 milissegundos mais rápido do que o síncrono */
