const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: '*',
    credentials: true,
  },
});

io.on('connection', (socket) => {
  const onMessageSend = ({ name, message }) => {
    socket.broadcast.emit("message.send", { name, message });
  }

  socket.on("message.send", onMessageSend);
});

server.listen(4000, () => {
  console.log('listening on *:4000');
});
