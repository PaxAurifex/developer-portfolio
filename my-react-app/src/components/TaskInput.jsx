import React, { useState } from 'react';

export default function TaskInput({ addTask }) {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        
        addTask(text);
        setText("");
    };

    return (
        <form className="input-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Enter a new task..." 
                value={text} 
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
}