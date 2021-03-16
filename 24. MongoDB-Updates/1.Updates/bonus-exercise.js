//Exercício 14 : Remova o campo class dos documentos que possuem esse campo com o valor unknown.
db.xmen.updateMany({ class: "unknown" },
  { $currentDate: { lastUpdate: { $type: "timestamp" } }, $unset: { class: "" } });

//Exercício 15 : Produza uma query que renomeie os campos de name para hero_name, e de true_name para full_name ; adicione o campo power com valor 100, em todos os documentos.
db.xmen.updateMany({},
  { $rename: { "name": "hero_name", "true_name": "full_name" }, $set: { power: 100 }});

//Exercício 16 : Produza uma query onde os mutantes class ômega ou gama passam a ter seu poder de 500 somente se seu poder for menor que 500.
db.xmen.updateMany({ class: { $in: ["omega", "gama"] } }, { $max: { power: 500 }});

//Exercício 17 : Produza uma query onde os mutantes class gama passam a ter seu poder de 300 somente se seu poder for maior que 300.
db.xmen.updateMany({ class: "gama" }, { $min: { power: 300 }});

//Exercício 18 : Decremente em 100 o poder dos mutantes não contêm a propriedade class .
db.xmen.updateMany({ class: { $exists: 0 } }, { $inc: { power: -100 }});

//Exercício 20 : Em apenas uma query, adicione o campo áreas com [ "outside" ] a todos os Junior Staff que não tenham o campo area definido.
db.xmen.update({ $and: [{ occupation: "Junior Staff" }, { areas: { $exists: 0 } }] },
  { $set: { "areas": [ "outside" ] }});
