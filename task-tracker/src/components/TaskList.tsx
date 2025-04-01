import React, { useState } from 'react';
import TaskCard from './TaskCard';
import { Task } from '../types';

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const completeTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, status: 'done' } : task
    ));
  };

  const inProgressTasks = tasks.filter(task => task.status === 'in progress');
  const notStartedTasks = tasks.filter(task => task.status === 'not started');
  const completedTasks = tasks.filter(task => task.status === 'done');

  return (
    <div className="task-list">
      <h2>In Progress</h2>
      {inProgressTasks.map(task => (
        <TaskCard key={task.id} task={task} onDelete={deleteTask} onComplete={completeTask} />
      ))}
      <h2>Not Started</h2>
      {notStartedTasks.map(task => (
        <TaskCard key={task.id} task={task} onDelete={deleteTask} onComplete={completeTask} />
      ))}
      <h2>Done</h2>
      {completedTasks.map(task => (
        <TaskCard key={task.id} task={task} onDelete={deleteTask} onComplete={completeTask} />
      ))}
    </div>
  );
};

export default TaskList;