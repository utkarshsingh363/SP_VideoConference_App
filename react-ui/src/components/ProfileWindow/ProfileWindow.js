import React from "react";
import "./ProfileWindow.css";

export default function ProfileWindow(props) {
  const cssClasses = [
    "profileWindow",
    props.show ? "profileWindowOpen" : "profileWindowClosed"
  ];

  return (
    <div className={cssClasses.join(" ")}>
      <h1>Profile Window</h1>
      <button className="Button" onClick={props.closed}>
        Dismiss
      </button>
    </div>
  );
}
