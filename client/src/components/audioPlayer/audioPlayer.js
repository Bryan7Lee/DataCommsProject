import React from "react";
import "./audioPlayer.css";

export default function AudioPlayer(){
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
                <span className="max">3:00</span>
            </div>
        </div>
        <div className="controls">
            <i id="repeat-plist" class="material-icons" title="Playlist looped">repeat</i>
            <i id="prev" class="material-icons">skip_previous</i>
            <div class="play-pause">
                <i class="material-icons play">play_arrow</i>
            </div>
            <i id="next" class="material-icons">skip_next</i>
            <i id="more-music" class="material-icons">queue_music</i>
        </div>
    </div>
    );
}