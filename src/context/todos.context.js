import React, { createContext, useReducer } from 'react';
// import useTodoState from '../hooks/useTodoState';
import todoReducer from '../reducers/todo.reducer';
const defaultTodos = [
  { id: 1, task: 'Clean up the desk', completed: false },
  { id: 2, task: 'Wash car', completed: false }
];

export const TodosContext = createContext();

export function TodosProvider({ children }) {
  // const todosData = useTodoState(defaultTodos);
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
}
