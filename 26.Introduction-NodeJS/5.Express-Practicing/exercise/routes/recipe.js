const express = require("express");
const recipes = require("../data/recipes.json");

const app = express();

app.get("/", (_req, res) => {
  res.status(200).send(recipes);
});

function isValidId(id) {
  return recipes.findIndex(item => item.id == id); // tipo o indexOf
}

app.delete("/:id", (req, res) => {
  const isId = isValidId(req.params.id);

  if (isId !== -1) {
    const newRecipes = recipes.splice(isId, 1); // mostra o que restou após ter sido exclusão
    res.status(200).send(newRecipes);
  } else {
    res.status(404).send({ message: "recipe not found" });
  }
});

app.put("/:id", (req, res) => {
  const indexId = isValidId(req.params.id);
  
  if (indexId !== -1) {
    const { name, ingredientes } = req.body;
    recipes[indexId].name = name;
    recipes[indexId].ingredientes = ingredientes;
    res.status(200).send({ message: recipes[indexId] });
  } else {
    res.status(404).send({ message: "recipe not found" });
  }
});

module.exports = app;
