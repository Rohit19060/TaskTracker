import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import History from './pages/History';

import './App.css'

function App() {

  return (
	  <Router>
		  <Navbar />
		  <Routes>
			  <Route path="/" element={<Home />} />
			  <Route path="/history" element={<History />} />
		  </Routes>
	  </Router>
  )
}

export default App
