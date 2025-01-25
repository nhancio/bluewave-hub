import { Link } from "react-router-dom";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-primary shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-white text-xl font-bold">YourLogo</span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <button
              onClick={() => scrollToSection("blog")}
              className="text-white hover:text-primary-lighter px-3 py-2 rounded-md text-sm font-medium"
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-primary-lighter px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-primary-lighter px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection("hackathons")}
              className="text-white hover:text-primary-lighter px-3 py-2 rounded-md text-sm font-medium"
            >
              Hackathons
            </button>
            <button
              onClick={() => scrollToSection("resources")}
              className="text-white hover:text-primary-lighter px-3 py-2 rounded-md text-sm font-medium"
            >
              Resources
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;