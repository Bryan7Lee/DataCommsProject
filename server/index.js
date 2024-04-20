const express = require("express");
const { Server } = require("socket.io");
const app = express();
const http = require("http");
const cors = require("cors");
const PORT = 3001;

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, { 
    cors: {
        origin: "http://localhost:3000",
        methods: ["TEST1", "TEST2"],
    },
});

io.on('connection', (socket) => {
  // when a client connects
  console.log('Client opened with ID: ' + socket.id);

  // when a client joins a room
  socket.on('join_room', roomID => {
    console.log('Client (' + socket.id + ') joined room: ' + roomID);
    socket.join(roomID);
  });

  // when a client disconnects
  socket.on('disconnect', () => {
    console.log('Client closed with ID: ' + socket.id);
  })

  // when a user skips forward
  socket.on("skipforward", (room) => {
    console.log('User skipped forward; room: ' + room);
    socket.to(room).emit("receiveskipforward");
  });
  
  // when a user plays previous song
  socket.on("playprevious", (room) => {
    console.log('User played previous; room: ' + room);
    socket.to(room).emit("receiveplayprevious");
  });

    // when a user presses play on a song
    socket.on("songplaying", (room) => {
      console.log('User pressed play; room: ' + room);
      socket.to(room).emit("receivepressplay");
    });

      // when a user presses pause on a song
    socket.on("songpaused", (room) => {
      console.log('User pressed pause; room: ' + room);
      socket.to(room).emit("receivepresspause");
    });
});



server.listen(PORT, () => {
    console.log('Server is running at http://localhost:' + PORT);
  });