'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Products', 'price', {
      type: Sequelize.FLOAT,
    });
  },
// ou seja, está fazendo uma alteração na tabela, acrescentando um novo campo
  down: async (queryInterface, _Sequelize) => {
    return queryInterface.removeColumn('Products', 'price');
  }
};
