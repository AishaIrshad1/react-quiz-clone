import { useQuestions } from '../Contexts/questionsContext';
import NextButton from './NextButton';
import Score from './Score';

const Questions = () => {
  const {
    questions,
    index,
    answer,
    dispatch,
    status,
    numQuestions,
    showScore,
    selectedOption,
  } = useQuestions();

  if (status === 'loading') {
    return <div className="text-center text-xl py-10">Loading questions...</div>;
  }
  if (status === 'error') {
    return <div className="text-center text-xl py-10 text-red-400">Failed to load questions.</div>;
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
      <div className="pl-1">
        <Score />
        {showScore ? (
          <div className="text-center text-xl font-medium w-full py-3 px-6 rounded-full bg-[#1098ad] text-[#f1f3f5] mt-6">
            🤨 You scored {answer} out of {numQuestions}
          </div>
        ) : (
          <div className="mb-6 px-3 py-6">
            <h2 className="text-[22px] font-semibold mb-4">
              {currentQuestion.question}
            </h2>
            <div className="flex flex-col gap-3 text-xl">
              {currentQuestion.options.map((option, idx) => {
              let btnClass =
                "w-[300px] sm:w-[350px] md:w-[500px] hover:outline outline-[#6a6a6a] py-3 px-6 rounded-full text-left bg-[#3a3f47] transition-all duration-350 hover:ml-4";
              if (answer !== null) {
                if (idx === currentQuestion.correctOption) {
                  btnClass =
                    "w-[300px] sm:w-[350px] md:w-[500px] border border-[#6a6a6a] py-3 px-6 rounded-full text-left bg-[#1098ad] text-[#f1f3f5] transition-all duration-300" +
                    (answer === idx ? " ml-5" : "");
                } else if (answer === idx) {
                  btnClass =
                    "w-[300px] sm:w-[350px] md:w-[500px] border border-[#6a6a6a] py-3 px-6 rounded-full text-left bg-[#ffa94d] ml-5 transition-all duration-300";
                } else {
                  btnClass =
                    "w-[300px] sm:w-[350px] md:w-[500px] border border-[#6a6a6a] py-3 px-6 rounded-full text-left bg-[#ffa94d] transition-all duration-300";
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
            <div className="flex justify-end mt-6 min-h-[56px]">
              <NextButton />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Questions;