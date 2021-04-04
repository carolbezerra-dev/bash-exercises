const express = require("express");
const rescue = require("express-rescue");
const data = require("../data/simpsons.json");
const fs = require("fs");

const app = express();

app.get("/", (_req, res) => {
  res.status(200).send(data);
  // mostra todo o JSON na tela, como se estive lendo o arquivo
});
// colocou status 200 só pra deixar mais explícito, mas não precisa porque já é padrão

app.post("/", rescue(async (req, res) => { // POST serve para criar um novo recurso no banco de dados
  // pode colocar a mesma rota, como o verbo HTTP é diferente, não dá conflito
  const size = data.length;
  data[size] = { id: `${size + 1}`, name: req.body.name }
  // podia usar o push, essa é só uma outra forma de fazer
  
  try {
    await fs.promises.writeFile(__dirname + "/../data/simpsons.json", JSON.stringify(data));
    // __dirname serve pra dizer que a busca deve começar na raíz do projeto
    res.status(201).send({ message: "Novo elemento salvo com sucesso!" });
    // 201 porque está salvando um novo recurso no banco de dados
  } catch (error) {
    throw new Error(error);
  }
}));

app.put("/:id", rescue(async (req, res) => { // PUT serve para atualizar um recurso já existente no B.Dados
  // como sua URL é dinâmica, usa-se o :nomeQueQuiserAqui
  const { id } = req.params; // pega o parâmetro da URL
  const { name } = req.body; // pega o conteúdo escrito no Body
  data[id - 1].name = name;
  // o id está 1 número acima do index que começa no 0
  // modifica a propriedade name pela que vier escrita no body

  try {
    await fs.promises.writeFile(__dirname + "/../data/simpsons.json", JSON.stringify(data));
    res.status(200).send({ message: "Elemento atualizado com sucesso!" });
  } catch (error) {
    throw new Error(error);
  }
}));

app.delete("/:id", rescue(async (req, res) => {
  const { id } = req.params;
  const index = id - 1; // posição no array
  data.splice(index, 1);
  // encontre a posição no array e apague 1 posição a partir dele, contando com ele, nesse caso só ele

  try {
    await fs.promises.writeFile(__dirname + "/../data/simpsons.json", JSON.stringify(data));
    res.status(204).send();
    // 204 quer dizer No Content (Sem Conteúdo)
  } catch (error) {
    throw new Error(error);
  }
}));

module.exports = app;
// precisa exportar pra ser usado no index.js
