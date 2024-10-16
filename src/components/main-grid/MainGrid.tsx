import React from "react";
import "./MainGrid.css";
import GridRow from "../grid-row/GridRow.tsx";

function MasonGrid() {
  return (
    <div className="main-grid">
      <GridRow />
      <GridRow />
      <GridRow />
      <GridRow />
      <GridRow />
    </div>
  );
}

export default MasonGrid;
