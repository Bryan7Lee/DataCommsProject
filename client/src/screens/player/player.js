import React from "react";
import "./player.css";
import { useLocation } from "react-router-dom";
import { IconContext } from "react-icons";
import { MdQueueMusic } from "react-icons/md";
import AudioPlayer from "../../components/audioPlayer/audioPlayer"

export default function Player() {

  const location = useLocation();
  console.log(location);

  return (
    <div className = "body flex">
      <div className = "player-body"></div>
      <div className = "queue-body">
      <div className="btn-body">
        <IconContext.Provider value={{ size: "22px", className: "btn-icon" }}>
          {<MdQueueMusic />}
          <p className="lib-title">{"Queue"}</p>
        </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}
