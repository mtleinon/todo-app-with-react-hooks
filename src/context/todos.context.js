import React, { createContext } from 'react';
import useLocalStorageReducer from '../reducers/useLocalStorageReducer';
import todoReducer from '../reducers/todo.reducer';
const defaultTodos = [
  { id: 1, task: 'Clean up the desk', completed: false },
  { id: 2, task: 'Wash car', completed: false }
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider({ children }) {
  const [todos, dispatch] = useLocalStorageReducer(
    'todos',
    todoReducer,
    defaultTodos
  );
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
