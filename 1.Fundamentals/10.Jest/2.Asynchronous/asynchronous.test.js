const { uppercase, 
  getUserName, 
  getRepos, 
  getAnimal,
  getListAnimals } = require('./asynchronous');

describe('Questão 1', () => {
  it('saber se está em maiúsculo', (done) => { // done porque é assíncrono
    uppercase('hello', (callback) => { // precisa chamar os 2 parâmetros
      expect(callback).toBe('HELLO');
      done();
    })
  });
})

describe('Questão 2 e 3', () => {
  it('saber o nome pelo ID', async () => { // async/await para transformar em assíncrono
    const testing = await getUserName(4).then(user => expect(user).toEqual('Mark'))
    return testing;
  });
  it('saber o nome pelo ID para dar erro', async () => {
    const testingError = await getUserName(2).catch(user => expect(user).toEqual({ error: 'User with 2 not found.' }))
    return testingError;
  });
// 3 Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await.
  it('o mesmo acima com try/catch', async () => {
    try { // pode tirar o then
      const testing = await getUserName(4);
      expect(testing).toEqual('Mark')
    } catch {
      const testingError = await getUserName(2);
      expect(testingError).toEqual({ error: 'User with 2 not found.' })
    }
  })
})
// 4
describe('Questão 4', () => {
  it('gets a list of repositories names', () => {
    const url = 'https://api.github.com/users/tryber/repos';
    expect.assertations(2);
    return getRepos(url).then(result => {
      expect(result).notToBeNull('sd-01-week4-5-project-todo-list')
      expect(result).not.toContain('sd-01-week4-5-project-meme-generator')
    })
  })
})
/* 5 Para este exercício, tente adivinhar a saída dos console.log dos testes abaixo sem executá-los, e veja se compreendeu bem o funcionamento do beforeEach e do afterEach */
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

// 6.1
describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

// 6.2
describe('Quando existe o animal com a idade', () => {
  test('testando por idade', async () => {
    return getListAnimals(2).then(age => {
      expect(age).toEqual({ name: 'Soneca', age: 2, type: 'Dog' });
    });
  });
});

describe('Quando existe o animal com a idade', () => {
  test('tratando o erro', async () => {
    return getListAnimals(3).catch(error => {
      expect(error).toEqual('Não possui essa idade de animal.');
    });
  });
});