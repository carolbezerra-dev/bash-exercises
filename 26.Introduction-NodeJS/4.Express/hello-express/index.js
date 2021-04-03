// código da aula, testando com Postman
const express = require("express");
const app = express();
const router = express.Router(); // é um roteador que pode agrupar conjunto de rotas
const rescue = require("express-rescue"); // dependência para usar com promise

const authMiddleware = (req, res, next) => { // middleware porque tem 3 paramâmetros
  console.log("Entrei no middleware");
  // if (req.headers.authorization) {
  //   next();
  // } else {
  //   res.status(401) // 401 é status de erro, não-autorizado
  //   res.send({
  //     message: "Token inválido", // mostra a mensagem como se fosse um JSON
  //   }); // podia emendar um ponto no outro como em HOF
  // }
  next(); // sem o next ele fica num load eterno
};

const logMiddleware = (req, _res, next) => {
  console.log(`${req.method}: ${req.path}`);
  next();
};

const errorMiddleware = (err, _req, res, _next) => { // middleware de erro
  console.log(err.stack);
  res.status(500).send({ message: "Algo deu errado :(" });
}; // desse jeito se usar Promise, não funciona

router.use(authMiddleware); // serve para chamar uma rota específica
// app.use(authMiddleware); // serve para chamar o middleware
// acima das rotas porque assim elas serão alteradas conforme o middleware
app.use(logMiddleware);
app.use(express.json()); // substitui o body-parser que ta depreciado

router.get("/dash", (_req, res) => { // vai precisar usar /admin/dash que é a rota completa
  res.send({ message: "Admin Dashboard" });
})

app.use("/admin", router); // aplicação vai usar essa rota que empacota a que é ligada ao router

app.get("/", (_req, res) => { // express normal
  res.send("Hello, World!"); // send representa status 200
});

app.get("/node", (_req, res) => { // express normal
  res.send({
    message: "Hello, Node!", // mostra a mensagem como se fosse um JSON
  });
});

app.post("/node", (req, res) => {
  console.log(req.body);
  res.send(req.body);
}); // não tive resultado porque não apareceu no browser

app.get("/error", rescue(async (_req, res) => {
  throw new Error("Encontrei um erro aqui"); // vai dar o erro 500, status para erro de código
}));

app.use(errorMiddleware); // middleware de erro se chama no final

app.listen(3000, () => {
  console.log("App rodando na porta 3000");
});
