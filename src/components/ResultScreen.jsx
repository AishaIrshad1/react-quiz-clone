import { useQuestions } from "../Contexts/questionsContext";

const ResultScreen = () => {
  const { points, maxPoints, highscore, dispatch } = useQuestions();

  const percentage = (points / maxPoints) * 100;

  let emoji = "😐";
  if (percentage === 100) emoji = "🎉";
  else if (percentage >= 80) emoji = "😎";
  else if (percentage >= 50) emoji = "🙂";
  else if (percentage > 0) emoji = "🤨";
  else emoji = "😢";

  return (
    <div className="p-6 max-w-xl mx-auto text-[#f1f3f5]">
      <div className="text-center mb-6">
        <div className="bg-[#1098ad] rounded-full py-4 px-6 text-xl font-semibold inline-block">
          {emoji} You scored {points} out of {maxPoints} ({Math.round(percentage)}%)
        </div>
        <p className="text-lg mt-4 text-[#ced4da]">
          (Highscore: {highscore} points)
        </p>
      </div>

      {/* Button */}
      <div className="flex justify-end">
        <button
          onClick={() => dispatch({ type: "restart" })}
          className="py-3 px-6 rounded-full bg-[#3a3f47] hover:bg-[#343a40] text-[16px] border border-[#6a6a6a] transition duration-300"
        >
          Restart quiz
        </button>
      </div>
    </div>
  );
};

export default ResultScreen;
