// App.jsx
import React, { useEffect, useReducer } from "react";
import "./App.css";
import { QuestionsProvider } from "./Contexts/questionsContext";
import Questions from "./components/Questions";
import reactLogo from "./logo512.png";
import reactTitle from "./assets/title.png";

const SECS_PER_QUESTION = 5;

const initialState = {
  questions: [],
  status: "loading", // 'loading', 'error', 'ready', 'active', 'finished'
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case "newAnswer":
      const question = state.questions[state.index];
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore: Math.max(state.points, state.highscore),
      };
    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
      };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
        highscore:
          state.secondsRemaining === 0
            ? Math.max(state.points, state.highscore)
            : state.highscore,
      };
    default:
      throw new Error("Unknown action");
  }
}

function App() {
  const [
    { questions, status, index, answer, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://vinayak9669.github.io/React_quiz_api/questions.json")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: "dataReceived", payload: data.questions })
      )
      .catch(() => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <QuestionsProvider value={{ status, dispatch }}>
      <div className="app">
        <header className="header">
          <div className="logo-title-container">
            <img src={reactLogo} alt="React Logo" className="logo" />
            <img
              src={reactTitle}
              alt="The React Quiz Title"
              className="quiz-title"
            />
          </div>
        </header>

        {status === "ready" && (
          <main className="main">
            <h1>Welcome to The React Quiz!</h1>
            <p>15 questions to test your React mastery</p>
            <button
              className="start-btn"
              onClick={() => dispatch({ type: "start" })}
            >
              Let's start
            </button>
          </main>
        )}

        {(status === "active" ||
          status === "finished" ||
          status === "loading" ||
          status === "error") && (
          <Questions
            questions={questions}
            index={index}
            answer={answer}
            points={points}
            highscore={highscore}
            secondsRemaining={secondsRemaining}
            dispatch={dispatch}
          />
        )}
      </div>
    </QuestionsProvider>
  );
}

export default App;
