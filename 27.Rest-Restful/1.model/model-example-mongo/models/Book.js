const connection = require('./connection');
const { ObjectId } = require('mongodb');
const Author = require('./Author');

// respostas do gabarito para consulta posterior

const getAll = () => connection().then((db) => db.collection('books').find({}).toArray())

const findById = async (id) => {
  const book = await connection()
    .then((db) => db.collection('books').findOne(new ObjectId(id)));
  
    if (!book) return null;
  
    return book;
}

const isValid = async (title, authorId) => {
  if (!title || typeof title !== 'string') return false;
  // Aqui a única alteração é que `authorId` deve ser uma string de 24 caracteres, e não mais um número
  if (!authorId || typeof authorId !== 'string' || authorId.length !== 24 || !(await Author.findById(authorId))) return false;

  return true;
}
// precisa usar o async/await porque a função findById é assíncrona
// faz a busca pelo ObjectId do Author
const create = async (title, author_id) => await connection()
  .then((db) => db.collection('books').insertOne({ title, author_id }))

// const update = async (id, title, authorId) => {
//   await connection.execute(
//     'UPDATE model_example.books SET title = ?, author_id = ? WHERE id = ?',
//     [title, authorId, id]
//   );
//   return { id, title, authorId };
// }

// const exclude = async (id) => {
//   await connection.execute('DELETE FROM model_example.books WHERE id = ?', [id]);
// }

module.exports = {
    getAll,
    findById,
    isValid,
    create,
    // update,
    // exclude
};
