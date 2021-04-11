const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getAll = async () =>
    connection()
        .then((db) => db.collection('authors').find().toArray())
        .then((authors) =>
        authors.map(({ _id, firstName, middleName, lastName }) => ({
            id: _id,
            firstName,
            middleName,
            lastName,
        })));

const findById = async (id) =>
connection().then((db) => db.collection('authors').findOne(ObjectId(id)));

const create = async (firstName, middleName, lastName) =>
connection()
    .then((db) =>
    db.collection('authors').insertOne({ firstName, middleName, lastName })
    ).then((result) => result);

module.exports = {
    getAll,
    findById,
    create,
};

/* agora esse arquivo contém apenas funções que se conectam com o banco de dados, todas as que eram funções de alguma lógica migraram para o service */
