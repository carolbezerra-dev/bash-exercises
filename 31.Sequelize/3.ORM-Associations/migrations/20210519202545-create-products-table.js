'use strict';
// cria tabela
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // para rodar a migration e mexer no banco de dados
    return queryInterface.createTable('Products', {
/* Sequelize, crie uma tabela chamada Products (nome da migration no plural) com essas colunas com essas características: */
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // coloca as informações das colunas da tabela
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      }
      // createdAt e updatedAt vem como convenção
    });
  },
// o Sequelize assume que toda entidade (tabela) vai ter id, createdAt e updatedAt
  down: async (queryInterface, _Sequelize) => {
    // para desfazer a migration
    return queryInterface.dropTable('Products');
  }
};
