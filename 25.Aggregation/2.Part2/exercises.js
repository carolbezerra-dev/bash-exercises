/* Exercício 1 : Utilize uma combinação das expressões aritméticas e adicione um campo chamado idade à coleção clientes. Algumas dicas:
arredonde para baixo o valor da idade; calcule a idade usando a diferença entre a data corrente e a data de nascimento; 1 dia é igual a 86400000 milissegundos. */
db.clientes.aggregate([
  { $addFields: {
    idade: { $floor: { $divide: [{$divide: [{$subtract: ["$$NOW", "$dataNascimento"]}, 86400000]}, 365] } }
  } }
]);

// Exercício 2 : Utilizando o novo campo idade, conte quantos clientes têm entre 18 e 25 anos.
db.clientes.aggregate([
  { $addFields: {
    idade: { $floor: { $divide: [{$divide: [{$subtract: ["$$NOW", "$dataNascimento"]}, 86400000]}, 365] } }
  } },
  { $match: { idade: { $gt: 18, $lt: 25 } } },
  { $count: "conteIdadeDe18a25" }
]);

// Exercício 3 : Remova os estágios $count e $match do exercício anterior e adicione um estágio no pipeline que coloque as compras do cliente no campo compras.
db.clientes.aggregate([
  { $addFields: {
    idade: { $floor: { $divide: [{$divide: [{$subtract: ["$$NOW", "$dataNascimento"]}, 86400000]}, 365] } }
  } },
  { $lookup: {
    from:"vendas",
    localField: "clienteId",
    foreignField: "clienteId",
    as: "comprasCliente"
  } }
]);

// Exercício 4 : Selecione TODOS os clientes que compraram entre Junho de 2019 e Março de 2020.
db.clientes.aggregate([
  { $addFields: {
    idade: { $floor: { $divide: [{$divide: [{$subtract: ["$$NOW", "$dataNascimento"]}, 86400000]}, 365] } }
  } },
  { $lookup: {
    from:"vendas",
    localField: "clienteId",
    foreignField: "clienteId",
    as: "comprasCliente"
  } },
  { $match: { "comprasCliente.dataVenda": { $gte: ISODate('2019-06-01'), $lte: ISODate('2020-03-31') } } },
]);

// Exercício 5 : Confira o número de documentos retornados pelo pipeline com o método itcount() . Até aqui, você deve ter 486 documentos sendo retornados.
db.clientes.aggregate([
  { $addFields: {
    idade: { $floor: { $divide: [{$divide: [{$subtract: ["$$NOW", "$dataNascimento"]}, 86400000]}, 365] } }
  } },
  { $lookup: {
    from:"vendas",
    localField: "clienteId",
    foreignField: "clienteId",
    as: "comprasCliente"
  } },
  { $match: { "comprasCliente.dataVenda": { $gte: ISODate('2019-06-01'), $lte: ISODate('2020-03-31') } } },
  { $count: "qtdDocRetornados" }
]);

// Exercício 6 : Deixe apenas os top 10 clientes com mais compras nesse período.
db.clientes.aggregate([
  { $addFields: {
    idade: { $floor: { $divide: [{$divide: [{$subtract: ["$$NOW", "$dataNascimento"]}, 86400000]}, 365] } }
  } },
  { $lookup: {
    from:"vendas",
    localField: "clienteId",
    foreignField: "clienteId",
    as: "comprasCliente"
  } },
  { $match: { "comprasCliente.dataVenda": { $gte: ISODate('2019-06-01'), $lte: ISODate('2020-03-31') } } },
  { $addFields: { lengthComprasCliente: { $size: "$comprasCliente" } } },
  { $sort: { lengthComprasCliente: -1 } },
  { $limit: 10 }
]);

// Exercício 7 : Para esses clientes, adicione um campo chamado compras.valorComDesconto em todas as compras do período, aplicando 10% de desconto sobre o valor total da compra ( valorTotal ).
db.clientes.aggregate([
  { $addFields: {
    idade: { $floor: { $divide: [{$divide: [{$subtract: ["$$NOW", "$dataNascimento"]}, 86400000]}, 365] } }
  } },
  { $lookup: {
    from:"vendas",
    localField: "clienteId",
    foreignField: "clienteId",
    as: "comprasCliente"
  } },
  { $match: { "comprasCliente.dataVenda": { $gte: ISODate('2019-06-01'), $lte: ISODate('2020-03-31') } } },
  { $addFields: { lengthComprasCliente: { $size: "$comprasCliente" } } },
  { $sort: { lengthComprasCliente: -1 } },
  { $limit: 10 },
  { $unwind: "$comprasCliente" },
  { $addFields:
    { "comprasCliente.valorComDesconto": { $multiply: ["$comprasCliente.valorTotal", 0.90] } } }
]);

