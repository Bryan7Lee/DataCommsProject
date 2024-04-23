import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from "../library/library";
import Player from "../player/player";
import Taskbar from "../../components/taskbar/taskbar"
import "./home.css";

export default function Home() {

  return (
    <Router>
      <div className="main-body">
        <div className="filler"/>
        <div className="taskbar-body"><Taskbar/></div>
        <div className="library-body"><Library /></div>
        <Routes>
            <Route path="/" element={<Player />} />
        </Routes>
      </div>
    </Router>
  );
}