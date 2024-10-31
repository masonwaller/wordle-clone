/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./App.css";
import MainGrid from "./components/main-grid/MainGrid.tsx";
import { words } from "./constants/words.ts";
import dayjs from "dayjs";

function App() {
  const [word, setWord] = useState("hello");

  const [currentRow, setCurrentRow] = useState(1);

  const [rowOne, setRowOne] = useState([]);
  const [rowTwo, setRowTwo] = useState([]);
  const [rowThree, setRowThree] = useState([]);
  const [rowFour, setRowFour] = useState([]);
  const [rowFive, setRowFive] = useState([]);
  const [rowSix, setRowSix] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("wordle")) {
      const wordle = JSON.parse(localStorage.getItem("wordle"));
      console.log(wordle);
      if (wordle.day === dayjs().format("YYYY-MM-DD")) {
        setWord(wordle.word);
        setRowOne(wordle.rowOne);
        setRowTwo(wordle.rowTwo);
        setRowThree(wordle.rowThree);
        setRowFour(wordle.rowFour);
        setRowFive(wordle.rowFive);
        setRowSix(wordle.rowSix);
        setCurrentRow(wordle.currentRow);
      } else {
        localStorage.removeItem("wordle");
      }
    } else {
      const randomWord = words[Math.floor(Math.random() * words.length)];
      setWord(randomWord);
      localStorage.setItem(
        "wordle",
        JSON.stringify({
          day: dayjs().format("YYYY-MM-DD"),
          word: randomWord,
          rowOne: [],
          rowTwo: [],
          rowThree: [],
          rowFour: [],
          rowFive: [],
          rowSix: [],
          currentRow: 1,
        })
      );
    }
  }, []);

  const checkIfCorrect = async (rowToCheck, rowToEditFunction) => {
    const wordArray = word.split("");
    const rowArray = rowToCheck.map((letter) => letter.letter);
    const newRowArray = [];
    const correctLetters = rowArray.filter((letter, index) => {
      if (letter === wordArray[index]) {
        newRowArray.push({ letter: letter, color: `green` });
        return letter;
      } else {
        newRowArray.push({ letter: letter, color: `rgb(255, 0, 0)` });
      }
    });
    rowToEditFunction(newRowArray);
    if (correctLetters.length === 5) {
      setCurrentRow(7);
      return true;
    }
  };

  const keyPressEvent = async (event) => {
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
          if (await checkIfCorrect(rowToEdit, rowToEditFunction)) {
            console.log("Correct");
          } else {
            console.log("Incorrect");
          }

          if (currentRow === 6) {
            console.log("Game Over");
          } else {
            setCurrentRow(currentRow + 1);
          }
          //TODO: check to see if this is working, need to check if game disables after user gets the word correct
          localStorage.setItem(
            "wordle",
            JSON.stringify({
              day: dayjs().format("YYYY-MM-DD"),
              word: word,
              rowOne: rowOne,
              rowTwo: rowTwo,
              rowThree: rowThree,
              rowFour: rowFour,
              rowFive: rowFive,
              rowSix: rowSix,
              currentRow: currentRow + 1,
            })
          );
        }
        break;
      case "Backspace":
        if (rowToEdit.length > 0) {
          rowToEditFunction(rowToEdit.slice(0, -1));
        }
        break;
      default:
        if (rowToEdit.length < 5) {
          rowToEditFunction([
            ...rowToEdit,
            { letter: key, color: `rgb(248, 244, 244)` },
          ]);
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
