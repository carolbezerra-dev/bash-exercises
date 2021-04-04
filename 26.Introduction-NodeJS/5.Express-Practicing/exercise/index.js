const express = require("express");
const { loginRoute,
  postsRoute,
  userRoute,
  recipeRoute } = require("./routes");

const app = express();

const port = 3000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.send({ message: "Ok, funcionou!" });
});

// app.use("/login", loginRoute); // question 1
// app.use("/posts", postsRoute); // question 3
// app.use("/user", userRoute); // question 4
app.use("/recipe", recipeRoute); // question 6 e 7



app.listen(port, () => console.log(`Rodando na porta ${port}`)); // ideia do gabarito
