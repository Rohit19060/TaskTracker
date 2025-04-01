import { Task } from "../types";
import { sortByDate } from "../utils/dateUtils";
import TaskCard from "./TaskCard";

export const TaskList = ({
  tasks,
  setTasks,
  isHistory = false,
}: {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  isHistory?: boolean;
}) => {
  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const completeTask = (id: string) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, status: "done" } : task))
    );
  };
  const tasksToDisplay = sortByDate(
    tasks.filter((task) =>
      isHistory ? task.status === "done" : task.status !== "done"
    )
  );

  if (tasksToDisplay.length === 0) {
    return <div className="mt-5 text-center">No tasks to display</div>;
  }

  return (
    <div className="mt-5 task-list">
      {tasksToDisplay.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onDelete={() => deleteTask(task.id)}
          onComplete={() => completeTask(task.id)}
          isHistory={isHistory}
        />
      ))}
    </div>
  );
};
