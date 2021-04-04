const express = require("express");
const users1 = require("../data/users1.json");
// const users2 = require("../data/users2.json");

const app = express();

function isUserValid(name) {
  return users1.find(item => item.user == name);
};

app.get("/:name", (req, res) => {
  const userValid = isUserValid(req.params.name);

  if (userValid) {
    res.status(200).send(userValid.comments);
  } else {
    res.status(404).send({ message: "user not found"});
  }
});

module.exports = app;
