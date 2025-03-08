import React, { useState } from "react";

function Flashcard({ card }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div onClick={() => setFlipped(!flipped)} className="flashcard">
      {flipped ? card.answer : card.question}
    </div>
  );
}

export default Flashcard;
