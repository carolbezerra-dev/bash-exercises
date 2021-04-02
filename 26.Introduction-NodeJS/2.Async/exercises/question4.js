const fs = require('fs');
const simpsonsFile = require("./simpsons.json");
// dessa forma a const armazena o conteúdo do arquivo

// 1. Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome
function printIdName(fileHere) {
  fileHere.forEach(file => console.log(`${file.id} - ${file.name}`));
}

printIdName(simpsonsFile);

/* 2. Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado". */
function getDataFromId(id) {
  const dataHere = simpsonsFile.find(file => file.id === id);
  // para conferir se o id existe
  return new Promise((resolve, reject) => {
    if (!dataHere) reject(new Error("id não encontrado"));
    resolve(dataHere);
  });
}

getDataFromId("11")
  .then(result => console.log(`Entrou no resolve: ${JSON.stringify(result)}`))
  // stringify porque está lidando com json, precisa converter
  .catch(err => console.log(`Entrou no reject: ${err.message}`));

/* 4. Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4 */
function newFile() {
  const family = [];

  for (let i = 0; i < 4; i += 1) {
    family.push(simpsonsFile[i]);
  } // para selecionar apenas os ids pedidos na questão

  fs.writeFile("./simpsonFamily.json", JSON.stringify(family), (err) => {
    if (err) return console.log(err);
    console.log(`O arquivo foi criado com esse conteúdo:\n${JSON.stringify(family)}`);
  });
  // se o arquivo não existe, ele cria
  // 2º parâmetro tem que ser string
}

newFile();
