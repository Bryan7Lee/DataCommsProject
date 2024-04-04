import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { BiLibrary } from "react-icons/bi";
import { BsSoundwave } from "react-icons/bs";
import "./library.css"
import songs from "./song_list.js"; // Import the renderSongs function

export default function Library() {
  
  const [songList, setSongsList] = useState([]);
  //call renderSongs()
  useEffect(() => {

    setSongsList(songs);

  }, []);

 const handleSongButtonClick = (song) => {
  console.log("Song clicked:", song.title);
  //add to the queue somehow?

};

const handleSongButtonDoubleClick = (song) => {
  console.log("Song double clicked:", song.title);
  //start playing the song immediately?

};
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
              <button className="song-button" onClick={() => handleSongButtonClick(song)} onDoubleClick={()=> handleSongButtonDoubleClick(song)}>
                <div className="song-info">
                  <img src={song.cover} alt={"IMAGE"} />
                  </div>
                  <div className="song-details">
                    <p className="song-title">{song.title}</p>
                    <p className="song-artist">{song.artist}</p>
                  </div>
                </button>
              </li>
             ))}
          </ul> 
      </div>
    </div>
  );
 }  

