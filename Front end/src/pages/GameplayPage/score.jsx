
import { useRef } from 'react';

const Score = ({ score }) => {


  return (
    <div className="score">
      <h3>Score: {score.current}</h3>
    
    </div>
  );


};

export default Score;

