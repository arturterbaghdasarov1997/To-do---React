import React from 'react';
import './Task.css';

class Task extends React.PureComponent {
  render() {
    console.log("Task render");
    const { text, onDone, onToDo, onDelete, completed } = this.props;
    return (
      <div className={`task ${completed ? 'completed' : ''}`}>
        <span>{text}</span>
        <div className="buttons">
          {!completed ? (
            <>
              <button onClick={onDone}>Done</button>
              <button onClick={onDelete}>Delete</button>
            </>
          ) : (
            <>
              <button onClick={onToDo}>To-Do</button>
              <button onClick={onDelete}>Delete</button>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Task;