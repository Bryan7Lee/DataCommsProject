import React, { useEffect, useState } from "react";
import "./player.css";
import { useLocation } from "react-router-dom";
import { IconContext } from "react-icons";
import { MdQueueMusic } from "react-icons/md";
import AudioPlayer from "../../components/audioPlayer/audioPlayer"
import {qsongs} from "./queueFunctions"

export default function Player() {

  const [queuedSongs, setQueuedSongs] = useState([]);

  useEffect(()=>{
    setQueuedSongs(qsongs);

  }, []);


  
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
        <div className="queue-list">
          <ul>
            {queuedSongs.map((song,index)=> (
              <li key={index}>
                <button className="qsong-button">
                <div className="qsong-info">
                  <p className="qsong-title">{song.title}</p>
                  <p className="qsong-artist">{song.artist}</p>
                </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
