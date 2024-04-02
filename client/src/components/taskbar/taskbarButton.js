import React from "react";
import "./taskbarButton.css";
import { Link, useLocation } from "react-router-dom";

// bar where you can switch between music player, library, group session
export default function TaskbarButton(props){
    const location = useLocation();

    const isActive = location.pathname === props.to;
  
    const btnClass = isActive ? "btn-body active" : "btn-body";

    return (
        <Link to={props.to}>
            <div className={btnClass}>
                {props.icon}
                <p className="btn-title">{props.title}</p>
            </div>
        </Link>
    );
}