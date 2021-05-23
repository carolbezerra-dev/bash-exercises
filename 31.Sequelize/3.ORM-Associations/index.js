const express = require('express');
const bodyParser = require('body-parser');

const controllers = require('./controllers');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', controllers.products);
app.use('/users', controllers.users);
app.use('/campaigns', controllers.campaigns);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: err.message });
})

app.listen(3000, () => {
  console.log('App ouvindo a porta 3000!');
});
