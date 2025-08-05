import { useQuestions } from '../Contexts/questionsContext';

const Progress = () => {
  const { numQuestions, index, points, maxPoints } = useQuestions();

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-darkest text-light rounded-lg shadow-md">
      <p className="text-4xl">
        Question <strong className="text-theme">{index + 1}</strong>
        <span className="text-gray-400"> / {numQuestions}</span>
      </p>
      <p className="text-4xl font-semibold">
        <strong className="text-theme">{points}</strong>
        <span className="text-gray-400"> / {maxPoints}</span>
      </p>
    </header>
  );
};

export default Progress;
