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
        questions: action.payload.questions,
        currentQuestion: action.payload.questions[0] || null,
        currentQuestionIndex: 0,
        timeRemaining: action.payload.timeLimit || 30,
        selectedQuestion: null,
        selectedAnswer: null,
        isCorrect: null,
      };
    case 'answer':
      const isCorrect = action.payload === state.currentQuestion.correct_answer;
      return {
        ...state,
        selectedAnswer: action.payload,
        isCorrect: isCorrect,
        score: isCorrect ? state.score + 100 : state.score,
        correctAnswers: isCorrect ? state.correctAnswers + 1 : state.correctAnswers,
        timeRemaining: 30,
      };
    case 'nextQ':
      const nextIndex = state.currentQuestionIndex + 1;
      const isGameOver = nextIndex >= state.questions.length;
      return {
        ...state,
        currentQuestionIndex: nextIndex,
        currentQuestion: isGameOver ? null : state.questions[nextIndex],
        isGameOver: isGameOver,
        isCorrect: null,
        selectedQuestion: null,
        selectedAnswer: null,
      };
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