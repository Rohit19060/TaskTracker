import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-800">
      <div className="container flex justify-between mx-auto">
        <h1 className="text-lg font-bold text-white">Task Tracker</h1>
        <div>
          <Link to="/" className="px-4 text-white">
            Home
          </Link>
          <Link to="/history" className="px-4 text-white">
            History
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
