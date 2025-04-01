import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/history" element={<Home isHistory={true} />} />
        <Route path="*" element={<Home isHistory={false} />} />
      </Routes>
    </Router>
  );
}

export default App;
