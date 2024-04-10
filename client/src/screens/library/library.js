import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { BiLibrary } from "react-icons/bi";
import "./library.css"
import songs from "./song_list.js"; // Import the renderSongs function

function display_cover(src){
  var img = document.createElement("img");
  img.src = src;
  img.width = 500;
  img.height = 500;
  img.alt = 'ALBUM';

  document.body.appendChild(img);
  
}

export default function Library() {
  
  const [songList, setSongsList] = useState([]);
  //const [queue, setQueue] = useState([]);
  //call renderSongs()
  useEffect(() => {

    setSongsList(songs);

  }, []);

 const handleSongButtonClick = (song) => {
  console.log("Song clicked:", song.title);
  //add to the queue somehow?
  //addToQueue(song.title, song.artist);
  //console.log("Queue:", qsongs);

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
                <img src={song.cover} alt={"ALBUM"} />
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
 }  

