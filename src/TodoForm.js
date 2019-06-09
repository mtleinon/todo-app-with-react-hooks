import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import useInputState from './hooks/useInputState';
import { DispatchContext } from './context/todos.context';

export default function TodoForm() {
  const [value, setValue, resetValue] = useInputState();
  const dispatch = useContext(DispatchContext);
  console.log('TODOFORM RENDER');

  return (
    <Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: 'ADD', task: value });
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
