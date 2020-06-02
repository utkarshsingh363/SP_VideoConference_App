import React from "react";
import "./SettingWindow.css";

export default function SettingWindow(props) {
  const cssClasses = [
    "settingWindow",
    props.show ? "settingWindowOpen" : "settingWindowClosed"
  ];

  return (
    <div className={cssClasses.join(" ")}>
      <h1>Setting Window</h1>
      <button className="Button" onClick={props.closed}>
        Dismiss
      </button>
    </div>
  );
}

