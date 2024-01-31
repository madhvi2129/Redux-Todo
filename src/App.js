import React from 'react';
import { Provider } from 'react-redux';
import store from '../src/app/store'; // Import your Redux store
import './App.css';
import TodoForm from './component/Addtodo';
import Todo from './component/Todo';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h3>Learning Redux</h3>
        <TodoForm />
        <Todo />
      </div>
    </Provider>
  );
}

export default App;
