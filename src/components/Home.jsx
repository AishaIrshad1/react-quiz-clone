import React from 'react';

function Home({ onStart }) {
  return (
    <main className="main">
      <h2>Welcome to The React Quiz!</h2>
      <p>15 questions to test your React mastery</p>
      <button className="start-btn" onClick={onStart}>Let's start</button>
    </main>
  );
}

export default Home;
