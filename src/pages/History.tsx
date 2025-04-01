import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Task } from '../types';

const History: React.FC = () => {
	const [tasks] = useLocalStorage<Task[]>('tasks', []);
	const completedTasks = tasks.filter((task: Task) => task.status === 'done');

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">Task History</h1>
			{completedTasks.length === 0 ? (
				<p>No completed tasks found.</p>
			) : (
				<ul className="space-y-4">
					{completedTasks.map(task => (
						<li key={task.id} className={`p-4 border rounded ${task.priority}`}>
							<h2 className="font-semibold">{task.title}</h2>
							<p>{task.description}</p>
							<span className="text-sm text-gray-500">{task.date}</span>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default History;