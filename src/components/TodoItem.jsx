import React from 'react';

const TodoItem = ({ id, task, onDelete, onDone }) => (
  <li className="task">
    {task}
    <div className="buttons">
      <button onClick={() => onDelete(id)}>Delete</button>
      <button onClick={() => onDone(task)}>Done</button>
    </div>
  </li>
);

export default TodoItem;