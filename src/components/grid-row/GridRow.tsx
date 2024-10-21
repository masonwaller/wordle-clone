import React from "react";
import "./GridRow.css";
import GridBox from "../grid-box/GridBox.tsx";

function GridRow({ row, rowLetters }) {
  return (
    <div className="grid-row">
      <GridBox letter={rowLetters[0]} id={`row${row}-box0`} />
      <GridBox letter={rowLetters[1]} id={`row${row}-box1`} />
      <GridBox letter={rowLetters[2]} id={`row${row}-box2`} />
      <GridBox letter={rowLetters[3]} id={`row${row}-box3`} />
      <GridBox letter={rowLetters[4]} id={`row${row}-box4`} />
    </div>
  );
}

export default GridRow;
