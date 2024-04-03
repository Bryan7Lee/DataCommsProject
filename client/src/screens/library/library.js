import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { BiLibrary } from "react-icons/bi";
import "./library.css"
import renderSongs from "./song_list.js"; // Import the renderSongs function

export default function Library() {
  
  const [songs, setSongs] = useState([]);
  //call renderSongs()
  useEffect(() => {

    const fetchedSongs = renderSongs();
    setSongs(fetchedSongs);

  }, []);


  return (
    <div className="btn-body">
      <IconContext.Provider value={{ size: "22px", className: "btn-icon" }}>
        {<BiLibrary />}
        <p className="lib-title">{"Library"}</p>
      </IconContext.Provider>
      <div className="song-list">
        <ul>
          {songs.map((song,index) => (
            <li key={index}>
              <div className="song-info">
                <img src={song.cover} alt={song.title} />
                <div>
                  <p className="song-title">{song.title}</p>
                  <p className="song-artist">{song.artist}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
