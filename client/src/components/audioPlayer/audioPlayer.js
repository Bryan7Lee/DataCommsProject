import React, {useRef, useState} from "react";
import "./audioPlayer.css";
import "../../screens/library/song_list"
import { IconContext } from "react-icons";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPauseCircle } from "react-icons/io5";
import { IoPlayCircle  } from "react-icons/io5";
import { IoPlaySkipForwardSharp } from "react-icons/io5";

export default function AudioPlayer(){
    
    const [audioProgress, setAudioProgress] = useState(60);

    const updateProgressBar = (e)=>{
        setAudioProgress(e.target.value)
    }

    return (
    <div className="MUSICPLAYERBODYHERE">
        <div className="img-area">
            <img src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" alt =""></img>
        </div>
        <div className="song-details">
            <p className="song-title">Song Title</p>
            <p className="song-artist">Artist</p>
        </div>
        <div className="progress-area">
            <div className="progress-bar">
                <span></span>
            </div>
            <div className="timestamps">
                <span className="current">0:00</span>
                <span className="total">3:00</span>
            </div>
        </div>
        <div className="controls">
            <IconContext.Provider value={{ size: "50px"}}>
                <IoPlaySkipBackSharp />
                <IoPlayCircle />
                <IoPlaySkipForwardSharp/>
            </IconContext.Provider>
        </div>
        <script src="js/song-list.js"></script>
        <script src="js/song-list.js"></script>
    </div>
    );
}