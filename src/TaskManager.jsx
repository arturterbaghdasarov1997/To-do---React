import React, { useState } from 'react';
import Backlog from './components/Backlog';
import Inprogress from './components/InProgress';
import Done from './components/Done';
import './styles.css';

function TaskManager() {
    const [backlogTasks, setBacklogTasks] = useState(['']);
    const [inProgressTasks, setInProgressTasks] = useState(['']);
    const [doneTasks, setDoneTasks] = useState(['']);

    const handleBacklogInputChange = (index, event) => {
        const newTasks = [...backlogTasks];
        newTasks[index] = event.target.value;
        setBacklogTasks(newTasks);
    };

    const handleInProgressInputChange = (index, event) => {
        const newTasks = [...inProgressTasks];
        newTasks[index] = event.target.value;
        setInProgressTasks(newTasks);
    };

    const handleDoneInputChange = (index, event) => {
        const newTasks = [...doneTasks];
        newTasks[index] = event.target.value;
        setDoneTasks(newTasks);
    };

    const handleAddBacklogInput = () => {
        setBacklogTasks([...backlogTasks, '']);
    };

    const handleAddInProgressInput = () => {
        setInProgressTasks([...inProgressTasks, '']);
    };

    const handleAddDoneInput = () => {
        setDoneTasks([...doneTasks, '']);
    };

    return (
        <div className="task-manager">
            <Backlog
                tasks={backlogTasks}
                onInputChange={handleBacklogInputChange}
                onAddInput={handleAddBacklogInput}
            />
            <Inprogress
                tasks={inProgressTasks}
                onInputChange={handleInProgressInputChange}
                onAddInput={handleAddInProgressInput}
            />
            <Done
                tasks={doneTasks}
                onInputChange={handleDoneInputChange}
                onAddInput={handleAddDoneInput}
            />
        </div>
    );
}

export default TaskManager;