import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Endgame = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // const [score, setScore] = useState("")
    // const [highScore, setHighScore] = useState("")
    // const [difficulty, setDifficulty] = useState("")
    // const [correctAnswer, manyCorrectAnswer] = useState("")
    // const [incorrectAnswer, manyIncorrectAnswer] = useState("")

  useEffect(() => {
    if (gameState.isGameOver) {
      navigate('/play/placeholder', { viewTransition: true });
    }
  }, [gameState.isGameOver, navigate]);
    const stats = location.state || {};

    const score = stats.score || 0;
    const highScore = stats.highScore || 0;
    const difficulty = stats.difficulty || "Unknown";
    const correctAnswer = stats.correctAnswer || 0;
    const incorrectAnswer = stats.incorrectAnswer || 0;

    const handleRestart = () => {
        navigate("/");
    };

    return (
        <div className="endgameModal">
            <div className="gameOver">
                <h1>Game Over</h1>
            </div>
            <div className="difficulty">
                <h6>{difficulty} Mode</h6>
            </div>
            <div>
                <div className="score">
                    <p>Final Score: {score}</p>
                </div>
                <div className="highScore">
                    <p>High Score: {highScore} </p>
                </div>
            </div>
            <div className="correct">
                <p>Correct: {correctAnswer}</p>
            </div>
            <div className="incorrect">
                <p>Incorrect: {incorrectAnswer}</p>
            </div>

            <div>
                <button className="restart" onClick={handleRestart}>Play Again</button>
            </div>
        </div>
    );
}

export default Endgame;






