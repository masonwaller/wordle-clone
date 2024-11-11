// create a full screen dialog component that will be displayed when the game is over

import React from "react";
import "./GameOverDialog.css";

export default function GameOverDialog({ won, word }) {
  return (
    <div className="game-over-dialog">
      {/* add x button to close dialog */}
      {won ? (
        <h1>Success, the word was {word}</h1>
      ) : (
        <h1>Game Over, the word was {word}</h1>
      )}
    </div>
  );
}
