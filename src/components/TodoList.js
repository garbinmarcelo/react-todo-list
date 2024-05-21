import { useCallback, useState } from 'react';

const initialState = {
  id: '',
  description: '',
  done: false,
  dt_created: new Date(),
  dt_done: undefined,
};

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [descriptionTodo, setDescriptionTodo] = useState(undefined);

  const handleSubmit = (e) => {
   const newTodo = {...initialState}

    newTodo.id = crypto.randomUUID()
    newTodo.description = descriptionTodo
    newTodo.dt_created = new Date()

    setTodos(prev => [newTodo, ...prev])

    setDescriptionTodo('')
  };

  const handleMarkTodoAsDone = useCallback(todo => {
    setTodos(prev => {
      return prev.map(prevtodo => {
        if (prevtodo.id === todo.id){
          todo.done = true
          todo.dt_done = new Date()

          return todo
        }

        return prevtodo
      })
    })
  }, [])

  return (
      <div>
        <div>Descrição</div>
        <div>
          <input type="text" onKeyUp={e => setDescriptionTodo(() => e.target.value) } />
        </div>
        <div>
          <button type="button" onClick={handleSubmit}>Adicionar</button>
        </div>
        <div>
          <table border={1}>
            <tbody>
            {todos.map(todo => (
                <tr key={todo.id}>
                  <td>{todo.description}</td>
                  <td>{todo.done ? 'Sim' : 'Não'}</td>
                  <td>{todo.dt_created.toLocaleDateString()}</td>
                  <td>{todo.dt_done?.toLocaleDateString()}</td>
                  <td>
                    {!todo.done && <button onClick={() => handleMarkTodoAsDone(todo)}>Feito</button>}
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default TodoList;