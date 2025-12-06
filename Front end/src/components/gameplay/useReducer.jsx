//https://www.w3schools.com/react/react_usereducer.asp
//https://react.dev/reference/react/useReducer
//https://blog.logrocket.com/react-usereducer-hook-ultimate-guide/

// Intial states and a function that handles multiple state changes based on action types instead of multiple useState calls or handler functions.
// This allows for multiple states to interact more easily with less code and complexity.
// This is used on main.jsx gameplay in the return component, for example:
// API function to fetch questions then add dispatch({ type: '<Action string here, such as LOAD_QUESTIONS'> and then, payload: <data that needs to be passed for state change here> })
//full example: dispatch({ type: 'LOAD_QUESTIONS', payload: fetchedQuestionsFromAPI }) goes in the API fetch function after API call and what not
// useState = simple mangagement such as theme toggle, open close modal, etc
// useReducer = complex management with multiple interacting states such as game play, question and answer logic, score, timer, etc
import { useReducer as useReducerHook } from "react";

const initialGameState = {
  questions: [],
  currentQuestion: 0,
  score: 0,
  timeRemaining: 0,
  isGameOver: false,
  isCorrect: null,
correctAnswers: 0,
  currentQuestionIndex: 0,
  selectedAnswer: null,
  selectedQuestion: null,
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case 'questionLoad':
      return {
        ...state,
        questions: action.payload.questions, //set incoming array to questions aka setQuestions
        currentQuestion: action.payload.questions[0], //set first question, [0] is index
        currentTotalCompleted: 0, //for ?/10 questions.   counter
        timeRemaining: action.payload.timer || 30,
        selectedQuestion: null, //reset
        selectedAnswer: null,//reset
        isCorrect: null,//reset
       
      };
    case 'answer':
      const isCorrect = action.payload === state.currentQuestion.correct_answer;  
      const nextIndex = state.currentQuestionIndex + 1;
      const isGameOver = nextIndex >= state.questions.length;
      return {
        ...state,
        selectedAnswer: action.payload,
        isCorrect: isCorrect, // kept trying to figure out why the correct answer was always the first option and thought my code was wrong and just was giving the score
        //for the first button because it was hard coded to do that, but its actually just bc its the right answer due to the api model lol
        score: isCorrect ? state.score + 100 : state.score,
        correctAnswer: isCorrect ? state.correctAnswer + 1 : state.correctAnswer,
   currentQuestionIndex: nextIndex,
        currentQuestion: isGameOver ? null : state.questions[nextIndex],
        isGameOver: isGameOver,
         timeRemaining: action.payload.timer || 30
        // correctTotal: isCorrect ? state.correctTotal + 1 : state.correctTotal,

        

      }
       // ,
    //   };
    // case 'nextQ':        //this took way to long to fix
    
      // return {
        
     
        // isCorrect: null,
       
      
    case 'timer':
      return {
        ...state,
        timeRemaining: Math.max(0, state.timeRemaining - 1),
      };
    case 'RESET':
      return initialGameState;
    default:
      return state;
  }
};

export const useGameReducer = () => {
  return useReducerHook(gameReducer, initialGameState);
};