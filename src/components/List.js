import React, { useContext } from 'react';
import { DataContext } from './DataProvider';
import { ListItem } from './ListItem';

export const List = () => {
  const [todos, setTodos] = useContext(DataContext);
  return (
    <ul>
      {todos.map((todo, index) => (
        <ListItem todo={todo} key={index} id={index} />
      ))}
    </ul>
  );
};
