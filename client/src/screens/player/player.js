import React, { useEffect, useState } from "react";

import "./player.css";
import AudioPlayer from "../../components/audioPlayer/audioPlayer"
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
        </div>
      </div>
    </div>
  );
}

// Queue stuff
/*
      <div className = "queue-body">
        <div className="btn-body">
          
        </div>
      </div>
*/