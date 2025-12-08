import { useState, useEffect } from 'react';

const Highscore = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('triviaScores')) || [];
    setScores(saved);
  }, []);

  return (
    <div className="highscore
    ">
      <h2>High Scores</h2>
     <ol>
      <li>
      {scores.map((s, i) => 
      
      <div key={i}>
        
        {s.score}</div>)}
    </li></ol></div>
  );
}

export default Highscore;