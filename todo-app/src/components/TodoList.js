import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos = [], onToggle, onDelete }) => {
  if (!Array.isArray(todos)) {
    console.warn('Todos is not an array:', todos);
    return null;
  }

  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p>No todos to display</p>
      ) : (
        todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;