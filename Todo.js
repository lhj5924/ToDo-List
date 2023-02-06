import { React, useState } from 'react';
import './Todo.css';

function Todo ({ todo }) {

  return (
    // <span className="todo__content-Box">
      <span className="todo__content">
          {todo.content}
      </span>
    // </span>
  );
}

export default Todo;