const express = require("express");
const posts = require("../data/posts.json");

const app = express();

app.get("/", (_req, res) => {
  res.status(200).send(posts);
});

function isIdValid(id) {
  const isId = posts.find(item => item.id == id);

  return isId;
};

app.get("/:id", (req, res) => {
  const idValid = isIdValid(req.params.id);
  if (idValid) {
    res.status(200).send(idValid);
  } else {
    res.status(404).send({ message: "id not found" });
  }
});

module.exports = app;
