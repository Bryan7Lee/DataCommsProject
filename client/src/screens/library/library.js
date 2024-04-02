import React from "react";
import { IconContext } from "react-icons";
import { BiLibrary } from "react-icons/bi";
import "./library.css"

export default function Library(props) {

  return (
    <div className="btn-body">
      <IconContext.Provider value={{ size: "22px", className: "btn-icon" }}>
        {<BiLibrary />}
        <p className="lib-title">{"Library"}</p>
      </IconContext.Provider>
    </div>
  );
}
