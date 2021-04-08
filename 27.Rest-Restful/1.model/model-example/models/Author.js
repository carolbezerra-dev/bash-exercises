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

module.exports = {
    getAll,
};
