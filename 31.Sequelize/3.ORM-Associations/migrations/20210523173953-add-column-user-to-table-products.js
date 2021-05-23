'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Products', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1,
      references: {
        // isso significa que essa coluna é uma chave estrangeira
        model: 'Users',
        // nome da tabela que se está referenciando
        foreignKey: 'id'
        // nome da coluna que é chave primária dessa outra tabela
      }
    });
  // 1º parâmetro: nome da tabela onde será adicionada a coluna
  // 2º parâmetro: nome da coluna que você quer adicionar
  // 3º parâmetro: objeto com detalhes dessa coluna a ser adicionada
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Products', 'userId');
  }
};
