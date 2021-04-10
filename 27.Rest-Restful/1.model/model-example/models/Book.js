const connection = require('./connection');
const Author = require('./Author');

const getAll = async () => {
  const [books] = await connection.execute('SELECT * FROM model_example.books;');
  // é uma query normal do MySQL
  return books.map(({ id, title, author_id }) => ({ id, title, authorId: author_id }));
}; // busca todos os autores do banco

// resposta do gabarito

const findById = async (id) => {
  const query = 'SELECT * FROM model_example.books WHERE id = ?;'
  const [ bookData ] = await connection.execute(query, [id]);

  if (bookData.length === 0) return null;

  return bookData.map(({ id, title, author_id }) => ({ id, title, authorId: author_id }))[0];
};

const isValid = async (title, authorId) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  
  const isAuthorId = await Author.findById(authorId);
  if (!authorId || typeof authorId !== 'number' || !isAuthorId ) return false;

  return true;
};
// precisa usar o async/await porque a função findById é assíncrona

const create = async (title, authorId) => {
  return connection.execute(
    'INSERT INTO model_example.books (title, author_id) VALUES (?,?);',
    [title, authorId])
};

const update = async (id, title, authorId) => {
  await connection.execute(
    'UPDATE model_example.books SET title = ?, author_id = ? WHERE id = ?',
    [title, authorId, id]
  );
  return { id, title, authorId };
}

const exclude = async (id) => {
  await connection.execute('DELETE FROM model_example.books WHERE id = ?', [id]);
}

module.exports = {
    getAll,
    findById,
    isValid,
    create,
    update,
    exclude
};
