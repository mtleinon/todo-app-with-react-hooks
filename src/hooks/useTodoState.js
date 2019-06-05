// import { useState } from 'react';
import uuid from 'uuid';
import useLocalStorageState from './useLocalStorageState';
export default initialTodos => {
  const [todos, setTodos] = useLocalStorageState('todos', initialTodos);

  return {
    todos,
    addTodo: newTodoText => {
      setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
    },
    removeTodo: todoId => {
      setTodos(todos.filter(todo => todo.id !== todoId));
    },
    updateTodo: updatedTodo => {
      setTodos(
        todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo))
      );
    },
    toggleTodo: todoId => {
      setTodos(
        todos.map(todo =>
          todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
        )
      );
    }
  };
};
