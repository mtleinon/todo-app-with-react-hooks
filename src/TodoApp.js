import React from 'react';
import useLocalStorageState from './hooks/useLocalStorageState';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { TodosProvider } from './context/todos.context';

function TodoApp() {
  const [mood, setMood] = useLocalStorageState('mood', 'happy');
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa'
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: '64px' }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: '1rem' }}>
        <Grid item xs={11} md={6} lg={4}>
          <TodosProvider>
            <TodoForm />
            <TodoList />
          </TodosProvider>
        </Grid>
      </Grid>
      <button
        onClick={() => (mood === 'happy' ? setMood('sad') : setMood('happy'))}
      >
        Update mood, now mood is {mood}
      </button>
    </Paper>
  );
}

export default TodoApp;

// - TodoApp
//   - TodoFrom
//   - TodoList
//     - TodoItem
//       = id, task, completed
