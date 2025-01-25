import { Link } from "react-router-dom";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      // Add padding to account for fixed navbar
      window.scrollBy(0, -64); // 64px is the height of the navbar
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
              onClick={() => scrollToSection("home")}
              className="text-white hover:text-primary-lighter px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-primary-lighter px-3 py-2 rounded-md text-sm font-medium"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("blog")}
              className="text-white hover:text-primary-lighter px-3 py-2 rounded-md text-sm font-medium"
            >
              Blogs
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
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-primary-lighter px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;