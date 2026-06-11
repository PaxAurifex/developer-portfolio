import React from 'react';

export default function TaskItem({ task, deleteTask }) {
    return (
        <li className="task-item">
            <span>{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>X</button>
        </li>
    );
}