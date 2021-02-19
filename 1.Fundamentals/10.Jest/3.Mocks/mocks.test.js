const mocks =  require('./mocks');

describe('Exercícios do dia 10.3', () => {
  /* 1 Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada. */
  it('Questão 1', () => {
    mocks.randomNumber = jest.fn().mockReturnValue(10);
    // transformou em mock e colocou retorno padrão como 10
    mocks.randomNumber();
    // chama a função
    expect(mocks.randomNumber).toHaveBeenCalled();
    // testa se foi chamada, não precisa dos ()
    expect(mocks.randomNumber()).toBe(10);
    // testa seu retorno, precisa dos ()
    expect(mocks.randomNumber).toHaveBeenCalledTimes(2)
    // testa quantas vezes foi chamada, sem ()
  })

  it('Questão 2', () => {
    /* 2 Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários. */
    mocks.randomNumber.mockImplementation((a, b) => a / b);

    expect(mocks.randomNumber(10, 2)).toBe(5);
  })

  it('Questão 3', () => {
    /* 3 Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários. */
    mocks.randomNumber.mockImplementation((a, b, c) => a * b * c);

    expect(mocks.randomNumber(2, 2, 2)).toBe(8);

    mocks.randomNumber.mockClear();
    // limpa a implementação feita
    mocks.randomNumber.mockImplementation((a) => a * 2);

    expect(mocks.randomNumber(2)).toBe(4);
  })
})

describe('Exercícios dia 10.3', () => {
  it('Questão 4', () => {
    /* 4 Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las. */
    // mocks.upperString = jest.fn();
    // mocks.upperString.mockImplementation((str) => str.toLowerCase());
    // expect(mocks.upperString('HELLO')).toBe('hello');
    

    mocks.justFirst = jest.fn();
    mocks.justFirst.mockImplementation((str) => str.substr(str.length - 1, 1));
    expect(mocks.justFirst('HELLO')).toBe('O');

    mocks.concatenate = jest.fn();
    mocks.concatenate.mockImplementation((a, b, c) => a + b + c);
    expect(mocks.concatenate('how', 'ARE', 'you')).toBe('howAREyou');
  })

  it('Questão 5', () => {
    /* 5 Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar. */
    mocks.upperString = jest.spyOn(mocks, 'upperString');
    mocks.upperString.mockImplementation((str) => str.toLowerCase());
    expect(mocks.upperString('HELLO')).toBe('hello');

    mocks.upperString.mockRestore();

    expect(mocks.upperString('hi')).toBe('HI');
    // o que foi feito na questão 4 influencia nesse escopo, pra passar basta comentar
  })
})