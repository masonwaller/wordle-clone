import React, { useState } from "react";
import "./MainGrid.css";
import GridRow from "../grid-row/GridRow.tsx";

function MasonGrid() {
  const [enabledRow, setEnabledRow] = useState(1);
  return (
    <div className="main-grid">
      <GridRow row={1} rowEnabled={enabledRow === 1} />
      <GridRow row={2} rowEnabled={enabledRow === 2} />
      <GridRow row={3} rowEnabled={enabledRow === 3} />
      <GridRow row={4} rowEnabled={enabledRow === 4} />
      <GridRow row={5} rowEnabled={enabledRow === 5} />
      <GridRow row={6} rowEnabled={enabledRow === 6} />
    </div>
  );
}

export default MasonGrid;
