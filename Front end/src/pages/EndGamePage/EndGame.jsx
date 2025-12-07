
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGameReducer } from "../../hooks/useReducer";

const EndGame = () => {
  const [gameState] = useGameReducer();
  const navigate = useNavigate();

  useEffect(() => {
    if (gameState.isGameOver) {
      navigate('/play/placeholder');
    }
  }, [gameState.isGameOver, navigate]);

  return (
    <div>
      <h1>test</h1>
    </div>
  );
}
export default EndGame;








