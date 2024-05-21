import React, { useState } from 'react';

export const TodoForm = ({addTodo}) => {
  const [todo, setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo('');
  };

  return (
      <form className="TodoForm" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
              type="text"
              className="form-control"
              placeholder="O que temos para hoje?"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
          />
          <button className="btn btn-outline-primary" type="submit">
            Adicionar
          </button>
        </div>
      </form>
  );
};