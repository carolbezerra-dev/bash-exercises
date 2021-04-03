const express = require('express'); // importar
/* Chama a função express para instanciar a aplicação do framework
   e armazenar na variável app para ser utilizada no código */
const app = express(); // inicializar

/* Ouve por requisições, utilizando o método GET, no caminho '/' */
app.get('/', (req, res) => { // método com rota
   /* Retorna a resposta */
  res.send("Hello world"); // mensagem do navegador
});

/* Ouve a porta 3000 */
app.listen(3000, function () { // porta que será usada no navegador
  console.log('Example app listening on port 3000!'); // mensagem no terminal
});
