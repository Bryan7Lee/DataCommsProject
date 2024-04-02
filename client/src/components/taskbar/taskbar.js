import React from "react";
import "./taskbar.css";
import TaskbarButton from "./taskbarButton";

// LIBRARY SIDE BAR
export default function Taskbar(){
    return <div className="taskbar">
        Taskbar
        <div>
            <TaskbarButton />
            <TaskbarButton />
            <TaskbarButton />
        </div>
    </div>;
}