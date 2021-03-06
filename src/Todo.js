import React from 'react';
import useToggleState from './hooks/useToggleState';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CheckBox from '@material-ui/core/CheckBox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import EditTodoForm from './EditTodoForm';
export default function Todo({ todo, removeTodo, toggleTodo, updateTodo }) {
  const [editing, toggleEditing] = useToggleState();

  return (
    <ListItem style={{ height: '4rem' }}>
      {editing ? (
        <EditTodoForm
          todo={todo}
          toggleEditing={toggleEditing}
          updateTodo={updateTodo}
        />
      ) : (
        <>
          <CheckBox
            checked={todo.completed}
            onClick={() => toggleTodo(todo.id)}
          />
          <ListItemText
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton onClick={() => removeTodo(todo.id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={toggleEditing}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}
