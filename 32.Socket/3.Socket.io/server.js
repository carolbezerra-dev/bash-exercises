const path = require('path');
const http = require('http');
const express = require('express');
const socketIo = require('socket.io');

const socketIoServer = http.createServer();
const io = socketIo(socketIoServer);

const app = express();
app.use(express.json());
app.use('/client', express.static(path.join(__dirname, 'public')));

app.post('/notification', (req, res) =>{
  const { text } = req.body;
  
  if (!text) return res.status(422).json({ message: 'Missing notification text' });
  
  io.emit('notification', text);
  // servidor, emita esse evento para todo client conectado (sem exceção)
  res.status(200).json({ message: 'Notification sent' });
});

app.listen(3000, () => console.log('App ouvindo na porta 3000'));
socketIoServer.listen(4555, () => console.log('Socket.io ouvindo na porta 4555'));
