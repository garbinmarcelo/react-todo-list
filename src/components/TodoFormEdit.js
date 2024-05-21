import React, { useState } from 'react';

export const TodoFormEdit = ({updateTodo, todo}) => {
  const [newTask, setTodo] = useState(todo.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTodo(todo.id, newTask);
    setTodo('');
  };

  return (
      <form className="TodoForm" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
              type="text"
              className="form-control"
              placeholder="O que temos para hoje?"
              value={newTask}
              onChange={(e) => setTodo(e.target.value)}
          />
          <button className="btn btn-outline-success" type="submit">
            Atualizar
          </button>
        </div>
      </form>
  );
};