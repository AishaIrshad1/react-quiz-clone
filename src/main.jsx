import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { QuestionsProvider } from './Contexts/questionsContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuestionsProvider>
      <App />
    </QuestionsProvider>
  </StrictMode>
);
