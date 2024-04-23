import React, {useRef, useState, useEffect} from "react";
import "./audioPlayer.css";
import { IconContext } from "react-icons";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPauseCircle } from "react-icons/io5";
import { IoPlayCircle  } from "react-icons/io5";
import { IoPlaySkipForwardSharp } from "react-icons/io5";
import songs from "../../screens/library/song_list";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

export default function AudioPlayer(libIndex){

    // useState and useRef hooks
    const currentAudio = useRef();
    const [audioProgress, setAudioProgress] = useState(0);
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [listIndex, setListIndex] = useState(0);
    const [songCurrentTime, setCurrentTime] = useState('00:00');
    const [songTotalLength, setTotalLength] = useState('03:00');
    const [currentSongDetails, changeSongDetails] = useState({
        songTitle: 'See You Again',
        songArtist: 'Tyler, the Creator',
        songPath: process.env.PUBLIC_URL + '/seeyouagain_tylerthecreator.mp3',
        songCover: process.env.PUBLIC_URL + '/seeyouagain_tylerthecreator.jpg'
    })

    /* server setup */
    const [roomID, changeRoomID] = useState("");
    const [prevRoomID, changePrevRoomID] = useState("");

    const joinRoom = () => {
        if (roomID != "" && roomID != prevRoomID) {
            socket.emit("leave_room", prevRoomID);
            changePrevRoomID(roomID);
            socket.emit("join_room", roomID);
        }
    }

    useEffect(() => {
        socket.on("receiveskipforward", (index) => {
            console.log("Received skip forward signal.")
            if (index > songs.length - 1) {
                index = 0;
            }
            setListIndex(index);
            updateSongDetails(index);
        })
        socket.on("receiveplayprevious", (index) => {
            console.log("Received play previous signal.")
            setListIndex(index);
            updateSongDetails(index);
        })
        socket.on("receivepresspause", () => {
            console.log("Received pause signal.")
            currentAudio.current.pause();
            setIsAudioPlaying(false);
        })
        socket.on("receivepressplay", () => {
            console.log("Received play signal.")
            currentAudio.current.play();
            setIsAudioPlaying(true);
        })
    }, [socket]);

    // update song details when switching songs
    const updateSongDetails = (index) =>{
        let songObj = songs[index];
        currentAudio.current.src = songObj.path;
        currentAudio.current.volume = .2
        let playPromise = currentAudio.current.play();
        if (playPromise !== undefined) {
            playPromise.then(_ => {
              // Automatic playback paused.
              currentAudio.current.play();
              console.log("song paused");
              setIsAudioPlaying(false);
            })
            .catch(error => {
              // Catch play() by load request error and replay it again
              currentAudio.current.play();
              console.log("song play");
              setIsAudioPlaying(true);
            });
          }
        setIsAudioPlaying(true);
        changeSongDetails({
            songTitle: songObj.title,
            songArtist: songObj.artist,
            songPath: songObj.path,
            songCover: songObj.cover
        })
    }

    // function to make progress bar update as the song progresses
    const updateProgressBar = (e)=>{
        setAudioProgress(e.target.value + 1);
        currentAudio.current.currentTime = (currentAudio.current.duration / 100) * e.target.value;
    }

    // play next song
    const playNextSong = ()=>{
        let nextIndex = listIndex + 1;
        if (listIndex >= songs.length - 1) {
            setListIndex(0);
            updateSongDetails(0);
        }
        else{
            setListIndex(nextIndex);
            updateSongDetails(nextIndex);
        }
        socket.emit("skipforward", roomID, nextIndex);
    }

    // play previous song
    const playPreviousSong = ()=>{
        let previousIndex = songs.length - 1;
        if (listIndex == 0) {
            setListIndex(previousIndex);
            updateSongDetails(previousIndex);
        }
        else{
            previousIndex = listIndex - 1;
            setListIndex(previousIndex)
            updateSongDetails(previousIndex);
        }
        socket.emit("playprevious", roomID, previousIndex);
    }

    //play and pause audio
    const audioPausePlay = ()=>{
        currentAudio.current.volume = .2

        if (isAudioPlaying == false) {
            currentAudio.current.play();
            setIsAudioPlaying(true);
            socket.emit("pressplay", roomID);
        } 
        else { 
            currentAudio.current.pause();
            setIsAudioPlaying(false);
            socket.emit("presspause", roomID);
        }
    }

    //update song progress
    const handleAudioUpdate = () =>{
        const audio = currentAudio.current;
        
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
        <audio src = {process.env.PUBLIC_URL + '/seeyouagain_tylerthecreator.mp3'} ref={currentAudio} onEnded={playNextSong} onTimeUpdate={handleAudioUpdate}></audio>
        <input 
            placeholder="Room ID"
            onChange={(event) => {
                changeRoomID(event.target.value);
        }}/>
        <button onClick={joinRoom}> Join Room</button>
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
                    <IoPauseCircle onClick={()=>{
                        audioPausePlay();}}/>:
                    <IoPlayCircle onClick={()=>{
                        audioPausePlay();}} />
                }
                <IoPlaySkipForwardSharp onClick={playNextSong}/>
            </IconContext.Provider>
        </div>
        <script src="js/song-list.js"></script>
        <script src="js/song-list.js"></script>
        Song Index: {listIndex} | isAudioPlaying Boolean: {isAudioPlaying.toString()}
    </div>
    );
}