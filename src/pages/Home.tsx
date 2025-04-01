import React from 'react'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Task Tracker</h1>
      <TaskForm />
      <TaskList />
    </div>
  )
}

export default Home