import React, { useState } from 'react';

interface TaskFormProps {
    onAddTask: (task: string) => void; // Ensure the prop is typed correctly
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
    const [task, setTask] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (task.trim()) {
            console.log('onAddTask is:', typeof onAddTask); // Debugging log
            onAddTask(task); // Call the function passed as a prop
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a new task"
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
