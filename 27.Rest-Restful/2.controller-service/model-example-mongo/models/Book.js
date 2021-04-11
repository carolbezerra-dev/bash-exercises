const connection = require('./connection');
const { ObjectId } = require('mongodb');

// respostas do gabarito para consulta posterior

const getAll = () => connection().then((db) => db.collection('books').find({}).toArray());

const findById = async (id) => {
  const book = await connection()
    .then((db) => db.collection('books').findOne(ObjectId(id)));
  
    if (!book) return null;
  
    return book;
}

// faz a busca pelo ObjectId do Author
const create = (title, author_id) => connection()
  .then((db) => db.collection('books').insertOne({ title, author_id }));

module.exports = {
    getAll,
    findById,
    // isValid,
    create,
    // update,
    // exclude
};

/* aqui se cria as funções que se conectam com o BD */
