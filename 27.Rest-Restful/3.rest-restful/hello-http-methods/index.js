const fetch = require('node-fetch');

// Armazenamos o token numa variável.
// Num ambiente real, esse valor viria do Local Storage, ou de uma variável de ambiente
const API_TOKEN = '2d635ea9b637ea0f27d58985cc161d64';

// Criamos um novo objeto de Headers
const headers = new fetch.Headers({
  Authorization: API_TOKEN,
  'Content-Type': 'application/json',
  // Precisamos adicionar o header `Content-Type` e defini-lo como `application/json`
});

// Depois, criamos o body
// Utilizamos o `stringify` para que possamos enviar esse body como JSON
const body = JSON.stringify({
  name: 'Tryber',
  email: 'tryber@betrybe.com',
  password: 'Tr1b3r'});

// Para aquecer, vamos começar com uma requisição do tipo `GET`
fetch('https://postman-echo.com/post?param1=teste', {headers, method: 'POST', body})
  // Passamos o objeto de headers como parâmetro para o fetch
  .then((response) => {
    // Ao receber a resposta, verificamos se correu tudo bem
    if (!response.ok) return Promise.reject(response);
      // Caso não, forçamos a Promise a ser rejeitada

    // Caso esteja tudo OK, lemos o body como JSON
    return response.json();
  })
  .then((data) => {
    // Por fim, escrevemos o body no console
    console.log(data);
  })
  .catch((errorOrResponse) => {
    // Em caso de falha simples (a request completou com um status diferente de 2xx)
    // simplesmente logamos o status no console
    if (errorOrResponse.status) {
      return console.error(`Request failed with status ${errorOrResponse.status}`);
    }

    // Caso tenha acontecido um erro de rede (não foi possível completar a request)
    // logamos o erro todo
    console.error(errorOrResponse);
  });
