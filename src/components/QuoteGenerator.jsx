import React, { useState } from "react";

function QuoteGenerator() {
  const quotes = [
    {
      text: "Success is not final, failure is not fatal.",
      author: "Winston Churchill"
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      text: "Dream big and dare to fail.",
      author: "Norman Vaughan"
    },
    {
      text: "Do something today that your future self will thank you for.",
      author: "Unknown"
    }
  ];

  const [currentQuote, setCurrentQuote] = useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  );

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  return (
    <div className="quote-box">
      <h2>Random Quote Generator</h2>
      <p>"{currentQuote.text}"</p>
      <h4>- {currentQuote.author}</h4>

      <button onClick={generateQuote}>New Quote</button>
    </div>
  );
}

export default QuoteGenerator;