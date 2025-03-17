import React, { useState } from "react";

function Flashcard({ card }) {
  const [flipped, setFlipped] = useState(false);
  const [userGuess, setUserGuess] = useState("");
  const [feedback, setFeedback] = useState(null);


  const checkAnswer = () => {
    if (userGuess.toLowerCase() === card.answer.toLowerCase()) {
      setFeedback("✅ Correct!");
    } else {
      setFeedback("❌ Incorrect. Try again!");
    }
  };


  return (
    <>
    <div onClick={() => setFlipped(!flipped)} className="flashcard">
      {flipped ? card.answer : card.question}
    </div>
    <input
        type="text"
        placeholder="Your guess..."
        value={userGuess}
        onChange={(e) => setUserGuess(e.target.value)}
      />
      <button className="submit" onClick={checkAnswer}>Submit</button>
      {feedback ? <p className="feedback">{feedback}</p>:<p>    </p>}
    </>
  );
}

export default Flashcard;
