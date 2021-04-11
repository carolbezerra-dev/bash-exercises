const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'model_example'
});
// a própria biblioteca irá gerenciar as múltiplas conexões feitas com o banco

module.exports = connection;
