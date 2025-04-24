import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

const Filter = ({ currentFilter, onFilterChange }) => {

const buttonStyle = {
    backgroundColor: 'transparent',
    color: '#ffffff',
    border: '1px solid #ffffff',
    '&.Mui-selected': {
      backgroundColor: '#ffffff',
      color: '#000000',
    },
    '&:hover': {
      backgroundColor: '#ffffff',
      color: '#000000',
    },
}

  return (
    <ToggleButtonGroup
      value={currentFilter}
      exclusive
          onChange={(e, newFilter) => onFilterChange(newFilter)}
      sx={{ mb: 2 }}
      
    >
    <ToggleButton value="all" style={buttonStyle}>All</ToggleButton>
    <ToggleButton value="completed" style={buttonStyle}>Completed</ToggleButton>
    <ToggleButton value="pending" style={buttonStyle}>Pending</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default Filter;