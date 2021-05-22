// serve para alimentar com dados a tabela criada
const createProduct = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
/* Sequelize, estou definindo um modelo chamado Product (coloca o model no singular, ele busca a tabela no plural na migration) */
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
/* essas são as 2 colunas que são preenchidas manualmente (a outra é 'id' que é autoincremente e 'createdAt' e 'updatedAt' que são datas) */
  });
  
  return Product;
}

module.exports = createProduct;
