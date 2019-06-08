import React, { createContext } from 'react';
import useTodoState from '../hooks/useTodoState';

const defaultTodos = [
  { id: 1, task: 'Clean up the desk', completed: false },
  { id: 2, task: 'Wash car', completed: false }
];

export const TodosContext = createContext();

export function TodosProvider({ children }) {
  const todosData = useTodoState(defaultTodos);
  return (
    <TodosContext.Provider value={todosData}>{children}</TodosContext.Provider>
  );
}
