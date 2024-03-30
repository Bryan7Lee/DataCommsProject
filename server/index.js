const express = require("express");
const { Server } = require("socket.io");
const app = express();
const http = require("http");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, { 
    cors: {
        origin: "http://localhost:3000",
        methods: ["TEST1", "TEST2"],
    },
});

io.on("connection", (socket) => {
  console.log('User connected: ${socket.id}');
  socket.on('chat_msg', (msg) => {
    console.log('message: ' + msg);
  });
});

server.listen(3001, () => {
    console.log('server running at http://localhost:3001');
  });