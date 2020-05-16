import React from "react";
import "./OrganizationWindow.css";

export default function OrganizationWindow(props) {
  const cssClasses = [
    "organizationWindow",
    props.show ? "organizationWindowOpen" : "organizationWindowClosed"
  ];

  return (
    <div className={cssClasses.join(" ")}>
      <h1>Organization Window</h1>
      <button className="Button" onClick={props.closed}>
        Dismiss
      </button>
    </div>
  );
}
