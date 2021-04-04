const express = require("express");

const app = express();

function isEmailValid(email) {
  if (email.includes("@") && email.includes(".com")) {
    return true
  };

  return false;
};

function isPassValid(password) {
  if (password.length > 4 && password.length < 8) {
    return true
  };

  return false;
};


app.post("/", (req, res) => {
  const email = isEmailValid(req.body.email);
  const password = isPassValid(req.body.password);

  if (email && password) {
    res.status(200).send({ message: "Login succeed!" });
  } else {
    res.status(401).send({ message: "Email or Password is incorrect" });
  }
});

module.exports = app;
