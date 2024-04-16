// library.js
import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { BiLibrary } from "react-icons/bi";
import "./library.css";
import songs from "./song_list.js";
import AudioPlayer from "../../components/audioPlayer/audioPlayer";

const Library = () => {
  const [libIndex, setLibIndex] = useState(0);
  const [songList, setSongsList] = useState([]);

  useEffect(() => {
    setSongsList(songs);
  }, []);

  const handleSongPlay = (index) => {
    console.log("Playing song:", songs[index]);
    setLibIndex(index);
  };

  return (
    <div className="library">
      <div className="btn-body">
        <IconContext.Provider value={{ size: "22px", className: "btn-icon" }}>
          <BiLibrary />
        </IconContext.Provider>
        <p className="lib-title">Library</p>
      </div>
      <div className="song-list">
        <ul>
          {songList.map((song, index) => (
            <li key={index}>
              <button
                className="song-button"
                onClick={() => handleSongPlay(index)}
              >
                <div className="song-info">
                  <div className="img-wrapper-lib">
                    <img src={song.cover} alt={"ALBUM"} />
                  </div>
                </div>
                <div className="song-details">
                  <p className="song-title-library">{song.title}</p>
                  <p className="song-artist-library">{song.artist}</p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Library;
