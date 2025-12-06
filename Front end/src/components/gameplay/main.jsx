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
      try {
        const response = await fetch(`/api/questions/${category}/${difficulty}`);
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        const data = await response.json();
        const totalQuestions = Array.isArray(data) ? data.slice(0, 2) : [];

        console.log("Fetched questions:", totalQuestions);
        if (totalQuestions.length > 0) {
          console.log("First question structure:", totalQuestions[0]);
        }

        dispatch({
          type: "questionLoad",
          payload: {
            questions: totalQuestions,
          },
        });
      } catch (error) {
        console.error("Failed to load questions:", error);
        alert(`Error loading questions: ${error.message}`);
      }
    };

    if (category && difficulty) {
      loadQuestions();
    }
  }, [category, difficulty]);

  // Timer effect
  useEffect(() => {
            const timer = setInterval(() => {
            dispatch({ type: "timer" });
    },          
    1000);

    return () =>  
      clearInterval(timer);
  }, []);

  return (
    <div className="questionview">
      <QuestionView
        currentQuestion={state.currentQuestionIndex + 1}
        totalQuestions={state.questions.length}
      />
      
      <Score score={state.score} />





      <p className="timer">Time: {state.timeRemaining}s</p>
      <h1>{state.currentQuestion?.question}</h1>
      {state.currentQuestion?.answers && state.currentQuestion.answers.length > 0 ? (
        state.currentQuestion.answers.map((answer, index) => {
          const answerText = typeof answer === 'string' ? answer : answer.text;
          return (
            <button
              key={index}
              onClick={() => dispatch({ type: "answer", payload: answer })}
            >
              {answerText ? answerText.toLowerCase() : "Answer"}
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
