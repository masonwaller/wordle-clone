import React from "react";
import "./GameOverDialog.css";

export default function GameOverDialog({ won, word, closeDialog }) {
  return (
    <div className="game-over-dialog">
      {/* TODO: fix css on closing tag */}
      <div className="close-button" onClick={closeDialog}>
        X
      </div>
      <div className="message">
        {won ? (
          <h1>Success, the word was {word}</h1>
        ) : (
          <h1>Game Over, the word was {word}. Better luck next time!</h1>
        )}
      </div>
    </div>
  );
}
