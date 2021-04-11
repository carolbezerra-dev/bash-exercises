const Author = require('../models/Author');
const Book = require('../models/Book');

const isValid = async (title, authorId) => {
  if (!title || typeof title !== 'string') return false;
  if (!authorId || typeof authorId !== 'number' || !(await Author.findById(authorId))) return false;

  return true;
}
// precisa usar o async/await porque a função findById é assíncrona

const getAll = async () => await Book.getAll();

const findById = async (id) => await Book.findById(id);

const create = async (title, authorId) => {
  const bookIsValid = isValid(title, authorId);

  if (!bookIsValid) return false;

  const { insertedId } = await Book.create(title, authorId);

  return getNewAuthor({
    id: insertedId,
    title,
    authorId
  });
}

module.exports = {
  isValid,
  getAll,
  findById,
  create
}

/* aqui se chama as funções criadas no models, e que se vai fazer alguma lógica */