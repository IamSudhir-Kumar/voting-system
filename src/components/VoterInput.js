// src/VoterInput.js
import React, { useState } from 'react';
import { TextField, Button, Box, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

function VoterInput({ candidates, onVote }) {
  const [name, setName] = useState('');
  const [selectedCandidate, setSelectedCandidate] = useState('');

  const handleVote = () => {
    if (name.trim() && selectedCandidate) {
      onVote(selectedCandidate, name);
      setName('');
      setSelectedCandidate('');
    }
  };

  return (
    <Box display="flex" alignItems="center" gap={2} mt={2}>
      <TextField
        label="Enter your name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <FormControl variant="outlined">
        <InputLabel id="candidate-select-label">Candidate</InputLabel>
        <Select
          labelId="candidate-select-label"
          value={selectedCandidate}
          onChange={(e) => setSelectedCandidate(e.target.value)}
          label="Candidate"
        >
          {candidates.map((candidate, index) => (
            <MenuItem key={index} value={candidate}>
              {candidate}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" onClick={handleVote}>
        Vote
      </Button>
    </Box>
  );
}

export default VoterInput;
