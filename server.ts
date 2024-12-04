import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  socket.on('join', (address) => {
    socket.join(address);
  });

  socket.on('message', (data) => {
    socket.to(data.to).emit('message', data);
  });
});

server.listen(3001, () => {
  console.log('Signaling server running on port 3001');
});