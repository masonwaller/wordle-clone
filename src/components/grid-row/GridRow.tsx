import React from "react";
import "./GridRow.css";
import GridBox from "../grid-box/GridBox.tsx";

function GridRow() {
  return (
    <div className="grid-row">
      <GridBox />
      <GridBox />
      <GridBox />
      <GridBox />
      <GridBox />
    </div>
  );
}

export default GridRow;
