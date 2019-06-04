import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Todo from './Todo';
export default function TodoList({ todos, removeTodo, toggleTodo }) {
  return (
    <Paper>
      <List>
        {todos.map(todo => (
          <React.Fragment key={todo.task}>
            <Todo todo={todo} removeTodo={removeTodo} toggleTodo={toggleTodo} />
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
}
