/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./App.css";
import MainGrid from "./components/main-grid/MainGrid.tsx";

function App() {
  const [rowOne, setRowOne] = useState(["A", "B", "C", "D"]);
  const [rowTwo, setRowTwo] = useState([]);
  const [rowThree, setRowThree] = useState([]);
  const [rowFour, setRowFour] = useState([]);
  const [rowFive, setRowFive] = useState([]);
  const [rowSix, setRowSix] = useState([]);
  return (
    <div className="App">
      <h1>Mason's Wordle</h1>
      <MainGrid
        rowOne={rowOne}
        rowTwo={rowTwo}
        rowThree={rowThree}
        rowFour={rowFour}
        rowFive={rowFive}
        rowSix={rowSix}
      />
    </div>
  );
}

export default App;
