import React from "react";
import "./GridBox.css";

function GridBox({ boxEnabled, id }) {
  return (
    <div className="grid-box">
      <input
        className="box-input"
        type="text"
        disabled={boxEnabled}
        id={id}
        maxLength={1}
      />
    </div>
  );
}

export default GridBox;
