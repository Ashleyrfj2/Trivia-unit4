import { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";



//need settings from settings component when available
const gamePlay = (props ) => {
//state for questions, current question index, score, timer
const [questions, setQuestions] = useState([]);
const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
const [score, setScore] = useState(0);
const [timeLeft, setTimeLeft] = useState(30); 
const [clickedAnswer, setClickedAnswer] = useState(null);
//const navigate = useNavigate();







useEffect(() => {
//first question load

}, []);

//when selection is clicked, what happens?   
//TODO: answer check in first line of handleAnswerClick 
const handleAnswerClick = (answer) => {
    //TODO: set selected answer
    //check if correct, update score 
    //points
    //stop timer
};

//next question button click
const handleNextQuestion = () => {
    //check if end of game if not, then move to next Q
    //reset states for question, answer, timer OR
    //render ending result page
}

const hangleTimeUpdate = () => {
    //update time left each second
    //if time runs out, 0 points, next question
    //maybe show correct answer? or.. keep it a mystery for if question comes up again??
}
return ( //what is shown on the page? gamePlay page, questions, answer selections, timer, current score, and ______ add more later if needed
    
    <div className="gameplay-container">
    
        {/* Render question, answers, score, timer */}
    


    </div>
);
   







}
export default gamePlay;