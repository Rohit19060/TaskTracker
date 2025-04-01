import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-white text-lg font-bold">Task Tracker</h1>
        <div>
          <Link to="/" className="text-white px-4">Home</Link>
          <Link to="/history" className="text-white px-4">History</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;