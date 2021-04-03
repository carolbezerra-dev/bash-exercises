// resposta do gabarito para visualização no terminal
// tudo síncrono, usando módulo inédito readdir (ler diretório)
const fs = require('fs');

const scriptStart = Date.now();

const fileNames = fs.readdirSync('../3.Architecture');

console.log(`encontrados ${fileNames.length} arquivos`);
// é como se a pasta fosse 1 array e cada arquivo 1 item
let fileSizeTotal = 0;

for (const fileName of fileNames) {
  const file = fs.readFileSync(`../3.Architecture/${fileName}`);
  fileSizeTotal += file.byteLength;
} // lê arquivo por arquivo da pasta e soma seus tamanhos em bytes

console.log(`tamanho total dos arquivos: ${fileSizeTotal} bytes`);

const scriptTime = Date.now() - scriptStart;
console.log(`script concluído em ${scriptTime} milissegundos`);
