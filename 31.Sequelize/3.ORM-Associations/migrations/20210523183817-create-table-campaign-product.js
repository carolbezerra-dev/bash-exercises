'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CampaignProducts', {
      productId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Products',
          key: 'id',
        }
      },
      campaignId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Campaigns',
          key: 'id',
        }
      }
    })
  },
// ou seja, essa é uma tabela de junção que tem 2 colunas que são FK
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('CampaignProducts');
  }
};
