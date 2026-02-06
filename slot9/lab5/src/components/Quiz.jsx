import React, { useState } from "react";
import QuestionCard from "./QuestionCard";
import { questions } from "../data/question";

function Quiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAnswer, setShowAnswer] = useState(false);

  const handleSelectAnswer = (questionId, option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: option,
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Quiz Component</h2>

      <button
        onClick={() => setShowAnswer(!showAnswer)}
        style={{
          padding: "10px 15px",
          marginBottom: "20px",
          cursor: "pointer",
        }}
      >
        {showAnswer ? "Hide Answers" : "Show Answers"}
      </button>

      {questions.map((q) => (
        <QuestionCard
          key={q.id}
          questionData={q}
          selectedOption={selectedAnswers[q.id]}
          onSelectAnswer={handleSelectAnswer}
          showAnswer={showAnswer}
        />
      ))}
    </div>
  );
}

export default Quiz;
