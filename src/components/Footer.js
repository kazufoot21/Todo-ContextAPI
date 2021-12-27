import React, { useContext } from 'react';
import { useState } from 'react/cjs/react.development';
import { DataContext } from './DataProvider';

export const Footer = () => {
  const [checkAll, setCheckAll] = useState(false);
  const [todos, setTodos] = useContext(DataContext);

  const handleCheckAll = () => {
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      todo.complete = !checkAll;
    });
    setTodos(newTodos);
    setCheckAll(!checkAll);
  };

  const newTodoComplete = () => {
    return todos.filter((todo) => {
      return todo.complete === false;
    });
  };

  const deleteTodo = () => {
    const newTodos = todos.filter((todo) => {
      return todo.complete === false;
    });
    setTodos(newTodoComplete());
    setCheckAll(false);
  };
  return (
    <>
      {todos.length === 0 ? (
        <h2>Congratulations! Nothing To Do!!</h2>
      ) : (
        <div className="row">
          <label htmlFor="all" name="all" id="all">
            <input
              type="checkbox"
              onChange={handleCheckAll}
              checked={checkAll}
            />
            ALL
          </label>
          <p>you have {newTodoComplete().length} to do </p>
          <button id="delete" onClick={deleteTodo}>
            Delete
          </button>
        </div>
      )}
    </>
  );
};
