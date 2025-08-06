// App.jsx
import { useState } from "react";
import CountdownTimer from "./components/CountdownTimer";
import ProgressBar from "./components/ProgressBar";
import QuestionDisplay from "./components/QuestionDisplay";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);

  const questions = [
    { question: "What is React?", options: [], correct: "", points: 10 },
    { question: "What is JSX?", options: [], correct: "", points: 10 },
    { question: "What is useState?", options: [], correct: "", points: 10 },
    { question: "What is useEffect?", options: [], correct: "", points: 10 },
    { question: "What is a component?", options: [], correct: "", points: 10 },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "50vw",
        backgroundColor: "#334155",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "42rem",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <ProgressBar current={answeredCount} total={questions.length} />
        <QuestionDisplay
          questionIndex={currentQuestion}
          totalQuestions={questions.length}
          questionText={questions[currentQuestion].question}
        />
        <CountdownTimer initialTime={450} />
      </div>
    </div>
  );
};

export default App;
