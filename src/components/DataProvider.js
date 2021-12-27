import React, { createContext, useEffect, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [todos, setTodos] = useState([]);

  //????????????????????????????????
  useEffect(() => {
    const todoStore = JSON.parse(localStorage.getItem('todoStore'));
    if (todoStore) setTodos(todoStore);
  }, []);

  useEffect(() => {
    localStorage.setItem('todoStore', JSON.stringify(todos));
  }, [todos]);

  //????????????????????????????????

  const { children } = props;
  return (
    <DataContext.Provider value={[todos, setTodos]}>
      {children}
    </DataContext.Provider>
  );
};
