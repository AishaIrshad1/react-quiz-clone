// ProgressBar.jsx
"use client";

const ProgressBar = ({ current, total }) => {
  const percentage = (current / total) * 100;

  return (
    <div style={{ marginBottom: "2rem" }}>
      <div
        style={{
          width: "100%",
          backgroundColor: "#bac2cbff",
          borderRadius: "9999px",
          height: "1rem",
        }}
      >
        <div
          style={{
            backgroundColor: "#338591ff",
            height: "1rem",
            borderRadius: "9999px",
            width: `${percentage}%`,
            transition: "width 0.3s ease",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
