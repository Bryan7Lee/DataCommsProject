import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import io from 'socket.io-client'
import Library from "./library";
import Player from "./player";
import GroupSession from "./groupsession";
const socket = io.connect("https://localhost:3001")

export default function Home() {

  return (
    <Router>
        <Routes>
            <Route path="/" element={<Library />} />
            <Route path="/player" element={<Player />} />
            <Route path="/groupsession" element={<GroupSession />} />
        </Routes>
    </Router>
  );
}