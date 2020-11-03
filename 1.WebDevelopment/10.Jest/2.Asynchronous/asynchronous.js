/* 1 Escreva um teste que verifique a chamada do callback de uma função uppercase, que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos */
const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

/* 2 Utilizando a sintaxe de Promise, faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável users, para saber quais IDs existem */
const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
  };
  
  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        }
  
        return reject({ error: 'User with ' + id + ' not found.' });
    });
  }
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  }

/* 4 O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios, e retorna uma lista como resultado. Dada a URL 'https://api.github.com/users/tryber/repos', faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista. */
const fetch = require('node-fetch');
const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}

/* 6.1 Nesse exercício, você irá criar funções parecidas com código abaixo - o mesmo que foi usado como exemplo sobre os testes de promise */
const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalHere = Animals.find((animal) => animal.name === name);
      if (animalHere) {
        return resolve(animalHere);
      }

      return reject('Nenhum animal com esse nome!');
    }, 100);
  })
)

const getAnimal = (name) => { // não esquecer o return quando se tem promise
  return findAnimalByName(name).then(list => list);
}

/* 6.2 Adicione uma nova funcionalidade para buscar pela idade dos animais. O retorno deve ser um array de objetos, mas, caso não ache nenhum, retorne uma mensagem de erro. Escreva tanto a função como o seu teste. */
const findAnimalsByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.find((animal) => animal.age === age);
      if (arrayAnimals) {
        return resolve(arrayAnimals);
      }

      return reject('Não possui essa idade de animal.');
    }, 100);
  })
);

const getListAnimals = (age) => (
  findAnimalsByAge(age).then(list => list)
);


module.exports = {
  uppercase,
  findUserById,
  getUserName,
  getRepos,
  getAnimal,
  getListAnimals
}