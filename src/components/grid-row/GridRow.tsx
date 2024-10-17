import React from "react";
import "./GridRow.css";
import GridBox from "../grid-box/GridBox.tsx";

function GridRow({ row, rowEnabled }) {
  return (
    <div className="grid-row">
      <GridBox boxEnabled={rowEnabled} id={`row${row}-box1`} />
      <GridBox boxEnabled={rowEnabled} id={`row${row}-box2`} />
      <GridBox boxEnabled={rowEnabled} id={`row${row}-box3`} />
      <GridBox boxEnabled={rowEnabled} id={`row${row}-box4`} />
      <GridBox boxEnabled={rowEnabled} id={`row${row}-box5`} />
    </div>
  );
}

export default GridRow;
