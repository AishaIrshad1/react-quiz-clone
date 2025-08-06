// CountdownTimer.jsx
"use client";
import { useEffect, useState } from "react";

const CountdownTimer = ({ initialTime = 450, onTimeout }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onTimeout?.();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [onTimeout]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div
      style={{
        width: "110px",
        height: "50px",
        backgroundColor: "transparent",
        padding: "0.5rem 1rem",
        borderRadius: "9999px",
        border: "1px solid #696969",
        fontSize: "1.125rem",
        fontFamily: "Arial, sans-serif",
        color: "#cbd5e1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span>{formatTime(timeLeft)}</span>
    </div>
  );
};

export default CountdownTimer;
