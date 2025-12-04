import { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";
//import question component
//import score component
//import timer component
//import settings component
import question from "./questionView";
import score from "./score";
import timer from "./timer";
//import Settings from "./settings";



//need settings from settings component when available
const gamePlay = (props ) => {
//state for questions, current question index, score, timer
    const [questions, setQuestions] = useState([]); //questions based on settings from settings component
    const [currentQuestion, setCurrentQuestion] = useState(0); //what question out of the total questions set on settings
    const [score, setScore] = useState(0); //starting score is 0
    const [timeLeft, setTimeLeft] = useState(30); //30 is placeholder. TODO: get from settings component
    const [clickedAnswer, setClickedAnswer] = useState(null); //track selected answer
//const navigate = useNavigate();



//fetch questions based on settings from settings component  questions/setQuestions



useEffect(() => {
//first question load ASAP

}, []);

//when selection is clicked, what happens?   
//TODO: answer check in first line of handleAnswerClick 
const handleAnswerClick = (answer) => {
    //TODO: set selected answer 
    if (clickedAnswer === currentQuestion.answer) { //comparing two values, clicked answer and correct answer
        setScore(score + 100); //and if correct adds point to score.
    } 
    }
    //stop timer   work with timer component
};

//next question button click
const handleNextQuestion = () => { //placeholders until I have access to proper variables
    //move to next question
    setCurrentQuestion(currentQuestion + 1); //question counter so  display progress "Question 2 of 10" goes up each time
    setClickedAnswer(null); //reset clicked answer for next question
    setTimeLeft(30); //reset timer for next question  UPDATE with variable from settings component when setup 
    //if last question is answered, show result page instead
     if (currentQuestion ===  totalQuestions) { //Boolean check if current question index equals total questions length -1
        //navigate to results page
     }       
 
}

const handleTimeUpdate = () => {
    //update time left each second
    //if time runs out, 0 points, next question
    //maybe show correct answer? or.. keep it a mystery for if question comes up again?? I say keep it a mystery so question can be used again later
}
return ( //what is shown on the page? gamePlay page, questions, answer selections, timer, current score, and ______ add more later if needed
    
    <div className="gameplay-container">
    
        {/* Render question, answers, score, timer */}
    


    </div>
);
   








export default gamePlay;