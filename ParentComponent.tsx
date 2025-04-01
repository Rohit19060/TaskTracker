import React, { useState } from 'react';
import TaskForm from './TaskForm';

const ParentComponent: React.FC = () => {
    const [tasks, setTasks] = useState<string[]>([]);

    const handleAddTask = (task: string) => {
        setTasks((prevTasks) => [...prevTasks, task]);
    };

    return (
        <div>
            <TaskForm onAddTask={handleAddTask} />
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
};

export default ParentComponent;
