import React from "react";
import "./MainGrid.css";
import GridRow from "../grid-row/GridRow.tsx";

function MasonGrid({ row1, row2, row3, row4, row5, row6 }) {
  return (
    <div className="main-grid">
      <GridRow row={1} rowLetters={row1} />
      <GridRow row={2} rowLetters={row2} />
      <GridRow row={3} rowLetters={row3} />
      <GridRow row={4} rowLetters={row4} />
      <GridRow row={5} rowLetters={row5} />
      <GridRow row={6} rowLetters={row6} />
    </div>
  );
}

export default MasonGrid;
