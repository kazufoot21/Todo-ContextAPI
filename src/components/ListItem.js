import React from 'react';
export const ListItem = (props) => {
  const { todo, id } = props;
  return (
    <li>
      <label htmlFor={id}>
        <input type="checkbox" id={id} />
        {todo.name}
      </label>
      <button>Edit</button>
    </li>
  );
};
