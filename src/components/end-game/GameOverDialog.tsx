// create a full screen dialog component that will be displayed when the game is over

import React from "react";
import "./GameOverDialog.css";

export default function GameOverDialog({ won, word }) {
  return (
    <div className="game-over-dialog">
      {/* TODO: fix css on closing tag */}
      <div className="close-button">X</div>
      <div className="message">
        {won ? (
          <h1>Success, the word was {word}</h1>
        ) : (
          <h1>Game Over, the word was {word}</h1>
        )}
      </div>
    </div>
  );
}
