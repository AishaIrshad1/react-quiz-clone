// QuestionDisplay.jsx
"use client";

const QuestionDisplay = ({ questionIndex, totalQuestions, questionText }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "0.5rem",
        color: "#cbd5e1",
        marginBottom: "2rem",
      }}
    >
      <div style={{ fontSize: "1.25rem", color: "#cbd5e1" }}>
        Question{" "}
        <span style={{ fontWeight: "bold" }}>{questionIndex + 1}</span> /{" "}
        {totalQuestions}
      </div>
      <h2 style={{ color: "white", fontSize: "1.5rem" }}>{questionText}</h2>
    </div>
  );
};

export default QuestionDisplay;
