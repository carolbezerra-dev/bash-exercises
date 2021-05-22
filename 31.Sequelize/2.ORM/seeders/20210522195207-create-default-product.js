'use strict';

const { DataTypes } = require('sequelize/types');

// semelhante a migration, mais comum para fazer insert
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert(
// serve para inserir dados
      'Products', // nome no plural como na migration
      [{
        // não precisa do 'id' que é autoIncrement
        name: 'iPhone',
        description: 'iPhone X novo',
        price: 15000.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      }],
      {}
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
    // vai apagar tudo o que existir na tabela Products
  }
};
// não deu certo na hora de rodar o comando `npx sequelize db:seed:all`
