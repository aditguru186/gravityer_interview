import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Filter from './Filter';
import axios from 'axios';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/todos');
                const savedTodos = localStorage.getItem('todos');

                let initialTodos;
                if (savedTodos) {
                    const parsedTodos = JSON.parse(savedTodos);
                    initialTodos = Array.isArray(parsedTodos) && parsedTodos.length > 0
                        ? parsedTodos
                        : response.data.todos;
                } else {
                    initialTodos = response.data.todos;
                }

                setTodos(initialTodos);
                setFilteredTodos(initialTodos); // Initialize filtered todos immediately
            } catch (error) {
                console.error('Error fetching todos:', error);
                setTodos([]);
                setFilteredTodos([]); // Set empty array on error
            }
        };
        fetchTodos();
    }, []);
    // useEffect(() => {
    //     if (todos.length > 0) {
    //         localStorage.setItem('todos', JSON.stringify(todos));
    //     }
    // }, [todos]);
    useEffect(() => {
        if (!Array.isArray(todos)) return; // Guard clause

        const filterTodos = () => {
            const filtered = filter === 'completed'
                ? todos.filter(todo => todo.completed)
                : filter === 'pending'
                    ? todos.filter(todo => !todo.completed)
                    : [...todos];

            setFilteredTodos(filtered);
            console.log('Filtered todos:', filtered);
        };

        filterTodos();
    }, [filter, todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      todo: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };


  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodo onAdd={addTodo} />
      <Filter currentFilter={filter} onFilterChange={setFilter} />
            {filteredTodos.length === 0 ? (
            <p>No todos to display</p>
            ) : (
                <TodoList
                    todos={Array.isArray(filteredTodos) ? filteredTodos : []}
                    onToggle={toggleTodo}
                    onDelete={deleteTodo}
                />
            )}
      
    </div>
  );
};

export default TodoApp;