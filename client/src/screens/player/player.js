import React from "react";
import "./player.css";
import { useLocation } from "react-router-dom";
import AudioPlayer from "../../components/audioPlayer/audioPlayer"

export default function Player() {

  const location = useLocation();
  console.log(location);

  return (
    <div className="screen-container flex">
            Player
      <div className="left-player-body">

      </div>
      <div className="right-player-body">

      </div>
    </div>
  );
}
