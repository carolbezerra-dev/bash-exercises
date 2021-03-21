// -------------Expressão $add---------------------------
// 1.Calcule qual o custo total de cada produto, considerando o preço de compra e os impostos.
db.products.aggregate([
  { $project: { _id: 0, name: 1, totalCost: { $add: ["$purchase_price", "$taxes"] } } }
]);

// -------------Expressão $subtract---------------------------
// 1.Calcule qual o lucro total de cada produto, considerando o preço de compra, os impostos e seu valor de venda.
db.products.aggregate([
  { $project:
    { _id: 0, name: 1, profit: { $subtract: ["$sale_price", { $add: ["$purchase_price", "$taxes"] }] } } }
]);

// -------------Expressão $ceil, $floor---------------------------
// 1.Retorne o menor número inteiro relativo ao preço de venda de cada produto;
db.products.aggregate([
  { $project: { _id: 0, name: 1, minPrice: { $ceil: ["$sale_price"] } } }
]);
// 2.Retorne o maior número inteiro relativo ao lucro total sobre cada produto.
db.products.aggregate([
  { $project:
    { _id: 0,
      name: 1,
      profit: { $floor: { $subtract: ["$sale_price", { $add: ["$purchase_price", "$taxes"] }] } } } }
]);

// -------------Expressão $abs---------------------------
// 1.Calcule o valor absoluto do lucro total de cada produto.
db.products.aggregate([
  { $project:
    { _id: 0,
      name: 1,
      profit: { $abs: { $subtract: ["$sale_price", { $add: ["$purchase_price", "$taxes"] }] } } } }
]);

// -------------Expressão $multiply---------------------------
// 1.Calcule qual o valor total em estoque de cada produto, considerando o preço de venda e a quantidade;
db.products.aggregate([
  { $project: { _id: 0, name: 1, inStock: { $multiply: ["$sale_price", "$quantity"] } } }
]);
// 2.Calcule qual será o lucro total de cada produto caso todo o estoque seja vendido.
db.products.aggregate([
  { $project:
    { _id: 0,
      name: 1,
      profitInStock: { $multiply:
        [{ $subtract: ["$sale_price", { $add: ["$purchase_price", "$taxes"] }] }, "$quantity"]} } }
]);

// -------------Expressão $divide---------------------------
// 1.Calcule qual será o preço de venda de cada produto caso haja uma promoção de 50% de desconto.
db.products.aggregate([
  { $project: { _id: 0, name: 1, discountPrice: { $divide: ["$sale_price", 2] } } }
]);

// -------------Expressão $addFields---------------------------
// 1.Calcule o valor total do estoque, considerando que cada produto valha o mesmo que seu preço de venda. Lembre-se da quantidade.
db.products.aggregate([
  { $addFields: { totalInStock: { $multiply: ["$sale_price", "$quantity"] } } }
]);