import React from 'react';
import './FinalScreen.css'; // Assuming there's a CSS file for styles

const FinalScreen = () => {
  return (
    <div className="final-screen">
      <h1>Congratulations!</h1>
      <p>You have completed all 5 levels!</p>
      <button onClick={() => window.location.reload()}>Play Again</button>
    </div>
  );
};

export default FinalScreen;