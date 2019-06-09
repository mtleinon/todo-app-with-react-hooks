import { useReducer } from 'react';
import todoReducer from '../reducers/todo.reducer';
export default initialTodos => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
};
