import React from "react";
import "./GridRow.css";
import GridBox from "../grid-box/GridBox.tsx";

function GridRow({ row, rowLetters }) {
  return (
    <div className="grid-row">
      <GridBox
        letterInfo={
          rowLetters[0] || { letter: "", color: "rgb(248, 244, 244)" }
        }
        id={`row${row}-box0`}
      />
      <GridBox
        letterInfo={
          rowLetters[1] || { letter: "", color: "rgb(248, 244, 244)" }
        }
        id={`row${row}-box1`}
      />
      <GridBox
        letterInfo={
          rowLetters[2] || { letter: "", color: "rgb(248, 244, 244)" }
        }
        id={`row${row}-box2`}
      />
      <GridBox
        letterInfo={
          rowLetters[3] || { letter: "", color: "rgb(248, 244, 244)" }
        }
        id={`row${row}-box3`}
      />
      <GridBox
        letterInfo={
          rowLetters[4] || { letter: "", color: "rgb(248, 244, 244)" }
        }
        id={`row${row}-box4`}
      />
    </div>
  );
}

export default GridRow;
