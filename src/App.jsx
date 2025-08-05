
import NextButton from './Components/NextButton';
import Score from './Components/Score';

import { useQuestions } from './Contexts/questionsContext';

const App = () => {
  const { status } = useQuestions();

  return (
    <div className="app">
     
            <Score />
              <NextButton />
        
       
    </div>
  );
};

export default App;
