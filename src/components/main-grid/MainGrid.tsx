import React from "react";
import "./MainGrid.css";
import GridRow from "../grid-row/GridRow.tsx";

function MasonGrid({ rowOne, rowTwo, rowThree, rowFour, rowFive, rowSix }) {
  return (
    <div className="main-grid">
      <GridRow row={1} rowLetters={rowOne} />
      <GridRow row={2} rowLetters={rowTwo} />
      <GridRow row={3} rowLetters={rowThree} />
      <GridRow row={4} rowLetters={rowFour} />
      <GridRow row={5} rowLetters={rowFive} />
      <GridRow row={6} rowLetters={rowSix} />
    </div>
  );
}

export default MasonGrid;
