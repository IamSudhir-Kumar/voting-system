// src/VotingOptions.js
import React, { useState } from 'react';

function VotingOptions({ onVote }) {
  const [name, setName] = useState('');

  const handleVote = (option) => {
    if (name.trim()) {
      onVote(option, name);
      setName(''); // Reset the name input after voting
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => handleVote('option1')}>Vote for Option 1</button>
      <button onClick={() => handleVote('option2')}>Vote for Option 2</button>
    </div>
  );
}

export default VotingOptions;
