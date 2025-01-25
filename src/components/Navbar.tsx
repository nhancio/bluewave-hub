import { Link } from "react-router-dom";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      window.scrollBy(0, -64);
    }
  };

  return (
    <nav className="bg-gradient-ai shadow-lg fixed w-full z-50 backdrop-blur-sm bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-white text-xl font-bold hover:text-primary-lighter transition-colors duration-300">
                AI Hub
              </span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About Us" },
              { id: "blog", label: "Blogs" },
              { id: "hackathons", label: "Hackathons" },
              { id: "resources", label: "Resources" },
              { id: "contact", label: "Contact Us" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-primary-lighter px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;