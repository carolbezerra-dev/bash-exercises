// -----------$match e $limit--------------------------------------------------
// 1.Selecione todas as transações feitas pelo cliente chamado "Dave America";
db.transactions.aggregate([{ $match: { from: "Dave America" } }]);

// 2.Selecione todas as transações com o valor entre 700 e 6000, ou que sejam recebidas pela cliente "Lisa Simpson";
db.transactions.aggregate([{ $match: {
  $or: [{ value: { $gt: 700, $lt: 6000 } }, { to: "Lisa Simpson" } ] } }]);

// 3.Selecione três transações com o valor acima de 1000.
db.transactions.aggregate([{ $match: { value: { $gt: 1000 } } }, { $limit: 3 }]);
// -----------$group-----------------------------------------------------------------
// 1.Selecione todos os bancos;
db.transactions.aggregate([{ $group: { _id: "$bank" } }]);
// 2. Selecione o valor total das transações em cada banco e quantas são;
db.transactions.aggregate([{ $group: { _id: "$bank", sumValue: { $sum: "$value" } }  }]);
// 3. Selecione o valor total de transações;
db.transactions.aggregate([{ $group: { _id: null, sumAllValue: { $sum: "$value" } }  }]);
// 4. Selecione os bancos que têm o valor total de transações maior que 1000.
db.transactions.aggregate([{ $group:
  { _id: "$bank", valueSum: { $sum: "$value" } } },
  { $match: { valueSum: { $gt: 1000 } } }
]);
// -------------$project, $unmind, $lookup-------------------------------------
// 1.Selecione todos os clientes com as suas respectivas transações feitas;
db.clients.aggregate([{
  $lookup: {
    from: "transactions",
    localField: "name",
    foreignField: "from",
    as: "clients_make_transactions"
  }
}]);
// 2.Selecione quatro clientes com as suas respectivas transações recebidas;
db.clients.aggregate([{
  $lookup: {
    from: "transactions",
    localField: "name",
    foreignField: "to",
    as: "clients_make_transactions"
  }
}, { $limit: 4 }]);
// 3.Selecione todos os cliente do estado da "Florida" e suas respectivas transações recebidas.
db.clients.aggregate([{ $match: { State: "Florida" } },
{
  $lookup: {
    from: "transactions",
    localField: "name",
    foreignField: "to",
    as: "clients_make_transactions"
  }
}]);
