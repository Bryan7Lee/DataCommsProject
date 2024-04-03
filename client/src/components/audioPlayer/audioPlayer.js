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

    const sliderEl = document.querySelector("#range")

    const progressScript = (e)=>{
        const sliderValue = sliderEl.value;
        sliderEl.style.background = `linear-gradient(to right, #f50 ${sliderValue}%, #ccc ${sliderValue}%)`;
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
            <input type="range" name="progress-bar" className='progress-bar'
                id="range" value={audioProgress} oninput={progressScript} onChange={updateProgressBar}/>
            <div className="timestamps">
                <p className="current">0:00</p>
                <p className="total">3:00</p>
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