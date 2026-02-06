import React from "react";

function QuestionCard({ questionData, selectedOption, onSelectAnswer, showAnswer }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "15px" }}>
      <h3>{questionData.question}</h3>

      {questionData.options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            name={`question-${questionData.id}`}
            value={option}
            checked={selectedOption === option}
            onChange={() => onSelectAnswer(questionData.id, option)}
          />
          <label style={{ marginLeft: "8px" }}>{option}</label>
        </div>
      ))}

      {showAnswer && (
        <p style={{ marginTop: "10px", color: "green", fontWeight: "bold" }}>
          Correct Answer: {questionData.answer}
        </p>
      )}
    </div>
  );
}

export default QuestionCard;
