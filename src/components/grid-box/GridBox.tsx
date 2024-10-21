import React from "react";
import "./GridBox.css";

function GridBox({ id, letter }) {
  return (
    <div className="grid-box">
      <input
        className="box-input"
        type="text"
        disabled
        value={letter}
        id={id}
        maxLength={1}
      />
    </div>
  );
}

export default GridBox;
