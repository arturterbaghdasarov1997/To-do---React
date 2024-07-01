import React, { useCallback, useState, useEffect } from 'react';
import TodoItem from './components/TodoItem';
import DoneTask from './components/DoneTask';
import './Todo.css';

const FuncTodo = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState("");
  const [doneTasks, setDoneTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const storedDoneTasks = JSON.parse(localStorage.getItem('doneTasks')) || [];
    setTasks(storedTasks);
    setDoneTasks(storedDoneTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('doneTasks', JSON.stringify(doneTasks));
  }, [tasks, doneTasks]);

  const handleChange = useCallback((event) => {
    setCurrentTask(event.target.value);
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    if (currentTask.trim()) {
      setTasks((prevTasks) => [...prevTasks, currentTask]);
      setCurrentTask("");
    }
  }, [currentTask]);

  const handleDelete = useCallback((id) => {
    setTasks((prevTasks) => prevTasks.filter((_, index) => index !== id));
  }, []);

  const handleDone = useCallback((task) => {
    setTasks((prevTasks) => prevTasks.filter((t) => t !== task));
    setDoneTasks((prevDones) => [...prevDones, task]);
  }, []);

  const handleDoneDelete = useCallback((id) => {
    setDoneTasks((prevDones) => prevDones.filter((_, index) => index !== id));
  }, []);

  const handleReset = useCallback((id) => {
    const resetTask = doneTasks[id];
    setTasks((prevTasks) => [...prevTasks, resetTask]);
    setDoneTasks((prevDones) => prevDones.filter((_, index) => index !== id));
  }, [doneTasks]);

  return (
    <div className="app">
      <form onSubmit={handleSubmit} className="input-container">
        <input type="text" value={currentTask} onChange={handleChange} placeholder="Enter new task" />
        <button type="submit">Add Task</button>
      </form>
      <div className="tasks-container">
        <div className="tasks-column">
          <h2>Tasks</h2>
          <ul>
            {tasks.map((task, index) => (
              <TodoItem
                key={index}
                id={index}
                task={task}
                onDelete={handleDelete}
                onDone={handleDone}
              />
            ))}
          </ul>
        </div>
        <div className="tasks-column">
          <h2>Done Tasks</h2>
          <ul>
            {doneTasks.map((task, index) => (
              <DoneTask
                key={index}
                id={index}
                task={task}
                onDelete={handleDoneDelete}
                onReset={handleReset}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FuncTodo;