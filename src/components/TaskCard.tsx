import React from 'react';

interface TaskCardProps {
  title: string;
  description: string;
  priority: 'critical' | 'warning' | 'normal';
  onComplete: () => void;
  onDelete: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ title, description, priority, onComplete, onDelete }) => {
  const priorityColors = {
    critical: 'bg-red-500',
    warning: 'bg-yellow-500',
    normal: 'bg-blue-500',
  };

  return (
    <div className={`p-4 border rounded shadow-md ${priorityColors[priority]}`}>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm">{description}</p>
      <div className="mt-2">
        <button onClick={onComplete} className="mr-2 text-white bg-green-500 hover:bg-green-600 px-2 py-1 rounded">
          Complete
        </button>
        <button onClick={onDelete} className="text-white bg-red-500 hover:bg-red-600 px-2 py-1 rounded">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;