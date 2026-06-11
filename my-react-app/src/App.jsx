import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

export default function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (taskText) => {
        const newTask = {
            id: Date.now(),
            text: taskText
        };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className="todo-container">
            <h1>Task Master</h1>
            <TaskInput addTask={addTask} />
            <TaskList tasks={tasks} deleteTask={deleteTask} />
        </div>
    );
}