import React, { useState } from 'react';

const VoteButtons = ({rating}) => {
  const [score, setScore] = useState(rating ?? 0);

  const handleUpvote = () => setScore(score + 1);
  const handleDownvote = () => setScore(score - 1);

  return (
    <div className="flex flex-col items-center">
      <button onClick={handleUpvote} className="focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
      <span className="text-lg">{score}</span>
      <button onClick={handleDownvote} className="focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
};

export default VoteButtons;
