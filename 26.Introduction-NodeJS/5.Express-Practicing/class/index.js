const express = require("express");
const simpsons = require("./routes/simpsons");
const middlewares = require("./middlewares");
// precisa importar pra ser usado no código

const app = express();

const port = 3000;

app.get("/", (_req, res) => {
  res.send({ message: "Projeto Trybe"});
}); // res.send == envia resposta para o front-end

app.use(express.json());
app.use(middlewares.logMiddleware); // todas as rotas daqui pra baixo terão acesso a esse Middleware
app.use("/simpsons", simpsons);

app.use(middlewares.errorMiddleware); // fica abaixo das rotas

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
