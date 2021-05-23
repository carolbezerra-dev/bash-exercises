// serve para alimentar com dados a tabela criada
const createProduct = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
/* Sequelize, estou definindo um modelo chamado Product (coloca o model no singular, ele busca a tabela no plural na migration) */
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    // userId: DataTypes.INTEGER,
/* essas são as colunas que são preenchidas manualmente (a outra é 'id' que é autoincremente e 'createdAt' e 'updatedAt' que são datas) */
  });

  Product.associate = (models) => {
    Product.belongsTo(models.User, { as: 'User', foreignKey: 'userId' });
  }
  
  return Product;
}

module.exports = createProduct;
