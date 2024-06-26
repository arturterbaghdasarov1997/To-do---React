import React from 'react';
import './Task.css';

class Task extends React.Component {
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.text !== this.props.text ||
      nextProps.completed !== this.props.completed ||
      nextProps.onDone !== this.props.onDone ||
      nextProps.onToDo !== this.props.onToDo ||
      nextProps.onDelete !== this.props.onDelete
    );
  }

  render() {
    console.log("Task render")
    const { text, onDone, onToDo, onDelete, completed } = this.props;
    return (
      <div className={`task ${completed ? 'completed' : ''}`}>
        <span>{text}</span>
        <div className="buttons">
          {!completed && (
            <>
              <button onClick={onDone}>Done</button>
              <button onClick={onDelete}>Delete</button>
            </>
          )}

          {completed && (
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