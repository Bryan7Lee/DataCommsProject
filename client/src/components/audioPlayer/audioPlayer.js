import React, {useRef, useState} from "react";
import "./audioPlayer.css";
import { IconContext } from "react-icons";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPauseCircle } from "react-icons/io5";
import { IoPlayCircle  } from "react-icons/io5";
import { IoPlaySkipForwardSharp } from "react-icons/io5";
import songs from "../../screens/library/song_list";

export default function AudioPlayer(){
    
    const currentAudio = useRef()
    const [audioProgress, setAudioProgress] = useState(0);
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [listIndex, setListIndex] = useState(0);
    const [songCurrentTime, setCurrentTime] = useState('00:00');
    const [songTotalLength, setTotalLength] = useState('03:00');

    /* THIS NEEDS TO BE UPDATED TO USE THE SONG LIBRARY AND CHANGE FOR WHEN SONG CHANGES*/ 
    // holds all song details of CURRENT SONG 
    const [currentSongDetails, changeSongDetails] = useState({
        songTitle: 'See You Again',
        songArtist: 'Tyler, the Creator',
        songPath: process.env.PUBLIC_URL + '/seeyouagain_tylerthecreator.mp3',
        songCover: process.env.PUBLIC_URL + '/seeyouagain_tylerthecreator.jpg'
    })

    const updateProgressBar = (e)=>{
        currentAudio.current.currentTime = (currentAudio.current.duration / 100) * e.target.value;
        setAudioProgress(e.target.value+1);
    }

    const goToNextSong = ()=>{
        
    }

    //play and pause audio
    const audioPausePlay = ()=>{
        const audio = currentAudio.current
        audio.volume = .2

        if (audio.paused) {
            audio.play();
            setIsAudioPlaying(true)
          } else{
            audio.pause();
            setIsAudioPlaying(false)
          }
    }

    //update song progress
    const handleAudioUpdate = () =>{
        const audio = currentAudio.current
        
        //Input total length of the audio
        let minutes = Math.floor(audio.duration / 60);
        let seconds = Math.floor(audio.duration % 60);
        let musicTotalLength0 = `${minutes <10 ? `0${minutes}` : minutes} : ${seconds <10 ? `0${seconds}` : seconds}`;
        setTotalLength(musicTotalLength0);

        //Input Music Current Time
        let currentMin = Math.floor(currentAudio.current.currentTime / 60);
        let currentSec = Math.floor(currentAudio.current.currentTime % 60);
        let musicCurrentT = `${currentMin <10 ? `0${currentMin}` : currentMin} : ${currentSec <10 ? `0${currentSec}` : currentSec}`;
        setCurrentTime(musicCurrentT);

        const progress = parseInt((currentAudio.current.currentTime / currentAudio.current.duration) * 100);
        setAudioProgress(isNaN(progress)? 0 : progress)
    }

    return (
    <div className="MUSICPLAYERBODYHERE">
        <audio src = {currentSongDetails.songPath} ref={currentAudio} onEnded={goToNextSong} onTimeUpdate={handleAudioUpdate}></audio>
        <div className="img-area">
            <img src={currentSongDetails.songCover} alt ="song cover img"></img>
        </div>
        <div className="song-details">
            <p className="song-title">{currentSongDetails.songTitle}</p>
            <p className="song-artist">{currentSongDetails.songArtist}</p>
        </div>
        <input type="range" name="songProgressBar" className='progress-bar' onChange={updateProgressBar} value={audioProgress} />
        <div className="timestamps">
            <p className="current">{songCurrentTime}</p>
            <p className="total">{songTotalLength}</p>
        </div>
        <div className="controls">
            <IconContext.Provider value={{ size: "40px"}}>
                <IoPlaySkipBackSharp />
                <IoPlayCircle onClick={audioPausePlay}/>
                <IoPlaySkipForwardSharp/>
            </IconContext.Provider>
        </div>
        <script src="js/song-list.js"></script>
        <script src="js/song-list.js"></script>
    </div>
    );
}