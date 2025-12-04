// This needs to stay consistant between rendering, useRef may be helpful.
// All useRef was learned through react documents https://react.dev/reference/react/useRef
import { useRef } from 'react';

const Score = ({ score }) => {
  const scoreRef = useRef(score);  //Do not need to set initial value because score is passed as prop and is the value
  //Does intialvalue need to be declared if starting at 0?
  
  // Update ref when score changes but keep rendering consistent
  scoreRef.current = score; //.current is used with useRef to access the score and keep it current, while useRef declared with scoreRef keeps from
  // re-rendering component on score change. So score will stay consistent on screen without re-rendering and update when score prop changes.

  return (
    <div className="score-display">
      <h3>Score: {scoreRef.current}</h3>
    </div>
  );
};

export default Score;

