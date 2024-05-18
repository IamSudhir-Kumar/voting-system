import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function Results({ votes, voters, onDeleteVote }) {
  return (
    <div style={{ paddingTop: "10px" }}>
      <Typography variant="h4" gutterBottom>
        Results
      </Typography>
      {Object.entries(votes).map(([candidate, count], index) => (
        <Paper key={index} style={{ padding: "16px", marginBottom: "16px" }}>
          <Typography variant="h5">
            {candidate}: {count} votes
          </Typography>
          <List>
            {voters[candidate]?.map((voter, voterIndex) => (
              <ListItem
                key={voterIndex}
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => onDeleteVote(candidate, voterIndex)}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemText primary={voter} />
              </ListItem>
            ))}
          </List>
        </Paper>
      ))}
    </div>
  );
}

export default Results;
