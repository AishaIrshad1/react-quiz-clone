


import { useQuestions } from '../Contexts/questionsContext';

const NextButton = () => {
  const { dispatch, answer, index, numQuestions } = useQuestions();

  if (answer === null) return null;

  const baseBtn =
    'px-12 ml-40 py-8 text-2xl rounded-full bg-theme hover:bg-darkest text-light font-semibold border-2 border-dark transition duration-300';

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
