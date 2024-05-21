import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({todo, toggleComplete, deleteTodo, editTodo}) => {
  return (
      <>
        <li className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between z-1" onClick={() => toggleComplete(todo.id)}>
            <h5 className={`form-check-label stretched-link ${todo.completed ? 'text-decoration-line-through text-success' : ''}`}>
              <input className={`form-check-input me-2 ${todo.completed ? 'check-success' : ''}`}
                     type="checkbox"
                     id={`check${todo.id}`}
                     checked={todo.completed ? 'checked' : ''}
                     onChange={() => toggleComplete(todo.id)} />
              {todo.task}
            </h5>
          </div>
          <div className="float-end z-2">
            <FontAwesomeIcon icon={faTrash}
                             className="btn btn-sm btn-danger stretched-link position-relative z-2"
                             onClick={() => deleteTodo(todo.id)} />
            <FontAwesomeIcon icon={faPenToSquare}
                             className="btn btn-sm btn-primary stretched-link position-relative z-2 ms-1"
                             onClick={() => editTodo(todo.id)} />
          </div>
          <small className="d-block text-secondary">Criado em: {todo.dt_created.toLocaleString()}</small>
          {todo.completed && <small className="d-block text-success">Concluído em: {todo.dt_done.toLocaleString()}</small>}
        </li>
      </>
  );
};