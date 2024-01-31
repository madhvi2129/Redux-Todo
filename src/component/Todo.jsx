import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

const Todo = () => {
  const todos = useSelector((state) => state.todo.todos); // Assuming the state shape has a 'todo' slice
  const dispatch = useDispatch();

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Your Todos</h2>
      {todos.length === 0 ? (
        <p style={styles.message}>No todos available.</p>
      ) : (
        <ul style={styles.list}>
          {todos.map((todo) => (
            <li key={todo.id} style={styles.listItem}>
              {todo.text}
              <button
                onClick={() => handleRemoveTodo(todo.id)}
                style={styles.removeButton}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '20px auto',
    padding: '15px',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '1.5rem',
    marginBottom: '10px',
    color: '#333',
  },
  message: {
    color: '#666',
  },
  list: {
    listStyle: 'none',
    padding: '0',
  },
  listItem: {
    borderBottom: '1px solid #ddd',
    padding: '10px 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  removeButton: {
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Todo;
