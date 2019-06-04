import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import useInputState from './hooks/useInputState';

export default function TodoForm({ addTodo }) {
  const [value, setValue, resetValue] = useInputState();
  return (
    <Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo(value);
          resetValue();
        }}
      >
        <TextField
          value={value}
          onChange={setValue}
          margin="normal"
          label="Add New Todo"
          fullWidth
        />
      </form>
    </Paper>
  );
}
