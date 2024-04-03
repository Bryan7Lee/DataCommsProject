import React, {useEffect, useState} from "react";
import "./player.css";
import AudioPlayer from "../../components/audioPlayer/audioPlayer"
import Queue from "../../components/queue/queue"
import { useLocation } from "react-router-dom";
import { IconContext } from "react-icons";
import { MdQueueMusic } from "react-icons/md";

export default function Player() {
  const location = useLocation();
  console.log(location);
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className = "page-body flex">

      <div className = "player-body">
        <AudioPlayer/>
      </div>

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
