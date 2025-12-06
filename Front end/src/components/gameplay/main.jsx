import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGameReducer } from "./useReducer";
import QuestionView from "./questionView";
import Score from "./score";
 

//https://generalassembly.instructure.com/courses/927/pages/intro-to-asynchronous-programming-video?module_item_id=91638

//need settings from settings component when available
const GamePlay = () => {
  const { category, difficulty } = useParams();
  const [state, dispatch] = useGameReducer();

      
useEffect(() => {
  
    const loadQuestions = async () => {
     
        const response = await fetch(`/api/questions/${category}/${difficulty}`);
       const data = await response.json();
         console.log("Fetched questions:", data);

        function randomQuestions(pulledData) {
          return pulledData.sort(() => 0.5 - Math.random()).slice(0, 10);
        }

      const questionsPass = randomQuestions(data);

        dispatch({
          type: "questionLoad",
          payload: {
            questions: questionsPass,
          },

        });

    
    }
  
  if (category && difficulty) {
loadQuestions();
    }
  }, [category, difficulty]);
    
  // Timer effect
  useEffect(() => {
            const timer = setInterval(() => {
            dispatch({ type: "timer" });
    },          
    1000); //how often to run the function soin this case its every 1000mm that the timer state will run, can be used for anything

    return () =>  //https://developer.mozilla.org/en-US/docs/Web/API/Window/clearInterval 
      clearInterval(timer); 
  }, []);

  return (
    <div className="questionview">
      <QuestionView
        currentQuestion={state.currentQuestionIndex + 1}
        totalQuestions={state.questions.length}

      />
   t
      <Score score={state.score} />





      <p className="timer">Time: {state.timeRemaining}s </p>
        
     
      <h1>{state.currentQuestion.question}</h1>
      {state.currentQuestion?.correct_answer && state.currentQuestion.correct_answer.length > 0 ? (
        state.currentQuestion.answers.map((answer, index) => {
          const answerText = typeof answer === 'string' ? answer : answer.text;
          return (
            <button
              key={index}
              onClick={() => dispatch({ type: "answer", payload: answer })}
            >
              {answerText ? answerText : "answer"}
            </button>
          );
        })
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
  );
}

export default GamePlay;
