const express = require("express");
const fs = require("fs");
const fileJson = fs.readFileSync("./simpsons.json");

const app = express();

app.use(express.json());

app.get("/ping", (_req, res) => {
  res.send({ message: "Pong!" });
}); // question 2

app.get("/simpsons", (req, res) => {
  res.send(JSON.stringify(fileJson)); // entregou alguma coisa que não é o arquivo
});

app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
}); // ideia do gabarito

app.listen(3000, () => {
  console.log("Agora a operação roda");
});
