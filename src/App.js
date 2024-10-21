/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./App.css";
import MainGrid from "./components/main-grid/MainGrid.tsx";

function App() {
  const [rowOne, setRowOne] = useState([]);
  const [rowTwo, setRowTwo] = useState([]);
  const [rowThree, setRowThree] = useState([]);
  const [rowFour, setRowFour] = useState([]);
  const [rowFive, setRowFive] = useState([]);
  const [rowSix, setRowSix] = useState([]);

  const keyPressEvent = (event) => {
    console.log(rowOne);
    // Get the pressed key
    const key = event.key;
    if (rowOne.length < 5) {
      setRowOne([...rowOne, key]);
    }
  };

  return (
    <div className="App" onKeyDown={keyPressEvent} tabIndex="0">
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
