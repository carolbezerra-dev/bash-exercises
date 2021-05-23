const express = require('express');
const router = express.Router();

const { User } = require('../models');

router.get('/', async (_req, res) => {
  const user = await User.findAll();

  res.status(200).json(user);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const user = await User.findByPk(id);

  res.status(200).json(user);
});

router.post('/', async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.create({ name, email, password });

  res.status(200).json(user);
});

// router.put('/:id', async (req, res) => {
//   const { id } = req.params;
//   const { } = req.body;

//   res.status(200).json({});
// });

// router.delete('/:id', async (req, res) => {
//   const { id } = req.params;

//   res.status(200).json({});
// });

module.exports = router;
