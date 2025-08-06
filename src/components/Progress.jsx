import { useQuestions } from '../Contexts/questionsContext';

const Progress = () => {
  const { numQuestions, index, points, maxPoints } = useQuestions();

  return (
    <header className="flex items-center justify-between px-3">
      <p className="text-lg">
        Question <strong className="text-theme">{index + 1}</strong>
        <span className="text-[#ced4da]"> / {numQuestions}</span>
      </p>
      <p className="text-lg">
        <strong className="text-theme">{points}</strong>
        <span className="text-[#ced4da]"> / {maxPoints}</span>
      </p>
    </header>
  );
};

export default Progress;