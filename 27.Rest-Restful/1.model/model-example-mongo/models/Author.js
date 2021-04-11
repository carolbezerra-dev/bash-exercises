const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getNewAuthor = (authorData) => {
const { id, firstName, middleName, lastName } = authorData;
// esses dados vieram do banco de dados

const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');
// alguns podem não ter o middleName, por isso o filter, depois une tudo (join) separando por ' '
return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
}}; // cria uma string com o nome completo do autor

const convertFields = (authorData) => ({
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name
}); // converte o nome dos campos de snake_case para camelCase

// Busca todos os autores do banco.
const getAll = async () => {
  return connection()
      .then((db) => db.collection('authors').find().toArray()) // retorna uma promise
          .then((authors) =>
              authors.map(({ _id, firstName, middleName, lastName }) =>
              getNewAuthor({
                  id: _id,
                  firstName,
                  middleName,
                  lastName,
              })
          )
      );
}

const findById = async (id) => {
  if (!ObjectId.isValid(id)) {
      return null;
  }

  const authorData = await connection()
      .then((db) => db.collection('authors').findOne(new ObjectId(id)));

  if (!authorData) return null;

  const { firstName, middleName, lastName } = authorData;

  return getNewAuthor({ id, firstName, middleName, lastName });
};

const isValid = (firstName, middleName, lastName) => {
	if (!firstName || typeof firstName !== 'string') return false;
	if (!lastName || typeof lastName !== 'string') return false;
	if (middleName && typeof middleName !== 'string') return false;

	return true;
};

const create = async (firstName, middleName, lastName) =>
    await connection()
        .then((db) => db.collection('authors').insertOne({ firstName, middleName, lastName }))
        .then(result => getNewAuthor({ id: result.insertedId, firstName, middleName, lastName }));

module.exports = {
    getAll,
	findById,
	isValid,
	create
};
