import React, { useState, useEffect} from "react";
import "./taskbar.css";
import TaskbarButton from "./taskbarButton";
import { BsMusicPlayer } from "react-icons/bs";

// LIBRARY SIDE BAR
export default function Taskbar(){
    return <div className="taskbar">
        <div>
            <TaskbarButton title="Player" to="/" icon={<BsMusicPlayer/>}/>
        </div>
    </div>;
}