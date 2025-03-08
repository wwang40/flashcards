import React, { useState } from "react";
import Flashcard from "./components/Flashcard";
import { flashcards } from "./assets/flashcardsData";
import "./App.css";

function FlashcardApp() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex(Math.floor(Math.random() * flashcards.length));
  };

  return (
    <div className="app-container">
      <h1>Italian Study</h1>
      <p>Total Cards: {flashcards.length}</p>
      <Flashcard card={flashcards[currentIndex]} />
      <button onClick={nextCard}>Next Card</button>
    </div>
  );
}

export default FlashcardApp;
