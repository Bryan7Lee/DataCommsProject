import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import io from 'socket.io-client'
import Library from "../library/library";
import Player from "../player/player";
import GroupSession from "../groupsession/groupsession";
import "./home.css";
const socket = io.connect("https://localhost:3001")

export default function Home() {

  return (
    <Router>
      <div className="main-body">
        <Routes>
            <Route path="/" element={<Player />} />
            <Route path="/Library" element={<Library />} />
            <Route path="/groupsession" element={<GroupSession />} />
        </Routes>
        </div>
    </Router>
  );
}