import { useQuestions } from '../Contexts/questionsContext';
import NextButton from './NextButton';
import Progress from './Progress'; // ✅ Updated from Score
import ResultScreen from './ResultScreen';
import ProgressBar from './ProgressBar';
import CountdownTimer from './CountdownTimer';

const Questions = () => {
  const {
    questions,
    index,
    answer,
    dispatch,
    status,
    secondsRemaining,
  } = useQuestions();

  if (status === 'loading') {
    return <div className="text-center text-xl py-10">Loading questions...</div>;
  }

  if (status === 'error') {
    return (
      <div className="text-center text-xl py-10 text-red-400">
        Failed to load questions.
      </div>
    );
  }

  if (status === 'finished') {
    return <ResultScreen />;
  }

  if (!questions.length || !questions[index]) {
    return null;
  }

  const currentQuestion = questions[index];

  const handleOptionClick = (idx) => {
    if (answer !== null) return;
    dispatch({ type: 'newAnswer', payload: idx });
  };

  return (
    <div className="p-6 max-w-xl mx-auto text-[#f1f3f5]">
      {/* Progress bar above */}
      <ProgressBar current={index + 1} total={questions.length} />

      {/* Progress info: question number and score */}
      <Progress />

      <div className="mb-6 px-3 py-6">
        <h2 className="text-[22px] font-semibold mb-4">
          {currentQuestion.question}
        </h2>
        <div className="flex flex-col gap-3 text-xl">
          {currentQuestion.options.map((option, idx) => {
            let btnClass =
              'w-[300px] sm:w-[350px] md:w-[500px] hover:outline outline-[#6a6a6a] py-3 px-6 rounded-full text-left bg-[#3a3f47] hover:bg-[#343a40] transition-all duration-350 hover:ml-4';

            if (answer !== null) {
              if (idx === currentQuestion.correctOption) {
                btnClass =
                  'w-[300px] sm:w-[350px] md:w-[500px] border border-[#6a6a6a] py-3 px-6 rounded-full text-left bg-[#1098ad] text-[#f1f3f5] transition-all duration-300' +
                  (answer === idx ? ' ml-5' : '');
              } else if (answer === idx) {
                btnClass =
                  'w-[300px] sm:w-[350px] md:w-[500px] border border-[#6a6a6a] py-3 px-6 rounded-full text-left bg-[#ffa94d] ml-5 transition-all duration-300';
              } else {
                btnClass =
                  'w-[300px] sm:w-[350px] md:w-[500px] border border-[#6a6a6a] py-3 px-6 rounded-full text-left bg-[#ffa94d] transition-all duration-300';
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleOptionClick(idx)}
                className={btnClass}
                disabled={answer !== null}
              >
                {option}
              </button>
            );
          })}
        </div>

        {/* Countdown timer + next button */}
        <div className="flex justify-between items-center mt-6 min-h-[56px]">
          <CountdownTimer
            initialTime={secondsRemaining}
            onTimeout={() => dispatch({ type: 'finish' })}
          />
          <NextButton />
        </div>
      </div>
    </div>
  );
};

export default Questions;
