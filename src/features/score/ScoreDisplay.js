// src/features/score/ScoreDisplay.js
import React, { useContext } from 'react';
import { ScoreContext } from '../../context/ScoreContext';

const ScoreDisplay = () => {
  const { score } = useContext(ScoreContext);

  return (
    <div>
      <h2>Your Score</h2>
      <p>{score}</p>
    </div>
  );
};

export default ScoreDisplay;