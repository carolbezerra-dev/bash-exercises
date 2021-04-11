const connection = require('./connection');

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

const getAll = async () => {
    const [authors] = await connection.execute(
        'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
    ); // é uma query normal do MySQL
    return authors.map(convertFields).map(getNewAuthor);
}; // busca todos os autores do banco
/* o método execute retorna uma Promise que quando resolvida, fornece um array com 2 campos: [rows, fields]. O primeiro index é onde está a resposta que se deseja (no caso o Authors) e no segundo vêm algumas informações extras sobre a query que não se utiliza, por isso se desestruturou assim [Authors] */


const findById = async (id) => {
	const query = 'SELECT first_name, middle_name, last_name FROM model_example.authors WHERE id = ?'
  const [ authorData ] = await connection.execute(query, [id]);
  
	if (authorData.length === 0) return null;
  
  const { firstName, middleName, lastName } = convertFields(authorData[0]);
    
  return getNewAuthor({
    id,
    firstName,
    middleName,
		lastName
	});
};

const isValid = (firstName, middleName, lastName) => {
	if (!firstName || typeof firstName !== 'string') return false;
	if (!lastName || typeof lastName !== 'string') return false;
	if (middleName && typeof middleName !== 'string') return false;

	return true;
};

const create = async (firstName, middleName, lastName) => connection.execute(
	'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
	[firstName, middleName, lastName],
);

module.exports = {
    getAll,
		findById,
		isValid,
		create
};
