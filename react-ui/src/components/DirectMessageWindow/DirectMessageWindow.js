import React from "react";
import "./DirectMessageWindow.css";

export default function DirectMessageWindow(props) {
  const cssClasses = [
    "dmWindow",
    props.show ? "dmWindowOpen" : "dmnWindowClosed"
  ];

  return (
    <div className={cssClasses.join(" ")}>
      <h1>Direct Message Window</h1>
      <button className="Button" onClick={props.closed}>
        Dismiss
      </button>
    </div>
  );
}
