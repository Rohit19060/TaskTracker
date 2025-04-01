import React, { useState } from 'react';

const TaskForm: React.FC<{ onAddTask: (task: { title: string; description: string; priority: string }) => void }> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('normal');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      onAddTask({ title, description, priority });
      setTitle('');
      setDescription('');
      setPriority('normal');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        className="border p-2"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
        className="border p-2"
        required
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border p-2"
      >
        <option value="normal">Normal</option>
        <option value="warning">Warning</option>
        <option value="critical">Critical</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white p-2">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;