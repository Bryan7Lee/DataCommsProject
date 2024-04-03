import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { BiLibrary } from "react-icons/bi";
import "./library.css"
import songs from "./song_list.js"; // Import the renderSongs function

export default function Library() {
  
  const [songList, setSongsList] = useState([]);
  //call renderSongs()
  useEffect(() => {

    setSongsList(songs);

  }, []);


  return (
    <div className="library">
      <div className="btn-body">
        <IconContext.Provider value={{ size: "22px", className: "btn-icon" }}>
          {<BiLibrary />}
        </IconContext.Provider>
        <p className="lib-title">Library</p>
      </div>
      <div className="song-list">
        <ul>
          {songList.map((song, index) => (
            <li key={index}>
              <button className="song-button">
                <div className="song-info">
                  <img src={song.cover} alt={""} />
                  <div>
                    <p className="song-title">{song.title}</p>
                    <p className="song-artist">{song.artist}</p>
                  </div>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
 }  
/*
  return (
    <div className="btn-body">
      <IconContext.Provider value={{ size: "22px", className: "btn-icon" }}>
        {<BiLibrary />}
        <p className="lib-title">{"Library"}</p>
      </IconContext.Provider>
      <div className="song-list">
        <ul>
          {songList.map((song,index) => (
            <li key={index}>
              <button className="song-button">
              <div className="song-info">
                <img src={song.cover} alt={""}/>
                <div>
                  <p className="song-title">{song.title}</p>
                  <p className="song-artist">{song.artist}</p>
                </div>
              </div>
        </button>       
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}*/
