/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./App.css";
import MainGrid from "./components/main-grid/MainGrid.tsx";
import { words } from "./constants/words.ts";
import dayjs from "dayjs";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import { keyboardExclusions } from "./constants/keyboardExclusions.ts";
import GameOverDialog from "./components/end-game/GameOverDialog.tsx";
import AdBox from "./components/ad-box/AdBox.tsx";

function App() {
  const [word, setWord] = useState("hello");
  const [correctlyGuessed, setCorrectlyGuessed] = useState(false);

  const [currentRow, setCurrentRow] = useState(1);
  const [dialogOpen, setDialogOpen] = useState(false);

  const [row1, setRow1] = useState([]);
  const [row2, setRow2] = useState([]);
  const [row3, setRow3] = useState([]);
  const [row4, setRow4] = useState([]);
  const [row5, setRow5] = useState([]);
  const [row6, setRow6] = useState([]);

  useEffect(() => {
    if (currentRow >= 7) {
      setDialogOpen(true);
    }
  }, [currentRow]);

  useEffect(() => {
    // localStorage.removeItem("wordle");
    if (localStorage.getItem("wordle")) {
      const wordle = JSON.parse(localStorage.getItem("wordle"));
      // console.log(wordle);
      if (wordle.day === dayjs().format("YYYY-MM-DD")) {
        setWord(wordle.word);
        setRow1(wordle.row1);
        setRow2(wordle.row2);
        setRow3(wordle.row3);
        setRow4(wordle.row4);
        setRow5(wordle.row5);
        setRow6(wordle.row6);
        setCurrentRow(wordle.currentRow);
        setCorrectlyGuessed(wordle.correctlyGuessed);
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
          row1: [],
          row2: [],
          row3: [],
          row4: [],
          row5: [],
          row6: [],
          currentRow: 1,
          correctlyGuessed,
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkIfCorrect = async (rowToCheck) => {
    const wordArray = word.split("");
    const rowArray = rowToCheck.map((letter) => letter.letter.toLowerCase());
    const newRowArray = ["", "", "", "", ""];
    const correctLetters = rowArray.filter((letter, index) => {
      if (letter === wordArray[index]) {
        newRowArray[index] = { letter: letter, color: `green` };
        wordArray.splice(index, 1, " ");
        return letter;
      }
    });
    if (correctLetters.length === 5) {
      return { correct: true, newRow: newRowArray };
    }
    const correctLettersWrongSpot = rowArray.filter(async (letter, index) => {
      if (newRowArray[index] !== "") {
        return letter;
      } else if (wordArray.join("").includes(letter)) {
        newRowArray[index] = { letter: letter, color: `yellow` };
        const idx = wordArray.findIndex((wordLetter) => wordLetter === letter);
        wordArray.splice(idx, 1, " ");
      } else {
        newRowArray[index] = { letter: letter, color: `red` };
      }
    });
    return { correct: false, newRow: newRowArray };
  };

  const keyPressEvent = async (event) => {
    // Get the pressed key
    if (event.keyCode) {
      if (
        (event.keyCode < 65 || event.keyCode > 90) &&
        event.keyCode !== 13 &&
        event.keyCode !== 8
      ) {
        return;
      }
    }
    const key = event.key || event;

    let rowToEdit;
    let rowToEditFunction;
    switch (currentRow) {
      case 1:
        rowToEdit = row1;
        rowToEditFunction = setRow1;
        break;
      case 2:
        rowToEdit = row2;
        rowToEditFunction = setRow2;
        break;
      case 3:
        rowToEdit = row3;
        rowToEditFunction = setRow3;
        break;
      case 4:
        rowToEdit = row4;
        rowToEditFunction = setRow4;
        break;
      case 5:
        rowToEdit = row5;
        rowToEditFunction = setRow5;
        break;
      case 6:
        rowToEdit = row6;
        rowToEditFunction = setRow6;
        break;
      default:
        return;
    }

    switch (key) {
      case "Enter":
        if (rowToEdit.length === 5) {
          // Check if the word is correct
          const { correct, newRow } = await checkIfCorrect(
            rowToEdit,
            rowToEditFunction
          );
          rowToEditFunction(newRow);
          let newCurrentRow = currentRow;
          if (correct) {
            console.log("Correct");
            setCorrectlyGuessed(true);
            newCurrentRow = 7;
          } else {
            console.log("Incorrect");
            newCurrentRow += 1;
          }
          const newStorageItem = {
            day: dayjs().format("YYYY-MM-DD"),
            word: word,
            row1: row1,
            row2: row2,
            row3: row3,
            row4: row4,
            row5: row5,
            row6: row6,
            currentRow: newCurrentRow,
            correctlyGuessed: correct,
          };
          newStorageItem[`row${currentRow}`] = newRow;
          //TODO: check to see if this is working, need to check if game disables after user gets the word correct
          setCurrentRow(newCurrentRow);
          localStorage.setItem("wordle", JSON.stringify(newStorageItem));
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
      {dialogOpen && (
        <GameOverDialog
          won={correctlyGuessed}
          word={word}
          closeDialog={() => setDialogOpen(false)}
        />
      )}
      <AdBox />
      <div className="Main-App">
        <h1>Mason's Wordle</h1>
        <MainGrid
          row1={row1}
          row2={row2}
          row3={row3}
          row4={row4}
          row5={row5}
          row6={row6}
        />
        <div className="keyboard-container">
          <Keyboard
            onKeyPress={keyPressEvent}
            excludeFromLayout={keyboardExclusions}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
