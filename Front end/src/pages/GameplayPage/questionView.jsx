
// I am going to come back to the question and answer logic after setting up the basic structure of the game play component, I may combine with answer component later, but
// for now keeping seperate while I figure out logic and see how the setting component will be setup.


//useReducer for question and answer state management?






const QuestionView = ({ currentQuestion, totalQuestions}) => {

  return (
    <div className="question-container">
      <p>Question {currentQuestion} / {totalQuestions}</p>
     
      
    </div>
  );
};

export default QuestionView;
