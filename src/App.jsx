import React from 'react';
import { useQuestions } from './Contexts/questionsContext';

import Home from './components/Home';
import Questions from './components/Questions';

import reactLogo from './logo512.png';
import reactTitle from './assets/title.png';

const App = () => {
  const { status, dispatch } = useQuestions();

  return (
    <div className="bg-[#343a40] min-h-screen text-white font-sans">
      <header className="w-full flex items-center justify-center py-8 bg-[#343a40]">
        <img src={reactLogo} alt="React Logo" className="h-36 w-36 mr-8" />
        <img src={reactTitle} alt="The React Quiz Title" className="h-28 object-contain" />
      </header>

      {status === 'ready' && (
        <Home onStart={() => dispatch({ type: 'start' })} />
      )}

      {['active', 'finished', 'loading', 'error'].includes(status) && (
        <Questions />
      )}
    </div>
  );
};

export default App;
