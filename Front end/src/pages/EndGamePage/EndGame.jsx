import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useGameReducer} from '../../hooks/useReducer';

import './EndGame.css';

const Endgame = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const state = location.state || {};

    // const [score, setScore] = useState("")
    // const [highScore, setHighScore] = useState("")
    // const [difficulty, setDifficulty] = useState("")
    // const [correctAnswer, manyCorrectAnswer] = useState("")
    // const [incorrectAnswer, manyIncorrectAnswer] = useState("")

    const score = state.score || 0;
    const highScore = state.highScore || 0;
    const difficulty = state.difficulty || "Unknown";
    const correctAnswer = state.correctAnswer || 0;
    const incorrectAnswer = state.incorrectAnswer || 0;
const percentage = (correctAnswer / 10) * 100;



const handleRestart = () => {
    navigate("/");
};


    
    
    


return (
    <div className="questionview">
        <div className="mockup-browser border-base-300 border w-full">
            <div className="mockup-browser-toolbar">
                <div className="input">
                    <h6>Eric, Jesus, Ashley, and Chase </h6>
                </div>
            </div>
            <div className="grid place-content-center border-t border-base-300 h-80 w-90" id="browser">
                <div className="endgame-container">
                    <div className="score-card">
                        <div className="score-circle">
                            <span className="score-number">{percentage.toFixed(0)}%</span>
                        
                        
                        <span className="score-message"> Correct</span></div>
                    </div>

                    <div className="summary-card">
                        <h3>Summary</h3>
                        <div className="summary-item">
                            <span className="summary-label">Correct answers</span>
                            <span className="summary-value">{correctAnswer}/10</span>
                        </div>
                        <div className="summary-item">
                            <span className="summary-label">Highscore</span>
                            <span className="summary-value">1000</span>
                        </div>
                        <div className="summary-item">
                            <span className="summary-label">Incorrect answers</span>
                            <span className="summary-value">{incorrectAnswer}/10</span>
                        </div>
                        <div className="summary-item">
                            <span className="summary-label">Difficulty</span>
                            <span className="summary-value">{difficulty}</span>
                        </div>
                        <button className="restart-btn" onClick={handleRestart}>Continue</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}
export default Endgame;






