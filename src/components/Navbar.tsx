import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-white text-xl font-bold">YourLogo</span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link
              to="/"
              className="text-white hover:text-primary-lighter px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/blog"
              className="text-white hover:text-primary-lighter px-3 py-2 rounded-md text-sm font-medium"
            >
              Blog
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-primary-lighter px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-primary-lighter px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
            <Link
              to="/hackathons"
              className="text-white hover:text-primary-lighter px-3 py-2 rounded-md text-sm font-medium"
            >
              Hackathons
            </Link>
            <Link
              to="/resources"
              className="text-white hover:text-primary-lighter px-3 py-2 rounded-md text-sm font-medium"
            >
              Resources
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;