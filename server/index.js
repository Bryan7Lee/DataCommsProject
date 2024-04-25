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
        origin: "http://localhost:3000"
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

  // when a client leaves a room
  socket.on('leave_room', prevRoomID => {
    console.log('Client (' + socket.id + ') left room: ' + prevRoomID);
    socket.leave(prevRoomID);
  })

  // when a client disconnects
  socket.on('disconnect', () => {
    console.log('Client closed with ID: ' + socket.id);
  })

  // when a user skips forward
  socket.on("skipforward",  (room, index) => {
    console.log('User skipped forward; room: ' + room);
    socket.to(room).emit("receiveskipforward", index);
    console.log("Emitting signal to room:" + room);
  });
  
  // when a user plays previous song
  socket.on("playprevious",  (room, index) => {
    console.log('User played previous; room: ' + room);
    socket.to(room).emit("receiveplayprevious", index);
    console.log("Emitting signal to room:" + room);
  });

    // when a user presses play on a song
    socket.on("presspause",  (room) => {
      console.log('User pressed pause; room: ' + room);
      socket.to(room).emit("receivepresspause");
      console.log("Emitting signal to room:" + room);
    });

    // when a user presses play on a song
    socket.on("pressplay",  (room, index, timestamp) => {
      console.log('User pressed play; room: ' + room);
      socket.to(room).emit("receivepressplay", index, timestamp);
      console.log("Emitting signal to room: " + room + " with index: " + index + " and timestamp: " + timestamp);
    });

    // when a user skips through the song in time
    socket.on("matchclients",  (room, index, time) => {
      console.log('User pressed play; room: ' + room);
      socket.to(room).emit("receivematchclients", index, time);
      console.log("Emitting signal to room:" + room);
    });
});

server.listen(PORT, () => {
    console.log('Server is running at http://localhost:' + PORT);
  });