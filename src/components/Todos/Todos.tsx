import { useState } from 'react';
import { Todo, initialTodos } from './types';
import { classNames } from '../../helpers/classnames';
import './Todos.css';

export const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string>('');

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (value !== '') {
      setTodos([...todos, { title: value, completed: false, id: Date.now() }]);
      setValue('');
      setError('');
    } else {
      setError('Title cannot be empty');
    }
  };

  const setComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="todos-container">
      <h1>todos</h1>
      <ul className="todos-list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => setComplete(todo.id)}
            className={classNames('todo', { completed: todo.completed })}
          >
            <span className="todo-title">{todo.title}</span>
          </li>
        ))}
      </ul>
      <form className="todo-form">
        {error && <p className="error">{error}</p>}
        <input
          type="text"
          placeholder="todo title"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <button onClick={addTodo}>Add Todo</button>
      </form>
    </div>
  );
};
