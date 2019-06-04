import React from 'react';
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/TextField';

export default function EditTodoForm({ todo, updateTodo, toggleEditing }) {
  const [value, changeValue, resetValue] = useInputState(todo.task);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        updateTodo({ id: todo.id, task: value, completed: todo.completed });
        resetValue();
        toggleEditing();
      }}
      style={{ width: '100%' }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={changeValue}
        fullWidth
      />
    </form>
  );
}
