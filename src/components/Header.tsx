
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="pt-8 pb-4">
      <div className="container">
        <h1 className="text-3xl font-serif mb-2">Jon Galante</h1>
        <nav className="flex flex-wrap gap-6 text-base">
          <Link to="/" className="text-blue-600 hover:text-blue-800">Home</Link>
          <Link to="/projects" className="text-blue-600 hover:text-blue-800">Projects</Link>
          <Link to="/writing" className="text-blue-600 hover:text-blue-800">Writing</Link>
          <Link to="/about" className="text-blue-600 hover:text-blue-800">About</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
