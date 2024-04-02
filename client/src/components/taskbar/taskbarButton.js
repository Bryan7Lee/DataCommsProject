import React from "react";
import "./taskbarButton.css";
import { Link } from "react-router-dom";

// bar where you can switch between music player, library, group session
export default function TaskbarButton(props){
    return (
        <Link to={props.to}>
            <div className="btn-body">
                {props.icon}
                <p className="btn-title">{props.title}</p>
            </div>
        </Link>
    );
}