/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./App.css";
import MainGrid from "./components/main-grid/MainGrid.tsx";

function App() {
  const [word, setWord] = useState("hello");

  const [currentRow, setCurrentRow] = useState(1);

  const [rowOne, setRowOne] = useState([]);
  const [rowTwo, setRowTwo] = useState([]);
  const [rowThree, setRowThree] = useState([]);
  const [rowFour, setRowFour] = useState([]);
  const [rowFive, setRowFive] = useState([]);
  const [rowSix, setRowSix] = useState([]);

  const keyPressEvent = (event) => {
    // Get the pressed key
    const key = event.key;

    let rowToEdit;
    let rowToEditFunction;
    switch (currentRow) {
      case 1:
        rowToEdit = rowOne;
        rowToEditFunction = setRowOne;
        break;
      case 2:
        rowToEdit = rowTwo;
        rowToEditFunction = setRowTwo;
        break;
      case 3:
        rowToEdit = rowThree;
        rowToEditFunction = setRowThree;
        break;
      case 4:
        rowToEdit = rowFour;
        rowToEditFunction = setRowFour;
        break;
      case 5:
        rowToEdit = rowFive;
        rowToEditFunction = setRowFive;
        break;
      case 6:
        rowToEdit = rowSix;
        rowToEditFunction = setRowSix;
        break;
      default:
        break;
    }

    switch (key) {
      case "Enter":
        if (rowToEdit.length === 5) {
          // Check if the word is correct
          if (rowToEdit.join("") === word) {
            console.log("Correct");
          } else {
            console.log("Incorrect");
          }

          if (currentRow === 6) {
            console.log("Game Over");
          } else {
            setCurrentRow(currentRow + 1);
          }
        }
        break;
      default:
        if (rowToEdit.length < 5) {
          rowToEditFunction([...rowToEdit, key]);
        }
        break;
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
