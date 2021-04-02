function mathTo50(a, b, c) {
  const promise = new Promise((resolve, reject) => {
    if (typeof(a) !== "number" || typeof(b) !== "number" || typeof(c) !== "number") {
      reject(new Error("Informe apenas números"));
    }

    const count = (a + b) * c;
    if (count < 50) reject(new Error("Valor muito baixo"));
    resolve(`O valor obtido foi ${count}`);
  });

  return promise;
}

mathTo50(1, 10, 10)
  .then(result => console.log(`Resultado do resolve: ${result}`))
  .catch(err => console.log(`Resultado do reject: ${err.message}`));

// sem then/catch funciona, MAS o reject vem com um erro grande e o resolve não traz nada
// com then/catch o erro vem limpo e o resolve traz o resultado
// sem o .message ele traz Error:, com .message ele só traz a mensagem determinada e nada mais
