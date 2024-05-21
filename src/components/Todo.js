import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({todo, toggleComplete, deleteTodo, editTodo}) => {
  return (
      <div>
        <p className={`${todo.completed ? 'text-decoration-line-through' : ''}`}
           onClick={() => toggleComplete(todo.id)}>{todo.task}</p>
        <div>
          <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(todo.id)} />
          <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(todo.id)} />
        </div>
      </div>
  );
};