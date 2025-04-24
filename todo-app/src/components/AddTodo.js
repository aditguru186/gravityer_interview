import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 1, mb: 2 }}>
      <TextField
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new todo"
        fullWidth
      />
      <Button type="submit" variant="contained">
        Add
      </Button>
    </Box>
  );
};

export default AddTodo;