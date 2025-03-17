import React, { useState } from "react";
import Flashcard from "./components/Flashcard";
import { flashcards } from "./assets/flashcardsData";
import "./App.css";

function FlashcardApp() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };


  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };


  return (
    <>
    <div className="app-container">
      <h1>Italian Study</h1>
      <p>Total Cards: {flashcards.length}</p>
      <Flashcard card={flashcards[currentIndex]} />
      <button onClick={prevCard} disabled={currentIndex === 0}>⬅️ Back</button>
      <button onClick={nextCard} disabled={currentIndex === flashcards.length - 1}>Next ➡️</button>
    </div>
    </>
  );
}

export default FlashcardApp;
