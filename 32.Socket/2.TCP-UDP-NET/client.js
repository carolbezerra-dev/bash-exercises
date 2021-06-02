const net = require('net');
const client = new net.Socket(); // nodejs, vou querer abrir um socket, ok?
const stdin = process.openStdin();
// é a fonte de entrada padrão de um processo, pega o input do usuário

const PORT = 3000;
const ADDRESS = 'localhost';

// CONFIGURAÇÕES
client.on('data', (data) => { // client, quando você receber dado, loga ele no console
  console.log(data.toString('utf-8')); // o próprio console já chama o toString()
});

client.on('close', () => { // client, quando o servidor encerrar, loga essa mensagem
  console.log('Você saiu da sala'); // para encerrar
});

// ABRE A CONEXÃO
client.connect(PORT, ADDRESS, () => {
  stdin.addListener('data', (data) => {
    /* fique escutando o stdin e toda vez que tiver um evento do tipo data
      (enviar dados pelo processo), rode essa callback */
    const message = data.toString('utf8').trim(); // trim é pra tirar quebra de linha
    client.write(message);
  });
});
