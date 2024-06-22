import React, { Component } from 'react';
import './App.css';
import Task from './Task';

// Simple ID generator
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
    if (this.state.newTask.trim()) {
      const newTask = {
        id: generateId(),
        text: this.state.newTask
      };
      this.setState((state) => ({
        tasks: [...state.tasks, newTask],
        newTask: ''
      }));
    }
  };

  markAsDone = (id) => {
    const taskToMove = this.state.tasks.find(task => task.id === id);
    this.setState((state) => ({
      tasks: state.tasks.filter(task => task.id !== id),
      completedTasks: [...state.completedTasks, taskToMove]
    }));
  };

  markAsToDo = (id) => {
    const taskToMove = this.state.completedTasks.find(task => task.id === id);
    this.setState((state) => ({
      completedTasks: state.completedTasks.filter(task => task.id !== id),
      tasks: [...state.tasks, taskToMove]
    }));
  };

  deleteTask = (id) => {
    this.setState((state) => ({
      tasks: state.tasks.filter(task => task.id !== id),
      completedTasks: state.completedTasks.filter(task => task.id !== id)
    }));
  };

  render() {
    return (
      <div className="app">
        <h1>To-Do List</h1>
        <div className="input-container">
          <input
            type="text"
            value={this.state.newTask}
            onChange={this.handleInputChange}
            placeholder="Enter new task"
          />
          <button onClick={this.addTask}>Add Task</button>
        </div>
        <div className="tasks-container">
          <div className="tasks-column">
            <h2>To-Do</h2>
            {this.state.tasks.map((task) => (
              <Task key={task.id} id={task.id} text={task.text} onDone={() => this.markAsDone(task.id)} onDelete={() => this.deleteTask(task.id)} />
            ))}
          </div>
          <div className="tasks-column">
            <h2>Done</h2>
            {this.state.completedTasks.map((task) => (
              <Task key={task.id} id={task.id} text={task.text} onToDo={() => this.markAsToDo(task.id)} onDelete={() => this.deleteTask(task.id)} completed />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
