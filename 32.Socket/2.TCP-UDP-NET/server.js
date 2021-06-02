const net = require('net');
const { Socket } = require('dgram');
const PORT = 3000;
const sockets = [];
let guestId = 0;

const broadcastMessage = (from, message) => {
  sockets.filter((socket) => socket.guest !== from) // serve para remover o guest atual
    .forEach((socket) => socket.write(message)); // manda a mensagem para todos os outros
};

// aqui faz toda a configuração, cada novo socket aberto, recebe essa configuração
const onNewConnection = (socket) => {
  console.log('Socket conectou'); // informa o início no terminal

  guestId += 1; // a cada novo secket, um novo id
  socket.guest = `Gest ${guestId}`;
  // cria uma nova propriedade no objeto do socket informando o novo id
  sockets.push(socket); // adiciona no array criado
  socket.write('Boas vindas ao chat!') // informa o início ao cliente

  // socket.on('error', (err) => { // configuração de erro
  //   console.error('Erro no socket', err);
  // });

  broadcastMessage(socket.guest, `${socket.guest} entrou no chat`);
  // vai avisar a todos os sockets, exceto ele próprio, que o cliente novo entrou

  socket.on('end', () => { // diz o que deve acontecer quando a conexão encerrar
    console.log('Socket desconectado') // informa o fim no terminal
    sockets.splice(sockets.indexOf(socket), 1);
    // remove do array, da posição exata, o socket que foi encerrado
    
    const message = `${socket.guest} deixou o chat\n`
    broadcastMessage(socket.guest, message);
    // avisa a todos os sockets, exceto ele próprio, que o cliente saiu
  });
  
  socket.on('data', (data) => { // recebimentos dos dados
    console.log(`Cliente disse: ${data}`);

    const message = `${socket.guest} > ${data.toString('utf-8')}`;
    broadcastMessage(socket.guest, message);
  });
};

const server = net.createServer(onNewConnection); // criou o servidor e já inicia a conexão

server.on('error', (err) => {
  console.error('Erro ao subir o servidor', err);
});

server.listen(PORT, () => {
  console.log(`Servidor escutando na porta ${PORT}`);
});
