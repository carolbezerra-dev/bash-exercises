const express = require("express");
const fs = require("fs");
const fileJson = fs.readFileSync("./simpsons.json", "utf8");
// precisa do utf8 pra lidar com json certinho

const app = express();

// app.use(express.json()); // só é útil com POST ou PUT

app.get("/ping", (_req, res) => {
  res.send({ message: "Pong!" });
}); // question 2

app.get("/simpsons", (req, res) => {
  res.send(fileJson);
});

app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
}); // ideia do gabarito

app.listen(3000, () => {
  console.log("Agora a operação roda");
});
