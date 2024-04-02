import React, { useState, useEffect} from "react";
import "./taskbar.css";
import TaskbarButton from "./taskbarButton";
import { BsMusicPlayer } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { MdGroupAdd } from "react-icons/md";
import { IconContext } from "react-icons";

// LIBRARY SIDE BAR
export default function Taskbar(){
    return <div className="taskbar">
        <div>
            <TaskbarButton title="Player" to="/" icon={<BsMusicPlayer/>}/>
            <TaskbarButton title="Group Session" to="/groupsession" icon={<MdGroupAdd/>}/>
        </div>
    </div>;
}