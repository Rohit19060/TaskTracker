import React from 'react';
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'
import useLocalStorage from '../hooks/useLocalStorage'; // Assuming the custom hook is named useLocalStorage

const Home: React.FC = () => {
	const [tasks, setTasks] = useLocalStorage<{ notStarted: any[] }>('tasks', { notStarted: [] });

	const handleAddTask = (newTask: { title: string; description: string; priority: string }) => {
		const taskWithTimestamp = {
			...newTask,
			createdAt: new Date().toISOString(),
		};
		setTasks((prevTasks) => ({
			...prevTasks,
			notStarted: [...prevTasks.notStarted, taskWithTimestamp],
		}));
	};

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Task Tracker</h1>
		  <TaskForm onAddTask={handleAddTask} />
      <TaskList />
    </div>
  )
}

export default Home