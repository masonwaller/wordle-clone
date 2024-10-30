import React from "react";
import "./GridBox.css";

function GridBox({ id, letterInfo }) {
  return (
    <div className="grid-box" style={{ backgroundColor: letterInfo.color }}>
      <input
        className="box-input"
        type="text"
        disabled
        value={letterInfo.letter}
        id={id}
        maxLength={1}
      />
    </div>
  );
}

export default GridBox;
