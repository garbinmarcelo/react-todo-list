import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
import { Todo } from './Todo';
import { TodoFormEdit } from './TodoFormEdit';
import { v4 as uuidv4 } from 'uuid';

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, {
      id: uuidv4(),
      task: todo,
      completed: false,
      isEditing: false,
      dt_created: new Date(),
      dt_done: undefined
    }]);
  }

  const toggleComplete = (id) => {
    setTodos(
        todos.map((todo) => {
          return todo.id !== id ? todo : {
            ...todo,
            completed: !todo.completed,
            dt_done: todo.completed ? undefined : new Date()
          };
        })
    );
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const editTodo = (id) => {
    setTodos(
        todos.map((todo) => {
          return todo.id === id ? {
            ...todo,
            isEditing: !todo.isEditing
          } : todo;
        })
    );
  }

  const updateTodo = (id, newTask) => {
    setTodos(
        todos.map((todo) => {
          return todo.id === id ? {
            ...todo,
            task: newTask,
            isEditing: !todo.isEditing,
          } : todo;
        })
    );
  }

  return (
      <div className="TodoWrapper">
        <h1>Lista de Tarefas</h1>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo) => (
            todo.isEditing ? (
              <TodoFormEdit key={todo.id} todo={todo} updateTodo={updateTodo} />
            ) : (
              <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
            )
        ))}
      </div>
  );
};