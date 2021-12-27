import React from 'react';

export const Footer = () => {
  return (
    <div className="row">
      <label htmlFor="all" name="all" id="all">
        <input type="checkbox" />
        ALL
      </label>
      <p>you have 0 to do </p>
      <button id="delete">Delete</button>
    </div>
  );
};
