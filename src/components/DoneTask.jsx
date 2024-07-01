import React from 'react';

const DoneTask = ({ id, task, onDelete, onReset }) => (
  <li className="task completed">
    {task}
    <div className="buttons">
      <button onClick={() => onDelete(id)}>Delete</button>
      <button onClick={() => onReset(id)}>Reset</button>
    </div>
  </li>
);

export default DoneTask;