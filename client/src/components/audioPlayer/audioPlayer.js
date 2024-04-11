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
    const [isAudioPlaying, setIsAudioPlaying] = useState(true);
    const [listIndex, setListIndex] = useState(0);
    const [songCurrentTime, setCurrentTime] = useState('00:00');
    const [songTotalLength, setTotalLength] = useState('03:00');

    // holds all song details of CURRENT SONG 
    const [currentSongDetails, changeSongDetails] = useState({
        songTitle: 'See You Again',
        songArtist: 'Tyler, the Creator',
        songPath: process.env.PUBLIC_URL + '/seeyouagain_tylerthecreator.mp3',
        songCover: process.env.PUBLIC_URL + '/seeyouagain_tylerthecreator.jpg'
    })
    // update song details when switching songs
    const updateSongDetails = (index)=>{
        let songIndex = songs[index];
        let playPromise = currentAudio.current.play()
        currentAudio.current.src = songIndex.path;
        changeSongDetails({
            songTitle: songIndex.title,
            songArtist: songIndex.artist,
            songPath: songIndex.path,
            songCover: songIndex.cover
        })
        setIsAudioPlaying(true);
    }

    // function to make progress bar update as the song progresses
    const updateProgressBar = (e)=>{
        currentAudio.current.currentTime = (currentAudio.current.duration / 100) * e.target.value;
        setAudioProgress(e.target.value+1);
    }

    // play next song
    const playNextSong = ()=>{
        if (listIndex >= songs.length - 1) {
            setListIndex(0);
            updateSongDetails(0);
        }
        else{
            let nextIndex = listIndex + 1;
            setListIndex(nextIndex);
            updateSongDetails(nextIndex);
        }
    }

    // play previous song
    const playPreviousSong = ()=>{
        if (listIndex === 0) {
            let previousIndex = songs.length - 1;
            setListIndex(previousIndex);
            updateSongDetails(previousIndex);
            }
        else{
            let previousIndex = listIndex - 1;
            setListIndex(previousIndex)
            updateSongDetails(previousIndex);
        }
    }

    //play and pause audio
    const audioPausePlay = ()=>{
        currentAudio.current.volume = .2

        if (currentAudio.current.paused) {
            currentAudio.current.play();
            setIsAudioPlaying(true)
        } 
        else { 
            currentAudio.current.pause();
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
        <audio src = {currentSongDetails.songPath} ref={currentAudio} onEnded={playNextSong} onTimeUpdate={handleAudioUpdate}></audio>
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
                <IoPlaySkipBackSharp onClick={playPreviousSong}/>
                {isAudioPlaying? 
                    <IoPlayCircle onClick={()=>{
                        audioPausePlay();
                        setIsAudioPlaying(!isAudioPlaying)}}/>:
                    <IoPauseCircle onClick={()=>{
                        audioPausePlay();
                        setIsAudioPlaying(!isAudioPlaying)}} />
                }
                <IoPlaySkipForwardSharp onClick={playNextSong}/>
            </IconContext.Provider>
        </div>
        <script src="js/song-list.js"></script>
        <script src="js/song-list.js"></script>
    </div>
    );
}