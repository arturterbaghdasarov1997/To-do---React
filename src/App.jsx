import React, { Component } from 'react';
import './App.css';
import Task from './Task';

let idCounter = 0;
const generateId = () => idCounter++;

class App extends Component {
  state = {
    tasks: [],
    completedTasks: [],
    newTask: ''
  };

  handleInputChange = (e) => {
    this.setState({ newTask: e.target.value });
  };

  addTask = () => {
    const { newTask, tasks } = this.state;
    if (newTask.trim()) {
      const task = {
        id: generateId(),
        text: newTask
      };
      this.setState({
        tasks: [...tasks, task],
        newTask: ''
      });
    }
  };

  markAsDone = (id) => {
    this.moveTask(id, 'tasks', 'completedTasks');
  };

  markAsToDo = (id) => {
    this.moveTask(id, 'completedTasks', 'tasks');
  };

  moveTask = (id, from, to) => {
    const taskToMove = this.state[from].find(task => task.id === id);
    this.setState((state) => ({
      [from]: state[from].filter(task => task.id !== id),
      [to]: [...state[to], taskToMove]
    }));
  };

  deleteTask = (id) => {
    this.setState((state) => ({
      tasks: state.tasks.filter(task => task.id !== id),
      completedTasks: state.completedTasks.filter(task => task.id !== id)
    }));
  };

  render() {
    console.log("App render");
    const { tasks, completedTasks, newTask } = this.state;
    return (
      <div className="app">
        <h1>To-Do List</h1>
        <div className="input-container">
          <input type="text" value={newTask} onChange={this.handleInputChange} placeholder="Enter new task" />
          <button onClick={this.addTask}>Add Task</button>
        </div>
        <div className="tasks-container">
          <div className="tasks-column">
            <h2>To-Do</h2>
            {tasks.map((task) => (
              <Task key={task.id} id={task.id} text={task.text} onDone={() => this.markAsDone(task.id)} onDelete={() => this.deleteTask(task.id)} />
            ))}
          </div>
          <div className="tasks-column">
            <h2>Done</h2>
            {completedTasks.map((task) => (
              <Task key={task.id} id={task.id} text={task.text} onToDo={() => this.markAsToDo(task.id)} onDelete={() => this.deleteTask(task.id)} completed />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;