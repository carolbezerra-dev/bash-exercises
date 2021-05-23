const defineCampaignProductModel = (sequelize, _DataTypes) => {
  const CampaignProduct = sequelize.define('CampaignProduct',
  {}, // não precisa mapear nada porque são colunas que já existem
  { timestamps: false } // informa que não tem createdAt e updatedAt
  );
  
  CampaignProduct.associate = (models) => {
    models.Product.belongsToMany(models.Campaign, {
      as: 'Campaigns',
      through: CampaignProduct,
      foreignKey: 'productId',
      otherKey: 'campaignId',
    });

    models.Campaign.belongsToMany(models.Product, {
      as: 'Products',
      through: CampaignProduct,
      foreignKey: 'campaignId',
      otherKey: 'productId',
    }); // esse é exatamente o oposto do acima
  }

  return CampaignProduct;
}

module.exports = defineCampaignProductModel;
