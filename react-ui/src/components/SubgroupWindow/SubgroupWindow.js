import React from "react";
import "./SubgroupWindow.css";

export default function SubgroupWindow(props) {
  const cssClasses = [
    "subgroupWindow",
    props.show ? "subgroupWindowOpen" : "subgroupWindowClosed"
  ];

  return (
    <div className={cssClasses.join(" ")}>
      <h1>Subgroup Window</h1>
      <button className="Button" onClick={props.closed}>
        Dismiss
      </button>
    </div>
  );
}
