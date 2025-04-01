import React from "react";
import { Task } from "../types";

interface TaskCardProps {
  task: Task;
  onComplete: () => void;
  onDelete: () => void;
  isHistory: boolean;
}

const TaskCard: React.FC<TaskCardProps> = ({
  task,
  onComplete,
  onDelete,
  isHistory,
}) => {
  const { title, description, priority, status } = task;
  const priorityColors = {
    critical: "bg-red-500 text-white",
    warning: "bg-yellow-500 text-black",
    normal: "bg-blue-500 text-white",
  };

  return (
    <div
      className={`p-4 border rounded shadow-md flex ${priorityColors[priority]} my-4`}
    >
      <div className="flex flex-col items-start flex-grow">
        <h3 className="text-lg font-bold">
          {title} <span className="text-sm capitalize">({status})</span>
        </h3>
        <p className="text-sm">{description}</p>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        {!isHistory && (
          <button
            onClick={onComplete}
            className="w-full px-2 py-1 mr-2 text-white transition duration-200 ease-in-out bg-green-500 rounded shadow cursor-pointer hover:bg-green-600 hover:shadow-lg"
          >
            Complete
          </button>
        )}
        <button
          onClick={onDelete}
          className="w-full px-2 py-1 text-white transition duration-200 ease-in-out bg-orange-600 rounded shadow cursor-pointer hover:bg-red-600 hover:shadow-lg"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
