import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGameReducer } from "../../hooks/useReducer";
import QuestionView from "./questionView";
import Score from "./score";
import './gameplay.css';

//https://generalassembly.instructure.com/courses/927/pages/intro-to-asynchronous-programming-video?module_item_id=91638

//need settings from settings component when available
const GamePlay = ({ userName }) => {
  const { category, difficulty } = useParams();
  const navigate = useNavigate();
  const [state, dispatch] = useGameReducer();

useEffect(() => {
  if (state.isGameOver) {
    // Calculate stats before navigating
    const totalQuestions = state.questions.length;
    const incorrect = totalQuestions - state.correctAnswers;

    navigate("/play/placeholder", {
      state: {
        score: state.score,
        highScore: 0,
        difficulty: difficulty,
        correctAnswer: state.correctAnswers,
        incorrectAnswer: incorrect
      }
    });
  }
}, [state.isGameOver, navigate, state.score, state.correctAnswers, state.questions.length, difficulty]);

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
<div className="mockup-browser border-base-300 border w-full">
  <div className="mockup-browser-toolbar">
    <div className="input">
      <QuestionView
        currentQuestion={state.currentQuestionIndex + 1}
        totalQuestions={state.questions.length}


      />  <Score score={state.score} />   </div>
  </div>
  <div className="grid place-content-center border-t border-base-300 h-80 w-90" id="browser">









      <p className="timer">Time: {state.timeRemaining}s </p>

     <div className="content-center"id='view'>
      {state.currentQuestion && typeof state.currentQuestion === 'object' ? (
        <>
        <div className = 'question'>
          <h1>{state.currentQuestion.question}</h1></div>
          {state.currentQuestion?.correct_answer && state.currentQuestion.correct_answer.length > 0 ? (
            <div className="answers">
              {state.currentQuestion.answers.map((answer, index) => {
                const answerText = typeof answer === 'string' ? answer : answer.text;

                return (
                  <button className="btn btn-outline content-center" id="answerBtn"
                  key={index}
                  onClick={() => dispatch({ type: "answer", payload: answer })}
                >
                  {answerText ? answerText : "answer"}
                </button>
                );
              })}
            </div>
          ) : (
            <p>Loading questions...</p>
          )}
        </>
      ) : (
        <p>Loading questions...</p>
      )}
    </div></div>
</div></div>
  );
}

export default GamePlay;
