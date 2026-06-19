import React, { useState } from "react";

function Flashcard({ card, deleteCard }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="flashcard">
      <h3>{card.question}</h3>

      {showAnswer && <p>{card.answer}</p>}

      <button onClick={() => setShowAnswer(!showAnswer)}>
        {showAnswer ? "Hide Answer" : "Show Answer"}
      </button>

      <button onClick={deleteCard}>Delete</button>
    </div>
  );
}

export default Flashcard;