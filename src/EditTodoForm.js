import React, { useContext } from 'react';
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/TextField';
import { TodosContext } from './context/todos.context';

export default function EditTodoForm({ todo, toggleEditing }) {
  const [value, changeValue, resetValue] = useInputState(todo.task);
  const { dispatch } = useContext(TodosContext);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch({ type: 'EDIT', id: todo.id, task: value });
        resetValue();
        toggleEditing();
      }}
      style={{ width: '60%', marginLeft: '1rem' }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={changeValue}
        fullWidth
        autoFocus
      />
    </form>
  );
}
