// import React, { useState } from "react";
import React, { useState, useEffect } from "react";
import Flashcard from "./components/Flashcard";
import "./App.css";

function App() {
  const [cards, setCards] = useState(() => {
  const savedCards = localStorage.getItem("flashcards");
  return savedCards
    ? JSON.parse(savedCards)
    : [
        { question: "What is React?", answer: "A JavaScript library for UI" },
        { question: "What is HTML?", answer: "Markup language" }
        
      ];
      
});

useEffect(() => {
  localStorage.setItem("flashcards", JSON.stringify(cards));
}, [cards]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const addCard = () => {
    if (question && answer) {
      setCards([...cards, { question, answer }]);
      setQuestion("");
      setAnswer("");
    }
  };

  const deleteCard = () => {
    const updatedCards = cards.filter((_, i) => i !== currentIndex);
    setCards(updatedCards);
    setCurrentIndex(0);
  };

  const editCard = () => {
    const updatedCards = [...cards];
    updatedCards[currentIndex] = { question, answer };
    setCards(updatedCards);
    setQuestion("");
    setAnswer("");
  };

  const nextCard = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="app">
      <h1>Flashcard Quiz App</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Enter Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />

        <button onClick={addCard}>Add</button>
        <button onClick={editCard}>Edit</button>
      </div>

      <Flashcard
        card={cards[currentIndex]}
        deleteCard={deleteCard}
      />

      <div>
        <button onClick={prevCard}>Previous</button>
        <button onClick={nextCard}>Next</button>
      </div>
    </div>
  );
}

export default App;