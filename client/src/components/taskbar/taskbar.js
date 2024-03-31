import React from "react";
import "./taskbar.css";
import TaskbarButton from "./taskbarButton";

// bar where you can switch between music player, library, group session
export default function Taskbar(){
    return <div className="taskbar">
        <img src="https://static.thenounproject.com/png/2942307-200.png" className="profile-img"></img>
        <div>
            <TaskbarButton />
            <TaskbarButton />
            <TaskbarButton />
        </div>
    </div>;
}