// Exercício 8 : Ainda nesse pipeline, descubra os 5 estados com mais compras.
db.clientes.aggregate([
  { $addFields: {
    idade: { $floor: { $divide: [{$divide: [{$subtract: ["$$NOW", "$dataNascimento"]}, 86400000]}, 365] } }
  } },
  { $lookup: {
    from:"vendas",
    localField: "clienteId",
    foreignField: "clienteId",
    as: "comprasCliente"
  } },
  { $match: { "comprasCliente.dataVenda": { $gte: ISODate('2019-06-01'), $lte: ISODate('2020-03-31') } } },
  { $addFields: { lengthComprasCliente: { $size: "$comprasCliente" } } },
  { $sort: { lengthComprasCliente: -1 } },
  { $limit: 10 },
  { $unwind: "$comprasCliente" },
  { $addFields:
    { "comprasCliente.valorComDesconto": { $multiply: ["$comprasCliente.valorTotal", 0.90] } } },
  { $group: { _id: "$endereco.uf", totalCompras: { $sum: 1 } } },
  { $sort: { totalCompras: -1 } },
  { $limit: 5 }
]);

// Exercício 9 : Descubra o cliente que mais consumiu QUEIJO PRATO. Retorne um documento com a seguinte estrutura:
db.clientes.aggregate([
  { $addFields: {
    idade: { $floor: { $divide: [{$divide: [{$subtract: ["$$NOW", "$dataNascimento"]}, 86400000]}, 365] } }
  } },
  { $lookup: {
    from:"vendas",
    localField: "clienteId",
    foreignField: "clienteId",
    as: "comprasCliente"
  } },
  { $match: { "comprasCliente.dataVenda": { $gte: ISODate('2019-06-01'), $lte: ISODate('2020-03-31') } } },
  { $addFields: { lengthComprasCliente: { $size: "$comprasCliente" } } },
  { $sort: { lengthComprasCliente: -1 } },
  { $limit: 10 },
  { $unwind: "$comprasCliente" },
  { $addFields:
    { "comprasCliente.valorComDesconto": { $multiply: ["$comprasCliente.valorTotal", 0.90] } } },
  // { $group: { _id: "$endereco.uf", totalCompras: { $sum: 1 } } },
  // { $sort: { totalCompras: -1 } },
  // { $limit: 5 },
  { $unwind: "$comprasCliente.itens" },
  { $match: { "comprasCliente.itens.nome": "QUEIJO PRATO" } },
  { $project: { _id: 0, nomeCliente: "$nome", uf: "$endereco.uf", totalConsumido: { $sum: "$comprasCliente.itens.quantidade" } } },
  { $sort: { totalConsumido: -1 } },
  { $limit: 1 }
]);

// Exercício 10 : Selecione todas as vendas do mês de Março de 2020, com status EM SEPARACAO . Acrescente um campo chamado dataEntregaPrevista com valor igual a três dias após a data da venda. Retorne apenas os campos clienteId, dataVenda e dataEntregaPrevista.
db.clientes.aggregate([
  { $addFields: {
    idade: { $floor: { $divide: [{$divide: [{$subtract: ["$$NOW", "$dataNascimento"]}, 86400000]}, 365] } }
  } },
  { $lookup: {
    from:"vendas",
    localField: "clienteId",
    foreignField: "clienteId",
    as: "comprasCliente"
  } },
  { $match: { "comprasCliente.dataVenda": { $gte: ISODate('2019-06-01'), $lte: ISODate('2020-03-31') } } },
  { $addFields: { lengthComprasCliente: { $size: "$comprasCliente" } } },
  { $sort: { lengthComprasCliente: -1 } },
  { $limit: 10 },
  { $unwind: "$comprasCliente" },
  { $addFields:
    { "comprasCliente.valorComDesconto": { $multiply: ["$comprasCliente.valorTotal", 0.90] } } },
  // { $group: { _id: "$endereco.uf", totalCompras: { $sum: 1 } } },
  // { $sort: { totalCompras: -1 } },
  // { $limit: 5 },
  // { $unwind: "$comprasCliente.itens" },
  // { $match: { "comprasCliente.itens.nome": "QUEIJO PRATO" } },
  // { $project: { _id: 0, nomeCliente: "$nome", uf: "$endereco.uf", totalConsumido: { $sum: "$comprasCliente.itens.quantidade" } } },
  // { $sort: { totalConsumido: -1 } },
  // { $limit: 1 },
  { $match: { $and: [
    { "comprasCliente.dataVenda": { $gte: ISODate("2020-03-01"), $lte: ISODate("2020-03-31") } },
    { "comprasCliente.status": "EM SEPARACAO" }] } },
  { $addFields: {
    "comprasCliente.dataEntregaPrevista": { $add: ["$comprasCliente.dataVenda", 3 * 24 * 60 * 60 * 1000] } } }
]);
