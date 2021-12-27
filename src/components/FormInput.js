import React, { useContext, useEffect, useRef, useState } from 'react';
import { DataContext } from './DataProvider';

export const FormInput = () => {
  const [todos, setTodos] = useContext(DataContext);
  const [todoName, setTodoName] = useState('');
  const todoInput = useRef();

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { name: todoName, complete: false }]);
    setTodoName('');
    todoInput.current.focus();
  };

  useEffect(() => {
    todoInput.current.focus();
  }, []);

  return (
    <form autoComplete="off" onSubmit={addTodo}>
      <input
        ref={todoInput}
        type="text"
        name="todos"
        id="todos"
        required
        placeholder="what needs to be done?"
        value={todoName}
        onChange={(e) => {
          setTodoName(e.target.value.toLowerCase());
        }}
      ></input>
      <button type="submit">Create</button>
    </form>
  );
};
