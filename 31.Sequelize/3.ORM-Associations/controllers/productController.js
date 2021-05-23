const express = require('express');
const router = express.Router();

const { Product, User } = require('../models');

router.post('/', (req, res, next) => {
  const { name, description, price, userId } = req.body;

  Product.create({ name, description, price, userId }) // esse create é coisa do Sequelize
    .then(newProduct => res.status(201).json(newProduct))
    .catch(next); // vai direcionar pro middleware de erro que está no index.js
});

router.get('/', (_req, res, next) => {
  Product.findAll() // findAll é do Sequelize, buscar todos
    .then(result => res.status(200).json(result))
    .catch(next); // vai direcionar pro middleware de erro que está no index.js
});

// router.get('/:id', (req, res, next) => {
//   const { id } = req.params;
//   Product.findByPk(id) // encontre por Primary Key
//     .then(product => {
//       if (!product) return res.status(404).json({ message: 'Produto não encontrado' });

//       res.status(200).json(product);
//     })
//     .catch(next); // vai direcionar pro middleware de erro que está no index.js
// });

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const product = await Product.findByPk(id, {
    include: { model: User, as: 'User' },
  }); // isso aqui vai preencher as informações do user ao requisitar um produto

  if (!product) return res.status(404).json({ message: 'Produto não encontrado' });

  res.status(201).json(product);
});

router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const { name, description, price } = req.body;
  Product.update({ name, description, price }, { where: { id } }) // essa é a sintaxe
    .then(() => Product.findByPk(id))
// foi feito o findByPk porque o update não retorna nada. Se o id não existir, retorna null
    .then(product => res.status(200).json(product))
    .catch(next); // vai direcionar pro middleware de erro que está no index.js
});

router.delete('/:id', (req, res, next) => {
  const { id } = req.params;
  Product.destroy({ where: { id } }) // essa é a sintaxe
    .then(product => {
      if (!product) return res.status(404).json({ message: 'Produto não encontrado' });

      res.status(204).end()
    })
    .catch(next); // vai direcionar pro middleware de erro que está no index.js
});

module.exports = router;
