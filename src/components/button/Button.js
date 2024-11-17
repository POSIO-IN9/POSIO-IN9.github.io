import React from "react";
import "./Button.scss";

export default function Button({text, className, href, newTab}) {
  return (
    <div className={className}>
      <a href={href} target={newTab && "_blank"}>
      <button className="pushable" >
        <span className="shadow"></span>
        <span className="edge"></span>
        <span className="front"> {text}</span>
      </button>
      </a>
    </div>
    
  );
}
