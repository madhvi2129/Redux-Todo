// Assuming you have a Redux store set up
import { configureStore } from '@reduxjs/toolkit';

import todoReducer, { addTodo, updateTodo, removeTodo } from '../features/todo/todoSlice';
const store = configureStore({
  reducer: {
    todo: todoReducer
  }
});

// Dispatching actions
store.dispatch(addTodo("New Todo"));
store.dispatch(updateTodo({ id: 1, newText: "Updated Text" }));
store.dispatch(removeTodo(1));

export default store;