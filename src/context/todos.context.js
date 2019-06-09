import React, { createContext, useReducer } from 'react';
import todoReducer from '../reducers/todo.reducer';
const defaultTodos = [
  { id: 1, task: 'Clean up the desk', completed: false },
  { id: 2, task: 'Wash car', completed: false }
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider({ children }) {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
