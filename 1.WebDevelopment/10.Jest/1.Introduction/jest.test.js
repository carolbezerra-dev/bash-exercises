const testing = require('./jest');

describe('Transformando em Jest os testes Assert do arquivo unit-tests.js ', () => {
  it('Teste se o retorno de sum(4, 5) é 9', () => {
    expect(testing.sum(4, 5)).toBe(9);
  });
// chama o arquivo e a função que será testada nesse teste específico
  it('Teste se o retorno de sum(0, 0) é 0', () => {
    expect(testing.sum(0, 0)).toBe(0);
  });

  it('Teste se a função sum lança um erro quando os parametros são 4 e "5" (string 5)', () => {
    expect(testing.sum(4, "5")).toBe('parameters must be numbers');
  });

  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(testing.myRemove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
  });
//toStrictEqual para comparar array
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(testing.myRemove([1, 2, 3, 4], 3)).not.toStrictEqual([1, 2, 3, 4]);
  });

  it('Verifique se o array passado por parâmetro não sofreu alterações', () => {
    expect(testing.myRemove([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4])
  });
});

test('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
  expect(testing.myFizzBuzz(15)).toBe('fizzbuzz');
});

test('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
  expect(testing.myFizzBuzz(3)).toBe('fizz');
});

test('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
  expect(testing.myFizzBuzz(5)).toBe('buzz');
});

test('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
  expect(testing.myFizzBuzz(8)).toBe(8);
});

test('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
  expect(testing.myFizzBuzz('oi')).toBeFalsy();
});
//toBeFalsy para saber se o resultado é booleano false
