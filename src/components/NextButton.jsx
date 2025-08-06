import { useQuestions } from '../Contexts/questionsContext';

const NextButton = () => {
  const { dispatch, answer, index, numQuestions } = useQuestions();

  if (answer === null) return null;

  const baseBtn =
    'py-3 px-6 ml-40  text-[16px] rounded-full bg-[#3a3f47] hover:bg-[#343a40]  border border-[#6a6a6a] transition duration-300';

  if (index < numQuestions - 1)
    return (
      <button  onClick={() => dispatch({ type: 'nextQuestion' })} className={baseBtn}>
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button onClick={() => dispatch({ type: 'finished' })} className={baseBtn}>
        Finish
      </button>
    );
};

export default NextButton;