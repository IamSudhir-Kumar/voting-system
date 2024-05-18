import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import VoterInput from './components/VoterInput';
import Results from './components/Results';

const candidates = ['Suresh', 'Deepank', 'Abhik'];

function App() {
  const [votes, setVotes] = useState({});
  const [voters, setVoters] = useState({});

  const handleVote = (candidate, voter) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [candidate]: (prevVotes[candidate] || 0) + 1,
    }));
    setVoters((prevVoters) => ({
      ...prevVoters,
      [candidate]: [...(prevVoters[candidate] || []), voter],
    }));
  };

  const handleDeleteVote = (candidate, voterIndex) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [candidate]: prevVotes[candidate] - 1,
    }));
    setVoters((prevVoters) => ({
      ...prevVoters,
      [candidate]: prevVoters[candidate].filter((_, index) => index !== voterIndex),
    }));
  };

  const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);

  return (
    <Container>
   <div style={{ textAlign: "center" }}>
      <Typography variant="h2" gutterBottom>Class Monitor Vote</Typography>
      <Typography variant="h4" gutterBottom>Total Votes Cast: {totalVotes}</Typography>
    </div>
      <VoterInput candidates={candidates} onVote={handleVote} />
      <Results votes={votes} voters={voters} onDeleteVote={handleDeleteVote} />
    </Container>
  );
}

export default App;
