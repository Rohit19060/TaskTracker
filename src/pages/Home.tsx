import TaskForm from "../components/TaskForm";
import { TaskList } from "../components/TaskList";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Task } from "../types";

const Home = ({ isHistory }: { isHistory: boolean }) => {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);
  const addTask = (title: string, description: string, priority: string) => {
    const task = {
      id: crypto.randomUUID(),
      title,
      description,
      priority,
      status: "not started",
      dateCreated: new Date().toISOString(),
      dateCompleted: undefined,
    } as Task;

    setTasks((prevTasks) => [...prevTasks, task]);
  };
  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">
        Task {isHistory ? "History" : "Tracker"}
      </h1>
      {!isHistory && (
        <TaskForm
          onAddTask={({ title, description, priority }) =>
            addTask(title, description, priority)
          }
        />
      )}
      <TaskList tasks={tasks} setTasks={setTasks} isHistory={isHistory} />
    </div>
  );
};

export default Home;
