import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home isHistory={false} />} />
        <Route path="/history" element={<Home isHistory={true} />} />
      </Routes>
    </Router>
  );
}

export default App;
