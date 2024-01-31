import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';
import './addtodo.css'; // Import the CSS file for styling

const TodoForm = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') {
      // Prevent submitting empty todos
      return;
    }

    dispatch(addTodo(newTodo));
    setNewTodo(''); // Clear the input after submitting
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label>
        New Todo:
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </label>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
