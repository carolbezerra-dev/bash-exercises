const Book = require('../services/Book');

const getAll = async (req, res) => {
  const books = await Book.getAll();

  res.status(200).json(books);
}

const findById = async (req, res) => {
const { id } = req.params;

const book = await Book.findById(id);

if (!book) return res.status(404).json({ message: 'Not found' });

res.status(200).json(book);
}

const create = async (req, res) => {
const { first_name, middle_name, last_name } = req.body;

const book = await Book.create(first_name, middle_name, last_name);

if (!book) return res.status(400).json({ message: 'Dados inválidos' });

res.status(201).json(book);
}

module.exports = {
  getAll,
  findById,
  create
}

/* tudo o que estava no index, migrou aqui */